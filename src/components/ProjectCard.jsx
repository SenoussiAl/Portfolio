import PropTypes from 'prop-types'
import React from 'react'

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img src={imgSrc} alt={title} loading='lazy' className='img-cover' />
        </figure>
        <div className="">
            <div>
                <h3 className='title-1'>
                    {title}
                    </h3>
                <div>
                    {tags.map((label, key) => (
                        <span key={key} className=''> {label}</span>
                    ))}
                </div>
            </div>
            <div className="">
                <span className='material-symbols-rounded' aria-hidden='true'>View project</span>
            </div>
        </div>
        <a href={projectLink} target='_blank' className=""></a>
    </div>
  )
}
SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default ProjectCard