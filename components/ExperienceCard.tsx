import React from 'react';
import {motion} from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';


type Props = {
    experience: Experience;
};

export default function ExperienceCard({experience}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] h-[500px] md:w-[600px] md:h-[480px] xl:w-[900px] xl:h-[550px]
          snap-center bg-[#292929]  p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
           <motion.img
           initial={{
              y: -200,
              opacity: 0,
           }}
           transition={{duration: 1.2}}
           whileInView={{opacity: 1, y:0}}
           viewport={{once: true}}
           className='w-20 h-20 md:w-32 md:h-32 rounded-full md:rounded-full xl:w-32 xl:h-32 object-cover object-center'
             src={urlFor(experience?.companyImage).url()}
             alt='cognizant'
            />

            <div className="px-10 md:px-10 py-0">
                <h4 className='text-3xl md:text-4xl xl:text-4xl font-light'>
                    {experience?.jobTitle}
                </h4>
                <p className='font-bold text-2xl mt-2'>
                    {experience?.company}
                </p>
                <div className='flex space-x-2 my-3'>
                 
                  {experience.technologies.map((technology) => (
                    <img
                       key={technology._id}
                       className="h-10 w-10 rounded-full"
                       src={urlFor(technology.image).url()}
                    
                    />
                  ))}


                </div>

                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()
                    }
                </p>

                <ul className='list-disc space-y-5 ml-5 text-lg max-h-20 md:max-h-20 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                    {experience.points.map((point,i) => (
                        <li key={i}>
                            {point} 
                            </li>
                           
                    ))}                  
                </ul>
            </div>
        </article>
    )
}
