const Parent = require('../models/parents');

// Create and Save a new Parent
exports.create = (req, res) => {
    console.log(req)
    if(req.body.FirstName==null) {
        return res.status(400).send({
            message: "Parent details can not be empty"
        });
    }

    // Create a Parent
    const Parents = new Parent({
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

    // Save Parent in the database
    Parents.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while saving your record of User."
        });
    });

};

// Retrieve and return all Parents from the database.
exports.findAll = (req, res) => {
    Parent.find()
    .then(Parents => {
        res.send(Parents);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Users."
        });
    });

};

// Find a single Parent with a userId
// exports.findOne = (req, res) => {
//     Parent.findById(req.params.ParentId)
//     .then(Parent => {
//         if(!Parent) {
//             return res.status(404).send({
//                 message: "Parent not found with id " + req.params.userId
//             });            
//         }
//         res.send(Parent);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Parent not found with id " + req.params.userId
//             });                
//         }
//         return res.status(500).send({
//             message: "Error retrieving user with id " + req.params.userId
//         });
//     });

// };

// Update a Parent identified by the ParentId in the request
exports.update = (req, res) => {
      // Validate Request
      console.log(req)
      if(!req.body.name) {
        return res.status(400).send({
            message: "Parent details can not be empty"
        });
    };


    // Find note and update it with the request body
    Parent.findByIdAndUpdate(req.params.ParentId, {
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
    .then(Parent => {
        if(!Parent) {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.ParentId
            });
        }
        res.send(Parent);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.ParentId
            });                
        }
        return res.status(500).send({
            message: "Error updating Parent with id " + req.params.ParentId
        });
    });

};


// Delete a Parent with the specified ParentId in the request
exports.delete = (req, res) => {
    Parent.findByIdAndRemove(req.params.ParentId)
    .then(Parent => {
        if(!Parent) {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.ParentId
            });
        }
        res.send({message: "Parent deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Parent not found with id " + req.params.ParentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.ParentId
        });
    });

};