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
    // Category 1: Family Tours
    { Subcatid: 1, Subcatname: "Family holiday in Lapland", Catid: 1, Pic: "images/t1.jpg", Detail: "A brilliant balance of cosy winter cottage accommodation and adventure." },
    { Subcatid: 2, Subcatname: "Family holiday to India", Catid: 1, Pic: "images/t2.jpg", Detail: "This relaxing holiday manages all of the leg-work for you, so you can focus on family fun." },
    { Subcatid: 3, Subcatname: "Canada family holiday", Catid: 1, Pic: "images/t3.jpg", Detail: "Our only big Canadian adventure holiday for families, with wilderness wonders." },
    { Subcatid: 4, Subcatname: "Family holiday in Thailand", Catid: 1, Pic: "images/t4.jpg", Detail: "This is a real family adventure taking in every face of Thailand - rainforests and beaches." },
    { Subcatid: 5, Subcatname: "Family holiday in Italy", Catid: 1, Pic: "images/t5.jpg", Detail: "World-famous volcanoes, shimmering coastal towns and one of the most exciting humanities lessons." },
    
    // Category 2: Religious Tours
    { Subcatid: 6, Subcatname: "Religious Tours in India", Catid: 2, Pic: "images/t6.jpg", Detail: "India is a land where various gods and goddess are worshiped over the years." },
    { Subcatid: 7, Subcatname: "Religious Tours in Italy", Catid: 2, Pic: "images/t7.jpg", Detail: "Vatican City, Rome and cardianal palaces of Tivoli with grottoes and fountains." },
    { Subcatid: 8, Subcatname: "Religious Tours in Europe", Catid: 2, Pic: "images/t8.jpg", Detail: "Vast array of choices for religious-based tours in Austria, Germany or England." },
    { Subcatid: 9, Subcatname: "Religious tours in Canada", Catid: 2, Pic: "images/t1.jpg", Detail: "Canada is a multi-cultural country with Roman Catholics and Protestant sites." },
    { Subcatid: 10, Subcatname: "Religious Tours in England", Catid: 2, Pic: "images/t2.jpg", Detail: "Follow the history of non-conformism in England and see the beautiful countryside." },
    { Subcatid: 11, Subcatname: "Religious Tours in New Zealand", Catid: 2, Pic: "images/t3.jpg", Detail: "Explore historical churches and religious heritage of the Pacific islands." },

    // Category 3: Adventure Tours
    { Subcatid: 15, Subcatname: "Adventure Tours in Israel", Catid: 3, Pic: "images/t4.jpg", Detail: "Israel offers cultural, culinary, and spiritual experiences of biblical proportions." },
    { Subcatid: 16, Subcatname: "Adventure Tours in Mumbai", Catid: 3, Pic: "images/t5.jpg", Detail: "Explore local life, tour scenic picnic spots and experience fast-growing adventures." },
    { Subcatid: 17, Subcatname: "Adventure Tours in Thailand", Catid: 3, Pic: "images/t6.jpg", Detail: "Custom trip options focusing on remote and breathtaking natural destinations." },

    // Category 4: Special Event Tours
    { Subcatid: 18, Subcatname: "Special Event Tours in France", Catid: 4, Pic: "images/t7.jpg", Detail: "Mingle with the famous at the Cannes Film Festival or celebrate Bastille Day." },
    { Subcatid: 19, Subcatname: "Special Event Tours in Germany", Catid: 4, Pic: "images/t8.jpg", Detail: "Enjoy local food festivals and seasonal holiday events across Germany." },
    { Subcatid: 20, Subcatname: "Special Event Tours in Singapore", Catid: 4, Pic: "images/t1.jpg", Detail: "Celebrate Singapore Food Festival, Deepavali, and modern design showcases." },

    // Category 5: National Parks
    { Subcatid: 24, Subcatname: "National Parks in India", Catid: 5, Pic: "images/t2.jpg", Detail: "Spot the infamous tigers, exotic birds, and unique flora in India's massive parks." },
    { Subcatid: 25, Subcatname: "National Parks in Kerala", Catid: 5, Pic: "images/t3.jpg", Detail: "Kerala is famous for its backwaters, scenic beauty, and rich wildlife reserves." },
    { Subcatid: 26, Subcatname: "National Parks in Rajasthan", Catid: 5, Pic: "images/t4.jpg", Detail: "Visit the world-famous Ranthambore tiger reserve and historic forest lands." },

    // Category 6: Themed Vacations
    { Subcatid: 21, Subcatname: "Themed Vacations for Singles", Catid: 6, Pic: "images/t5.jpg", Detail: "Vibrant city stays, local whiskey tasting tours, and scenic highland walks." },
    { Subcatid: 22, Subcatname: "Christmas Themed Vacations", Catid: 6, Pic: "images/t6.jpg", Detail: "Winter family vacations filled with festive lights, snow sports and local events." },
    { Subcatid: 23, Subcatname: "Star Wars Themed Vacation", Catid: 6, Pic: "images/t7.jpg", Detail: "Sleek, sci-fi themed family retreats and custom amusement park tours." },

    // Category 7: Small Group Tours
    { Subcatid: 12, Subcatname: "Small Group Tours in India", Catid: 7, Pic: "images/t8.jpg", Detail: "Explore historic landmarks, temples, and beaches with a close-knit group." },
    { Subcatid: 13, Subcatname: "Small Group Tours in England", Catid: 7, Pic: "images/t1.jpg", Detail: "Iconic journeys encompassing Oxford, Cotswolds, and Stratford-upon-Avon." },
    { Subcatid: 14, Subcatname: "Small Group Tours in Canada", Catid: 7, Pic: "images/t2.jpg", Detail: "A shortcuts guide to Canada's cultural highlights and national parks." }
];

