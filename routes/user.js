const express= require('express')
const app = express()
const { User } = require('../models/index')
const { body, validationResult } = require('express-validator')
const { upload, directory } = require('../config/multer')

app.post('/signup', 
body('firstname').isLength({min: 2}).withMessage("FirstName length is too short"), 
body('lastname').isLength({min: 2}).withMessage("LastName length is too short"), 
body('password').isLength({min: 8}).withMessage("Password is too short"),
body('password').isLength({max: 12}).withMessage("Password is too long"),
body('email').isEmail().withMessage("Email isn't right"),
async (req, res) => {
    const { errors } = validationResult(req)    
    const { lastname, firstname, email, password } = req.body

    if(errors.length > 0) {
        res.status(400).json(errors)
    }else{

    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
    })
    res.json(user)
}
})

app.post("/profile_picture/:id", upload.single("picture"), async (req, res) => {
    try {
        await User.update(
            {
                profile_picture: `http://localhost:5000/${directory}${req.file.filename}`,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
            );
            res.json('ok');
    } catch (e) {
        res.json(e);
    }
});

app.get('/', async (req, res) => {
    const user = await User.findAll()
    res.json(user)
})

module.exports = app    