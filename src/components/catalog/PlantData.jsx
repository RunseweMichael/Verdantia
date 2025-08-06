const plantData = [
  {
    id: 1,
    name: "Ugwu (Fluted Pumpkin)",
    slug: "ugwu-fluted-pumpkin",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Popular leafy vegetable used in soups and stews across Nigeria.",
    image: "/catalogImg/fluted_pumpkin.jpg"
  },
  {
    id: 2,
    name: "Scent Leaf (Efirin)",
    slug: "scent-leaf",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Aromatic herb used in local dishes and traditional medicine.",
    image: "/catalogImg/scent_leaf.jpg"
  },
  {
    id: 3,
    name: "Okra",
    slug: "okra",
    type: "plant",
    sun: "Full Sun",
    water: "High",
    season: "Rainy Season",
    description: "Fast-growing vegetable used in soups; thrives in warm climates.",
    image: "/catalogImg/Okra.jpg"
  },
  {
    id: 4,
    name: "Pepper (Ata Rodo)",
    slug: "pepper-ata-rodo",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Year-Round (irrigated)",
    description: "Spicy pepper variety popular in Nigerian cooking.",
    image: "/catalogImg/pepper.jpg"
  },
  {
    id: 5,
    name: "Tomato",
    slug: "tomato",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Dry Season with irrigation",
    description: "Essential ingredient in stews and sauces.",
    image: "/catalogImg/tomato.jpg"
  },
  {
    id: 6,
    name: "Waterleaf (Gbure)",
    slug: "waterleaf-gbure",
    type: "plant",
    sun: "Partial Shade",
    water: "High",
    season: "Rainy Season",
    description: "Highly nutritious leafy green used in soups.",
    image: "/catalogImg/waterleaf.jpg"
  },
  {
    id: 7,
    name: "Amaranth (Green)",
    slug: "amaranth",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Locally called 'Green'; grows fast and rich in iron.",
    image: "/catalogImg/amaranth.jpg"
  },
  {
    id: 8,
    name: "Bitter Leaf",
    slug: "bitter-leaf",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Used in traditional soups and herbal remedies.",
    image: "/catalogImg/bitterleaf.jpg"
  },
  {
    id: 9,
    name: "Telfairia occidentalis (Pumpkin)",
    slug: "telfairia-occidentalis",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Climbing plant cultivated for its edible leaves and seeds.",
    image: "/catalogImg/pumpkin.jpg"
  },
  {
    id: 10,
    name: "Hibiscus (Zobo)",
    slug: "hibiscus",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Colorful flowering plant used ornamentally and for making hibiscus tea.",
    image: "/catalogImg/hibiscus.jpg"
  },
  {
    id: 11,
    name: "Bougainvillea",
    slug: "bougainvillea",
    type: "plant",
    sun: "Full Sun",
    water: "Low",
    season: "Dry and Rainy",
    description: "Hardy tropical ornamental with vibrant bracts; ideal for fences and trellises.",
    image: "/catalogImg/bougainvillea.jpg"
  },
  {
    id: 12,
    name: "Lavender",
    slug: "lavender",
    type: "plant",
    sun: "Full Sun",
    water: "Low to Medium",
    season: "Dry Season",
    description: "Fragrant herb with calming properties; grows best in well-drained soil.",
    image: "/catalogImg/lavender.jpg"
  },
  {
    id: 13,
    name: "Ixora",
    slug: "ixora",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "All Seasons",
    description: "Tropical shrub with clustered flowers; popular for hedging.",
    image: "/catalogImg/ixora.jpg"
  },
  {
    id: 14,
    name: "Marigold",
    slug: "marigold",
    type: "plant",
    sun: "Full Sun",
    water: "Low to Medium",
    season: "Dry and Rainy",
    description: "Bright, pest-repellent flower; used ornamentally and in traditional medicine.",
    image: "/catalogImg/marigold.jpg"
  },
  {
    id: 15,
    name: "Petunia",
    slug: "petunia",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Dry Season",
    description: "Colorful bedding plant ideal for pots and window boxes.",
    image: "/catalogImg/petunia.jpg"
  },
  {
    id: 16,
    name: "Lantana",
    slug: "lantana",
    type: "plant",
    sun: "Full Sun",
    water: "Low",
    season: "All Seasons",
    description: "Drought-tolerant flowering shrub with small clustered blooms.",
    image: "/catalogImg/lantana.jpg"
  },
  {
    id: 17,
    name: "Rose",
    slug: "rose",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Dry and Rainy",
    description: "Classic fragrant flower; thrives in sunny, well-drained beds.",
    image: "/catalogImg/rose.jpg"
  },
  {
    id: 18,
    name: "Hydrangea",
    slug: "hydrangea",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Dry Season",
    description: "Fast-growing annuals with vibrant daisy-like flowers.",
    image: "/catalogImg/hydrangea.jpg"
  },
  {
    id: 19,
    name: "Allamanda",
    slug: "allamanda",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Rainy Season",
    description: "Yellow-flowered vine commonly used in tropical gardens and fences.",
    image: "/catalogImg/allamanda.jpg"
  },
  {
    id: 20,
    name: "Croton",
    slug: "croton",
    type: "plant",
    sun: "Partial Sun",
    water: "Medium",
    season: "All Seasons",
    description: "Tropical foliage plant with multicolored leaves; grown for visual appeal.",
    image: "/catalogImg/croton.jpg"
  },
  {
    id: 21,
    name: "African Lily (Agapanthus)",
    slug: "african-lily",
    type: "plant",
    sun: "Full Sun",
    water: "Medium",
    season: "Dry and Rainy",
    description: "Graceful flowering plant with striking purple-blue blooms.",
    image: "/catalogImg/african_lily.jpg"
  }
];

export default plantData;
