const sampleListings = [
  {
    title: "Modern Studio in Trendy Neighborhood",
    description: "Chic studio apartment with all modern amenities.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 800,
    location: "Hipster Heights",
    country: "United States",
  },
  {
    title: "Cozy Cottage Retreat",
    description: "Escape to this charming cottage surrounded by nature.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1200,
    location: "Rural Paradise",
    country: "Canada",
  },
  {
    title: "Luxury Penthouse with Panoramic Views",
    description: "Experience the high life in this stunning penthouse.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 3000,
    location: "City Center",
    country: "United Kingdom",
  },
  {
    title: "Seaside Villa with Private Beach Access",
    description: "A luxurious villa right on the beach with private access.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 5000,
    location: "Coastal Paradise",
    country: "Spain",
  },
  {
    title: "Mountain Retreat for Nature Lovers",
    description: "Escape to the mountains in this cozy cabin surrounded by nature.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1500,
    location: "Mountain Haven",
    country: "Switzerland",
  },
  {
    title: "Historic Townhouse in the Heart of Old Town",
    description: "Step back in time with this beautifully restored historic townhouse.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1800,
    location: "Old Town",
    country: "Italy",
  },
  {
    title: "Sleek and Modern City Loft",
    description: "Live in style in this contemporary loft in the city center.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 2200,
    location: "Urban Living",
    country: "France",
  },
  {
    title: "Eco-Friendly Treehouse Getaway",
    description: "Experience a unique stay in this eco-friendly treehouse surrounded by greenery.",
    image: {
      filename: 'listingImage',
      url: "https://plus.unsplash.com/premium_photo-1678286770016-6306ad61df9b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1000,
    location: "Green Oasis",
    country: "Costa Rica",
  },
  {
    title: "Sunny Beachfront Condo with Ocean Views",
    description: "Wake up to the sound of waves in this stunning beachfront condo.",
    image: {
      filename: 'listingImage',
      url: "https://plus.unsplash.com/premium_photo-1663093806285-d905ca96c661?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 2500,
    location: "Beachside Bliss",
    country: "Australia",
  },
  {
    title: "Rustic Farmhouse Retreat in the Countryside",
    description: "Experience the charm of country living in this rustic farmhouse.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1200,
    location: "Rural Retreat",
    country: "Germany",
  },
  {
    title: "Contemporary Lakeside Cabin with Panoramic Views",
    description: "Relax by the lake in this modern cabin with breathtaking views.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1800,
    location: "Lakeside Haven",
    country: "Canada",
  },
  {
    title: "Charming Townhouse in Historic District",
    description: "Live in history with this charming townhouse in the heart of the historic district.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1600,
    location: "Historic Charm",
    country: "USA",
  },
  {
    title: "Ski-In/Ski-Out Chalet in the Alps",
    description: "Hit the slopes from the doorstep of this cozy chalet in the Alps.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1584132869994-873f9363a562?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 2800,
    location: "Alpine Adventure",
    country: "Switzerland",
  },
  {
    title: "Elegant Mansion with Private Pool",
    description: "Indulge in luxury with this grand mansion featuring a private pool and gardens.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1578522199427-c82a3ff80b4f?q=80&w=1559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 5000,
    location: "Exclusive Estates",
    country: "France",
  },
  {
    title: "Quaint Cottage by the River",
    description: "Escape to this charming cottage nestled by a peaceful riverbank.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1502208327471-d5dde4d78995?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 900,
    location: "Riverside Haven",
    country: "United Kingdom",
  },
  {
    title: "Sky-High Penthouse with Skyline Views",
    description: "Live at the top in this luxurious penthouse offering breathtaking skyline views.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 3500,
    location: "City Heights",
    country: "USA",
  },
  {
    title: "Tranquil Forest Cabin Retreat",
    description: "Experience serenity in this secluded cabin surrounded by a lush forest.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1500,
    location: "Forest Escape",
    country: "Canada",
  },
  {
    title: "Artistic Loft in Bohemian Neighborhood",
    description: "Immerse yourself in creativity with this artistic loft in a vibrant neighborhood.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 2000,
    location: "Boho District",
    country: "Spain",
  },
  {
    title: "Traditional Japanese Ryokan Experience",
    description: "Discover the beauty of Japanese hospitality in this traditional ryokan.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1800,
    location: "Kyoto Retreat",
    country: "Japan",
  },
  {
    title: "Historic Castle Stay with Modern Amenities",
    description: "Live like royalty in this carefully restored historic castle with modern comforts.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1601999705946-fbf42c3c6c66?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 4000,
    location: "Castle Grandeur",
    country: "Ireland",
  },
  {
    title: "Sustainable Eco-Village Living",
    description: "Join a community committed to sustainability in this eco-friendly village.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1538445336669-f93af334f834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 1200,
    location: "Green Community",
    country: "Sweden",
  },
  {
    title: "Luxurious Yacht for a Nautical Getaway",
    description: "Sail away in style with this luxurious yacht offering a unique nautical experience.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1549109786-eb80da56e693?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 6000,
    location: "Marine Retreat",
    country: "Italy",
  },
  {
    title: "Countryside Vineyard Estate",
    description: "Indulge in the good life with this expansive estate surrounded by vineyards.",
    image: {
      filename: 'listingImage',
      url: "https://images.unsplash.com/photo-1535913989690-f90e1c2d4cfa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Add your image link here
    },
    price: 3000,
    location: "Wine Country",
    country: "Argentina",
  },
];

module.exports = sampleListings;