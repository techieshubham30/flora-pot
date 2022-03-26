import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    price:275,
    discount:30,
    discountPrice:395,
    decription:"Ugaoo Good Luck Jade Plant with Self Watering Pot",
    rating:4,
    image:'https://m.media-amazon.com/images/I/61wsWXlRuFL._SX679_.jpg',
    category:"indoor",
    brand:"ugaoo"
  },
  {
    _id: uuid(),
    price:299,
    discount:34,
    discountPrice:450,
    decription:"Ugaoo Crassula Ovata Jade Plant",
    rating:3,
    image:'https://m.media-amazon.com/images/I/61AE2ENw+3L._SX679_.jpg',
    category:"indoor",
    brand:"ugaoo"
  },
  {
    _id: uuid(),
    price:249,
    discount:29,
    discountPrice:349,
    decription:"Root Bridges Indoor Marble Money Plant",
    rating:3,
    image:'https://m.media-amazon.com/images/I/9172EWZjx3L._SX679_.jpg',
    category:"indoor",
    brand:"root_bridges"
  },
  {
    _id: uuid(),
    price:239,
    discount:25,
    discountPrice:319,
    decription:"Root Bridges Schefflera Umbrella Indoor Plant",
    rating:3,
    image:'https://m.media-amazon.com/images/I/618Kt3GDxdL._SX679_.jpg',
    category:"indoor",
    brand:"root_bridges"
  },
  {
    _id: uuid(),
    price:549,
    discount:31,
    discountPrice:799,
    decription:"Ferns 'N' Petals Peace Lily Plant",
    rating:4,
    image:'https://m.media-amazon.com/images/I/51mpMIgR6iL.jpg',
    category:"plants_for_gift",
    brand:"ferns_n_petals"
  },
  {
    _id: uuid(),
    price:349,
    discount:42,
    discountPrice:599,
    decription:"Ferns 'N' Petals 2 Layer Lucky Bamboo Live Plant ",
    rating:2,
    image:'https://m.media-amazon.com/images/I/613Ym7NDU4L._SX679_.jpg',
    brand:"ferns_n_petals"
  },
  {
    _id: uuid(),
    price:1495,
    discount:43,
    discountPrice:2600,
    decription:"Abana Homes Ulmus Bonsai Plants",
    rating:4,
    image:'https://m.media-amazon.com/images/I/61MZreORcPL._SX679_.jpg',
    brand:"abana_homes"
  },
  {
    _id: uuid(),
    price:199,
    discount:75,
    discountPrice:799,
    decription:"Trothic Two Layer Bamboo Plant ",
    rating:2,
    image:'https://rukminim1.flixcart.com/image/416/416/k5zn9u80/plant-sapling/g/f/v/gardens-rare-buddha-belly-bamboo-rare-perennial-ornamental-original-imafzja6aajhyhgy.jpeg?q=70',
    brand:"thronic"
  },
  {
    _id: uuid(),
    price:425,
    discount:47,
    discountPrice:795,
    decription:"Palm Air Purifier Natural Live Plant",
    rating:4,
    image:'https://m.media-amazon.com/images/I/716U5ZRF3CL._SL1500_.jpg',
    category:"air_purifier_plants"
    
  },
  {
    _id: uuid(),
    price:299,
    discount:40,
    discountPrice:499,
    decription:"Mphmi Nurseryplant Bougainvillea Plant",
    rating:3,
    image:'https://m.media-amazon.com/images/I/51tqNT7MzwL.jpg',
    category:"outdoor_flower_plants"
    
  },
 
];
