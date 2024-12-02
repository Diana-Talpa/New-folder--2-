const express = require('express');
const {
    getAllSpells,
    getSpellById,
    createSpell,
    updateSpellById,
    deleteSpellById,
} = require('../services/spellsService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const spells = await getAllSpells();
        res.send(spells);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch spells' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const spell = await getSpellById(req.params.id);
        if (!spell) return res.status(404).send({ error: 'Spell not found' });
        res.send(spell);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch spell' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newSpell = req.body;
        const createdSpell = await createSpell(newSpell);
        res.status(201).send(createdSpell);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create spell' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedSpell = req.body;
        const result = await updateSpellById(req.params.id, updatedSpell);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to update spell' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteSpellById(req.params.id);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to delete spell' });
    }
});

module.exports = router;
