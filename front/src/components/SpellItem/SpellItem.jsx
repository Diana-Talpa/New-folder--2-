import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAppContext } from '../../contexts/AppContext';
import { deleteSpell, updateSpell } from '../../api/spellsApi';
import './SpellItem.scss';

const SpellItem = ({ spell }) => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate(); // Hook for navigation
  const isEditing = state.editingItem && state.editingItem._id === spell._id;

  const handleRemove = async () => {
    try {
      await deleteSpell(spell._id);
      dispatch({ type: 'REMOVE_SPELL', payload: spell._id });
    } catch (error) {
      console.error('Failed to remove spell:', error);
    }
  };

  const handleEdit = () => {
    dispatch({ type: 'START_EDIT', payload: spell });
  };

  const handleSave = async () => {
    try {
      const { _id, ...updatedSpell } = state.editingFields;

      await updateSpell(spell._id, updatedSpell);

      dispatch({ type: 'UPDATE_SPELL', payload: { ...updatedSpell, _id: spell._id } });
      dispatch({ type: 'STOP_EDIT' });
    } catch (error) {
      console.error('Failed to update spell:', error);
    }
  };

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_EDIT_FIELDS', payload: { [field]: value } });
  };

  const handleCancel = () => {
    dispatch({ type: 'STOP_EDIT' });
  };

  const handleViewDetails = () => {
    navigate(`/spells/${spell._id}`); // Navigate to the spell details page
  };

  return (
    <div className="spell-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={state.editingFields.name || ''}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <input
            type="text"
            value={state.editingFields.effect || ''}
            onChange={(e) => handleFieldChange('effect', e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3
            onClick={handleViewDetails}
            style={{ cursor: 'pointer', color: 'white' }} // Set title color to white
          >
            {spell.name}
          </h3>
          <p>{spell.effect}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default SpellItem;
