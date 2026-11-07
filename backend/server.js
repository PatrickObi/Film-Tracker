import express from "express";
import ordersRoute from "./routes/ordersRoute.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.use("/orders", ordersRoute);

const PORT = 5005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
