export const categories = [
  "smartphones",
  "laptops",
  "accessories",
  "comparisons",
  "news",
  "buying-guides",
];

export const articles = [
  {
    id: "iphone-16-vs-galaxy-s26",
    title: "iPhone 16 Pro vs Galaxy S26 Ultra: Which Flagship Fits You?",
    category: "comparisons",
    excerpt:
      "A practical breakdown of camera quality, battery life, ecosystem value, and long-term software support.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&q=80&auto=format&fit=crop",
    author: "Editorial Team",
    date: "2026-03-20",
    featured: true,
    content: `
If you prioritize video and long software support, iPhone remains a strong option.
If you prefer customization, zoom hardware, and display flexibility, Galaxy leads for power users.

Our recommendation:
- Creators and iOS users: iPhone 16 Pro
- Android enthusiasts and heavy multitaskers: Galaxy S26 Ultra
    `,
    comparison: {
      headers: ["Feature", "iPhone 16 Pro", "Galaxy S26 Ultra"],
      rows: [
        ["Display", "6.3\" OLED, 120Hz", "6.8\" AMOLED, 1-120Hz"],
        ["Battery", "Strong all-day", "Excellent heavy-use endurance"],
        ["Camera", "Industry-leading video", "Best-in-class zoom"],
        ["Software", "iOS, long updates", "Android, high customization"],
        ["Starting Price", "$999", "$1199"],
      ],
    },
  },
  {
    id: "best-laptops-students-2026",
    title: "Best Laptops for Students in 2026",
    category: "laptops",
    excerpt:
      "Balanced picks for battery life, portability, and real-world performance on a student budget.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80&auto=format&fit=crop",
    author: "L. Karimov",
    date: "2026-03-14",
    featured: true,
    content: `
Students should prioritize:
- At least 16GB RAM
- 512GB SSD
- 10+ hour battery
- Under 1.5kg where possible

Top picks include ultrabooks for portability and mid-range laptops for value.
    `,
  },
  {
    id: "usb-c-accessories-worth-buying",
    title: "USB‑C Accessories Actually Worth Buying",
    category: "accessories",
    excerpt:
      "Avoid overpriced gadgets. These accessories add measurable value to your daily setup.",
    image:
      "https://images.unsplash.com/photo-1580901369227-308f6f40a3cf?w=1200&q=80&auto=format&fit=crop",
    author: "M. Ziya",
    date: "2026-03-08",
    featured: false,
    content: `
Focus on quality charging standards (PD), cable durability, and trusted brands.
A good GaN charger and a fast NVMe enclosure are usually the best upgrades.
    `,
  },
  {
    id: "mobile-chip-news-march",
    title: "Mobile Chip News Roundup: March 2026",
    category: "news",
    excerpt:
      "New architectures are improving AI workloads and thermal efficiency in flagship phones.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    author: "News Desk",
    date: "2026-03-26",
    featured: false,
    content: `
Chipmakers are focusing on on-device AI acceleration, efficiency cores, and sustained performance.
Expect better battery life even with advanced camera and AI features.
    `,
  },
  {
    id: "smartphone-buying-guide-2026",
    title: "Smartphone Buying Guide 2026: Practical Checklist",
    category: "buying-guides",
    excerpt:
      "A no-hype framework to choose the right smartphone based on budget and usage.",
    image:
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=1200&q=80&auto=format&fit=crop",
    author: "Editorial Team",
    date: "2026-03-10",
    featured: false,
    content: `
Before buying:
1. Define budget ceiling.
2. Prioritize camera, gaming, or battery.
3. Check update policy.
4. Consider resale value and ecosystem fit.
    `,
  },
];