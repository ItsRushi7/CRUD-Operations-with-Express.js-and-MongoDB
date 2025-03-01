////////////////////////////////////////////////////////////////////////
//
// User model import from connection.js file
//
////////////////////////////////////////////////////////////////////////
const { User } = require('./connection')

////////////////////////////////////////////////////////////////////////
//
// Function    : getAllUsers
// Input       : -
// Output      : json()
// Description : Get all user from mongodb database
//
////////////////////////////////////////////////////////////////////////
async function getAllUsers(req,res) {
    try {
        const getAllUsers = await User.find();
        return res.status(200).json(getAllUsers);
    }
    catch (error) {
        console.error('Error fetching users:', error);

        return res.status(500).json({ error: 'Failed to retrieve users' });
    }
}

////////////////////////////////////////////////////////////////////////
//
// Function    : getUserByID
// Input       : id 
// Output      : json()
// Description : Get specific userfrom mongodb database
//
////////////////////////////////////////////////////////////////////////
async function getUserByID(req,res) {
    
    const id = req.params.id;

    try {
        const getUserByID = await User.findById(id)
        return res.status(200).json(getUserByID)
    }
    catch (error) {
        console.error('Error fetching users:', error);

        return res.status(500).json({ error: 'Failed to retrieve users' });
    }

}

////////////////////////////////////////////////////////////////////////
//
// Function    : createNewUser
// Input       : body {Key : value}
// Output      : -
// Description : Create user into mongodb database
//
////////////////////////////////////////////////////////////////////////
async function createNewUser(req,res) {
    
    const Data = req.body;

    try {
        const createNewUser = new User(Data);
        await createNewUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate value: This email or username already exists' });
        }
        else {
            return res.status(500).json({ error: 'Something went wrong' });
        }
    }

}

////////////////////////////////////////////////////////////////////////
//
// Function    : deleteUserByID
// Input       : id
// Output      : -
// Description : Delete specific user into mongodb database
//
////////////////////////////////////////////////////////////////////////
async function deleteUserByID(req,res) {
    
    const id = req.params.id;

    try {
        const deleteUserByID = await User.findByIdAndDelete(id)

        if (deleteUserByID == null) {
            return res.status(404).json({ error: 'User not found' });
        }
        else {

            return res.status(201).json({ message: 'User deleted successfully' });
        }
    }
    catch (error) {

        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Failed to retrieve users' });
    }

}

////////////////////////////////////////////////////////////////////////
//
// Function    : updateUserByID
// Input       : id
// Output      : -
// Description : Update user into mongodb database
//
////////////////////////////////////////////////////////////////////////
async function updateUserByID(req,res) {
    
    const id = req.params.id
    const data = req.body

    try {
        const updateUserByID = await User.findByIdAndUpdate(id,data);

        if (updateUserByID == null) {
            return res.status(404).json({ error: 'User not found' });
        }
        else {
            return res.status(200).json(updateUserByID)
        }


    }
    catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Failed to update user' });
    }

}

////////////////////////////////////////////////////////////////////////
//
// Export all function 
//
////////////////////////////////////////////////////////////////////////
module.exports = {
    getAllUsers,
    getUserByID,
    createNewUser,
    deleteUserByID,
    updateUserByID
}