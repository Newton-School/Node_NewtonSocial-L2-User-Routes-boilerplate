const express = require("express");

const {
    followUser, searchUser, getAllUsers, editProfile
} = require("../controllers/userControllers");

const router = express.Router();

/*
POST /api/v1/users/follow: This route should allow a user to follow another user by sending a POST request to the server with the current user's ID and the ID of the user to be followed in the request body. The server should then update both users' "following" and "followers" arrays in the database accordingly, and respond with a JSON object containing the updated "following" and "followers" arrays for both users.

GET /api/v1/users/search: This route should allow users to search for other users based on a partial match of their username by sending a GET request to the server with the desired username as a query parameter. The server should then perform a search in the database for any users whose username matches the query parameter and respond with a JSON object containing an array of all matching users.

PUT /api/v1/users/edit: This route should allow a user to edit their profile details by sending a PUT request to the server with the current user's ID and the updated profile details in the request body. The server should then update the user's profile details in the database and respond with a JSON object containing the updated user object.
*/

router.get('/', getAllUsers);

module.exports = router;