import jwt from 'jsonwebtoken';
import config from './config';
import multer from 'multer';

const getToken = user => {
    return jwt.sign({
        _id: user._id,
        login: user.login,
        email: user.email,
        isAdmin: user.isAdmin
    }, config.JWT_SECRET, {
        expiresIn: '24h'
    })
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')   
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)      
    }
})
const upload = multer({ storage: storage });


export {
    getToken, storage, upload
}