import React from 'react'

const projects = [
    {
      imgSrc: '',
      title: 'Universal CRM Suite',
      tags: ['CRM', 'Microservices', 'Java'],
      projectLink: 'https://github.com/senoussial/crm-suite'
    },
    {
      imgSrc: '',
      title: 'Hotel Room Booking Website',
      tags: ['Spring Boot', 'React.js', 'TypeScript'],
      projectLink: 'https://github.com/senoussial/e-hotel'
    },
    {
      imgSrc: '',
      title: 'Basketball Match Predictor',
      tags: ['Machine Learning', 'Python', 'Django'],
      projectLink: 'https://github.com/senoussial/match-predictor'
    },
    {
      imgSrc: '',
      title: 'Medication Calendar',
      tags: ['Android', 'Kotlin', 'SQLite'],
      projectLink: 'https://github.com/senoussial/medication-calendar'
    },
  ];
  

const Project = () => {
  return (
    <section className='section' id='project'> 
            <div className="container">
                <h2 className='headline-2'>
                    My projects
                </h2>
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                Through my internships and projects, I’ve gained solid experience in software development with tools and languages like Java, React.js, JavaScript, Spring Boot, and AngularJS. I’ve worked on designing RESTful APIs, building scalable applications, and following agile methodologies to deliver clean, maintainable code.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                    {
                        projects.map(({imgSrc, title, tags, projectLink}, key) => (
                            <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            />
                            
                        ))
                    }
                </div>
            </div>
        </section>
  )
}

export default Project