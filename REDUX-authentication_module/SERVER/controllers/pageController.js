const User = require("../model/regSchema");


// POST REGSISTER DATA
const user_regPost = async (req,res) => {
    const data = new User(req.body);
    try{
        const saveUser = await data.save();
        res.send(saveUser);
    } catch (error) {
        res.status(400).send(error)
    }
};

// GET REGISTER DATA
const user_regShow = async (req,res) => {
    try{
        const data = await User.find();
        res.json(data);
    } catch(error){
        res.json({message:error});
    }
};

// DELETE REGISTER DATA
const user_regDel = async (req,res) => {
    try{
        const users = await User.findByIdAndDelete(req.params.id);
        res.json(users);
    }  catch(error){
        res.json({message:error})
    }
}

// [GET] Edit REGISTER DATA
const user_regShowEdit = async (req,res) => {
    try{
        const users = await User.findById(req.params.id);
        res.json(users);
    }  catch(error){
        res.json({message:error})
    }
}

// EDIT REGISTER DATA
const user_regEdit = async (req,res) => {
    try{
        const updates = req.body;
        const quick = { new: true}
        const users = await User.findByIdAndUpdate(req.params.id,updates,quick);
        res.json(users);
    }  catch(error){
        res.json({message:error})
    }
}

module.exports={
    user_regPost,
    user_regShow,
    user_regDel,
    user_regShowEdit,
    user_regEdit,
}
