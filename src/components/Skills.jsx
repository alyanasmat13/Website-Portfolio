const Skills = () => {
  const skills = ['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind', 'Bootstrap', 'Supabase', 'Pandas', 'NumPy', 'Uvicorn', 'FastAPI', 'Firebase', 'Socket.IO', 'Render', 'Vercel', 'GitHub', 'Git', 'SVN', 'Postman', 'Docker', 'Cloudflare']

  return (
    <section className="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-item"
            style={{
              '--delay': `${0.4 + (index * 0.05)}s`
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;