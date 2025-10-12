// ========================================================================
// ===                  SURVEY & ZAP EVENT CONTROL PANEL                ===
// ========================================================================
// This is the ONLY file you need to edit to manage the survey schedule.
//
// 1. Choose your mode:
//    - '4-minute test': A 4-minute cycle (2m survey, 1m ZAP, 1m closed).
//    - 'fortnight test': A 14-day cycle (7d survey, 10m ZAP, ~7d closed).
//    - 'production': Uses the official quarterly schedule below.
//
// 2. For 'production' mode, you can add future dates to the schedule.
//
// ========================================================================

// --- THE FIX: The constant name must be 'scheduleConfig' to match what other files are importing ---
export const scheduleConfig = {
  // --- CHOOSE YOUR MODE HERE ---
  currentMode: 'fortnight test', // Options: '4-minute test', 'fortnight test', 'production'

  // --- GOOGLE FORM URL FOR THE ZAP EVENT ---
  zapFormEmbedUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfZgFvz3_45O0bG1RgoT-qws4YW4WW1y_4GM4Qu3X--jaT0MQ/viewform?embedded=true",

  // --- OFFICIAL PRODUCTION SCHEDULE (DERIVED FROM YOUR DOCUMENT) ---
  // The survey runs from 'start' (Sunday 7pm) to 'end' (the following Sunday 7pm).
  productionSchedule: [
    // 2025
    { quarter: 'Q1 2025', start: '2024-12-29', end: '2025-01-05' },
    { quarter: 'Q2 2025', start: '2025-03-30', end: '2025-04-06' },
    { quarter: 'Q3 2025', start: '2025-06-29', end: '2025-07-06' },
    { quarter: 'Q4 2025', start: '2025-09-28', end: '2025-10-05' },
    // 2026
    { quarter: 'Q1 2026', start: '2025-12-28', end: '2026-01-04' },
    { quarter: 'Q2 2026', start: '2026-03-29', end: '2026-04-05' },
    { quarter: 'Q3 2026', start: '2026-06-28', end: '2026-07-05' },
    { quarter: 'Q4 2026', start: '2026-09-27', end: '2026-10-04' },
    // 2027
    { quarter: 'Q1 2027', start: '2026-12-27', end: '2027-01-03' },
    { quarter: 'Q2 2027', start: '2027-03-28', end: '2027-04-04' },
    { quarter: 'Q3 2027', start: '2027-06-27', end: '2027-07-04' },
    { quarter: 'Q4 2027', start: '2027-09-26', end: '2027-10-03' },
    // Add future dates here as needed following the same format...
  ],
};