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
           <h2 className='text-4xl font-bold text-primary'>My Skills</h2>
            <div className='grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-12'>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill1} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill2} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill3} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill4} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill5} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill6} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill7} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill8} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill9} alt='' width={250} height={250}/></div>
            <div className='shadow-xl border-solid border-2 border-primary'><img src={skill10} alt='' width={250} height={250}/></div>
            
        </div>
       </div>
    );
};

export default Skills;