const INITIAL_PACKAGES = [
    // Category 1: Family Tours
    { Packid: 1, Packname: "Christmas Adventure in Lapland", Category: 1, Subcategory: 1, Packprice: 20000, Pic1: "images/t1.jpg", Pic2: "images/t2.jpg", Pic3: "images/t3.jpg", Detail: "Meet Santa in person at the Santa Claus Village, enjoy dog sled rides, and experience Lapland." },
    { Packid: 2, Packname: "Agra Family Tour", Category: 1, Subcategory: 2, Packprice: 10000, Pic1: "images/t2.jpg", Pic2: "images/t3.jpg", Pic3: "images/t4.jpg", Detail: "Visit the Taj Mahal and historic forts with your family with local guides and transport." },
    { Packid: 3, Packname: "Holidays in Italy", Category: 1, Subcategory: 5, Packprice: 20000, Pic1: "images/t5.jpg", Pic2: "images/t6.jpg", Pic3: "images/t7.jpg", Detail: "Enjoy golden beaches, sparkling seas, and great Italian cuisine." },
    { Packid: 4, Packname: "Main attraction in Thailand", Category: 1, Subcategory: 4, Packprice: 400000, Pic1: "images/t4.jpg", Pic2: "images/t5.jpg", Pic3: "images/t6.jpg", Detail: "Explore Bangkok temples, beautiful islands, and rainforest tours." },
    { Packid: 5, Packname: "Holidays in Vancouver", Category: 1, Subcategory: 3, Packprice: 400000, Pic1: "images/t3.jpg", Pic2: "images/t4.jpg", Pic3: "images/t5.jpg", Detail: "Wilderness wonders, canoeing and bear-watching in Vancouver's lakes and peaks." },

    // Category 2: Religious Tours
    { Packid: 6, Packname: "Haridwar Pilgrimage", Category: 2, Subcategory: 6, Packprice: 3000, Pic1: "images/t6.jpg", Pic2: "images/t7.jpg", Pic3: "images/t8.jpg", Detail: "Explore the sacred temples and witness the iconic evening Ganga Aarti." },
    { Packid: 7, Packname: "Tivoli Gardens Tour", Category: 2, Subcategory: 7, Packprice: 500000, Pic1: "images/t7.jpg", Pic2: "images/t8.jpg", Pic3: "images/t1.jpg", Detail: "Tour the famous Villa d'Este gardens, water sculptures, and fountains." },
    { Packid: 8, Packname: "Austria Trip", Category: 2, Subcategory: 8, Packprice: 300000, Pic1: "images/t8.jpg", Pic2: "images/t1.jpg", Pic3: "images/t2.jpg", Detail: "Explore baroque cathedrals in Vienna, Salzburg, and Tyrolean Alps." },
    { Packid: 9, Packname: "Canadian Religious Places", Category: 2, Subcategory: 9, Packprice: 700000, Pic1: "images/t1.jpg", Pic2: "images/t2.jpg", Pic3: "images/t3.jpg", Detail: "Visit historical churches, cathedrals, and diverse multi-cultural shrines." },
    { Packid: 10, Packname: "Christian Places in England", Category: 2, Subcategory: 10, Packprice: 1200000, Pic1: "images/t2.jpg", Pic2: "images/t3.jpg", Pic3: "images/t4.jpg", Detail: "Follow historical non-conformist sites and beautiful English landmarks." },
    { Packid: 11, Packname: "Christianity Places in NZ", Category: 2, Subcategory: 11, Packprice: 500000, Pic1: "images/t3.jpg", Pic2: "images/t4.jpg", Pic3: "images/t5.jpg", Detail: "Visit historic cathedrals in Nelson and explore Pacific religious heritage." },

    // Category 3: Adventure Tours
    { Packid: 15, Packname: "Best Places in Mumbai", Category: 3, Subcategory: 16, Packprice: 12000, Pic1: "images/t5.jpg", Pic2: "images/t6.jpg", Pic3: "images/t7.jpg", Detail: "Picnic spots, beaches, and historic monuments around the commercial hub of India." },
    { Packid: 16, Packname: "Best of Thailand", Category: 3, Subcategory: 17, Packprice: 400000, Pic1: "images/t6.jpg", Pic2: "images/t7.jpg", Pic3: "images/t8.jpg", Detail: "Custom hiking, rainforest exploration and luxury beach escapes in Thailand." },
    { Packid: 27, Packname: "Travel in Israel", Category: 3, Subcategory: 15, Packprice: 100000, Pic1: "images/t4.jpg", Pic2: "images/t5.jpg", Pic3: "images/t6.jpg", Detail: "Experience culinary, archaeological, and geographic wonders across the Holy Land." },

    // Category 4: Special Event Tours
    { Packid: 17, Packname: "Best Events in Singapore", Category: 4, Subcategory: 20, Packprice: 80000, Pic1: "images/t1.jpg", Pic2: "images/t2.jpg", Pic3: "images/t3.jpg", Detail: "Celebrate New Year, food festivals, and premium shopping weeks in Singapore." },
    { Packid: 18, Packname: "Best Events in Germany", Category: 4, Subcategory: 19, Packprice: 600000, Pic1: "images/t8.jpg", Pic2: "images/t1.jpg", Pic3: "images/t2.jpg", Detail: "Participate in local festivals, Oktoberfest, and historical Christmas markets." },
    { Packid: 19, Packname: "Best Events in France", Category: 4, Subcategory: 18, Packprice: 600000, Pic1: "images/t7.jpg", Pic2: "images/t8.jpg", Pic3: "images/t1.jpg", Detail: "Join Cannes Film Festival, Bastille Day celebrations, and art parades." },

    // Category 5: National Parks
    { Packid: 23, Packname: "Best parks in Rajasthan", Category: 5, Subcategory: 26, Packprice: 3000, Pic1: "images/t4.jpg", Pic2: "images/t5.jpg", Pic3: "images/t6.jpg", Detail: "Search for tigers and local wildlife in the world-famous Ranthambore park." },
    { Packid: 24, Packname: "Best parks in Kerala", Category: 5, Subcategory: 25, Packprice: 4000, Pic1: "images/t3.jpg", Pic2: "images/t4.jpg", Pic3: "images/t5.jpg", Detail: "Discover stunning reserve forests and backwaters in Kerala's scenic parks." },
    { Packid: 25, Packname: "Best parks in India", Category: 5, Subcategory: 24, Packprice: 2000, Pic1: "images/t2.jpg", Pic2: "images/t3.jpg", Pic3: "images/t4.jpg", Detail: "Explore various Tiger Reserves and conservation forests across major states." },

    // Category 6: Themed Vacations
    { Packid: 20, Packname: "Star Wars Wedding Ideas", Category: 6, Subcategory: 23, Packprice: 20000, Pic1: "images/t7.jpg", Pic2: "images/t8.jpg", Pic3: "images/t1.jpg", Detail: "Experience theme-based holiday packages built for Star Wars enthusiasts." },
    { Packid: 21, Packname: "Christmas Party Themes", Category: 6, Subcategory: 22, Packprice: 100000, Pic1: "images/t6.jpg", Pic2: "images/t7.jpg", Pic3: "images/t8.jpg", Detail: "Delight in seasonal decorations, festive meals, and winter celebrations." },
    { Packid: 22, Packname: "Entertainment Themed Vacations", Category: 6, Subcategory: 21, Packprice: 100000, Pic1: "images/t5.jpg", Pic2: "images/t6.jpg", Pic3: "images/t7.jpg", Detail: "Custom built vacations centering around your choice of entertainment." },

    // Category 7: Small Group Tours
    { Packid: 12, Packname: "Best of India Group Tour", Category: 7, Subcategory: 12, Packprice: 10000, Pic1: "images/t8.jpg", Pic2: "images/t1.jpg", Pic3: "images/t2.jpg", Detail: "Visit scenic sites in Rajasthan, Goa, and Himachal Pradesh with a group." },
    { Packid: 13, Packname: "Best of England Group Tour", Category: 7, Subcategory: 13, Packprice: 900000, Pic1: "images/t1.jpg", Pic2: "images/t2.jpg", Pic3: "images/t3.jpg", Detail: "Enjoy highlights of Oxford, Cotswolds, and Stratford-upon-Avon." },
    { Packid: 14, Packname: "Best of Canada Group Tour", Category: 7, Subcategory: 14, Packprice: 700000, Pic1: "images/t2.jpg", Pic2: "images/t3.jpg", Pic3: "images/t4.jpg", Detail: "Small group highlights tour featuring glacier trekking and bear watching." }
];

// Initialize localStorage databases (forced sync)
localStorage.setItem("categories", JSON.stringify(INITIAL_CATEGORIES));
localStorage.setItem("subcategories", JSON.stringify(INITIAL_SUBCATEGORIES));
localStorage.setItem("packages", JSON.stringify(INITIAL_PACKAGES));
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
