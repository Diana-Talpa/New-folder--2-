import React, { useEffect } from 'react';
import './WizardList.scss';
import { useAppContext } from '../../contexts/AppContext';
import { fetchWizards } from '../../api/wizardsApi';
import WizardItem from '../WizardItem/WizardItem';

const WizardList = ({ showAlert }) => {  
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const loadWizards = async () => {
      try {
        const wizards = await fetchWizards();
        dispatch({ type: 'SET_WIZARDS', payload: wizards });
      } catch (error) {
        console.error('Failed to load wizards:', error);
      }
    };

    loadWizards();
  }, [dispatch]);

  return (
    <div className="wizard-list">
      {state.wizards.map((wizard) => (
        <WizardItem key={wizard._id} wizard={wizard} showAlert={showAlert} /> 
      ))}
    </div>
  );
};

export default WizardList;
