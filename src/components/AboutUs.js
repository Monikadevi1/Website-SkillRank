import React, { useState, useRef, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to track open FAQ
  const answerRefs = useRef([]); // Refs to store each FAQ answer container's height

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the selected FAQ
  };

  useEffect(() => {
    // Dynamically set the height of the answer containers when open
    answerRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.height = openIndex === index ? `${ref.scrollHeight}px` : '0px';
      }
    });
  }, [openIndex]);

  return (
    <section id="about-us" className="about-container py-5">
      <div className="container">
        <h2 className="about-heading">About Us</h2>
        <p className="about-text">
          Our mission is to empower students and professionals by helping them validate their skills and showcase their potential to the world.
        </p>
        <p className="about-text">
          We are a team of dedicated professionals passionate about education and career development.
        </p>

        {/* FAQs Section */}
        <div className="faqs-container mt-5">
          <h3 className="faqs-heading">Frequently Asked Questions</h3>
          <div className="row">
            {[ 
              {
                question: "What is SkillRank?",
                answer: "SkillRank is a platform that offers assessments and certifications tailored to various industries."
              },
              {
                question: "How do I get certified?",
                answer: "You can take our online assessments to receive your certification. Visit our assessments page for more information."
              },
              {
                question: "Who can take the assessments?",
                answer: "Our assessments are designed for students and professionals from various fields looking to validate their skills."
              }
              // Add more FAQs as needed
            ].map((faq, index) => (
              <div key={index} className={`col-12 faq-item card mb-3 ${openIndex === index ? 'open' : ''}`}>
                <div className="card-header faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className="toggle-icon float-end">{openIndex === index ? '-' : '+'}</span>
                </div>
                <div 
                  className="faq-answer-container" 
                  ref={(el) => (answerRefs.current[index] = el)} 
                >
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;




