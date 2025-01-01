import React from 'react'
import SkillCard from './SkillCard'

const skillItem = [
    {
      imgSrc: 'public/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: 'public/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'public/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: 'public//images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'public//images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: 'public/images/icons8-postgres-48.png',
      label: 'PosgreSQL',
      desc: 'Database'
    },
    {
      imgSrc: 'public/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'public/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className='headline-2'>
                Tools I use
            </h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
            Through my internships and projects, I’ve gained solid experience in software development with tools and languages like Java, React.js, JavaScript, Spring Boot, and AngularJS. I’ve worked on designing RESTful APIs, building scalable applications, and following agile methodologies to deliver clean, maintainable code.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                        key={key}
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        />
                        
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill