const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllWizards() {
    const db = getDB();
    return await db.collection('wizards').find().toArray();
}

async function getWizardById(id) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid wizard ID");
    return await db.collection('wizards').findOne({ _id: ObjectId.createFromHexString(id) });
}

async function createWizard(newWizard) {
    const db = getDB();
    const result = await db.collection('wizards').insertOne(newWizard);
    return { ...newWizard, _id: result.insertedId }
}

async function deleteWizardById(id) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid wizard ID");
    const result = await db.collection('wizards').deleteOne({ _id: ObjectId.createFromHexString(id)});

    if (result.deletedCount === 0) {
        return { error: "Wizard not found" };
    }
    
    return { message: "Wizard deleted successfully" };
}

async function updateWizardById(id, updatedWizard) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid wizard ID");
    
    const result = await db.collection('wizards').updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: updatedWizard }
    );
    if (result.matchedCount === 0) throw new Error("Wizard not found");
    return { message: "Wizard updated successfully" };
  }

module.exports = { getAllWizards, getWizardById, deleteWizardById, createWizard, updateWizardById };