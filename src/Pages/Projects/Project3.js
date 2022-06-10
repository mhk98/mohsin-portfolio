import React from 'react';
import project1 from '../../images/project/project3/project1.png';
import project2 from '../../images/project/project3/project2.png';
import project3 from '../../images/project/project3/project3.png';


const Project3 = () => {
    return (
        <div className='flex bg-neutral justify-evenly mx-12 my-20'>
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
            <h2 className='text-3xl text-left'>Name: Mental Press</h2>
      <div className='text-left mt-8'>
            <li>Google firebase authentication system.</li>
            <li>User can reset their password and set a new password.</li>
            <li>If the user doesn’t input the original email, password show error message.</li>
      </div>
        <div className='mt-4'>
          <h2>Technology</h2>
        </div>
        <div className='border border-primary'></div>
        <div className='mt-2'>
            <button class="btn btn-primary text-white mr-4">HTML</button>
            <button class="btn btn-primary text-white mr-4">CSS</button>
            <button class="btn btn-primary text-white ml-4">JS</button>
        </div>
        <div className='border border-primary mt-2'></div>
        <div className='mt-4'>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href=''>Live Website</a> </button>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href=''>Client Code</a> </button>
        <button className='btn border-2 border-primary mr-4'><a target='_blank' href=''>Server Code</a> </button>
        </div>
        
          </div>
        </div>
    );
};

export default Project3;