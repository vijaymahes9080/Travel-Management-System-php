// Static Database for Travel Management System
const INITIAL_CATEGORIES = [
    { Cat_id: 1, Cat_name: "Family Tours" },
    { Cat_id: 2, Cat_name: "Religious Tours" },
    { Cat_id: 3, Cat_name: "Adventure Tours" },
    { Cat_id: 4, Cat_name: "Special Event Tours" },
    { Cat_id: 5, Cat_name: "National Parks" },
    { Cat_id: 6, Cat_name: "Themed Vacations" },
    { Cat_id: 7, Cat_name: "Small Group Tours" }
];

const INITIAL_SUBCATEGORIES = [
    { Subcatid: 1, Subcatname: "Family holiday in Lapland", Catid: 1, Pic: "images/t1.jpg", Detail: "A brilliant balance of cosy winter cottage accommodation and adventure." },
    { Subcatid: 2, Subcatname: "Family holiday to India", Catid: 1, Pic: "images/t2.jpg", Detail: "This relaxing holiday manages all of the leg-work for you, so you can focus on family fun." },
    { Subcatid: 3, Subcatname: "Canada family holiday", Catid: 1, Pic: "images/t3.jpg", Detail: "Our only big Canadian adventure holiday for families, with camping and ranching." },
    { Subcatid: 4, Subcatname: "Family holiday in Thailand", Catid: 1, Pic: "images/t4.jpg", Detail: "This is a real family adventure taking in every face of Thailand - rainforests and beaches." },
    { Subcatid: 5, Subcatname: "Family holiday in Italy", Catid: 1, Pic: "images/t5.jpg", Detail: "World-famous volcanoes, shimmering coastal towns and one of the most exciting humanities lessons." },
    { Subcatid: 6, Subcatname: "Religious Tours in India", Catid: 2, Pic: "images/t6.jpg", Detail: "India is a land where various gods and goddess are worshiped over the years." },
    { Subcatid: 7, Subcatname: "Religious Tours in Italy", Catid: 2, Pic: "images/t7.jpg", Detail: "Vatican City, Rome and cardianal palaces of Tivoli with grottoes and fountains." },
    { Subcatid: 8, Subcatname: "Religious Tours in Europe", Catid: 2, Pic: "images/t8.jpg", Detail: "Vast array of choices for religious-based tours in Austria, Germany or England." }
];

const INITIAL_PACKAGES = [
    { Packid: 1, Packname: "Christmas Adventure in Lapland", Category: 1, Subcategory: 1, Packprice: 20000, Pic1: "images/t1.jpg", Pic2: "images/t2.jpg", Pic3: "images/t3.jpg", Detail: "What better way to celebrate Christmas than to spend it where Santa Claus lives? meet Santa in person, enjoy the thrill of a dog sled ride and learn about the Sami culture." },
    { Packid: 2, Packname: "Agra Family Tour", Category: 1, Subcategory: 2, Packprice: 10000, Pic1: "images/t2.jpg", Pic2: "images/t3.jpg", Pic3: "images/t4.jpg", Detail: "Rejuvenate the love between dear ones. The pleasant weather, beautiful sceneries and delightful food is sure to put you in your best mood." },
    { Packid: 3, Packname: "Holidays in Italy", Category: 1, Subcategory: 5, Packprice: 20000, Pic1: "images/t5.jpg", Pic2: "images/t6.jpg", Pic3: "images/t7.jpg", Detail: "Enjoy golden beaches, sparkling seas, beautiful countryside, exciting cities and great cuisine on family holidays in Italy." },
    { Packid: 4, Packname: "Main attraction in Thailand", Category: 1, Subcategory: 4, Packprice: 400000, Pic1: "images/t4.jpg", Pic2: "images/t5.jpg", Pic3: "images/t6.jpg", Detail: "Fascinating cultures, a nation that adores children, beautiful beaches in world famous resorts and a well-trodden tourist trail." },
    { Packid: 6, Packname: "Haridwar Pilgrimage", Category: 2, Subcategory: 6, Packprice: 3000, Pic1: "images/t6.jpg", Pic2: "images/t7.jpg", Pic3: "images/t8.jpg", Detail: "Haridwar means the 'Gateway to the abode of the gods'. Explore the ghats and shrines on the bank of Holy Ganga." }
];

// Initialize localStorage databases
if (!localStorage.getItem("categories")) localStorage.setItem("categories", JSON.stringify(INITIAL_CATEGORIES));
if (!localStorage.getItem("subcategories")) localStorage.setItem("subcategories", JSON.stringify(INITIAL_SUBCATEGORIES));
if (!localStorage.getItem("packages")) localStorage.setItem("packages", JSON.stringify(INITIAL_PACKAGES));
if (!localStorage.getItem("enquiries")) localStorage.setItem("enquiries", JSON.stringify([]));

// DB Helpers
const db = {
    getCategories: () => JSON.parse(localStorage.getItem("categories")),
    getSubcategories: () => JSON.parse(localStorage.getItem("subcategories")),
    getPackages: () => JSON.parse(localStorage.getItem("packages")),
    getEnquiries: () => JSON.parse(localStorage.getItem("enquiries")),
    
    saveCategories: (data) => localStorage.setItem("categories", JSON.stringify(data)),
    saveSubcategories: (data) => localStorage.setItem("subcategories", JSON.stringify(data)),
    savePackages: (data) => localStorage.setItem("packages", JSON.stringify(data)),
    saveEnquiries: (data) => localStorage.setItem("enquiries", JSON.stringify(data))
};
