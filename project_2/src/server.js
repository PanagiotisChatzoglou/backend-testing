import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000;

//Get the file path from Url of the current module
const __filename = fileURLToPath(import.meta.url);
//Get the directory path from the file path
const __dirname = dirname(__filename);

//Middleware
//Make app to expect json data and be able to parse it
app.use(express.json());
//serve html file from public
//and tells express to serve all files from public as static assets
app.use(express.static(path.join(__dirname, "../public")));

//serve html file from the /public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//ROUTES
app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
