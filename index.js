const express = require('express')
const app = express()
const port = process.env.PORT || 3500
const cors = require('cors');

const allChef = require("./data/chefData.json");
const allRecipes = require("./data/recipes.json");
const customers = require("./data/customerData.json");


app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World! ')
})

//get chef data
app.get("/chefs", (req, res) => {
  res.send(allChef);
});
//get customer data
app.get("/customers", (req, res) => {
  res.send(customers);
});

// get individual Chef by id
app.get("/chefs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = allChef.find(chef => parseInt(chef.chef_id) === id);
  res.send(selectedChef);
});

// get individual Chef recipe
app.get("/recipe/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const recipes = allRecipes.filter(recipe => parseInt(recipe.chef_id) === id);
  res.send(recipes);

});

app.listen(port, () => {
  console.log(`chef is running on port: ${port}`)
})