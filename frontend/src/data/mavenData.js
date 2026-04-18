// Maven Kitchen — Static site data (frontend-only, no backend)

export const BUSINESS = {
  name: "Maven Kitchen",
  nameKannada: "ಮೇವನ್ ಕಿಚನ್",
  tagline: "Flavors of the Northeast, Right Here in Bengaluru",
  phone: "+91 83103 60483",
  phoneRaw: "+918310360483",
  rating: 4.6,
  reviews: 1200,
  address: {
    line1: "1st floor, 163, Ejipura Main Rd",
    line2: "Viveknagar Further Extension, Ejipura",
    city: "Bengaluru, Karnataka 560047",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Maven+Kitchen+Ejipura+Main+Rd+Bengaluru",
  },
  hours: "Open daily · Until 11:00 PM",
};

export const MENU = [
  {
    id: "momos",
    category: "Momos",
    tagline: "Hand-folded, steamed or seared",
    items: [
      { name: "Steamed Chicken Momos", desc: "Classic eight-fold, ginger broth", price: 150 },
      { name: "Pan-Fried Pork Momos", desc: "Crispy base, tender inside", price: 220 },
      { name: "Jhol Momos", desc: "Nepali-style, spicy tomato chutney bath", price: 190 },
      { name: "Tandoori Chicken Momos", desc: "Clay-oven charred, smoky", price: 240 },
      { name: "Cheese Corn Momos", desc: "Molten cheese, sweet corn", price: 180 },
    ],
  },
  {
    id: "thukpa",
    category: "Thukpa & Soups",
    tagline: "Slow-simmered bone broths",
    items: [
      { name: "Chicken Thukpa", desc: "Hand-pulled noodles, aromatic broth", price: 230 },
      { name: "Veg Thukpa", desc: "Seasonal greens, shiitake, ginger", price: 180 },
      { name: "Clear Bone Soup", desc: "Twelve-hour simmer, scallions", price: 160 },
      { name: "Tom Yum", desc: "Lemongrass, kaffir lime, chili oil", price: 220 },
    ],
  },
  {
    id: "starters",
    category: "Starters",
    tagline: "Smoke, chili and fermented heat",
    items: [
      { name: "Chilli Chicken", desc: "Dry-tossed, Naga king chili", price: 260 },
      { name: "Dry Pork with Axone", desc: "Fermented soybean, wood-smoked", price: 320 },
      { name: "Smoked Pork Belly", desc: "Alder-smoked, bhut jolokia salt", price: 340 },
      { name: "Bamboo Shoot Chicken", desc: "Manipuri-style, sour and bright", price: 280 },
      { name: "Crispy Honey Chicken", desc: "Glazed, sesame, scallion", price: 250 },
    ],
  },
  {
    id: "mains",
    category: "Main Course",
    tagline: "Plates to share around the table",
    items: [
      { name: "Naga Chicken Curry", desc: "Ghost pepper, tomato, garlic", price: 290 },
      { name: "Axone Pork", desc: "Nagaland's iconic fermented soybean stew", price: 360 },
      { name: "Rice Bowl — Smoked Pork", desc: "Sticky rice, greens, chutney", price: 320 },
      { name: "Burnt Garlic Fried Rice", desc: "Wok-charred, Sichuan crisp", price: 220 },
      { name: "Schezwan Noodles", desc: "House-made chili oil, crunchy veg", price: 230 },
    ],
  },
  {
    id: "drinks",
    category: "Beverages",
    tagline: "Cooling the fire",
    items: [
      { name: "House Iced Tea", desc: "Darjeeling, lemon, basil", price: 80 },
      { name: "Fresh Pineapple Juice", desc: "Pressed to order", price: 120 },
      { name: "Sweet Lassi", desc: "Hung curd, cardamom", price: 110 },
      { name: "Bhut Jolokia Kombucha", desc: "Fermented in-house, mild heat", price: 160 },
    ],
  },
];

export const FEATURES = [
  {
    title: "Authentic NE Recipes",
    body: "Passed down through generations — Naga, Manipuri, Mizo and Assamese techniques.",
    icon: "ForkKnife",
  },
  {
    title: "Fresh Ingredients Daily",
    body: "Bamboo shoot, axone and local greens sourced weekly from the Northeast.",
    icon: "Leaf",
  },
  {
    title: "1200+ Happy Customers",
    body: "Rated 4.6★ on Google. A neighbourhood favourite since day one.",
    icon: "Star",
  },
  {
    title: "Cozy Neighbourhood Vibe",
    body: "Warm wood, soft light and room for everyone — walk-ins welcome.",
    icon: "House",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aarav Menon",
    city: "Koramangala",
    quote:
      "The jhol momos here are the best I've had outside Darjeeling. Broth is unreal.",
  },
  {
    name: "Priya Nair",
    city: "Indiranagar",
    quote:
      "Smoked pork with axone reminded me of home in Kohima. Generous portions, fair prices.",
  },
  {
    name: "Rohan Shetty",
    city: "BTM Layout",
    quote:
      "Tucked away on Ejipura Main Rd but worth every turn. Staff treat you like family.",
  },
  {
    name: "Meera Iyer",
    city: "HSR Layout",
    quote:
      "Finally a Northeast Indian place that doesn't water things down. The Naga curry is a knockout.",
  },
];

export const GALLERY = [
  {
    url: "https://static.prod-images.emergentagent.com/jobs/2ca94d15-7db3-42a6-806d-66b720c1764b/images/587cad32b111d210a566de329b2dfcadf3f2811349767364b2030c3ec374a6c0.png",
    alt: "Rustic restaurant interior at Maven Kitchen",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    url: "https://static.prod-images.emergentagent.com/jobs/2ca94d15-7db3-42a6-806d-66b720c1764b/images/8b778d4b796059d2e18fb692fcc4b7a0916b9cdb5c82b08e4615dd0da907b128.png",
    alt: "Chef hand-folding momos in the kitchen",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1646850148817-c3a5e8a35fd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwzfHx0aHVrcGElMjBub29kbGUlMjBzb3VwfGVufDB8fHx8MTc3NjUyNTQ1Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Steaming bowl of chicken thukpa",
    span: "md:col-span-5 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1772981277358-2d2587bdfd8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb21vcyUyMGR1bXBsaW5nJTIwZm9vZHxlbnwwfHx8fDE3NzY1MjU0NTJ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Fresh momos ready to steam",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1694850184798-320a8e10bb5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb21vcyUyMGR1bXBsaW5nJTIwZm9vZHxlbnwwfHx8fDE3NzY1MjU0NTJ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Plated Northeast Indian dish with chutney",
    span: "md:col-span-4 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1651457157077-5ae9136d2cf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHx0aHVrcGElMjBub29kbGUlMjBzb3VwfGVufDB8fHx8MTc3NjUyNTQ1Mnww&ixlib=rb-4.1.0&q=85",
    alt: "Diner enjoying a hot bowl of soup",
    span: "md:col-span-4 md:row-span-1",
  },
];

export const HERO_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/2ca94d15-7db3-42a6-806d-66b720c1764b/images/1e379bf0afb8fb256ff7a521daf41e4825e6870deeac3c28f303fd179bd9ab95.png";
