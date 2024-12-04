import React, { useState } from 'react';
import './SpellForm.scss';
import { useAppContext } from '../../contexts/AppContext';
import { createSpell } from '../../api/spellsApi';

const SpellForm = () => {
  const [name, setName] = useState('');
  const [effect, setEffect] = useState('');
  const { dispatch } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newSpell = { name, effect };
    try {
      const createdSpell = await createSpell(newSpell);
      dispatch({ type: 'ADD_SPELL', payload: createdSpell });
      setName('');
      setEffect('');
    } catch (error) {
      console.error('Failed to create spell:', error);
    }
  };

  return (
    <form className="spell-form" onSubmit={handleSubmit}>
      <label className="spell-label">
        Spell Name:
        <input
          type="text"
          className="spell-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="spell-label">
        Effect:
        <input
          type="text"
          className="spell-input"
          value={effect}
          onChange={(e) => setEffect(e.target.value)}
        />
      </label>
      <button type="submit" className="spell-submit-button">
        Add Spell
      </button>
    </form>
  );
};

export default SpellForm;
