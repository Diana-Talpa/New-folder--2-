import React from 'react';
import './WizardPage.scss';
import WizardForm from '../../components/forms/WizardForm';
import WizardList from '../../components/WizardList/WizardList';

const WizardPage = () => {
  return (
    <div className="wizard-page">
      <div className="wizard-images">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/09/12/17/potter.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp"
          alt="Harry Potter"
          className="wizard-image"
        />
        <img
          src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*N1jAR-lrHmrOPQCtneSjmw.jpeg"
          alt="Hogwarts"
          className="wizard-image"
        />
        <img
          src="https://pointrussell.opencities.com/files/content/public/v/5/council/elected-members/albus-dumbledore/albus-dumbledore.jpg?dimension=pageimage&w=480"
          alt="Dumbledore"
          className="wizard-image"
        />
      </div>
      <h2 className="wizard-page-title">Wizards</h2>
      <WizardForm />
      <WizardList />
    </div>
  );
};

export default WizardPage;
