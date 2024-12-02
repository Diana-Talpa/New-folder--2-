const { getDB } = require('../db');
const { ObjectId } = require('mongodb');

async function getAllSpells() {
    const db = getDB();
    return await db.collection('spells').find().toArray();
}

async function getSpellById(id) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid spell ID");
    return await db.collection('spells').findOne({ _id: ObjectId.createFromHexString(id) });
}

async function createSpell(newSpell) {
    const db = getDB();
    const result = await db.collection('spells').insertOne(newSpell);
    return { ...newSpell, _id: result.insertedId };
}

async function updateSpellById(id, updatedSpell) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid spell ID");
    const result = await db.collection('spells').updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: updatedSpell }
    );
    if (result.matchedCount === 0) throw new Error("Spell not found");
    return { message: "Spell updated successfully" };
}

async function deleteSpellById(id) {
    const db = getDB();
    if (!ObjectId.isValid(id)) throw new Error("Invalid spell ID");
    const result = await db.collection('spells').deleteOne({ _id: ObjectId.createFromHexString(id) });
    if (result.deletedCount === 0) throw new Error("Spell not found");
    return { message: "Spell deleted successfully" };
}

module.exports = { getAllSpells, getSpellById, createSpell, updateSpellById, deleteSpellById };
