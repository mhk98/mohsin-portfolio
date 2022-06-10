import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-accent text-neutral-content my-16">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Frontend Development</a>
    <a class="link link-hover">JavaScript Development</a>
    <a class="link link-hover">Backend Development</a>
    <a class="link link-hover">Website Responsive Design</a>
  </div> 
  <div>
    <span class="footer-title">Skills</span> 
    <a class="link link-hover">Html</a>
    <a class="link link-hover">CSS</a>
    <a class="link link-hover">ReactJs</a>
    <a class="link link-hover">ExpressJs</a>
    <a class="link link-hover">MongoDB</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;