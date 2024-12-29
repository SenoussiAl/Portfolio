import React from 'react'
import { ButtonOutline, ButtonPrimary } from './Button'

const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container itmes-center lg:grid lg:grid-cols-2 lg:gap-10'>    
            <div>
                <div className='flex items-center gap-3'>
                    <firgure className='img-box w-9 h-9 rounded-full'>
                        <img src='public/images/Profile.jpg' 
                        width={50} height={50}
                        alt='Senoussi Al-Nadjib photo' 
                        className='img-photo'
                        />
                    </firgure>
                    <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                        <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className='absolute inset-0 rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className='headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
                    Hi, I'm Senoussi Al-Nadjib
                </h2>
                <div className='flex items-center gap-3'>
                    <ButtonPrimary 
                    label='Download Resume'
                    icon='download'
                    />

                    <ButtonOutline 
                    href='#about'
                    label='Scroll Down'
                    icon='arrow_downward'
                    />
                </div>
            </div>
            <div className='hidden lg:block'>
                <firgure className='w-full max-w-[480px] ml-auto bg-gradient-to-t
                from-sky-400 via-25% via-sky-400/40 t-65% rounded-[60px] overflow-hidden'>
                    <img src='public/images/avatar.jpg' 
                        width={600} height={800}
                        alt='Senoussi Al-Nadjib Image' 
                        className='img-photo'/>
                </firgure>
            </div>
        </div>
    </section>
  )
}

export default Hero