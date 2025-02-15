import { 
    createEquipmentService,
    getEquipmentService,
    getEquipmentByIdService,
    updateEquipmentService,
    deleteEquipmentService
} from "./service.js"

export const getEquipmentController = async (req, res) => { 

    try {
        const equipment = await getEquipmentService();

        res.status(200).json({
            message: "Equipment retrieved Succesfully",
            generatedAt: Date.now(),
            data: equipment,
        });
    } catch( err ) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const getEquipmentByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await getEquipmentByIdService(id);
        if (!equipment) return res.status(404).json({ message: "Equipment not found" });

        res.status(200).json({ 
            message: "Equipment fetched successfully",
            generatedAt: Date.now(),
            data: equipment
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createEquipmentController = async (req, res) => {

    const { name, categoryId } = req.body;

    try {
        const result = await createEquipmentService(name, categoryId);

        res.status(400).json({
            message: "Equipment Created Succesfully",
            generatedAt: Date.now(),
            data: result,
        });
    } catch( err ) {
        res.status(500).json({
            message: err.message,
        });
    }
}

export const updateEquipmentController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, categoryId } = req.body;
        const updatedEquipment = await updateEquipmentService(id, name, categoryId);
        if (!updatedEquipment) return res.status(404).json({ message: "Equipment not found" });

        res.status(200).json({ 
            message: "Equipment updated successfully",
            generatedAt: Date.now(),
            data: updatedEquipment 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteEquipmentController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteEquipmentService(id);
        if (!result) return res.status(404).json({ message: "Equipment not found" });

        res.status(200).json({
            message: "Equipment deleted successfully",
            generatedAt: Date.now(),
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};