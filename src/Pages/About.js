import React from 'react';
import profile from '../images/profile.jpg'

const About = () => {
    return (
        <div class="hero min-h-screen bg-base-200 px-48">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={profile} alt=''/>
    <div>
      <h1 class="text-3xl font-bold text-primary">Hi I'm Md. Mohsin Kabir!</h1>
      <p class="px-16 py-8">A passionate programmer. born and brought up in Bangladesh. I am a Mern Stack Developer with React.js, Express.js, Node.js, and MongoDb as my tech stack. In 2021, I successfully completed my Engineering with specialization in 'Computer Science and Engineering'.</p>
      <p>
      Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them. I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.</p>
      
    </div>
  </div>
</div>
    );
};

export default About;