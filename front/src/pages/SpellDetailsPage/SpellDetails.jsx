import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpell } from '../../api/spellsApi';
import './SpellDetails.scss';

const SpellDetails = () => {
  const { id } = useParams();
  const [spell, setSpell] = useState(null);

  useEffect(() => {
    const fetchSpell = async () => {
      try {
        const data = await getSpell(id);
        setSpell(data);
      } catch (error) {
        console.error('Failed to fetch spell details:', error);
      }
    };

    fetchSpell();
  }, [id]);

  if (!spell) {
    return <p className="spell-details-loading">Loading...</p>;
  }

  return (
    <div className="spell-details">
      <h1>{spell.name}</h1>
      <p>Effect: <span>{spell.effect}</span></p>
    </div>
  );
};

export default SpellDetails;
