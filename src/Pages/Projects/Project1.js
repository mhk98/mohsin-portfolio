import React from 'react';
import project1 from '../../images/project/project1/project1.png';
import project2 from '../../images/project/project1/project2.png';
import project3 from '../../images/project/project1/project3.png';


const Project1 = () => {
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mx-12 my-20'>
          <div className=''>
          <div class="carousel border-primary">
  <div id="item1" class="carousel-item w-full">
    <img src={project1} alt=''/>
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={project2} alt=''/>
  </div> 
  <div id="item3" class="carousel-item w-full">
    <img src={project3} alt='' />
  </div> 
  
</div> 
{/* <div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
</div> */}
          </div>
          <div className='text-white w-full'>
            <h2 className='text-3xl text-left'>Name: X Computer Manufacturer</h2>
      <div className='text-left mt-8'>
            <li>Verified email verification after google sign-in.</li>
            <li>User can reset their password and set a new password.</li>
            <li>Separate Dashboard for Admin and Users after login. To check the website as an admin: ph@hero.com, Password: 12345678</li>
      </div>
        <div className='mt-4'>
          <h2>Technology</h2>
        </div>
        <div className='border border-primary'></div>
        <div className='mt-2'>
            <button class="btn btn-primary text-white mr-4">HTML</button>
            <button class="btn btn-primary text-white mr-4">CSS</button>
            <button class="btn btn-primary text-white ml-4">JS</button>
            <button class="btn btn-primary text-white ml-4">MERN</button>
        </div>
        <div className='border border-primary mt-2'></div>
        <div className='mt-4'>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href='https://x-computer-manufacture.web.app/'>Live Website</a> </button>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href='https://github.com/mhk98/x-computer-manufacturer-client'>Client Code</a> </button>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href='https://github.com/mhk98/x-computer-manufacturer-server'>Server Code</a> </button>
        </div>
        
          </div>
        </div>
    );
};

export default Project1;