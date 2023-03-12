import ProductModel from "../models/ProductModel.js"
import fs from "fs"
import slugify from "slugify";
import productModel from "../models/ProductModel.js";

// create product -------->>>>
export const createProduct = async (req,res)=>{
    try{
        const {name , description, price , category, quantity,}= req.fields;
        const {photo}= req.files;

        switch (true) {
            case !name:
                return res.status(500).send({error:"Name is Required"})
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({erro:"Cetagory is Required"})
            case !quantity:
                return res.status(500).send({error:"Quantity is Required"})
            case photo && photo.size > 1000000:
                return res.status(500).send({erro:'Photo size must be less then 1MB'})
        }
            const product = new ProductModel({...req.fields, slug:slugify(name) })

        if(photo){
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
            await product.save()
        res.status(201).send({
            success:true,
            massage:"Product Create Successful",
            product
        })
    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massage:'error while colling Ceate Procuct controller',
            err
        })
    }
}


// get all product
export const getProductContrller = async (req,res)=>{
    try{
       const product = await ProductModel.find({})
           .select("-photo") // [ -PHOTO ] is don't get photo becoase it's application loding time
           .populate("category")// [[ POPULATE ]] means rel name category get
           .limit(12) // limit [[ 12 ]] is only 12 product come
           .sort({createdAt:-1})
       res.status(200).send({
           success:true,
           countProduct:product.length ,
           massage:"Product fild successful",
           product
       })
    }catch(err){
       console.log(err)
        res.status(500).send({
            success:true,
            massage:"error while colling get all Product Controller",
            err
        })
    }
}

// get single product find ------->> >
export const getSingleProductController = async (req,res)=>{
    try{
       const product = await ProductModel.findOne({slug:req.params.slug})
           .select('-photo')
           .populate('category')
        
        res.status(200).send({
            success:true,
            massage:"single product fined",
            product,
        })
    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massage:"error while colling get single product controller ",
            err
        })
    }
}

// get product phoot
export const getProductPhoto = async (req,res)=>{
    try{
        const product = await ProductModel.findById(req.params.pid).select('photo')

        if(product.photo.data){
            res.set('Content-type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }

    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massgae:"error while colling getProductController",
            err
        })
    }
}

// delete product ----->>>>
export const deleteProductController = async(req,res)=>{
    try{
            await productModel.findByIdAndDelete(req.params.pid)// [[ req.params.pid ]] not working but id is working
        res.status(200).send({
            success:true,
            massage:'Product delete successful',
        })
    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massage:'err while colling deleteController ',
            err
        })
    }
}



// update product ------------>>>

export const updateProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } =
            req.fields;
        const { photo } = req.files;
        //alidation
        switch (true) {
            case !name:
                return res.status(500).send({error:"Name is Required"})
            case !description:
                return res.status(500).send({error:'Description is Required'})
            case !price:
                return res.status(500).send({error:'Price is Required'})
            case !category:
                return res.status(500).send({erro:"Cetagory is Required"})
            case !quantity:
                return res.status(500).send({error:"Quantity is Required"})
            case photo && photo.size > 1000000:
                return res.status(500).send({erro:'Photo size must be less then 1MB'})
        }

        const products = await ProductModel.findByIdAndUpdate(
            req.params.pid,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        );
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Updated Successful",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in Updte product",
        });
    }
};