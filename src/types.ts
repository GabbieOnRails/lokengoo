export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
  image: string;
  gallery: string[];
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "venus-set",
    name: "VENUS SET",
    price: "₦75,500",
    description: "Looks good. Moves better. Breathable, comfortable, and made for every move you make.",
    image: "https://i.ibb.co/NdknNxbk/Project-Mar-17-02-18-PM-3.png",
    gallery: ["https://i.ibb.co/NdknNxbk/Project-Mar-17-02-18-PM-3.png"],
    category: "Sets"
  },
  {
    id: "elena-set",
    name: "ELENA SET",
    price: "₦78,500",
    description: "The ELENA SET is quiet luxury on the court sleek, sculpted, and effortlessly composed. For the woman who doesn’t need to be loud to win. Soft power, sharp finish.",
    image: "https://i.ibb.co/5WQ59PVS/Project-Mar-17-02-18-PM-2.png",
    gallery: ["https://i.ibb.co/5WQ59PVS/Project-Mar-17-02-18-PM-2.png"],
    category: "Sets"
  },
  {
    id: "mirra-set",
    name: "MIRRA SET",
    price: "₦75,500",
    description: "Meet MIRRA - the set that plays hard and looks expensive doing it. Designed to sculpt and move with you, this two-piece delivers a flawless fit with premium stretch fabric that hugs in all the right places. The silhouette is sharp, feminine, and unapologetically confident — made for powerful serves, golden hour matches, and post-game champagne. Sporty. Polished. Untouchable. Mirra is main-character energy on the court.",
    image: "https://i.ibb.co/cSXygYVq/Project-Mar-17-02-18-PM-1.png",
    gallery: ["https://i.ibb.co/cSXygYVq/Project-Mar-17-02-18-PM-1.png"],
    category: "Sets"
  },
  {
    id: "selena-set",
    name: "SELENA SET",
    price: "₦75,500",
    description: "This set was designed for powerful women who play hard, move freely, and never compromise on style. We want you to OWN THE COURT In this sexy, breathable two piece while playing or watching the game.",
    image: "https://i.ibb.co/chzMvhvq/Project-Mar-17-02-18-PM-8.png",
    gallery: ["https://i.ibb.co/chzMvhvq/Project-Mar-17-02-18-PM-8.png"],
    category: "Sets"
  },
  {
    id: "fiona-set",
    name: "FIONA SET",
    price: "₦75,500",
    description: "A sculpting wrap-back top paired with a soft pleated mini skirt featuring built-in shorts for effortless comfort and confidence. Designed to flatter from every angle, this set cinches the waist, enhances your silhouette, and moves beautifully with you. Feminine, confident, and undeniably It-Girl energy.",
    image: "https://i.ibb.co/ynZZH7g8/Project-Mar-17-02-18-PM-4.png",
    gallery: ["https://i.ibb.co/ynZZH7g8/Project-Mar-17-02-18-PM-4.png"],
    category: "Sets"
  },
  {
    id: "justine-set",
    name: "Justine Set",
    price: "₦75,500",
    description: "The Justine Set is designed for high-performance movement and effortless style. Crafted with breathable, lightweight fabric, it offers comfort, flexibility, and a flattering fit and perfect for intense play and elevated off-court moments.",
    image: "https://i.ibb.co/rggDnxj/Project-Mar-17-02-18-PM-3.png",
    gallery: ["https://i.ibb.co/rggDnxj/Project-Mar-17-02-18-PM-3.png"],
    category: "Sets"
  }
];
