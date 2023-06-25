import Order from "../mongodb/models/order.js";

const getAllOrders = async (req, res) => {
}
const getOrderDetail = async (req, res) => {
}
const createOrder = async (req, res) => {
    try {
        const {products, status, customer, cafe} = req.body

        const newOrder = await Order.create({

        })

        res.status(200).json(newOrder)
    } catch (error) {
        res.status(500).json({message: error. message})
    }
}

const updateOrder = async (req, res) => {
}

const deleteOrder = async (req, res) => {
}

export {
    getAllOrders,
    getOrderDetail,
    createOrder,
    updateOrder,
    deleteOrder
}