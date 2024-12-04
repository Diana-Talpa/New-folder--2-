import React from 'react';
import './SpellList.scss';
import SpellItem from '../SpellItem/SpellItem';

const SpellList = ({
  spells,
  onDelete,
  showAlert, 
  onEditStart,
  onEditSave,
  onEditCancel,
  editingSpell,
  editingFields,
  setEditingFields,
}) => {
  return (
    <div className="spell-list">
      {spells.map((spell) => (
        <SpellItem
          key={spell._id}
          spell={spell}
          onDelete={onDelete}
          showAlert={showAlert}
          onEditStart={onEditStart}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
          isEditing={editingSpell && editingSpell._id === spell._id}
          editingFields={editingFields}
          setEditingFields={setEditingFields}
        />
      ))}
    </div>
  );
};

export default SpellList;


