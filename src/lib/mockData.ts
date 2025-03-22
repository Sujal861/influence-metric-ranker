
export interface InfluencerMetric {
  value: number;
  change: number;
  timeFrame: string;
}

export interface Influencer {
  id: string;
  name: string;
  imageUrl: string;
  title: string;
  biography: string;
  metrics: {
    influence: InfluencerMetric;
    credibility: InfluencerMetric;
    relevance: InfluencerMetric;
    consistency: InfluencerMetric;
    engagement: InfluencerMetric;
  };
  categories: string[];
  socialProfiles: {
    platform: string;
    handle: string;
    followers: number;
    url: string;
  }[];
  achievements: {
    title: string;
    date: string;
    description: string;
  }[];
}

export const mockInfluencers: Influencer[] = [
  {
    id: "1",
    name: "Emma Thompson",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Tech Entrepreneur & Innovation Speaker",
    biography: "Emma Thompson is a renowned tech entrepreneur and innovation speaker who has founded multiple successful startups. Her expertise in AI and machine learning has made her a sought-after consultant for Fortune 500 companies.",
    metrics: {
      influence: { value: 92, change: 3, timeFrame: "month" },
      credibility: { value: 89, change: 1, timeFrame: "month" },
      relevance: { value: 94, change: 2, timeFrame: "month" },
      consistency: { value: 91, change: 0, timeFrame: "month" },
      engagement: { value: 87, change: 4, timeFrame: "month" }
    },
    categories: ["Technology", "Entrepreneurship", "Innovation"],
    socialProfiles: [
      { platform: "Twitter", handle: "@EmmaThompsonTech", followers: 2400000, url: "#" },
      { platform: "LinkedIn", handle: "Emma Thompson", followers: 850000, url: "#" },
      { platform: "Instagram", handle: "@emmatechtalks", followers: 1200000, url: "#" }
    ],
    achievements: [
      { title: "Forbes 30 Under 30", date: "2021", description: "Recognized in the Technology category for innovative AI solutions" },
      { title: "TED Talk: 'The Future of AI Ethics'", date: "2022", description: "Over 5 million views" },
      { title: "Author: 'Beyond Algorithms'", date: "2023", description: "Bestselling book on ethical technology development" }
    ]
  },
  {
    id: "2",
    name: "Michael Chen",
    imageUrl: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Climate Scientist & Public Policy Advocate",
    biography: "Dr. Michael Chen is a leading climate scientist whose research has significantly influenced environmental policy worldwide. His work bridges the gap between complex science and public understanding.",
    metrics: {
      influence: { value: 88, change: 5, timeFrame: "month" },
      credibility: { value: 95, change: 0, timeFrame: "month" },
      relevance: { value: 92, change: 3, timeFrame: "month" },
      consistency: { value: 89, change: 1, timeFrame: "month" },
      engagement: { value: 82, change: 7, timeFrame: "month" }
    },
    categories: ["Environment", "Science", "Policy"],
    socialProfiles: [
      { platform: "Twitter", handle: "@DrMichaelChen", followers: 1800000, url: "#" },
      { platform: "LinkedIn", handle: "Dr. Michael Chen", followers: 670000, url: "#" },
      { platform: "YouTube", handle: "ClimateWithMichael", followers: 3200000, url: "#" }
    ],
    achievements: [
      { title: "UN Environmental Prize", date: "2020", description: "For groundbreaking climate research" },
      { title: "National Science Medal", date: "2022", description: "Awarded by the President for contributions to science" },
      { title: "Documentary Series: 'Earth in Crisis'", date: "2023", description: "Emmy-nominated documentary on Netflix" }
    ]
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    imageUrl: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Financial Educator & Inclusion Advocate",
    biography: "Sophia Rodriguez has transformed financial education through her accessible approach to complex economic concepts. Her work focuses on financial inclusion for underrepresented communities.",
    metrics: {
      influence: { value: 85, change: 8, timeFrame: "month" },
      credibility: { value: 88, change: 2, timeFrame: "month" },
      relevance: { value: 90, change: 5, timeFrame: "month" },
      consistency: { value: 93, change: 1, timeFrame: "month" },
      engagement: { value: 91, change: 6, timeFrame: "month" }
    },
    categories: ["Finance", "Education", "Social Impact"],
    socialProfiles: [
      { platform: "Instagram", handle: "@SophiaFinance", followers: 3500000, url: "#" },
      { platform: "TikTok", handle: "@money_with_sophia", followers: 5200000, url: "#" },
      { platform: "Podcast", handle: "The Money Mindset", followers: 1800000, url: "#" }
    ],
    achievements: [
      { title: "Financial Educator of the Year", date: "2021", description: "American Finance Association" },
      { title: "#1 Finance Podcast", date: "2022", description: "Top-ranked financial podcast on Spotify for 48 weeks" },
      { title: "Goldman Sachs Innovation Grant", date: "2023", description: "For developing financial literacy app for underserved communities" }
    ]
  },
  {
    id: "4",
    name: "James Wilson",
    imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Health & Wellness Expert",
    biography: "Dr. James Wilson combines traditional medical expertise with holistic approaches to health and wellness. His evidence-based methodology has challenged industry norms and created a new paradigm in preventative healthcare.",
    metrics: {
      influence: { value: 87, change: 2, timeFrame: "month" },
      credibility: { value: 91, change: 0, timeFrame: "month" },
      relevance: { value: 88, change: 3, timeFrame: "month" },
      consistency: { value: 94, change: 1, timeFrame: "month" },
      engagement: { value: 89, change: 4, timeFrame: "month" }
    },
    categories: ["Health", "Wellness", "Medicine"],
    socialProfiles: [
      { platform: "Instagram", handle: "@DrJamesWellness", followers: 2800000, url: "#" },
      { platform: "YouTube", handle: "The Wellness Method", followers: 4100000, url: "#" },
      { platform: "Twitter", handle: "@Dr_JWilson", followers: 1600000, url: "#" }
    ],
    achievements: [
      { title: "Medical Innovation Award", date: "2020", description: "For pioneering integrative medicine approaches" },
      { title: "Bestselling Author: 'The Balance Within'", date: "2021", description: "Translated into 28 languages" },
      { title: "Wellness App of the Year", date: "2023", description: "For his holistic health application with over 10 million users" }
    ]
  },
  {
    id: "5",
    name: "Aisha Johnson",
    imageUrl: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Creative Director & Design Thought Leader",
    biography: "Aisha Johnson is redefining modern design principles through her work with global brands. Her inclusive design philosophy emphasizes accessibility and cultural sensitivity, setting new standards in the industry.",
    metrics: {
      influence: { value: 93, change: 4, timeFrame: "month" },
      credibility: { value: 90, change: 2, timeFrame: "month" },
      relevance: { value: 95, change: 5, timeFrame: "month" },
      consistency: { value: 87, change: 1, timeFrame: "month" },
      engagement: { value: 92, change: 3, timeFrame: "month" }
    },
    categories: ["Design", "Arts", "Innovation"],
    socialProfiles: [
      { platform: "Instagram", handle: "@AishaDesigns", followers: 3900000, url: "#" },
      { platform: "Pinterest", handle: "Aisha Johnson Design", followers: 8200000, url: "#" },
      { platform: "Behance", handle: "Aisha Johnson Studio", followers: 1500000, url: "#" }
    ],
    achievements: [
      { title: "Cannes Lions Grand Prix", date: "2021", description: "For breakthrough inclusive advertising campaign" },
      { title: "Design Museum Exhibition", date: "2022", description: "Solo exhibition 'Designing for Everyone'" },
      { title: "AIGA Medal", date: "2023", description: "Lifetime achievement in design" }
    ]
  },
  {
    id: "6",
    name: "David Park",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Human Rights Lawyer & Social Justice Advocate",
    biography: "David Park has dedicated his career to human rights law, working on landmark cases that have changed legal precedents globally. His advocacy extends beyond the courtroom to grassroots community empowerment.",
    metrics: {
      influence: { value: 91, change: 6, timeFrame: "month" },
      credibility: { value: 96, change: 1, timeFrame: "month" },
      relevance: { value: 93, change: 4, timeFrame: "month" },
      consistency: { value: 97, change: 2, timeFrame: "month" },
      engagement: { value: 86, change: 5, timeFrame: "month" }
    },
    categories: ["Law", "Human Rights", "Social Justice"],
    socialProfiles: [
      { platform: "Twitter", handle: "@DavidParkJustice", followers: 2100000, url: "#" },
      { platform: "LinkedIn", handle: "David Park", followers: 780000, url: "#" },
      { platform: "Substack", handle: "Justice Matters", followers: 950000, url: "#" }
    ],
    achievements: [
      { title: "Nobel Peace Prize Nominee", date: "2020", description: "For work on international refugee rights" },
      { title: "UN Human Rights Award", date: "2021", description: "For advocacy for indigenous land rights" },
      { title: "Author: 'Justice Beyond Borders'", date: "2023", description: "Critically acclaimed book on international human rights law" }
    ]
  }
];

