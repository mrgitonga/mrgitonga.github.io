import { useState, useEffect } from 'react';
import { scheduleConfig } from '../pages/datayaground/schedule';

const createEATDate = (dateString, timeString = "19:00:00") => {
  if (!dateString) return null;
  return new Date(`${dateString}T${timeString}.000+03:00`);
};

export const useSurveyStatus = () => {
  const [status, setStatus] = useState('LOADING');
  const [activeCycleDates, setActiveCycleDates] = useState({ surveyStart: null, surveyEnd: null });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      switch (scheduleConfig.currentMode) {
        case '4-minute test': {
          const currentZapDurationMinutes = 1; 
          const totalCycleSeconds = 240;
          const secondsIntoCycle = (now.getMinutes() * 60 + now.getSeconds()) % totalCycleSeconds;
          const cycleStartTimestamp = now.getTime() - (secondsIntoCycle * 1000);
          
          const surveyStart = new Date(cycleStartTimestamp);
          const surveyEnd = new Date(surveyStart.getTime() + 120 * 1000);
          const zapEnd = new Date(surveyEnd.getTime() + currentZapDurationMinutes * 60 * 1000);
          
          setActiveCycleDates({ surveyStart, surveyEnd });

          if (now >= surveyStart && now < surveyEnd) setStatus('OPEN');
          else if (now >= surveyEnd && now < zapEnd) setStatus('ZAP_ACTIVE');
          else setStatus('CLOSED');
          break;
        }
        case 'fortnight test': {
          const totalCycleMs = 14 * 24 * 60 * 60 * 1000;
          const epoch = createEATDate('2025-10-19').getTime(); // Use a fixed past Sunday as the starting point for cycles
          const msSinceEpoch = now.getTime() - epoch;
          const cycleStartTimestamp = epoch + Math.floor(msSinceEpoch / totalCycleMs) * totalCycleMs;
          
          const surveyStart = new Date(cycleStartTimestamp);
          const surveyEnd = new Date(surveyStart.getTime() + 7 * 24 * 60 * 60 * 1000);
          const zapEnd = new Date(surveyEnd.getTime() + 10 * 60 * 1000);
          
          if (now >= surveyStart && now < surveyEnd) {
            setStatus('OPEN');
            setActiveCycleDates({ surveyStart, surveyEnd });
          } else if (now >= surveyEnd && now < zapEnd) {
            setStatus('ZAP_ACTIVE');
            setActiveCycleDates({ surveyStart, surveyEnd });
          } else {
            setStatus('CLOSED');
            const nextCycleStart = new Date(surveyStart.getTime() + totalCycleMs);
            setActiveCycleDates({ 
              surveyStart: nextCycleStart, 
              surveyEnd: new Date(nextCycleStart.getTime() + 7 * 24 * 60 * 60 * 1000) 
            });
          }
          break;
        }
        case 'production':
        default: {
          let currentEvent = null;
          let activeCycle = null;
          for (const event of scheduleConfig.productionSchedule) {
            const surveyStart = createEATDate(event.start);
            const surveyEnd = createEATDate(event.end);
            const zapEnd = new Date(surveyEnd.getTime() + 10 * 60 * 1000);
            if (now >= surveyStart && now < zapEnd) activeCycle = { surveyStart, surveyEnd };
            if (now >= surveyStart && now < surveyEnd) {
              currentEvent = { status: 'OPEN' }; break;
            }
            if (now >= surveyEnd && now < zapEnd) {
              currentEvent = { status: 'ZAP_ACTIVE' }; break;
            }
          }
          if (currentEvent) {
            setStatus(currentEvent.status);
            setActiveCycleDates(activeCycle);
          } else {
            let nextEvent = null;
            for (const event of scheduleConfig.productionSchedule) {
              const surveyStart = createEATDate(event.start);
              if (surveyStart > now) {
                nextEvent = { surveyStart, surveyEnd: createEATDate(event.end) };
                break;
              }
            }
            setStatus('CLOSED');
            setActiveCycleDates(nextEvent ? { surveyStart: nextEvent.surveyStart, surveyEnd: nextEvent.surveyEnd } : { surveyStart: null, surveyEnd: null });
          }
          break;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { status, activeCycleDates };
};