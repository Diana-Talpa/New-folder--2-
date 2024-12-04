import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SpellItem.scss';

const SpellItem = ({
  spell,
  onDelete,
  showAlert,
  onEditStart,
  onEditSave,
  onEditCancel,
  isEditing,
  editingFields,
  setEditingFields,
}) => {
  const navigate = useNavigate();

  const handleFieldChange = (field, value) => {
    setEditingFields({ ...editingFields, [field]: value });
  };

  const handleViewDetails = () => {
    navigate(`/spells/${spell._id}`);
  };

  return (
    <div className="spell-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editingFields.name || ''}
            onChange={(e) => handleFieldChange('name', e.target.value)}
          />
          <input
            type="text"
            value={editingFields.effect || ''}
            onChange={(e) => handleFieldChange('effect', e.target.value)}
          />
          <button onClick={() => onEditSave(spell._id, editingFields)}>Save</button>
          <button onClick={onEditCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3
            onClick={handleViewDetails}
            style={{ cursor: 'pointer', color: 'white' }}
          >
            {spell.name}
          </h3>
          <p>{spell.effect}</p>
          <button onClick={() => onEditStart(spell)}>Edit</button>
          <button onClick={() => {
            onDelete(spell._id); 
            showAlert('Successfully deleted spell');
          }}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default SpellItem;
