const { Product } = require("./models/product");

async function seed() {
  const count = await Product.count();
  if (count === 0) {
    await Product.bulkCreate([
      { name: "iPhone 15 Pro", price: 139900 },   // ₹1,39,900
      { name: "Samsung Galaxy S24", price: 99999 }, // ₹99,999
      { name: "Sony WH-1000XM5 Headphones", price: 29990 }, // ₹29,990
      { name: "Apple MacBook Air M3", price: 114900 }, // ₹1,14,900
      { name: "Logitech MX Master 3S Mouse", price: 8995 }, // ₹8,995
    ]);
    console.log("✅ Dummy products seeded with INR prices");
  }
}

seed().then(() => process.exit());
