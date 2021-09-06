var data = [
    {
    _id: "111",
    title: "18kt White Gold Ring",
    price: 1500.00,
    category: "jewelry",
    image: "whiteengagementring.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "222",
    title: "14 kt Cartier bracelet",
    price: 1000.00,
    category: "jewelry",
    image: "bracelets.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "333",
    title: "14 kt Gold Rope Chain",
    price: 400.00,
    category: "jewelry",
    image: "goldchain.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "444",
    title: "18 kt Gold plated Nameplate",
    price: 600.00,
    category: "jewelry",
    image: "nameplate.webp",
    discount: 3,
    minimum:1 
},
{
    _id: "555",
    title: "18kt Gold Earrings",
    price: 150.00,
    category: "jewelry",
    image: "earrings.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "666",
    title: "14kt Gold band",
    price: 700.00,
    category: "jewelry",
    image: "goldband.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "777",
    title: "14 kt White Gold Band",
    price: 800.00,
    category: "jewelry",
    image: "whitegoldband2.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "888",
    title: "Silver Diamond Ring",
    price: 1650.00,
    category: "jewelry",
    image: "silverring2.jpg",
    discount: 3,
    minimum: 1
},
{
    _id: "999",
    title: "18 kt Gold Necklace",
    price: 620.00,
    category: "jewelry",
    image: "gold chain 2.webp",
    discount: 3,
    minimum: 1
}

];

class ItemService {

    getCatalog() {
        return data;
    }
}
export default ItemService;