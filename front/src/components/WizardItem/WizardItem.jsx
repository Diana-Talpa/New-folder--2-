import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContext';
import { deleteWizard, updateWizard } from '../../api/wizardsApi';
import './WizardItem.scss';

const WizardItem = ({ wizard, showAlert }) => { 
  const { state, dispatch } = useAppContext();
  const isEditing = state.editingItem && state.editingItem._id === wizard._id;

  const handleRemove = async () => {
    try {
      await deleteWizard(wizard._id);
      dispatch({ type: 'REMOVE_WIZARD', payload: wizard._id }); 
      showAlert('Wizard successfully deleted!');
    } catch (error) {
      console.error('Failed to remove wizard:', error);
      showAlert('Failed to delete wizard!');
    }
  };

  const handleEdit = () => {
    dispatch({ type: 'START_EDIT', payload: wizard });
  };

  const handleSave = async () => {
    try {
      const { _id, ...updatedWizard } = state.editingFields;
      await updateWizard(wizard._id, updatedWizard);
      dispatch({ type: 'UPDATE_WIZARD', payload: { ...updatedWizard, _id: wizard._id } });
      dispatch({ type: 'STOP_EDIT' });
    } catch (error) {
      console.error('Failed to update wizard:', error);
    }
  };

  const handleFieldChange = (field, value) => {
    dispatch({ type: 'UPDATE_EDIT_FIELDS', payload: { [field]: value } });
  };

  const handleCancel = () => {
    dispatch({ type: 'STOP_EDIT' });
  };

  return (
    <div className="wizard-item">
      {isEditing ? (
        <div className="wizard-item-edit">
          <input
            type="text"
            value={state.editingFields.name || ''}
            onChange={(e) => handleFieldChange('name', e.target.value)}
            placeholder="Name"
            className="wizard-input"
          />
          <input
            type="text"
            value={state.editingFields.house || ''}
            onChange={(e) => handleFieldChange('house', e.target.value)}
            placeholder="House"
            className="wizard-input"
          />
          <input
            type="text"
            value={state.editingFields.wand || ''}
            onChange={(e) => handleFieldChange('wand', e.target.value)}
            placeholder="Wand"
            className="wizard-input"
          />
          <div className="wizard-buttons">
            <button className="wizard-save" onClick={handleSave}>Save</button>
            <button className="wizard-cancel" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="wizard-item-display">
          <Link to={`/wizard/${wizard._id}`}>
            <h3 className="wizard-name">{wizard.name}</h3>
          </Link>
          <p className="wizard-details">House: {wizard.house}</p>
          <p className="wizard-details">Wand: {wizard.wand}</p>
          <div className="wizard-buttons">
            <button className="wizard-edit" onClick={handleEdit}>Edit</button>
            <button className="wizard-remove" onClick={handleRemove}>Remove</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WizardItem;
