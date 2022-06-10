import React from 'react';
import skill1 from '../../images/skills/skill1.png'
import skill2 from '../../images/skills/skill2.png'
import skill3 from '../../images/skills/skill3.png'
import skill4 from '../../images/skills/skill4.png'
import skill5 from '../../images/skills/skill5.png'
import skill6 from '../../images/skills/skill6.png'
import skill7 from '../../images/skills/skill7.png'
import skill8 from '../../images/skills/skill8.jpg'
import skill9 from '../../images/skills/skill9.png'
import skill10 from '../../images/skills/skill10.png'


const Skills = () => {
    return (
       <div>
           <h2 className='text-4xl font-bold text-primary py-12 px-12'>My Skills</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-8 place-items-center'>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill1} alt=''/></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill2} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill3} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill4} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill5} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill6} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill7} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill8} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill9} alt=''  /></div>
            <div className='shadow-xl border-solid border-2 border-primary rounded-xl  '><img src={skill10} alt=''  /></div>
            
        </div>
       </div>
    );
};

export default Skills;