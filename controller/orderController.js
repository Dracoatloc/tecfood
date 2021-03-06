const mongoose = require('mongoose');
const om = require('../manager/orderManager');

async function getAllOrdersByRestaurant(req,res) {
    const response = await om.getAllOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getPendingOrdersByRestaurant(req,res) {
    const response = await om.getPendingOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getMissedOrdersByRestaurant(req,res) {
    const response = await om.getMissedOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getReadyOrdersByRestaurant(req,res) {
    const response = await om.getReadyOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getDeliveredOrdersByRestaurant(req,res) {
    const response = await om.getDeliveredOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getOrderByNumberByRestaurant(req,res){
    const response = await om.getOrderByNumberByRestaurant(req.params.orderNo, req.params.restaurantId);
    if (response.length == 0) {
        res.sendStatus(404);
    }
    else {
        res.json(await response);
    }
}

async function getOrdersInProgressByRestaurant(req,res) {
    const response = await om.getOrdersInProgressByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function getCancelledOrdersByRestaurant(req,res) {
    const response = await om.getCancelledOrdersByRestaurant(req.params.restaurantId);
    res.json(await response);
}

async function setOrderAsDelivered(req,res) {
    const response = await om.setOrderAsDelivered(req.params.orderId);
    res.send(await response);
}

async function setOrderAsReady(req,res) {
    const response = await om.setOrderAsReady(req.params.orderId);
    res.send(await response);
}

async function setOrderAsMissed(req,res) {
    const response = await om.setOrderAsMissed(req.params.orderId);
    res.send(await response);
}

async function setOrderAsInProgress(req,res) {
    const response = await om.setOrderAsInProgress(req.params.orderId);
    res.send(await response);
}

async function setOrderAsCancelled(req,res) {
    const message = req.body;
    const response = await om.setOrderAsCancelled(req.params.orderId, message);
   res.send(await response);
}

async function insertOrder(req,res) {
    const response = await om.insertOrder(req.body.customerName,
                                    req.body.customerId,
                                    req.body.orderDescription,
                                    req.body.restaurantId,
                                    req.body.orderNumber);
    res.send(response);
}

module.exports = {
    getAllOrdersByRestaurant,
    getPendingOrdersByRestaurant,
    getMissedOrdersByRestaurant,
    getReadyOrdersByRestaurant,
    getDeliveredOrdersByRestaurant,
    getOrderByNumberByRestaurant,
    getOrdersInProgressByRestaurant,
    getCancelledOrdersByRestaurant,
    setOrderAsReady,
    setOrderAsDelivered,
    setOrderAsMissed,
    setOrderAsInProgress,
    setOrderAsCancelled,
    insertOrder
};
