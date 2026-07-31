import { projects } from '../data/projects'

const ProjectCard = ({ title, date, description, image, technologies, source, link, index }) => {
  const isLeft = index % 2 === 0;

  const cardContent = (
    <>
      <div className={`project-image ${!image ? 'placeholder' : ''}`}>
        {image && (
          <img
            src={image}
            alt={title}
            width="800"
            height="382"
            loading="lazy"
            decoding="async"
          />
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <span className="project-date">{date}</span>
        <p>{description}</p>
        <div className="project-technologies">
          {technologies.map((tech, techIndex) => (
            <div key={techIndex} className="skill-item">
              {tech}
            </div>
          ))}
        </div>
        <div className="project-buttons">
          <a href={source} target="_blank" rel="noopener noreferrer" className="source-button" onClick={e => e.stopPropagation()}>
            Source
          </a>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="visit-button" onClick={e => e.stopPropagation()}>
              Visit
            </a>
          )}
        </div>
      </div>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card project-card--clickable ${isLeft ? 'slide-from-left' : 'slide-from-right'}`}
      style={{ animationDelay: `${0.6 + (index * 0.15)}s` }}
    >
      {cardContent}
    </a>
  ) : (
    <div
      className={`project-card ${isLeft ? 'slide-from-left' : 'slide-from-right'}`}
      style={{ animationDelay: `${0.6 + (index * 0.15)}s` }}
    >
      {cardContent}
    </div>
  );
}

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">Check out my projects</h2>
      <p className="projects-intro">
        I have worked on and developed many different types of projects using a vast range of technologies, these are some of my favorites.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects;