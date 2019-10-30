const Expert = require('../models/experts');

// Create and Save a new Expert
exports.create = (req, res) => {
    console.log(req)
    if(req.body.FirstName==null) {
        return res.status(400).send({
            message: "Expert details can not be empty"
        });
    }

    // Create a Expert
    const Experts = new Expert({
        FirstName: req.body.FirstName,
        MiddleName:req.body.MiddleName,
        LastName:req.body.LastName, 
        UserName: req.body.UserName,
        Password:req.body.Password,
        PrimaryEmailID: req.body.PrimaryEmailID,
        AlternateEmailID:req.body.SecondaryEmailId,
        PrimaryPhoneNumber: req.body.PrimaryPhoneNumber,
        SecondaryPhoneNumber:req.body.SecondaryPhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        Pincode:req.body.Pincode,
        State:req.body.State,
        Country:req.body.Country,
        CreatedDate:req.body.CreatedDate,
    });

    // Save Expert in the database
    Experts.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving your record of User."
        });
    });

};

// Retrieve and return all Experts from the database.
exports.findAll = (req, res) => {
    Expert.find()
    .then(Experts => {
        res.send(Experts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
        });
    });

};

// Find a single Expert with a userId
// exports.findOne = (req, res) => {
//     Expert.findById(req.params.ExpertId)
//     .then(Expert => {
//         if(!Expert) {
//             return res.status(404).send({
//                 message: "Expert not found with id " + req.params.userId
//             });            
//         }
//         res.send(Expert);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Expert not found with id " + req.params.userId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving user with id " + req.params.userId
//         });
//     });

// };

// Update a Expert identified by the ExpertId in the request
exports.update = (req, res) => {
      // Validate Request
      console.log(req)
      if(!req.body.name) {
        return res.status(400).send({
            message: "Expert details can not be empty"
        });
    };


    // Find note and update it with the request body
    Expert.findByIdAndUpdate(req.params.ExpertId, {
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName:   req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.Password,
        PrimaryEmailID: req.body.PrimaryEmailID,
        AlternateEmailID: req.body.AlternateEmailID,
        PrimaryPhoneNumber: req.body.PrimaryPhoneNumber,
        SecondaryPhoneNumber: req.body.SecondaryPhoneNumber,
        Address: req.body.Address,
        City: req.body.City,
        Pincode: req.body.Pincode,
        State: req.body.State,
        Country: req.body.Country,
        CreatedDate: req.body.CreatedDate,
    }, {new: true})
    .then(Expert => {
        if(!Expert) {
            return res.status(404).send({
                message: "Expert not found with id " + req.params.ExpertId
            });
        }
        res.send(Expert);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Expert not found with id " + req.params.ExpertId
            });                
        }
        return res.status(500).send({
            message: "Error updating Expert with id " + req.params.ExpertId
        });
    });

};


// Delete a Expert with the specified ExpertId in the request
exports.delete = (req, res) => {
    Expert.findByIdAndRemove(req.params.ExpertId)
    .then(Expert => {
        if(!Expert) {
            return res.status(404).send({
                message: "Expert not found with id " + req.params.ExpertId
            });
        }
        res.send({message: "Expert deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Expert not found with id " + req.params.ExpertId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.ExpertId
        });
    });

};