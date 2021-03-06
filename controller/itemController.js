const im = require('../manager/itemManager');

async function getItem(req,res) {
    const response = await im.getItem(req.params.itemId, req.params.restaurantId);
    res.json(await response);
}

async function getItems(req,res){
    const response = await im.getItems(req.params.restaurantId);
    res.json(await response);
}

async function updateItem(req,res) {
   const response = await im.updateItem(req.params.itemId, req.body);
   res.send(await response);
}

async function disableItem(req,res) {
    const response = await im.updateItemAvailability(req.params.itemId, false);
    res.send(await response);
}

async function enableItem(req,res) {
    const response = await im.updateItemAvailability(req.params.itemId, true);
    res.send(await response);
}

async function addItem(req,res) {
    const response = await im.addItem(req.body.name, req.body.description, req.body.price, req.body.image, req.body.availability, req.body.includedSides, req.params.restaurantId);
    res.send(await response);
}

module.exports = {
    getItem,
    getItems,
    updateItem,
    disableItem,
    enableItem,
    addItem
};
