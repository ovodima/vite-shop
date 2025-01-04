import express from "express";
import products from "./data/products.js";

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req,res) => {
 
    const productItem= products.find((p) => p._id === Number(req.params.id))
    res.json(productItem)
})

app.listen(port, () => console.log(`server running on ${port}`));
