const User = require('../models/users');

// Create and Save a new User
exports.create = (req, res) => {
    console.log(req)
    if(req.body.FirstName==null) {
        return res.status(400).send({
            message: "User details can not be empty"
        });
    }

    // Create a User
    const user = new User({
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.Password,
        PrimaryEmailID: req.body.PrimaryEmailID,
        AlternateEmailID: req.body.AlternateEmailID,
        PrimaryPhoneNumber: req.body.SecondaryPhoneNumber,
        SecondaryPhoneNumber: req.body.SecondaryPhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        Pincode: req.body.Pincode,
        State: req.body.State,
        Country: req.body.country,
        CreatedDate: req.body.CreatedDate,
        dob: req.body.dob,
        userType: req.body.userType,
    });

    // Save User in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving your record of User."
        });
    });

};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
        });
    });

};

// Find a single user with a userId
// exports.findOne = (req, res) => {
//     User.findById(req.params.userId)
//     .then(user => {
//         if(!user) {
//             return res.status(404).send({
//                 message: "User not found with id " + req.params.userId
//             });            
//         }
//         res.send(user);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "User not found with id " + req.params.userId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving user with id " + req.params.userId
//         });
//     });

// };

// Update a user identified by the userId in the request
exports.update = (req, res) => {
      // Validate Request
      if(!req.body.name) {
        return res.status(400).send({
            message: "User details can not be empty"
        });
    };


    // Find note and update it with the request body
    User.findByIdAndUpdate(req.params.UserId, {
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.Password,
        PrimaryEmailID: req.body.PrimaryEmailID,
        AlternateEmailID: req.body.AlternateEmailID,
        PrimaryPhoneNumber: req.body.SecondaryPhoneNumber,
        SecondaryPhoneNumber: req.body.SecondaryPhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        Pincode: req.body.Pincode,
        State: req.body.State,
        Country: req.body.country,
        CreatedDate: req.body.CreatedDate,
        dob: req.body.dob,
        userType: req.body.userType,
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });

};


// Delete a user with the specified userId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.noteId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });

};