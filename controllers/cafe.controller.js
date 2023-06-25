import Cafe from "../mongodb/models/cafe.js";

const getAllCafes = async (req, res) => {
    try {
        const cafes = await Cafe.find({})

        if(cafes) return res.status(200).json(cafes)

        return res.status(200).json([])

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const getCafeDetail = async (req, res) => {
    try {
        const cafeId = req.params.id;
        const cafe = await Cafe.findById(cafeId);

        if (cafe) {
            return res.status(200).json(cafe);
        } else {
            return res.status(404).json({ message: 'Cafe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createCafe = async (req, res) => {
    try {
        const {email, password} = req.body

        const cafe = await Cafe.findOne({email})

        if(cafe) return res.status(200).json(cafe)

        const newCafe = await Cafe.create({
            email,
            password
        })

        res.status(200).json(newCafe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
const updateCafe = async (req, res) => {
    try {
        const cafeId = req.params.id;
        const updatedCafe = await Cafe.findByIdAndUpdate(cafeId, req.body, { new: true });

        if (updatedCafe) {
            return res.status(200).json(updatedCafe);
        } else {
            return res.status(404).json({ message: 'Cafe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const deleteCafe = async (req,res) => {
    try {
        const cafeId = req.params.id;
        const deletedCafe = await Cafe.findByIdAndDelete(cafeId);

        if (deletedCafe) {
            return res.status(200).json({ message: 'Cafe deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Cafe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getAllCafes,
    createCafe,
    getCafeDetail,
    updateCafe,
    deleteCafe
}