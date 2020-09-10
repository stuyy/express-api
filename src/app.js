const app = require("./init");

const merchants = new Map();

app.post("/merchants/new", async (req, res) => {
  const merchant = req.body;
  merchants.set(merchant.name, merchant);
  console.log(req.body);
  console.log("Added New Merchant");
  res.status(201).send(merchant);
});

app.get("/merchants", async (req, res) => {
  // Make an API Call to the Python API
  res.send(mapToJson(merchants));
});

// Must fetch data from Yelp API
app.get("/merchants/search", async (req, res) => {
  const { query } = req.query;
  res.send(200);
});

const mapToJson = (merchants) => {
  const merchantsArray = [];
  for (const [key, value] of Array.from(merchants)) {
    merchantsArray.push(value);
  }
  return merchantsArray;
};
