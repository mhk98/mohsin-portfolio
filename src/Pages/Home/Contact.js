import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p34hhgb', 'template_ppj0pef', form.current, '_auEyfETklFr384Mg')
      .then((result) => {
          console.log('Email send', result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    
   <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 my-16 place-items-center'>
     <div className='mt-8'>

       <label class="label">
    <h2 class="label-text text-xl text-primary font-semibold">Address: <span className='text-white'>Mirpur-10, Dhaka, Bangladesh</span></h2>
      </label>
       <label class="label">
    <h2 class="label-text text-xl text-primary font-semibold">Phone: <span className='text-white'>+8801518301098</span></h2>
      </label>
       <label class="label">
    <h2 class="label-text text-xl text-primary font-semibold">Email: <span className='text-white'>mohsinkabirseo@gmail.com</span></h2>
      </label>    
     </div>

      <div>
      <h1 className='text-3xl font-bold text-primary mr-60'>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className='form-control w-full max-w-xs'>
      <label class="label">
    <span class="label-text text-white font-bold">Name</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text text-white font-bold">Email</span>
  </label>
  <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

  <label class="label">
    <span class="label-text text-white font-bold">Message</span>
  </label>
  <textarea type="message" class="textarea input-bordered " placeholder="Message" ></textarea><br/>
  <input type="submit" value="Send" class="bg-primary text-white btn" />
      </form>
      </div>
   </div>

);
  
};

export default Contact;