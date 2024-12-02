import React from 'react';
import './SpellPage.css';
import SpellForm from '../../components/forms/SpellForm';
import SpellList from '../../components/SpellList/SpellList';

const SpellPage = () => {
  return (
    <div className="spell-page">
      <img
        className="spell-page-header-image"
        src="https://cdn.britannica.com/84/152984-050-C4EBDF82/Daniel-Radcliffe-Harry-Potter-and-the-Chamber.jpg"
        alt="Harry Potter"
      />
      <h2 className="spell-page-title">Spells</h2>
      <SpellForm />
      <SpellList />
    </div>
  );
};

export default SpellPage;
