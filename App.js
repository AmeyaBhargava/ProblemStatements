import React, { useState, useEffect, useCallback } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const slidesContent = [
    <div>
      <h1>Agriculture, FoodTech & Rural Development</h1>
      <ol>
        <li>Analyzing data derived from the Govt. Land Information System (GLIS)</li>
      </ol>
    </div>,
    <div>
     <h1>Blockchain & Cybersecurity</h1>
     <ol>
      <li>Developing a system for generating and validating certificates using blockchain technology for government entities</li>
      <li>Monitoring and ensuring compliance with security measures in cloud environments</li>
      <li>Creating an intelligent system utilizing AI/ML to identify phishing domains mimicking genuine websites</li>   
     </ol>
    </div>,
       <div>
        <h1>Clean & Green Technology</h1>
        <ol>
        <li>Engaging students in innovative projects and initiatives</li>
        <li>Developing a mobile application aimed at promoting environmentally friendly practices</li>
        </ol>
       </div>,
     <div>
     <h1>Disaster Management</h1>
     <ol>
     <li>Creating a mobile app that gathers and displays water-related issues within communities through crowdsourcing and mapping</li>
     <li>Establishing an application where rescue agencies register and coordinate their efforts, particularly during disasters</li>
     </ol>
    </div>,
        <div>
        <h1>FinTech</h1>
        <ol>
        <li>Exploring platforms for decentralized finance, potentially disrupting traditional financial systems</li>
        <li>Predicting trends in various markets using data analysis and forecasting techniques</li>
        </ol>
       </div>,
   <div>
   <h1>MedTech / BioTech / HealthTech</h1>
   <ol>
   <li>Designing software to aid in suggesting drugs and formulations based on Ayurvedic classical texts and repositories</li>
   <li>Developing software to recommend medications and formulations for specific diseases or pharmacological properties based on Ayurvedic classical literature and repositories.</li>
   </ol>
  </div>,
  <div>
    <h1>Tourism</h1>
    <ol>
      <li>Digital Tourism Solutions for Ayodhya</li>
      <li>Develop a software application that leverages advanced technology to address key challenges and enhance the tourism experience in India. The application should provide innovative solutions to improve accessibility, promote cultural immersion, and streamline travel logistics for both domestic and international tourists.</li>
    </ol>
  </div>,
  <div>
    <h1>Miscellaneous</h1>
    <ol>
    <li>Creating immersive augmented reality (AR) experiences for various applications</li>
    <li>Ensuring the robustness and reliability of algorithms through rigorous testing and validation processes</li>
    </ol>
  </div>
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesContent.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="app-container" >
      <div className="header">
        <div className="logo">
          <img src="logo.jpg" alt="Logo" />
          <h1><u>Problem Statements</u></h1>
        </div>
      </div>
      
      <div className="carousel-container">
        <div className="carousel">
          {slidesContent.map((content, index) => (
            <div
              key={`slide${index}`}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              {content}
            </div>
          ))}
        </div>
        <button id="prevBtn" onClick={prevSlide}>❮</button>
        <button id="nextBtn" onClick={nextSlide}>❯</button>
      </div>
      <a href="https://docs.google.com/spreadsheets/d/1mw0z-bffY8EwOS7knVg9-v82cR0TbMwT_2AubmtgoDU/edit?usp=sharing" className="excel-download" target="_blank" rel="noopener noreferrer"><b>Open Problem Statements</b></a>
    </div>
  );
}

export default App;
