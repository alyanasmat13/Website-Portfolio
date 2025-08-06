import { projects } from '../data/projects'

const ProjectCard = ({ title, date, description, image, technologies, source, index }) => {
  const isLeft = index % 2 === 0;
  
  return (
    <div 
      className={`project-card ${isLeft ? 'slide-from-left' : 'slide-from-right'}`}
      style={{
        animationDelay: `${0.6 + (index * 0.15)}s`
      }}
    >
      <div className={`project-image ${!image ? 'placeholder' : ''}`}>
        {image && <img src={image} alt={title} />}
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
        <a href={source} target="_blank" rel="noopener noreferrer" className="source-button">
          Source
        </a>
      </div>
    </div>
  )
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