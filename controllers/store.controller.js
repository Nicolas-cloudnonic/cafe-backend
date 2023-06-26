import Store from "../mongodb/models/store.js";

const getAllStores = async (req, res) => {
    try {
        const store = await Store.find({})

        if(store) {
            return res.status(200).json(store)
        } else {
            return res.status(200).json([])
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getStoreDetail = async (req, res) => {
    try {
        const storeId = req.params.id;
        const store = await Store.findById(storeId)

        if (store) {
            return res.status(200).json(store);
        } else {
            return res.status(404).json({ message: 'Store not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createStore = async (req, res) => {
    try {
        const {email, password} = req.body

        const store = await Store.findOne({email})

        if(store) return res.status(200).json(store)

        const newStore = await Store.create({
            email,
            password
        })

        res.status(200).json(newStore)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const updateStore = async (req, res) => {
    try {
        const storeId = req.params.id;
        const updatedStore = await Store.findByIdAndUpdate(storeId, req.body, { new: true });

        if (updatedStore) {
            return res.status(200).json(updatedStore);
        } else {
            return res.status(404).json({ message: 'Store not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteStore = async (req,res) => {
    try {
        const storeId = req.params.id;
        const deletedStore = await Store.findByIdAndDelete(storeId);

        if (deletedStore) {
            return res.status(200).json({ message: 'Store deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Store not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getAllStores,
    createStore,
    getStoreDetail,
    updateStore,
    deleteStore
}