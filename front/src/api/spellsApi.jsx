const API_URL = 'http://localhost:3000/spells';

// Fetch all spells
export const fetchSpells = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch spells');
  }
  return await response.json();
};

// Create a new spell
export const createSpell = async (spell) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spell),
  });
  if (!response.ok) {
    throw new Error('Failed to create spell');
  }
  return await response.json();
};

// Delete a spell by ID
export const deleteSpell = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete spell');
  }
  return await response.json();
};

// Update a spell by ID
export const updateSpell = async (id, updatedSpell) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedSpell),
  });
  if (!response.ok) {
    throw new Error('Failed to update spell');
  }
  return await response.json();
};

// Fetch a specific spell by ID
export const getSpell = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch spell');
  }
  return await response.json();
};
