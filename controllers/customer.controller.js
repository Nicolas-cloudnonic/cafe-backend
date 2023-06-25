import Customer from "../mongodb/models/customer.js";

const getAllCustomers = async (req, res) => {
}
const getCustomerDetail = async (req, res) => {

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
}
const deleteCustomer = async (req, res) => {
}

export {
    getAllCustomers,
    getCustomerDetail,
    createCustomer,
    updateCustomer,
    deleteCustomer
}