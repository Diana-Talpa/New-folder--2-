import React, { useState } from 'react';
import './WizardForm.css';
import { useAppContext } from '../../contexts/AppContext';
import { createWizard } from '../../api/wizardsApi';

const WizardForm = () => {
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [wand, setWand] = useState('');
  const { dispatch } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newWizard = { name, house, wand };
    try {
      const createdWizard = await createWizard(newWizard);
      dispatch({ type: 'ADD_WIZARD', payload: createdWizard });
      setName('');
      setHouse('');
      setWand('');
    } catch (error) {
      console.error('Failed to create wizard:', error);
    }
  };

  return (
    <form className="wizard-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="wizard-input"
        />
      </label>
      <label>
        House:
        <input 
          type="text" 
          value={house} 
          onChange={(e) => setHouse(e.target.value)} 
          className="wizard-input"
        />
      </label>
      <label>
        Wand:
        <input 
          type="text" 
          value={wand} 
          onChange={(e) => setWand(e.target.value)} 
          className="wizard-input"
        />
      </label>
      <button type="submit" className="wizard-submit">Add Wizard</button>
    </form>
  );
};

export default WizardForm;
