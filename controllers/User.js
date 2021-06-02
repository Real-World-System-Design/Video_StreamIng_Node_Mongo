const { findOneAndUpdate } = require('../model/User');
const User = require('../model/User');

exports.getUsers = async (req, rep) => {
    try {
       const users = await User.find();
       return users;         
    } catch (e) {
        throw e
    }
}

exports.getUserById = async (req, rep) => {
    try {
        const id = req.params.id;
        const users = await User.findById(id);
        return users;        
    } catch (e) {
        throw e
    }
}

exports.updateUser = async (req, rep) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const {...updateData} = user
        const updatedUser = await User.findOneAndUpdate(id, updateData, {new : true});
        return updatedUser;
    } catch (e) {
        throw e;
    }
}

exports.addUsers = async (req, res) => {
    try {
        const user = new User(req.body);
        return user.save();        
    } catch (e) {
        throw e
    }
}

exports.removeUser = async (req, rep) => {
    try {
        const id = req.params.id;
        const user = await User.findOneAndRemove(id);
        return user;        
    } catch (e) {
        throw e
    }
}