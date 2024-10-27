import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section py-5">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="step">
            <h3>Test Your Skills</h3>
            <p>Take assessments tailored to your industry and skills.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step">
            <h3>Earn Your Rank</h3>
            <p>Receive a trusted rank certificate based on your performance.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="step">
            <h3>Showcase to Recruiters</h3>
            <p>Showcase your rank on your professional profiles and CV.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
