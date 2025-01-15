import PropTypes from 'prop-types';
import React from 'react';

const ExperienceCard = ({
  company,
  position,
  duration,
  location,
  responsibilities,
  classes
}) => {
  return (
    <div className={`group relative p-6 rounded-2xl ring-2 ring-inset ring-zinc-50/10 hover:bg-zinc-800 transition-colors ${classes}`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="title-1 mb-1">{position}</h3>
            <p className="text-sky-400 font-medium">{company}</p>
          </div>
          <div className="flex flex-col items-end text-sm text-zinc-400">
            <span>{duration}</span>
            <span>{location}</span>
          </div>
        </div>
        
        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-zinc-400 group-hover:text-zinc-300 transition-colors"
            >
              <span className="material-symbols-rounded text-sky-400 text-lg shrink-0 mt-1">
                arrow_forward
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.string
};

export default ExperienceCard;