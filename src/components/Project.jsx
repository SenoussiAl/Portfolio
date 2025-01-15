import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
      imgSrc: '/images/ehotel-IMG.jpg',
      title: 'Hotel Room Booking Website',
      tags: ['Spring Boot', 'React.js', 'TypeScript'],
      projectLink: 'https://github.com/SenoussiAl/e-hotel'
    },
  ];
const Project = () => {
  return (
    <section className='section' id='projects'> 
            <div className="container">
                <h2 className='headline-2'>
                    My projects
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
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