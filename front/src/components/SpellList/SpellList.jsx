import { useEffect } from 'react';
import './SpellList.css';
import { useAppContext } from '../../contexts/AppContext';
import { fetchSpells } from '../../api/spellsApi';
import SpellItem from '../SpellItem/SpellItem';

const SpellList = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const loadSpells = async () => {
      try {
        const spells = await fetchSpells();
        dispatch({ type: 'SET_SPELLS', payload: spells });
      } catch (error) {
        console.error('Failed to load spells:', error);
      }
    };

    loadSpells();
  }, [dispatch]);

  return (
    <div className="spell-list">
      {state.spells.map((spell) => (
        <SpellItem key={spell._id} spell={spell} />
      ))}
    </div>
  );
};

export default SpellList;
