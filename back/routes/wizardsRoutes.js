const express = require('express');
const { getAllWizards, getWizardById, deleteWizardById, createWizard, updateWizardById } = require('../services/wizardServices');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const wizards = await getAllWizards();
        res.send(wizards);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch wizards' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const wizard = await getWizardById(req.params.id);
        if (!wizard) return res.status(404).send({ error: 'Wizard not found' });
        res.send(wizard);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch wizard' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newWizard = req.body;
        const createdWizard = await createWizard(newWizard);
        res.status(201).send(createdWizard);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to create wizard' });
    }
});

router.put('/:id', async (req, res) => {
    try {
      const updatedWizard = req.body;
      const id = req.params.id;
      const result = await updateWizardById(id, updatedWizard);
      res.send(result);
    } catch (error) {
      console.error('Error updating wizard:', error);
      res.status(500).send({ error: 'Failed to update wizard' });
    }
  });

router.delete('/:id', async (req, res) => {
    try {
        const result = await deleteWizardById(req.params.id);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to delete wizard' });
    }
});

module.exports = router;
