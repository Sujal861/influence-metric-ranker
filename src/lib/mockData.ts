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
    imageUrl: "https://images.unsplash.com/photo-1670348277276-8e9a75d3bd20?q=80&w=2187&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1682687982093-4dbdfb96dbf4?q=80&w=1974&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1649524834212-e2c76ad6a1e3?q=80&w=1974&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1546084866-5f69ae8e5a8c?q=80&w=1974&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1649261191626-1756a803ac1d?q=80&w=1964&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1588599336853-a4779144fe8f?q=80&w=1974&auto=format&fit=crop",
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
  },
  {
    id: "7",
    name: "Beyoncé Knowles-Carter",
    imageUrl: "https://images.unsplash.com/photo-1661630803143-e28270b7bf64?q=80&w=1974&auto=format&fit=crop",
    title: "Global Music Superstar & Entrepreneur",
    biography: "Beyoncé is one of the world's best-selling recording artists, known for her powerful vocals, groundbreaking visual albums, and cultural impact. Beyond music, she's built a business empire spanning fashion, film, and more.",
    metrics: {
      influence: { value: 97, change: 6, timeFrame: "month" },
      credibility: { value: 94, change: 3, timeFrame: "month" },
      relevance: { value: 96, change: 5, timeFrame: "month" },
      consistency: { value: 92, change: 1, timeFrame: "month" },
      engagement: { value: 95, change: 7, timeFrame: "month" }
    },
    categories: ["Music", "Fashion", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@beyonce", followers: 315000000, url: "#" },
      { platform: "Twitter", handle: "@Beyonce", followers: 15600000, url: "#" },
      { platform: "Facebook", handle: "beyonce", followers: 62000000, url: "#" }
    ],
    achievements: [
      { title: "32 Grammy Awards", date: "2023", description: "Most Grammy wins by any artist in history" },
      { title: "Renaissance World Tour", date: "2023", description: "Highest-grossing tour by a female artist" },
      { title: "Ivy Park Launch", date: "2016", description: "Created successful athleisure clothing line" }
    ]
  },
  {
    id: "8",
    name: "Shah Rukh Khan",
    imageUrl: "https://images.unsplash.com/photo-1669275146956-0b06ad2c7790?q=80&w=1974&auto=format&fit=crop",
    title: "Bollywood Icon & Global Film Star",
    biography: "Known as the 'King of Bollywood', Shah Rukh Khan is one of the most successful film stars in the world with a career spanning over three decades. His influence extends beyond film to business, philanthropy, and global cultural diplomacy.",
    metrics: {
      influence: { value: 94, change: 2, timeFrame: "month" },
      credibility: { value: 93, change: 1, timeFrame: "month" },
      relevance: { value: 92, change: 4, timeFrame: "month" },
      consistency: { value: 91, change: 0, timeFrame: "month" },
      engagement: { value: 96, change: 8, timeFrame: "month" }
    },
    categories: ["Film", "Business", "Philanthropy"],
    socialProfiles: [
      { platform: "Twitter", handle: "@iamsrk", followers: 42700000, url: "#" },
      { platform: "Instagram", handle: "@iamsrk", followers: 44000000, url: "#" },
      { platform: "Facebook", handle: "iamsrk", followers: 42500000, url: "#" }
    ],
    achievements: [
      { title: "Padma Shri Award", date: "2005", description: "India's fourth highest civilian honor" },
      { title: "Red Chillies Entertainment", date: "2003", description: "Founded successful film production company and VFX studio" },
      { title: "Ordre des Arts et des Lettres", date: "2014", description: "Awarded by the French government for contribution to the arts" }
    ]
  },
  {
    id: "9",
    name: "Dwayne 'The Rock' Johnson",
    imageUrl: "https://images.unsplash.com/photo-1633886038251-66912d7d5f70?q=80&w=1632&auto=format&fit=crop",
    title: "Actor, Producer & Former Wrestler",
    biography: "Dwayne Johnson transitioned from a successful wrestling career as 'The Rock' to become one of Hollywood's highest-grossing and most influential actors. His business ventures span entertainment, fitness, and consumer goods.",
    metrics: {
      influence: { value: 93, change: 4, timeFrame: "month" },
      credibility: { value: 91, change: 2, timeFrame: "month" },
      relevance: { value: 94, change: 3, timeFrame: "month" },
      consistency: { value: 92, change: 1, timeFrame: "month" },
      engagement: { value: 96, change: 5, timeFrame: "month" }
    },
    categories: ["Entertainment", "Fitness", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@therock", followers: 389000000, url: "#" },
      { platform: "Twitter", handle: "@TheRock", followers: 16900000, url: "#" },
      { platform: "Facebook", handle: "DwayneJohnson", followers: 58000000, url: "#" }
    ],
    achievements: [
      { title: "Highest-Paid Actor", date: "2020", description: "Named by Forbes as Hollywood's highest-paid actor" },
      { title: "Teremana Tequila", date: "2020", description: "Founded fastest-growing spirits brand in industry history" },
      { title: "Seven Bucks Productions", date: "2012", description: "Co-founded successful production company" }
    ]
  },
  {
    id: "10",
    name: "Rihanna",
    imageUrl: "https://images.unsplash.com/photo-1679686255657-fd5a2c734ff8?q=80&w=1974&auto=format&fit=crop",
    title: "Music Artist, Beauty Mogul & Entrepreneur",
    biography: "Beyond her successful music career, Rihanna has revolutionized the beauty and fashion industries with Fenty Beauty and Savage X Fenty, creating inclusive products that cater to diverse markets often overlooked by traditional brands.",
    metrics: {
      influence: { value: 96, change: 5, timeFrame: "month" },
      credibility: { value: 93, change: 2, timeFrame: "month" },
      relevance: { value: 95, change: 4, timeFrame: "month" },
      consistency: { value: 89, change: -1, timeFrame: "month" },
      engagement: { value: 94, change: 3, timeFrame: "month" }
    },
    categories: ["Music", "Beauty", "Fashion"],
    socialProfiles: [
      { platform: "Instagram", handle: "@badgalriri", followers: 150000000, url: "#" },
      { platform: "Twitter", handle: "@rihanna", followers: 106000000, url: "#" },
      { platform: "Facebook", handle: "rihanna", followers: 95000000, url: "#" }
    ],
    achievements: [
      { title: "Billionaire Status", date: "2021", description: "Became billionaire through music and entrepreneurship" },
      { title: "Fenty Beauty", date: "2017", description: "Revolutionized beauty industry with 40+ foundation shades" },
      { title: "LVMH Partnership", date: "2019", description: "First black woman to head a luxury brand for LVMH" }
    ]
  },
  {
    id: "11",
    name: "BTS",
    imageUrl: "https://images.unsplash.com/photo-1682962134382-34f4e2de5244?q=80&w=1974&auto=format&fit=crop",
    title: "Global K-pop Phenomenon",
    biography: "BTS has transcended cultural and language barriers to become one of the world's most influential music acts. Their impact extends beyond music to philanthropy, mental health advocacy, and cultural diplomacy.",
    metrics: {
      influence: { value: 98, change: 8, timeFrame: "month" },
      credibility: { value: 94, change: 4, timeFrame: "month" },
      relevance: { value: 97, change: 6, timeFrame: "month" },
      consistency: { value: 95, change: 2, timeFrame: "month" },
      engagement: { value: 99, change: 9, timeFrame: "month" }
    },
    categories: ["Music", "Social Impact", "Culture"],
    socialProfiles: [
      { platform: "Twitter", handle: "@BTS_twt", followers: 69000000, url: "#" },
      { platform: "Instagram", handle: "@bts.bighitofficial", followers: 79000000, url: "#" },
      { platform: "YouTube", handle: "BANGTANTV", followers: 73000000, url: "#" }
    ],
    achievements: [
      { title: "UN General Assembly", date: "2021", description: "Addressed world leaders as Special Presidential Envoys for South Korea" },
      { title: "Billboard Hot 100", date: "2020", description: "First Korean act to reach #1 on the US charts" },
      { title: "Grammy Nomination", date: "2021", description: "First K-pop group nominated for a Grammy Award" }
    ]
  },
  {
    id: "12",
    name: "Serena Williams",
    imageUrl: "https://images.unsplash.com/photo-1661268129385-1440ea821c51?q=80&w=1974&auto=format&fit=crop",
    title: "Tennis Legend & Business Pioneer",
    biography: "Serena Williams has dominated women's tennis with 23 Grand Slam singles titles. Beyond sports, she's a venture capitalist, fashion designer, and advocate for women's rights and equality.",
    metrics: {
      influence: { value: 92, change: 1, timeFrame: "month" },
      credibility: { value: 96, change: 2, timeFrame: "month" },
      relevance: { value: 90, change: -1, timeFrame: "month" },
      consistency: { value: 95, change: 0, timeFrame: "month" },
      engagement: { value: 88, change: 2, timeFrame: "month" }
    },
    categories: ["Sports", "Business", "Fashion"],
    socialProfiles: [
      { platform: "Instagram", handle: "@serenawilliams", followers: 17000000, url: "#" },
      { platform: "Twitter", handle: "@serenawilliams", followers: 10600000, url: "#" },
      { platform: "Facebook", handle: "SerenaWilliams", followers: 6500000, url: "#" }
    ],
    achievements: [
      { title: "23 Grand Slam Singles Titles", date: "2017", description: "Open Era record for most major wins" },
      { title: "Serena Ventures", date: "2014", description: "Venture capital firm focused on diverse founders" },
      { title: "S by Serena", date: "2018", description: "Launched inclusive fashion line" }
    ]
  },
  {
    id: "13",
    name: "Mark Zuckerberg",
    imageUrl: "https://images.unsplash.com/photo-1614308456595-a51c200c6ee5?q=80&w=1974&auto=format&fit=crop",
    title: "Tech CEO & Meta Founder",
    biography: "Mark Zuckerberg co-founded Facebook in 2004, which evolved into Meta Platforms, Inc. His vision has shaped social media, digital communication, and more recently, efforts to build the metaverse.",
    metrics: {
      influence: { value: 95, change: 3, timeFrame: "month" },
      credibility: { value: 82, change: -3, timeFrame: "month" },
      relevance: { value: 93, change: 2, timeFrame: "month" },
      consistency: { value: 88, change: -1, timeFrame: "month" },
      engagement: { value: 89, change: 1, timeFrame: "month" }
    },
    categories: ["Technology", "Business", "Digital"],
    socialProfiles: [
      { platform: "Facebook", handle: "zuck", followers: 119000000, url: "#" },
      { platform: "Instagram", handle: "@zuck", followers: 12000000, url: "#" },
      { platform: "Twitter", handle: "@finkd", followers: 500000, url: "#" }
    ],
    achievements: [
      { title: "Facebook/Meta Growth", date: "2023", description: "Built platform with over 3 billion monthly active users" },
      { title: "Chan Zuckerberg Initiative", date: "2015", description: "Pledged to give 99% of Facebook shares to charity" },
      { title: "Metaverse Vision", date: "2021", description: "Rebranded company to focus on building the metaverse" }
    ]
  },
  {
    id: "14",
    name: "Lionel Messi",
    imageUrl: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aab?q=80&w=1974&auto=format&fit=crop",
    title: "Football Icon & Global Sports Legend",
    biography: "Widely regarded as one of the greatest footballers of all time, Lionel Messi has set numerous records throughout his career with Barcelona, Paris Saint-Germain, Inter Miami, and the Argentina national team.",
    metrics: {
      influence: { value: 96, change: 4, timeFrame: "month" },
      credibility: { value: 95, change: 2, timeFrame: "month" },
      relevance: { value: 94, change: 5, timeFrame: "month" },
      consistency: { value: 97, change: 1, timeFrame: "month" },
      engagement: { value: 93, change: 3, timeFrame: "month" }
    },
    categories: ["Sports", "Philanthropy", "Business"],
    socialProfiles: [
      { platform: "Instagram", handle: "@leomessi", followers: 493000000, url: "#" },
      { platform: "Facebook", handle: "leomessi", followers: 105000000, url: "#" },
      { platform: "Twitter", handle: "@TeamMessi", followers: 3000000, url: "#" }
    ],
    achievements: [
      { title: "World Cup Champion", date: "2022", description: "Led Argentina to victory in the FIFA World Cup" },
      { title: "8 Ballon d'Or Awards", date: "2023", description: "Record for most wins of football's highest individual honor" },
      { title: "Leo Messi Foundation", date: "2007", description: "Founded organization supporting children's health and education" }
    ]
  },
  {
    id: "15",
    name: "Michelle Obama",
    imageUrl: "https://images.unsplash.com/photo-1655679152783-f4d22a0a7298?q=80&w=1964&auto=format&fit=crop",
    title: "Former First Lady & Global Advocate",
    biography: "Michelle Obama served as First Lady of the United States from 2009 to 2017. Since then, she has continued her advocacy work in education, health, and empowerment through books, speaking engagements, and the Obama Foundation.",
    metrics: {
      influence: { value: 93, change: 2, timeFrame: "month" },
      credibility: { value: 96, change: 3, timeFrame: "month" },
      relevance: { value: 91, change: 1, timeFrame: "month" },
      consistency: { value: 94, change: 0, timeFrame: "month" },
      engagement: { value: 89, change: 2, timeFrame: "month" }
    },
    categories: ["Leadership", "Education", "Advocacy"],
    socialProfiles: [
      { platform: "Instagram", handle: "@michelleobama", followers: 55000000, url: "#" },
      { platform: "Twitter", handle: "@MichelleObama", followers: 22000000, url: "#" },
      { platform: "Facebook", handle: "MichelleObama", followers: 19000000, url: "#" }
    ],
    achievements: [
      { title: "Becoming", date: "2018", description: "Memoir became one of the best-selling books of all time" },
      { title: "Let's Move! Initiative", date: "2010", description: "Campaign to reduce childhood obesity" },
      { title: "Girls Opportunity Alliance", date: "2018", description: "Program supporting girls' education worldwide" }
    ]
  },
  {
    id: "16",
    name: "Lady Gaga",
    imageUrl: "https://images.unsplash.com/photo-1626199861599-406cb7da4ed5?q=80&w=1974&auto=format&fit=crop",
    title: "Music Innovator & Social Activist",
    biography: "Lady Gaga has transformed pop music with her innovative artistic vision. Beyond music, she's an acclaimed actress, beauty entrepreneur, and dedicated advocate for mental health awareness and LGBTQ+ rights.",
    metrics: {
      influence: { value: 92, change: 3, timeFrame: "month" },
      credibility: { value: 90, change: 2, timeFrame: "month" },
      relevance: { value: 89, change: 1, timeFrame: "month" },
      consistency: { value: 87, change: -1, timeFrame: "month" },
      engagement: { value: 91, change: 4, timeFrame: "month" }
    },
    categories: ["Music", "Film", "Activism"],
    socialProfiles: [
      { platform: "Instagram", handle: "@ladygaga", followers: 55000000, url: "#" },
      { platform: "Twitter", handle: "@ladygaga", followers: 85000000, url: "#" },
      { platform: "Facebook", handle: "ladygaga", followers: 54000000, url: "#" }
    ],
    achievements: [
      { title: "Academy Award Winner", date: "2019", description: "Won Oscar for Best Original Song for 'Shallow'" },
      { title: "Born This Way Foundation", date: "2012", description: "Co-founded organization to support youth mental health" },
      { title: "Haus Labs", date: "2019", description: "Launched successful vegan and cruelty-free beauty brand" }
    ]
  },
  {
    id: "17",
    name: "Priyanka Chopra Jonas",
    imageUrl: "https://images.unsplash.com/photo-1626804475297-41608ea09bca?q=80&w=1970&auto=format&fit=crop",
    title: "Actress, Producer & Entrepreneur",
    biography: "Priyanka Chopra Jonas began her career as a Miss World winner before becoming one of India's highest-paid actresses. She successfully transitioned to Hollywood, while building businesses and engaging in humanitarian work.",
    metrics: {
      influence: { value: 89, change: 3, timeFrame: "month" },
      credibility: { value: 87, change: 1, timeFrame: "month" },
      relevance: { value: 88, change: 2, timeFrame: "month" },
      consistency: { value: 85, change: -1, timeFrame: "month" },
      engagement: { value: 90, change: 4, timeFrame: "month" }
    },
    categories: ["Entertainment", "Business", "Philanthropy"],
    socialProfiles: [
      { platform: "Instagram", handle: "@priyankachopra", followers: 89000000, url: "#" },
      { platform: "Twitter", handle: "@priyankachopra", followers: 30000000, url: "#" },
      { platform: "Facebook", handle: "priyankachopra", followers: 39000000, url: "#" }
    ],
    achievements: [
      { title: "UNICEF Goodwill Ambassador", date: "2016", description: "Works globally for children's rights and education" },
      { title: "The Mary Kom", date: "2014", description: "National Film Award for biographical sports film" },
      { title: "Anomaly Haircare", date: "2021", description: "Founded sustainable haircare brand" }
    ]
  },
  {
    id: "18",
    name: "Billie Eilish",
    imageUrl: "https://images.unsplash.com/photo-1621784166258-c6fdfff29148?q=80&w=1974&auto=format&fit=crop",
    title: "Groundbreaking Musician & Gen Z Voice",
    biography: "Billie Eilish rose to fame at a young age with her distinctive musical style and aesthetic. She has broken numerous records while using her platform to advocate for environmental causes, body positivity, and mental health awareness.",
    metrics: {
      influence: { value: 94, change: 6, timeFrame: "month" },
      credibility: { value: 90, change: 3, timeFrame: "month" },
      relevance: { value: 95, change: 5, timeFrame: "month" },
      consistency: { value: 88, change: 2, timeFrame: "month" },
      engagement: { value: 96, change: 7, timeFrame: "month" }
    },
    categories: ["Music", "Fashion", "Activism"],
    socialProfiles: [
      { platform: "Instagram", handle: "@billieeilish", followers: 110000000, url: "#" },
      { platform: "TikTok", handle: "@billieeilish", followers: 49000000, url: "#" },
      { platform: "YouTube", handle: "Billie Eilish", followers: 48000000, url: "#" }
    ],
    achievements: [
      { title: "7 Grammy Awards", date: "2020", description: "Won all four major categories in a single year" },
      { title: "Oscar Winner", date: "2022", description: "Academy Award for 'No Time To Die' theme song" },
      { title: "Climate Campaign", date: "2021", description: "Launched 'Overheated' climate action initiative" }
    ]
  },
  {
    id: "19",
    name: "Jack Ma",
    imageUrl: "https://images.unsplash.com/photo-1536749305881-4e5149c28eac?q=80&w=1974&auto=format&fit=crop",
    title: "E-commerce Pioneer & Philanthropist",
    biography: "Jack Ma co-founded Alibaba Group, revolutionizing e-commerce in China and globally. Despite stepping back from business leadership, his influence continues through philanthropy and educational initiatives.",
    metrics: {
      influence: { value: 88, change: -2, timeFrame: "month" },
      credibility: { value: 84, change: -3, timeFrame: "month" },
      relevance: { value: 83, change: -4, timeFrame: "month" },
      consistency: { value: 81, change: -2, timeFrame: "month" },
      engagement: { value: 77, change: -5, timeFrame: "month" }
    },
    categories: ["Business", "Technology", "Education"],
    socialProfiles: [
      { platform: "Weibo", handle: "@马云", followers: 26000000, url: "#" },
      { platform: "Twitter", handle: "@JackMa", followers: 680000, url: "#" },
      { platform: "LinkedIn", handle: "Jack Ma", followers: 3000000, url: "#" }
    ],
    achievements: [
      { title: "Alibaba IPO", date: "2014", description: "Largest IPO in history at time of listing" },
      { title: "Jack Ma Foundation", date: "2014", description: "Focuses on education, entrepreneurship, and environment" },
      { title: "Africa Netpreneur Prize", date: "2018", description: "Initiative supporting African entrepreneurs" }
    ]
  },
  {
    id: "20",
    name: "Angelina Jolie",
    imageUrl: "https://images.unsplash.com/photo-1593878596127-8f4ff3ab6f1a?q=80&w=1974&auto=format&fit=crop",
    title: "Actress, Filmmaker & Humanitarian",
    biography: "Angelina Jolie has balanced an award-winning acting career with humanitarian work and advocacy. As a UNHCR Special Envoy and through various initiatives, she has brought attention to refugee issues, education, and women's rights globally.",
    metrics: {
      influence: { value: 90, change: 1, timeFrame: "month" },
      credibility: { value: 92, change: 2, timeFrame: "month" },
      relevance: { value: 87, change: -1, timeFrame: "month" },
      consistency: { value: 93, change: 0, timeFrame: "month" },
      engagement: { value: 86, change: 1, timeFrame: "month" }
    },
    categories: ["Film", "Humanitarian", "Advocacy"],
    socialProfiles: [
      { platform: "Instagram", handle: "@angelinajolie", followers: 14000000, url: "#" },
      { platform: "Facebook", handle: "AngelinaJolie", followers: 7900000, url: "#" },
      { platform: "Twitter", handle: "@ajolieofficial", followers: 3500000, url: "#" }
    ],
    achievements: [
      { title: "Jean Hersholt Humanitarian Award", date: "2013", description: "Academy Award for humanitarian efforts" },
      { title: "UNHCR Special Envoy", date: "2012", description: "Promoted refugee rights in over 30 field missions" },
      { title: "Preventing Sexual Violence Initiative", date: "2012", description: "Co-founded with UK Foreign Office to combat wartime sexual violence" }
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

export const getTopInfluencers = (limit: number = 20): Influencer[] => {
  return [...mockInfluencers]
    .sort((a, b) => b.metrics.influence.value - a.metrics.influence.value)
    .slice(0, limit);
};

export const getTrendingInfluencers = (limit: number = 20): Influencer[] => {
  return [...mockInfluencers]
    .sort((a, b) => b.metrics.influence.change - a.metrics.influence.change)
    .slice(0, limit);
};

export const getCategories = (): string[] => {
  const allCategories = mockInfluencers.flatMap(influencer => influencer.categories);
  return [...new Set(allCategories)].sort();
};
