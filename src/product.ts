export interface product{
    id:number;
    name:string;
    price:number;
    description:string;
}
export interface bestSeller extends product{
    discount:number;
}

export const products = [
    {
        id: 1,
        name: "Skyline",
        price:4129.99,
        description:"Skyline miniature metal version",
        img:"skyline.png"
    },
    {
        id: 2,
        name: "Supra",
        price:439.99,
        description:"Supra miniature plastic version",
        img:"supra.png"
    },
    {
        id: 3,
        name: "Yugioh Cards Deck",
        price:119.99,
        description:"A full deck focused on egyptian gods ",
        img:"yugioh.png"
    },
    {
        id: 4,
        name: "Spiderman Costume",
        price:1129.99,
        description:"Spidey Premium costume",
        img:"spiderman.png",
    },
    {
        id: 5,
        name: "Harry Potter Chocolate Frog",
        price:109.99,
        description:"A delicious chocolate frog and a unique character card",
        img:"frog.png",
    },
    {
        id: 6,
        name: "Alienware Notebook",
        price:36429.99,
        description:"i-core 9 11th, windows 11, RTX 3080, 16GB ram, SSD 512GB",
        img:"notebook.png",
    },
    {
        id: 7,
        name: "Anne pro 2 Keyboard",
        price:369.99,
        description:"Mechanical Bluetooth keyboard with RGB keys",
        img:"anne.png",
    },
    {
        id: 8,
        name: "Atari 8",
        price:839.99,
        description:"Old school awesome console",
        img:"atari.png",
    },
    {
        id: 9,
        name: "GTA Trilogy Deluxe edition",
        price:269.99,
        description:"The classics GTA SA, GTA VC and GTA III but with way more bugs",
        img:"gta.png",
    },
    {
        id: 10,
        name: "Iphone 13 pro max",
        price:36429.99,
        description:"iOS 15, Apple GPU(5-core), 6 GB RAM, three 12Mp cameras",
        img:"iphone.png",
    },
    {
        id: 11,
        name: "Husky Gaming chair",
        price:1429.99,
        description:"like sitting on a cloud",
        img:"husky.png",
    },
    {
        id: 12,
        name: "Razer Headset",
        price:729.99,
        description:"Hear only what you want",
        img:"headset.png",
    }
   
];
export const bestSellers = [
    {
        id: 1,
        name: "Play Station 5",
        price:8390.99,
        description:"Better than X-box, i guess",
        img:"ps5.png",
        discount:200
    },
    {
        id: 2,
        name: "Razer mini viper mouse",
        price:259.99,
        description:"To miss some shots, but at least looking cool",
        img:"mouse.png",
        discount:40
    },
    {
        id: 3,
        name: "Alexa",
        price:284.05,
        description:"Always hearing you",
        img:"alexa.png",
        discount:50
    }

];