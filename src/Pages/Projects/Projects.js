import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../../images/project1.png'
import project2 from '../../images/project2.png'
import project3 from '../../images/project3.png'


const Projects = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center text-4xl my-12 text-primary font-bold'>My Projects</h1>
            <div className='mt-5 ml-12 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-16 place-items-center'>
            
            <div class="card w-96 shadow-xl bg-neutral rounded-xl border-solid border-2 border-primary">
                <figure><img src={project1} alt="blog1" width={360} height={206}/></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">
                    Name: X Computer Manufacture
                    </h2>
                    <div className='text-left'> 
                    <p><span className='font-bold'>Type:</span> Ful-Stack Web Application</p>
                    <p><span className='font-bold'>Technology:</span> Html, Tailwind, Firebase, MongoDB, React Js, Express Js, JWT</p>
                    <button className='bg-primary btn ml-24 mt-4'><Link to='/project1'>See Details</Link></button>
                    </div>
                    
                </div>
                </div>
            <div class="card w-96 shadow-xl bg-neutral rounded-xl border-solid border-2 border-primary">
                <figure><img src={project2} alt="blog2" width={360} height={206} /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">
                    Name: X Autos Warehouse
                    </h2>
                    <div className='text-left'>
                    <p><span className='font-bold'>Type:</span> Ful-Stack Web Application</p>
                    <p><span className='font-bold'>Technology:</span> Html, Bootstrap CSS, Firebase, MongoDB, Context API, React Js, Express Js.</p>
                    <button className='bg-primary btn ml-24 mt-4'><Link to='/project2'>See Details</Link></button>
                    </div>
                    
                </div>
                </div>
            <div class="card w-96 shadow-xl bg-neutral rounded-xl border-solid border-2 border-primary">
                <figure><img src={project3} alt="blog3" width={360} height={206} /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">
                       Name: Mental Press
                    </h2>
                    <div className='text-left'>
                    <p><span className='font-bold'>Type:</span> Single Page Application</p>
                    <p><span className='font-bold'>Technology:</span> Html, Bootstrap CSS, Firebase, Context API, React Js.</p>
                    <button className='bg-primary btn ml-24 mt-4'><Link to='/project3'>See Details</Link></button>
                    </div>
                    
                </div>
                </div>
        </div>
        </div>
    );
};

export default Projects;