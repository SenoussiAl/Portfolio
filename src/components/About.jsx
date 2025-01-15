import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 20
    },
    {
      label: 'Years of experience',
      number: 1
    }
  ];

const About = () => {
  return (
    <section id='about' className='section'>
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                Hi there! I’m Senoussi Al-Nadjib, a software engineer who thrives on bringing ideas to life through code. Whether it's building full-stack applications, diving into the world of AI, or crafting scalable solutions, I love solving problems and creating software that makes a real impact. Programming isn't just my job, it's my passion, and I’m always excited to learn, grow, and take on new challenges. Let’s create something amazing together!
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {aboutItems.map(({label, number}, key) => (
                        <div key={key}>
                            <div className="flex items-center md:mb-2">
                                <span className="text-2xl font-semibold text-zinc-100
                                md:text-4xl">
                                    {number}
                                </span>
                                <span className="text-green-400 font-semibold md:text-3xl">+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))}
                    <img src='public/images/logo.jpg' 
                    alt='Logo'
                    className='ml-auto md:w-[40px] md:h-[40px]'
                    width={30} height={30}
                    />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About