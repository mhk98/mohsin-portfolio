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
    
   <div className='h-screen flex flex-col 
   items-center justify-center'>
      
      <form ref={form} onSubmit={sendEmail} className='form-control w-full max-w-xs'>
      <label class="label">
    <span class="label-text">Name</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

  <label class="label">
    <span class="label-text">Message</span>
  </label>
  <textarea type="message" class="textarea input-bordered " placeholder="Message" ></textarea><br/>
  <input type="submit" value="Send" class="btn" />
      </form>
   </div>

);
  
};

export default Contact;