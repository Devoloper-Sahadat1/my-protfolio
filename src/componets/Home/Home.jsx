import React from 'react';
import './style.css';
import About from '../About/About';
import BestClient from '../Best-client/Best-client';
import Services from '../Services/Services';
import ContactForm from '../Contact/ContactForm';
import Project from '../My-project/Project';
import Login from '../Login/Login';
const Home = () => {
  return (
    <div>
      <div className="w-[100%]  h-screen bg-[url('public/images/IMG202408091820181.jpg')] bg-cover  bg-right sm:bg-cover">
       
        <div className="mx-1 lg:mx-4 pt-52 custom-cl-hm-div ">
          <p className=" tracking-[.25em] mb-5">FREELANCE DIGITAL DESIGER</p>

          <h1 className="  md:text-6xl font-bold leading-snug">
            Hello, I'm <br></br>
            <spna className="text-red-400 ms-4"> Sahadat Hossen </spna>
            <br></br> Welcome to my <br></br> <spna className="">world.</spna>
          </h1>
        </div>
      </div>
      <About></About>
      <BestClient></BestClient>
      <Services></Services>
      <Project></Project>

      <ContactForm></ContactForm>
      <Login></Login>
    </div>
  );
};

export default Home;
