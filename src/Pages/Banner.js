import React from 'react';
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-3xl font-bold">Hello! I'm</h1>
        <h1 className='text-5xl text-primary font-bold'>Md. Mohsin Kabir</h1>
        <h2 className='text-2xl font-bold'>Junior <Typical
        steps={[
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
        <button class="btn btn-primary mr-8">Hire Me</button>
      <button class="btn btn-primary"> <a target='_blank' href='https://drive.google.com/file/d/1Kv2ZRquImDNwwGn8J90NSNnLkfSwcqs2/view'>Download Resume</a></button>
        </div>
    </div>
  </div>
</div>
    );
};

export default Banner;