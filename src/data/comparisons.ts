import { ComparisonData } from "../types/comparison";

export const comparisons: ComparisonData[] = [
  {
    id: "1",
    slug: "the-row-vs-lemaire",
    title: "The Row & Lemaire",
    subtitle: "A study in winter silence. Two philosophies of quiet luxury, dissected.",
    hero_image: "/images/hero-winter-minimalism.jpg",
    
    premise_title: "The Premise",
    premise_text: "If your winter wardrobe goal is absolute silence and uncompromising quality, you will inevitably arrive at these two names. While they share a language of restraint, their dialects are distinct. One is architectural, rigid, and imposing. The other is fluid, organic, and intimate. This is not a ranking, but a lineage comparison to help you find your uniform.",
    
    brand_1: {
      name: "The Row",
      founded: "New York, 2006",
      designers: "Olsen Sisters",
      silhouette: "Structured Minimalism. Minimalist long coats, clean oversized outerwear, straight tailored trousers. The shapes are quiet but imposing, featuring smooth, architectural drape that stands away from the body.",
      fabric: "Premium natural fibers: wool, cashmere, silk blends. Emphasis on longevity and luxury touch.",
      color: "Cold neutrals: Black, cream, camel, grey, deep brown. Understated colors that express quiet luxury.",
      vibe: "Precision & Rigor",
      price_tier: "High Luxury",
      link: "https://www.therow.com/en-ca",
      image: "/images/the-row-dna.jpg",
      image_caption: "Fig 1. Structured Precision"
    },
    
    brand_2: {
      name: "Lemaire",
      founded: "Paris, 1991",
      designers: "Christophe Lemaire & Sarah Linh Tran",
      silhouette: "Relaxed & Fluid Minimalism. Relaxed tailored coats, rounded shoulders, fluid trousers, wrap shapes. Pieces are designed for comfort and movement, creating a soft, structured volume that moves with the wearer.",
      fabric: "High quality natural fabrics: compact cottons, textured wools, soft knits. Chosen for utility and subtle texture.",
      color: "Warm Earthy Tones: Beige, dark brown, olive, charcoal, sand, soft black. Atmospheric and grounded.",
      vibe: "Softness & Versatility",
      price_tier: "Premium",
      link: "https://www.lemaire.fr/",
      image: "/images/lemaire-dna.jpg",
      image_caption: "Fig 2. Fluid Volume"
    },
    
    texture_break_1: "/images/texture-wool-macro.jpg",
    texture_break_2: "/images/texture-linen-macro.jpg",
    
    decision_guide: {
      brand_1_title: "Choose The Row if...",
      brand_1_points: [
        "You seek absolute architectural precision and clean lines that stand away from the body.",
        "Your palette preference leans towards cold, sharp neutrals like ink, slate, and bone.",
        "You view clothing as a rigorous investment in \"quiet luxury\" status."
      ],
      brand_2_title: "Choose Lemaire if...",
      brand_2_points: [
        "You prefer clothes that move with you—fluid, wrapped, and softly structured.",
        "You palette leans towards warm, organic tones like clay, olive, and sand.",
        "You value a \"uniform\" that feels practical, utilitarian, yet deeply elegant."
      ]
    },
    
    scenarios: [
      { title: "The Perfect Coat", text: "The Row for structure; Lemaire for drape." },
      { title: "The Daily Uniform", text: "Lemaire for modular layering; The Row for singular statements." },
      { title: "The Investment", text: "The Row for timeless rigor; Lemaire for artistic utility." }
    ]
  },
  {
    id: "3",
    slug: "cos-vs-arket",
    title: "COS & ARKET",
    subtitle: "The battle of the high-street minimalists. A technical study in knitwear structures.",
    hero_image: "/images/texture-wool-macro.jpg", // Using texture as hero for now
    
    premise_title: "The Premise",
    premise_text: "Both born from the H&M Group, yet divergent in soul. COS is the architect—focused on artful silhouettes and refined, sometimes delicate, gauges. ARKET is the archivist—obsessed with durability, weight, and the perfect standard. In winter knitwear, this distinction becomes a question of warmth versus form.",
    
    brand_1: {
      name: "COS",
      founded: "London, 2007",
      designers: "Karin Gustafsson",
      silhouette: "Artful & Tailored. Slimmer profiles, clean lines, and experimental shapes. Knits often feature unique geometric patterns or architectural drapes.",
      fabric: "Fine Merino & Blends. Focus on smooth finishes and lightweight layering potential.",
      color: "Modern Palette: Burgundy, Steel Blue, Geometric Browns. Colors that feel curated and seasonal.",
      vibe: "Refined Modernism",
      price_tier: "Mid-Range",
      link: "https://www.cos.com",
      image: "/images/texture-linen-macro.jpg", // Placeholder
      image_caption: "Fig 1. Fine Gauge Precision"
    },
    
    brand_2: {
      name: "ARKET",
      founded: "Stockholm, 2017",
      designers: "Design Collective",
      silhouette: "Classic & Robust. Regular to relaxed fits designed for utility. The shapes are timeless standards—the perfect crew, the perfect zip polo.",
      fabric: "Heavyweight Wool. Higher density knits designed specifically for structural warmth and durability.",
      color: "Archival Neutrals: Off-White, Grey, Dark Blue. Colors meant to build a permanent wardrobe.",
      vibe: "Functional Permanence",
      price_tier: "Mid-Range",
      link: "https://www.arket.com",
      image: "/images/texture-wool-macro.jpg", // Placeholder
      image_caption: "Fig 2. Dense Structural Warmth"
    },
    
    texture_break_1: "/images/hero-winter-minimalism.jpg",
    texture_break_2: "/images/lemaire-dna.jpg",
    
    decision_guide: {
      brand_1_title: "Choose COS if...",
      brand_1_points: [
        "You prioritize a refined, slim silhouette over heavy warmth.",
        "You want knitwear that feels like a 'fashion piece' rather than just a layer.",
        "You prefer smoother, finer gauges that layer easily under tailored jackets."
      ],
      brand_2_title: "Choose ARKET if...",
      brand_2_points: [
        "You need dependable, heavy warmth for cold climates.",
        "You value durability and density over experimental shapes.",
        "You want a 'uniform' knit that will look the same in 5 years."
      ]
    },
    
    scenarios: [
      { title: "The Office Layer", text: "COS for fine merino polos; ARKET for zip-neck durability." },
      { title: "The Weekend", text: "ARKET for heavy crewnecks; COS for geometric cardigans." },
      { title: "The Longevity", text: "ARKET for fiber density; COS for style relevance." }
    ]
  }
];
