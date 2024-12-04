import React, { useState, useEffect } from 'react';
import './SpellPage.scss';
import SpellForm from '../../components/forms/SpellForm';
import SpellList from '../../components/SpellList/SpellList';
import { fetchSpells, deleteSpell, updateSpell } from '../../api/spellsApi';

const SpellPage = () => {
  const [spells, setSpells] = useState([]);
  const [editingSpell, setEditingSpell] = useState(null);
  const [editingFields, setEditingFields] = useState({});

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

  const handleDelete = async (id) => {
    try {
      await deleteSpell(id);
      setSpells(spells.filter((spell) => spell._id !== id));
    } catch (error) {
      console.error('Failed to delete spell:', error);
    }
  };

  const handleEditStart = (spell) => {
    setEditingSpell(spell);
    setEditingFields({ ...spell });
  };

  const handleEditSave = async (id, updatedSpell) => {
    try {
      await updateSpell(id, updatedSpell);
      setSpells(
        spells.map((spell) =>
          spell._id === id ? { ...spell, ...updatedSpell } : spell
        )
      );
      setEditingSpell(null);
    } catch (error) {
      console.error('Failed to update spell:', error);
    }
  };

  const handleEditCancel = () => {
    setEditingSpell(null);
  };

  return (
    <div className="spell-page">
      <img
        className="spell-page-header-image"
        src="https://cdn.britannica.com/84/152984-050-C4EBDF82/Daniel-Radcliffe-Harry-Potter-and-the-Chamber.jpg"
        alt="Harry Potter"
      />
      <h2 className="spell-page-title">Spells</h2>
      <SpellForm />
      <SpellList
        spells={spells}
        onDelete={handleDelete}
        onEditStart={handleEditStart}
        onEditSave={handleEditSave}
        onEditCancel={handleEditCancel}
        editingSpell={editingSpell}
        editingFields={editingFields}
        setEditingFields={setEditingFields}
      />
    </div>
  );
};

export default SpellPage;
