export interface Product {
  id: string;
  name: string;
  description: string;
  flavorProfile: string;
  image: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "original",
    name: "Dr. Pepper Original",
    description: "The classic blend of 23 flavors that has been a favorite since 1885. Often imitated, never duplicated.",
    flavorProfile: "Bold, spicy, and sweet with notes of cherry, vanilla, and caramel.",
    image: "https://picsum.photos/seed/drpepper-original/400/600",
    color: "#711F25"
  },
  {
    id: "cherry",
    name: "Dr. Pepper Cherry",
    description: "A smooth addition of rich cherry flavor to the original 23-flavor blend.",
    flavorProfile: "Extra sweet cherry notes balanced by the classic spicy kick.",
    image: "https://picsum.photos/seed/drpepper-cherry/400/600",
    color: "#4A0E0E"
  },
  {
    id: "strawberries-cream",
    name: "Dr. Pepper Strawberries & Cream",
    description: "The newest sensation. A refreshing twist that combines the original taste with sweet strawberry and smooth cream.",
    flavorProfile: "Creamy, fruity, and refreshingly unique.",
    image: "https://picsum.photos/seed/drpepper-strawberry/400/600",
    color: "#D63384"
  },
  {
    id: "cream-soda",
    name: "Dr. Pepper & Cream Soda",
    description: "Two classics combined for a smoother, creamier taste experience.",
    flavorProfile: "Velvety smooth vanilla cream soda meets the 23 flavors.",
    image: "https://picsum.photos/seed/drpepper-creamsoda/400/600",
    color: "#F5DEB3"
  }
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Recipe" | "Lifestyle";
  image: string;
}

export const articles: Article[] = [
  {
    id: "bbq-marinade",
    title: "The Ultimate Dr. Pepper BBQ Marinade",
    excerpt: "Learn how the 23 flavors of Dr. Pepper create the perfect glaze for your ribs and brisket.",
    content: "Full recipe content here...",
    category: "Recipe",
    image: "https://picsum.photos/seed/bbq/800/400"
  },
  {
    id: "bbq-drinks",
    title: "Best Drinks for Your Next BBQ",
    excerpt: "Why Dr. Pepper is the undisputed king of the backyard cookout.",
    content: "Full article content here...",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/party/800/400"
  }
];
