import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './WizardDetails.scss';
import { getWizard } from '../../api/wizardsApi';

const WizardDetails = () => {
  const { id } = useParams();
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    const fetchWizard = async () => {
      try {
        const data = await getWizard(id);
        setWizard(data);
      } catch (error) {
        console.error('Failed to fetch wizard details:', error);
      }
    };

    fetchWizard();
  }, [id]);

  if (!wizard) {
    return (
      <div className="wizard-details-page">
        <p className="wizard-details-loading">Loading...</p>
      </div>
    );
  }

  return (
    <div className="wizard-details-page">
      <div className="wizard-details-content">
        <div className="wizard-details">
          <h1>{wizard.name}</h1>
          <p>
            House: <span>{wizard.house}</span>
          </p>
          <p>
            Wand: <span>{wizard.wand}</span>
          </p>
        </div>
      </div>
      <footer className="wizard-footer">© 2024 Wizarding World</footer>
    </div>
  );
};

export default WizardDetails;
