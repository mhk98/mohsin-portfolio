import React from 'react';
import Typical from 'react-typical'
import profile from '../images/profile.jpg'
const Banner = () => {
    return (
        <div class=" py-12 bg-neutral">


  <div className='flex flex-col 
   items-center justify-center'>
  <img src={profile} alt=''/>
  </div>

<div>
        <h1 className='text-5xl text-primary font-bold'>Md. Mohsin Kabir</h1>
        <h2 className='text-2xl font-bold text-white'>Junior <Typical steps={[
            'Web Developer.', 1000,
            'Frontend Developer.', 1000,
            'React Developer.', 1000,
            'JavaScript Developer.', 1000,
    
    ]}
        loop={Infinity}
        wrapper="h2"
      />
        </h2>
        <div className='mt-4'>
        <button class="btn btn-primary mr-4">Hire Me</button>
      <button class="btn btn-primary"> <a target='_blank' href='https://drive.google.com/file/d/1Kv2ZRquImDNwwGn8J90NSNnLkfSwcqs2/view'>Download Resume</a></button>
        </div>
    </div>
</div>
    );
};

export default Banner;