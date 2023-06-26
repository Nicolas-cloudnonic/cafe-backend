import Order from "../mongodb/models/order.js";
import Store from "../mongodb/models/store.js";
import Customer from "../mongodb/models/customer.js";
import Product from "../mongodb/models/product.js";

const getAllOrders = async (req, res) => {
    try {
        const entityId = req.params.entity
        const store = Store.findById(entityId)
        const customer = Customer.findById(entityId)
        if (!store && !customer) {
            return res.status(404).json({message: 'Entity not found'});
        }

        if(store) {
            const orders = await Order.find({store: {_id: entityId}})
            if(orders) {
                return res.status(200).json(orders)
            } else {
                return res.status(200).json([])
            }
        }

        if(customer) {
            const orders = await Order.find({customer: {_id: entityId}})
            if(orders) {
                return res.status(200).json(orders)
            } else {
                return res.status(200).json([])
            }
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getOrderDetail = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId)

        if (order) {
            return res.status(200).json(order);
        } else {
            return res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createOrder = async (req, res) => {
    try {
        const storeId = req.params.store
        const {products, customer} = req.body

        const store = await Store.findById(storeId);
        if (!store) {
            return res.status(404).json({message: 'Store not found'});
        }

        const getCustomer = await Customer.findById(customer)

        const newOrder = await Order.create({
            products,
            status: "Created",
            customer: getCustomer,
            store,
        })

        res.status(200).json(newOrder)
    } catch (error) {
        res.status(500).json({message: error. message})
    }
}

const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id
        const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true });

        if(updatedOrder) {
            return res.status(200).json(updatedOrder)
        } else {
            return res.status(404).json({message: 'Order not found'});
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if(deletedOrder) {
            return res.status(200).json({ message: 'Order deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Order not found' });
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {
    getAllOrders,
    getOrderDetail,
    createOrder,
    updateOrder,
    deleteOrder
}