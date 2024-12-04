import React, { useState, useEffect } from 'react';
import './SpellPage.scss';
import SpellForm from '../../components/forms/SpellForm';
import SpellList from '../../components/SpellList/SpellList';
import { fetchSpells, deleteSpell } from '../../api/spellsApi';

const SpellPage = () => {
  const [spells, setSpells] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    const loadSpells = async () => {
      try {
        const spellsData = await fetchSpells();
        setSpells(spellsData);
      } catch (error) {
        console.error('Failed to fetch spells:', error);
      }
    };
    loadSpells();
  }, []);

 
  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => {
      setAlertMessage('');
    }, 3000);
  };

  
  const handleDelete = async (id) => {
    try {
      await deleteSpell(id);
      setSpells(spells.filter((spell) => spell._id !== id));
      showAlert('Successfully deleted spell'); 
    } catch (error) {
      console.error('Failed to delete spell:', error);
    }
  };

  return (
    <div className="spell-page">
      
      {alertMessage && <div className="alert">{alertMessage}</div>}
      
      <h2 className="spell-page-title">Spells</h2>
      
     
      <SpellForm showAlert={showAlert} />
      
      
      <SpellList
        spells={spells}
        onDelete={handleDelete}
        showAlert={showAlert} 
      />
    </div>
  );
};

export default SpellPage;
