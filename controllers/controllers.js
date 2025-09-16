const Products = require("../models/products.model")

const getAllProds = async(req, res) => {
    try{
        const prods = await Products.find({});
        res.status(200).json(prods);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getProd = async(req, res) => {
    try{
        const { id } = req.params;
        const prod = await Products.findById(id);
        res.status(200).json(prod);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const updateProd = async (req, res) => {
    try{
        const { id } = req.params;
        const prod = await Products.findByIdAndUpdate(id, req.body);

        if(!prod){
            return res.status(404).json({msg: "product not found"});
        }
        const newProd = await Products.findById(id)

        res.status(200).json(newProd)
    }
    catch(err){
        res.status(500).json(err.message);
    }
}

const deleteProd = async (req, res) => {
    try{
        const { id } = req.params;
        const dltProd = await Products.findByIdAndDelete(id);
        if(!dltProd){
            return res.status(404).json({msg:"product not found"});
        }
        res.status(200).json(dltProd);
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}

const createProd = async(req, res) => {
    console.log(req.body);
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}

module.exports = {
    getAllProds,
    getProd,
    updateProd,
    deleteProd,
    createProd,
}