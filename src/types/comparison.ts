export interface BrandData {
  name: string;
  founded: string;
  designers: string;
  silhouette: string;
  fabric: string;
  color: string;
  vibe: string;
  price_tier: string;
  link: string;
  image: string;
  image_caption: string;
}

export interface ComparisonData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  hero_image: string;
  premise_title: string;
  premise_text: string;
  
  brand_1: BrandData;
  brand_2: BrandData;
  
  texture_break_1: string;
  texture_break_2: string;
  
  decision_guide: {
    brand_1_title: string;
    brand_1_points: string[];
    brand_2_title: string;
    brand_2_points: string[];
  };
  
  scenarios: {
    title: string;
    text: string;
  }[];
}
