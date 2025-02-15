import express from "express"; // Import express module
import { addFood } from "../controllers/foodControllers.js"; // Import addFood controller
import multer from "multer"; // Import multer for image upload

const foodRouter = express.Router(); // Create a router instance

// Image storage engine
const storage = multer.diskStorage({
    destination: "uploads", // Store images in the 'uploads' folder
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`); // Give the image a unique name
    }
});

const upload = multer({ storage: storage }); // Configure multer

// Define routes
foodRouter.post("/add", upload.single("image"),addFood);

export default foodRouter; // Export the correct variable
