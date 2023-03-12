import CategoryModel from "../models/CategoryModel.js";
import slugify from "slugify";

export const CreateCategory = async (req, res) => {
    try {
        const {name} = req.body
        if (!name) {
            return res.status(401).send({massage: "Name is Required"})
        }
        // existing category check
        const existingCategory = await CategoryModel.findOne({name})
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                massage: "Category already Exist"
            })
        }
        const category = await new CategoryModel({name, slug: slugify(name)}).save()
        res.status(201).send({
            success: true,
            massage: 'New Category Created',
            category,
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            massage: "Error in Category",
            err
        })
    }
}


// update category ---------->>
export const updateCategoryController = async (req, res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;

        const category = await CategoryModel.findByIdAndUpdate(
            id,
            {name, slug: slugify(name)},
            {new: true}// New [[[--bject-- TRUE]] i for CATEGORY PAGE Update
        )

        res.status(200).send({
            success: true,
            massage: "Category Create Successful",
            category

        })

    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            massage: 'Error whilec collageing update Controller ',
            err
        })
    }


}


// get all categorys -------->>>
export const allCategoryController = async (req, res) => {
    try {
        const category = await CategoryModel.find({})
        res.status(200).send({
            success: true,
            massage: "All Categories list",
            category
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            success: false,
            massage: "error while colling all Category controller",
            err
        })
    }
}


// slngle category --->>>>
export const singleCategory = async (req, res)=>{
    try{
        const category = await CategoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            massage:'Get single category successful',
            category
        })

    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massgae:'error while colling single Category',
            err
        })
    }
}


// delete category ------->>>>
export const deleteCategory = async(req,res)=>{
    try{
        const {id } = req.params
        const category = await CategoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            massage:'Category delete Successful',
            category
        })

    }catch(err){
       console.log(err)
        res.status(500).send({
            success:false,
            massage:"error while coling deleter catagory ",
            err
        })
    }
}