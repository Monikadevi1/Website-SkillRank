import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home text-center py-5">
      <div className="hero">
        <h1 className="display-4">Measure, Rank, Showcase Your Skills with Confidence</h1>
        <p className="lead">SkillRank helps you test your skills, earn ranks, and showcase them to recruiters.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary btn-lg mx-2">Start Testing Your Skills</button>
          <button className="btn btn-secondary btn-lg mx-2">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Home;

