import React from 'react';
import './Feature.css';

const Features = () => {
  return (
    <section id="features" className="features-section py-5">
      <h2 className="text-center mb-4">Features</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4"> {/* Added responsive classes */}
            <div className="feature-item p-3 border rounded">
              <h3>Industry-specific Assessments</h3>
              <p>Assessments are designed for professionals in various industries.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4"> {/* Added responsive classes */}
            <div className="feature-item p-3 border rounded">
              <h3>Trusted Rank Certificates</h3>
              <p>Our certificates are trusted by recruiters and institutions.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4"> {/* Added responsive classes */}
            <div className="feature-item p-3 border rounded">
              <h3>Community and Support</h3>
              <p>Get advice and support from a community of learners and professionals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
