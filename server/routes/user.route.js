import express from 'express';
import User from '../models/user.model';
import { getToken } from '../utils';

const router = express.Router();

router.post('/', async (req, res) => {

    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        isAdmin: req.body.isAdmin
    });

    const newUser = await user.save();

    if(newUser){
        res.send({
            _id: newUser.id,
            login: newUser.name,
            email: newUser.email,
            password: newUser.password,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        })
    }
    else {
        res.status(401).send({ message: 'Invalid user data!' });
    }

    
})

router.get('/createadmin', async (req, res) => {
    try {
        const user = new User({
            login: 'Matty',
            email: 'matty@test.com',
            password: '1234',
            firstName: 'Matty',
            lastName: 'Test',
            isAdmin: true,
            isArchive: false,
        });
        const newUser = await user.save();
        res.send(newUser);
        
    } catch (error) {
        res.send({ message: error.message });
    }
})

module.exports = router;