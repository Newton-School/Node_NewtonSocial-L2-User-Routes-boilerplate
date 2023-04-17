const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/*
Edit Profile: 
The controller expects the following fields in the request body: 'userId' and 'updatedData'.
The 'userId' field is a required string field containing the ID of the user whose profile is being updated.
The 'updatedData' field is an optional object field containing the updated profile data. It can have one or more of the user attributes to be updated.
If the 'userId' field is missing or invalid, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Invalid or missing userId.', and a 'status' field with value 'Error'.
If the 'updatedData' field is missing or empty, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Invalid or missing updatedData.', and a 'status' field with value 'Error'.
If the user with the specified ID does not exist in the database, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'User not found.', and a 'status' field with value 'Error'.
If the user profile is successfully updated, the controller should respond with a 200 OK status and a JSON object containing a 'message' field with value 'User details updated successfully', and a 'user' field with the updated user object.
If there is an error during the profile update process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Internal server error', and a 'status' field with value 'Error'.

Sample Input: 
{
    "userId": "123",
    "updatedData": {
        "username": "new_username",
        "email": "new_email@example.com",
        "bio": "new_bio"
    }
}
Sample Output: 
{
    "message": "User details updated successfully",
    "user": {
        <user object>
    }
}
*/
const editProfile = async (req, res) => {
    //Write your code here.
};


/*
Follow User: 
The controller expects an HTTP POST request with the following fields in the request body: 'currentUser' and 'userToFollow'.
The 'currentUser' field is a required string field containing the ID of the user who is following the other user.
The 'userToFollow' field is a required string field containing the ID of the user who is being followed.
If any of these fields are missing or invalid, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Invalid or missing field(s).', and a 'status' field with value 'Error'.
If the user with the 'currentUser' ID does not exist in the database, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'Current user not found.', and a 'status' field with value 'Error'.
If the user with the 'userToFollow' ID does not exist in the database, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'User to follow not found.', and a 'status' field with value 'Error'.
If the 'userToFollow' is already being followed by the 'currentUser', the controller should respond with a 409 Conflict status and a JSON object containing a 'message' field with value 'User already followed.', and a 'status' field with value 'Error'.
If the follow operation is successful, the controller should respond with a 200 OK status and a JSON object containing two fields: 'userToFollow' and 'currentUser'.
The 'userToFollow' field should contain an object with the '_id' and 'followers' fields of the user being followed.
The 'currentUser' field should contain an object with the '_id' and 'following' fields of the user who is following.
If there is an error during the follow operation, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Internal server error', and a 'status' field with value 'Error'.


Sample Input:
{
    "currentUser": "614f79cf7d1c0119c9a88e8f",
    "userToFollow": "614f7a3c7d1c0119c9a88e91"
}
Sample Output:
{
    "userToFollow": {
        "_id": "614f7a3c7d1c0119c9a88e91",
        "followers": ["614f79cf7d1c0119c9a88e8f"]
    },
    "currentUser": {
        "_id": "614f79cf7d1c0119c9a88e8f",
        "following": ["614f7a3c7d1c0119c9a88e91"]
    }
}
*/
const followUser = async (req, res) => {
    //Write your code here.
};


/*
Search User:
The controller expects an HTTP GET request with a query parameter 'username', which is a string that the controller will use to search for users whose username partially match the query string.
If the 'username' parameter is missing, the controller should respond with a 400 Bad Request status and a JSON object containing a 'message' field with value 'Missing required parameter: username.', and a 'status' field with value 'Error'.
If there are no users found with a matching username, the controller should respond with a 404 Not Found status and a JSON object containing a 'message' field with value 'No users found.', and a 'status' field with value 'Error'.
If the users are successfully found, the controller should respond with a 200 OK status and a JSON object containing a 'status' field with value 'Success', and a 'data' field with an array of user objects that partially match the query string.
If there is an error during the search process, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'Error', and an 'error' field with the error object.

Sample Input: 

GET /api/v1/users/search?username=john

Sample Output: 
[
    {
        "_id": "123",
        "username": "john123",
        "email": "john@example.com",
        "bio": "Hi, I'm John"
        <remaining object> 
    },
    {
        "_id": "456",
        "username": "john_doe",
        "email": "johndoe@example.com",
        "bio": "Just another John"
        <remaining object> 
    }
]
*/

const searchUser = async (req, res) => {
    //Write your code here.
};

module.exports = {
    editProfile,
    followUser,
    searchUser,
    getAllUsers
};