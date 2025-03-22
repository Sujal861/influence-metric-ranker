
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
    name: "Elon Musk",
    imageUrl: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1215690299.jpg",
    title: "Tech Entrepreneur & Space Innovator",
    biography: "Elon Musk is the founder, CEO, and chief engineer of SpaceX; angel investor, CEO, and product architect of Tesla, Inc.; owner and CTO of Twitter; founder of The Boring Company; co-founder of Neuralink and OpenAI; and president of the philanthropic Musk Foundation.",
    metrics: {
      influence: { value: 96, change: 5, timeFrame: "month" },
      credibility: { value: 85, change: -2, timeFrame: "month" },
      relevance: { value: 97, change: 3, timeFrame: "month" },
      consistency: { value: 79, change: -3, timeFrame: "month" },
      engagement: { value: 94, change: 6, timeFrame: "month" }
    },
    categories: ["Technology", "Entrepreneurship", "Space"],
    socialProfiles: [
      { platform: "Twitter", handle: "@elonmusk", followers: 128000000, url: "#" },
      { platform: "LinkedIn", handle: "Elon Musk", followers: 4200000, url: "#" },
      { platform: "Instagram", handle: "@elonmusk", followers: 5700000, url: "#" }
    ],
    achievements: [
      { title: "Time Person of the Year", date: "2021", description: "Recognized for his influence on life on Earth and beyond" },
      { title: "Tesla reaches $1 trillion valuation", date: "2021", description: "Became the sixth company in U.S. history to reach this milestone" },
      { title: "SpaceX's first crewed mission", date: "2020", description: "First private company to send humans to the International Space Station" }
    ]
  },
  {
    id: "2",
    name: "Taylor Swift",
    imageUrl: "https://media.architecturaldigest.com/photos/65081c26d91ff23e6cc3fb86/16:9/w_2560%2Cc_limit/GettyImages-1704364140.jpg",
    title: "Music Icon & Cultural Phenomenon",
    biography: "Taylor Swift is one of the most influential musicians of her generation, winning numerous awards including multiple Grammy Awards. Her evolution from country to pop has showcased her versatility and business acumen in the music industry.",
    metrics: {
      influence: { value: 98, change: 7, timeFrame: "month" },
      credibility: { value: 92, change: 4, timeFrame: "month" },
      relevance: { value: 95, change: 8, timeFrame: "month" },
      consistency: { value: 93, change: 2, timeFrame: "month" },
      engagement: { value: 97, change: 9, timeFrame: "month" }
    },
    categories: ["Music", "Entertainment", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@taylorswift", followers: 272000000, url: "#" },
      { platform: "Twitter", handle: "@taylorswift13", followers: 92000000, url: "#" },
      { platform: "TikTok", handle: "@taylorswift", followers: 23000000, url: "#" }
    ],
    achievements: [
      { title: "Most Grammy Album of the Year Wins", date: "2023", description: "First artist to win the award four times" },
      { title: "Billionaire Status", date: "2023", description: "Reached billionaire status through music catalog and performances" },
      { title: "Eras Tour", date: "2023", description: "Highest-grossing concert tour of all time" }
    ]
  },
  {
    id: "3",
    name: "LeBron James",
    imageUrl: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-08/LeBron-James-100622-GETTY-FTR.jpg",
    title: "Basketball Legend & Social Activist",
    biography: "LeBron James is widely considered one of the greatest basketball players of all time. Beyond his athletic achievements, he has become a prominent voice on social issues and an entrepreneur with investments spanning media, sports, and education.",
    metrics: {
      influence: { value: 93, change: 3, timeFrame: "month" },
      credibility: { value: 91, change: 1, timeFrame: "month" },
      relevance: { value: 89, change: 2, timeFrame: "month" },
      consistency: { value: 95, change: 0, timeFrame: "month" },
      engagement: { value: 88, change: 4, timeFrame: "month" }
    },
    categories: ["Sports", "Social Impact", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@kingjames", followers: 158000000, url: "#" },
      { platform: "Twitter", handle: "@KingJames", followers: 52000000, url: "#" },
      { platform: "YouTube", handle: "UNINTERRUPTED", followers: 2200000, url: "#" }
    ],
    achievements: [
      { title: "4× NBA Champion", date: "2020", description: "Led the Lakers to their 17th championship" },
      { title: "I Promise School", date: "2018", description: "Founded a public school for at-risk children in Akron" },
      { title: "Becoming Part-Owner of the Boston Red Sox", date: "2021", description: "Expanded his sports ownership portfolio" }
    ]
  },
  {
    id: "4",
    name: "Oprah Winfrey",
    imageUrl: "https://pyxis.nymag.com/v1/imgs/809/f97/e25ae3d994e13b3c8bdf15931728a2bd9e-oprah-winfrey.2x.rsquare.w536.jpg",
    title: "Media Executive & Philanthropist",
    biography: "Oprah Winfrey is a talk show host, television producer, actress, author, and philanthropist. She is best known for her talk show, The Oprah Winfrey Show, which was the highest-rated television program of its kind and ran for 25 years.",
    metrics: {
      influence: { value: 92, change: 1, timeFrame: "month" },
      credibility: { value: 94, change: 2, timeFrame: "month" },
      relevance: { value: 87, change: -1, timeFrame: "month" },
      consistency: { value: 96, change: 0, timeFrame: "month" },
      engagement: { value: 85, change: 2, timeFrame: "month" }
    },
    categories: ["Media", "Philanthropy", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@oprah", followers: 22000000, url: "#" },
      { platform: "Twitter", handle: "@Oprah", followers: 42000000, url: "#" },
      { platform: "Facebook", handle: "oprahwinfrey", followers: 11700000, url: "#" }
    ],
    achievements: [
      { title: "Presidential Medal of Freedom", date: "2013", description: "Awarded by President Barack Obama" },
      { title: "Oprah Winfrey Leadership Academy for Girls", date: "2007", description: "Founded a school for girls in South Africa" },
      { title: "First Black Female Billionaire", date: "2003", description: "Made history as a self-made billionaire" }
    ]
  },
  {
    id: "5",
    name: "Cristiano Ronaldo",
    imageUrl: "https://i.guim.co.uk/img/media/49fe41f27e21f8493e8b5400f1b3c67de64f5c85/0_94_4278_2566/master/4278.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=3f67c5d08d8aeff66f5c829f2f24b5cd",
    title: "Football Superstar & Global Icon",
    biography: "Cristiano Ronaldo is one of the most famous athletes in the world. The Portuguese footballer has broken numerous records throughout his career with Manchester United, Real Madrid, Juventus, and the Portugal national team, becoming one of the most marketable athletes ever.",
    metrics: {
      influence: { value: 95, change: 3, timeFrame: "month" },
      credibility: { value: 88, change: 1, timeFrame: "month" },
      relevance: { value: 91, change: 2, timeFrame: "month" },
      consistency: { value: 93, change: -1, timeFrame: "month" },
      engagement: { value: 97, change: 5, timeFrame: "month" }
    },
    categories: ["Sports", "Business", "Entertainment"],
    socialProfiles: [
      { platform: "Instagram", handle: "@cristiano", followers: 597000000, url: "#" },
      { platform: "Twitter", handle: "@Cristiano", followers: 108000000, url: "#" },
      { platform: "Facebook", handle: "Cristiano", followers: 160000000, url: "#" }
    ],
    achievements: [
      { title: "5× UEFA Champions League titles", date: "2018", description: "Has the most Champions League titles in the modern era" },
      { title: "5× Ballon d'Or", date: "2017", description: "One of the most prestigious individual awards in football" },
      { title: "First person to reach 500 million followers", date: "2023", description: "Most followed person on Instagram in the world" }
    ]
  },
  {
    id: "6",
    name: "Malala Yousafzai",
    imageUrl: "https://people.com/thmb/5OT5-F83U9vgbjrKhBfW2bTgCb0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(674x51:676x53)/malala-yousafzai-2000-2a87eb21b1c142d39c9c74ed2882bc19.jpg",
    title: "Education Activist & Nobel Laureate",
    biography: "Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate. She is known for human rights advocacy, especially the education of women and children in her native region of northwest Pakistan.",
    metrics: {
      influence: { value: 89, change: 4, timeFrame: "month" },
      credibility: { value: 97, change: 2, timeFrame: "month" },
      relevance: { value: 92, change: 3, timeFrame: "month" },
      consistency: { value: 96, change: 1, timeFrame: "month" },
      engagement: { value: 84, change: 3, timeFrame: "month" }
    },
    categories: ["Education", "Human Rights", "Social Justice"],
    socialProfiles: [
      { platform: "Twitter", handle: "@Malala", followers: 2900000, url: "#" },
      { platform: "Instagram", handle: "@malala", followers: 2300000, url: "#" },
      { platform: "Facebook", handle: "MalalaFund", followers: 1500000, url: "#" }
    ],
    achievements: [
      { title: "Nobel Peace Prize", date: "2014", description: "Youngest-ever Nobel Prize laureate" },
      { title: "UN Messenger of Peace", date: "2017", description: "Designated with a special focus on girls' education" },
      { title: "Oxford University Graduate", date: "2020", description: "Earned a degree in Philosophy, Politics and Economics" }
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
