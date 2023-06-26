import Customer from "../mongodb/models/customer.js";

const getAllCustomers = async (req, res) => {
    try {
        const customer = await Customer.find({})

        if(customer) return res.status(200).json(customer)

        return res.status(200).json([])

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getCustomerDetail = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findById(customerId)

        if (customer) {
            return res.status(200).json(customer);
        } else {
            return res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createCustomer = async (req, res) => {
    try {
        const {email, password} = req.body

        const customer = await Customer.findOne({email})

        if(customer) return res.status(200).json(customer)

        const newCustomer = await Customer.create({
            email,
            password
        })

        res.status(200).json(newCustomer)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const updateCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true });

        if (updatedCustomer) {
            return res.status(200).json(updatedCustomer);
        } else {
            return res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteCustomer = async (req, res) => {
    try {
        const customerId = req.params.id;
        const deletedCustomer = await Customer.findByIdAndDelete(customerId);

        if (deletedCustomer) {
            return res.status(200).json({ message: 'Customer deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getAllCustomers,
    getCustomerDetail,
    createCustomer,
    updateCustomer,
    deleteCustomer
}