import React, { useState, useEffect, useCallback } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const slidesContent = [
    <div>
      <h1>Agriculture, FoodTech & Rural Development</h1>
      <ol>
        <li>Analytics based on Govt. Land Information System (GLIS) Data</li>
      </ol>
    </div>,
    <div>
     <h1>Blockchain & Cybersecurity</h1>
     <ol>
      <li>Online Blockchain based certificate generation and validation system for government organization.</li>
      <li>To develop centralised information security .Log-collection facility' or 'security operation centre (soc) in the power sector, considering cEA cybersecurity (Power sector) Guidelines, 2021to keep lr and or networking System isolated and air-gap</li>
      <li>Analysis and identification of malicious mobile applications</li>   
      <li>Network Segmentation and Microsegmentation</li>
      <li>Cloud Security Monitoring and Compliance</li>
      <li>Create an intelligent system using AI/ML to detect phishing domains which imitate look and feel of genuine domains</li>
     </ol>
    </div>,
       <div>
        <h1>Clean & Green Technology</h1>
        <ol>
        <li>Student Innovation</li>
        <li>Pro Planet Person App</li>
        </ol>
       </div>,
     <div>
     <h1>Disaster Management</h1>
     <ol>
     <li>An application under which all rescue agencies are registered and which can display the location of other rescue relief agencies during natural/ man made calamities</li>
     <li>Threat zone of an explosion particularly in oil and gas handling industries or refineries</li>
     <li>A mobile app that crowd sources water-related problems from around a community, open sources data, etc. and display them on a map.</li>
     </ol>
    </div>,
        <div>
        <h1>FinTech</h1>
        <ol>
        <li>Decentralized Finance (DeFi) Platforms</li>
        <li>Big Data for Financial Services</li>
        <li>Finance Management Apps</li>
        <li>Market trend prediction</li>
        </ol>
       </div>,
    <div>
    <h1>Fitness & Sports</h1>
    <ol>
    <li>Student Innovation</li>
    <li>Self-identifying the mental health status and get guidance for support.</li>
    </ol>
   </div>,
   <div>
   <h1>MedTech / BioTech / HealthTech</h1>
   <ol>
   <li>A software that suggests drugs and formulations for a disease/pharmacological property based on the Ayurvedic classical books/Repositories.</li>
   <li>Chatbot to Known Individual Prakriti (Phenotype)</li>
   <li>Computerized cognitive Retraining Program for Home training of Children with Disabilities.</li>
   <li>Food and Nutrition Assistance</li>
   <li>Autism Speech and Language</li>
   </ol>
  </div>,
  <div>
    <h1>Smart Education</h1>
    <ol>
      <li>Capacity building, performance assessment and motivation driven tool for faculty upgradation</li>
      <li>Education ecosystem for specially abled student need provision and improvement to take care of compliance, governance and conduct.</li>
      <li>Application for Assessment of Quality of Textbook/ Reference Books/ E- Book</li>
      <li>To develop a technical solution for enabling Institution level verification of students of one State studying in other State/s, who are at present generally denied benefits under the Scholarship scheme as the Institutions in which they are studying are not registered on the portal/s of their home State.</li>
    </ol>
  </div>,
  <div>
    <h1>Transportation & Logistics</h1>
    <ol>
      <li>Dak Ghar Niryat Kendra</li>
      <li>Automation of drill core rock sample lithology logging.</li>
      <li>Dashboard for real-time monitoring of construction projects.</li>
      <li>Application Development for monitoring of wool from Farm to fabric</li>
    </ol>
  </div>,
  <div>
    <h1>Renewable / Sustainable Energy</h1>
    <ol>
      <li>development of systems for effective Environmental, Social and Governance (ESG) Intervention in Higher Education</li>
      <li>Al-based Generative design of Hydro power plants.</li>
    </ol>
  </div>,
  <div>
    <h1>Smart Automation</h1>
    <ol>
      <li>Suggest an Al-based solution to enable ease of grievance lodging and tracking for citizens across multiple departments</li>
      <li>Develop a Proctored exam tool for shortlisting the candidates for the national and international level hackathons.</li>
      <li>Augmented/ Virtual reality system for the live training of troops</li>
      <li>360-degree feedback software for the Government of India related News Stories in Regional Media using Artificial Intelligence / Machine Learning</li>
      <li>Develop and deploy a Large Language Model (LLM) based tool for generating human like responses to natural language inputs for network not connected over internet</li>
    </ol>
  </div>,
  <div>
    <h1>Miscellaneous</h1>
    <ol>
    <li>Augmented Reality (AR) Experiences</li>
    <li>Robustness in Algorithms</li>
    <li>Graph Guru</li>
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
