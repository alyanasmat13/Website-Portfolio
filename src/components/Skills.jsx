const Skills = () => {
  const skills = ['Python', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'React.js', 'Next.js', 'Node.js', 'Tailwind', 'Bootstrap', 'Supabase', 'GitHub', 'Git', 'SVN', 'Postman', 'Docker', 'Cloudflare', 'VSCode']
  
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