export const getInfluencerById = (id: string): Influencer | undefined => {
  return mockInfluencers.find(influencer => influencer.id === id);
};

export const searchInfluencers = (query: string): Influencer[] => {
  const searchTerms = query.toLowerCase().split(' ');
  
  return mockInfluencers.filter(influencer => {
    const nameMatch = influencer.name.toLowerCase().includes(query.toLowerCase());
    const titleMatch = influencer.title.toLowerCase().includes(query.toLowerCase());
    const categoryMatch = influencer.categories.some(category => 
      searchTerms.some(term => category.toLowerCase().includes(term))
    );
    
    return nameMatch || titleMatch || categoryMatch;
  });
};

export const getTopInfluencers = (limit: number = 5): Influencer[] => {
  return [...mockInfluencers]
    .sort((a, b) => b.metrics.influence.value - a.metrics.influence.value)
    .slice(0, limit);
};

export const getTrendingInfluencers = (limit: number = 3): Influencer[] => {
  return [...mockInfluencers]
    .sort((a, b) => b.metrics.influence.change - a.metrics.influence.change)
    .slice(0, limit);
};

export const getCategories = (): string[] => {
  const allCategories = mockInfluencers.flatMap(influencer => influencer.categories);
  return [...new Set(allCategories)].sort();
};
