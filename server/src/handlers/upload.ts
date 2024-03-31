import multer from 'multer'

const imageStorage = multer.diskStorage(
    {
        destination: (_req, _file, cb) => {
            cb(null, './data');
        },
        filename: (_req, _file, cb) => {
            cb(null, Date.now() + _file.originalname)
        }
    }
)

const uploadImage = multer({ storage: imageStorage })


export {
    uploadImage
}