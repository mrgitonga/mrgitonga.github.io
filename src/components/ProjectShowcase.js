import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProjectShowcase.css';

const mainProjects = [
    {
      slug: "/projects/data-ya-ground",
      title: "Data ya Ground",
      description: "A civic tech project empowering Kenyan communities with tools for grassroots data collection, fostering local advocacy and data ownership.",
      image: "/datayaground-card.png",
      highlight: "Independent Project"
    },
    {
      slug: "/projects/cyber-shujaa",
      title: "Cyber Shujaa Program",
      description: "A comprehensive 12-week journey through the Data & AI track, covering everything from web scraping to deep learning and generative AI.",
      image: "/cybershujaa-card.png",
      highlight: "Guided Learning Path"
    }
];

const ShowcaseCard = ({ project }) => (
  <Link to={project.slug} className="showcase-card-link">
    <div className="showcase-card">
      <img src={process.env.PUBLIC_URL + project.image} alt={project.title} className="showcase-card-image" />
      <div className="showcase-card-content">
        <span className="showcase-card-highlight">{project.highlight}</span>
        <h3 className="showcase-card-title">{project.title}</h3>
        <p className="showcase-card-description">{project.description}</p>
        <div className="showcase-card-footer">
          <span>View Projects</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  </Link>
);

const ProjectShowcase = () => {
  return (
    <section className="showcase-section">
      <div className="container">
        <div className="section-header">
            <h2 className="section-title">Project Portfolio</h2>
            <p className="section-subtitle">
                A collection of my work, from guided learning paths to independent initiatives.
            </p>
        </div>
        <div className="showcase-grid">
          {mainProjects.map((project, index) => (
            <ShowcaseCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;