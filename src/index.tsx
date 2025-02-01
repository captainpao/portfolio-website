import React from 'react';
import ReactDOM from 'react-dom';
import ImgKycDigitalForm from './assets/images/kyc-digital-form.png';
import ImgKycNameScreening from './assets/images/kyc-name-screening.png';
import ImgKycRiskDashboard from './assets/images/kyc-risk-dashboard.png';
import ImgKycUnwrappingAssociations from './assets/images/kyc-unwrapping-associations.png';
import './style.scss';

const CaseStudy = () => {
  return (
    <div>
      <div className='p-5'>
        <h1 className='text-center text-primary'>KYC Application UI/UX Case Study</h1>
      </div>
      <div className="container p-3">
        
        <section className='mb-5'>
          <h3 className='text-primary'>The Goal</h3>
          <p>The goal was to modernize the bank's KYC process by digitizing risk assessment forms, improving client association management, and enhancing risk evaluation through real-time name screening and account activity monitoring.</p>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>My Role</h3>
          <p>As the lead UI/UX designer, I worked closely with stakeholders to gather requirements, conducted research, and designed a high-fidelity prototype to streamline KYC operations.</p>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>Target Users</h3>
          <p>Operational staff handling KYC processes, including compliance officers and risk analysts, who require an efficient, user-friendly interface to assess client risk.</p>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>Research & Findings</h3>
          <h5>Pain Points Identified</h5>
          <p>Manual paperwork, lack of centralized risk assessment, and inefficient name screening.</p>
          <h5>User Needs</h5>
          <p>A digitized workflow, intuitive navigation, and clear risk visibility.</p>
          <h5>Insights</h5>
          <p>Operational staff preferred a dashboard-centric approach for quick decision-making.</p>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>Wireframes & Designs</h3>
          <p>Developed a high-fidelity prototype featuring:</p>
          <ul>
            <li>A centralized risk assessment dashboard</li>
            <li>Digitized risk forms with automated data entry</li>
            <li>Unwrapping & associations management for entity relationships</li>
            <li>Real-time name screening against sanctions, politically exposed persons (PEPs), and adverse media</li>
            <li>Account activity monitoring for suspicious transaction detection</li>
          </ul>
          <div className='row'>
            <div className='col-6 my-3'>
              <img src={ImgKycDigitalForm} alt="Mockup" className='w-100' />
            </div>
            <div className='col-6 my-3'>
              <img src={ImgKycNameScreening} alt="Mockup" className='w-100' />
            </div>
            <div className='col-6 my-3'>
              <img src={ImgKycRiskDashboard} alt="Mockup" className='w-100' />
            </div>
            <div className='col-6 my-3'>
              <img src={ImgKycUnwrappingAssociations} alt="Mockup" className='w-100' />
            </div>
          </div>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>Key Challenges</h3>
          <ul>
            <li>Balancing compliance requirements with usability</li>
            <li>Handling complex data structures in an intuitive way</li>
            <li>Ensuring a seamless transition from legacy systems to the new platform</li>
          </ul>
        </section>
        
        <section className='mb-5'>
          <h3 className='text-primary'>Key Takeaways</h3>
          <ul>
            <li>Early stakeholder involvement streamlined design iterations</li>
            <li>A modular design approach made the system more scalable</li>
            <li>Clear visual hierarchy improved efficiency for operational staff</li>
          </ul>
          <p>This project resulted in a more efficient, user-friendly KYC process that reduced manual efforts and enhanced risk assessment accuracy.</p>
        </section>
      </div>
    </div>
  );
};

ReactDOM.render(<CaseStudy />, document.getElementById('root'));