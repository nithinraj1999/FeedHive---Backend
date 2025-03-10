import multer, { FileFilterCallback } from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads'); 
    
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
});

export const upload = multer({
  storage: multer.memoryStorage(), 
  limits: {
    fileSize: 100 * 1024 * 1024,
    fieldSize: 100 * 1024 * 1024,
    fields: 10, 
    files: 1, 
  },
  fileFilter: (req, file, cb: FileFilterCallback) => {
   
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/zip'];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); 
    } else {
      cb(new Error('Only images, PDFs, and ZIP files are allowed') as any, false);
    }

  },
});



