export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  discount?: number;
  rating: number;
  studentsCount: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
  };
  image: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessonsCount?: number;
  resourcesCount?: number;
  topics?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export const CATEGORIES = [
  'Data Science',
  'Business Intelligence',
  'Artificial Intelligence',
  'Cloud Computing',
  'Data Engineering'
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Emily Chen',
    role: 'Data Analyst',
    company: 'TechFlow Solutions',
    content: "MasterData Ascend transformed my career. The project-based approach gave me the confidence to handle real-world datasets that I use daily in my new role.",
    avatar: 'https://picsum.photos/seed/user1/100/100',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Senior Engineer',
    company: 'Nexus Systems',
    content: "The AI-driven recommendations are spot on. It saved me hours of searching for the right course and kept me on a logical progression path.",
    avatar: 'https://picsum.photos/seed/user2/100/100',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sophia Rodriguez',
    role: 'ML Specialist',
    company: 'Global AI Lab',
    content: "High-quality production and expert instructors. This isn't just another tutorial site; it's a comprehensive career accelerator for serious professionals.",
    avatar: 'https://picsum.photos/seed/user3/100/100',
    rating: 4
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Mastering Python for Data Science',
    description: 'Learn the core foundations of Python specifically for data manipulation and visualization. This course takes you from zero to hero in data analysis.',
    category: 'Data Science',
    price: 89.99,
    discount: 50,
    rating: 4.8,
    studentsCount: 12450,
    instructor: {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Data Scientist',
      avatar: 'https://picsum.photos/seed/inst1/200/200',
      bio: 'Dr. Johnson is a leading expert in computational statistics with over 15 years of experience at top-tier tech firms.'
    },
    image: 'https://picsum.photos/seed/ds1/600/400',
    duration: '24h 30m',
    level: 'Beginner',
    lessonsCount: 145,
    resourcesCount: 15,
    topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Visualization', 'Statistical Analysis', 'Real-world Projects']
  },
  {
    id: 'course-2',
    title: 'Advanced Machine Learning with PyTorch',
    description: 'Deep dive into neural networks and cutting-edge machine learning architectures. Master the frameworks used by industry giants.',
    category: 'Artificial Intelligence',
    price: 129.99,
    discount: 40,
    rating: 4.9,
    studentsCount: 8200,
    instructor: {
      name: 'Michael Chen',
      role: 'AI Researcher',
      avatar: 'https://picsum.photos/seed/inst2/200/200',
      bio: 'Michael is an AI researcher specializing in deep learning architectures and computer vision.'
    },
    image: 'https://picsum.photos/seed/ai1/600/400',
    duration: '32h 15m',
    level: 'Advanced',
    lessonsCount: 180,
    resourcesCount: 22,
    topics: ['Deep Learning', 'Neural Networks', 'CNNs & RNNs', 'Model Deployment', 'Optimization']
  },
  {
    id: 'course-3',
    title: 'Tableau for Business Intelligence',
    description: 'Become an expert at visualizing complex business data using industry-standard tools. Transform data into actionable insights.',
    category: 'Business Intelligence',
    price: 74.99,
    rating: 4.7,
    studentsCount: 5600,
    instructor: {
      name: 'Emma Williams',
      role: 'BI Consultant',
      avatar: 'https://picsum.photos/seed/inst3/200/200',
      bio: 'Emma has consulted for Fortune 500 companies on their data strategy and visualization pipelines.'
    },
    image: 'https://picsum.photos/seed/excel1/600/400',
    duration: '18h 45m',
    level: 'Intermediate',
    lessonsCount: 95,
    resourcesCount: 10,
    topics: ['Tableau Fundamentals', 'Dashboard Design', 'Data Connections', 'Advanced Analytics', 'Business Storytelling']
  },
  {
    id: 'course-4',
    title: 'AWS Certified Data Analytics Specialist',
    description: 'Prepare for the AWS certification with comprehensive coverage of cloud data services. Build scalable cloud solutions.',
    category: 'Cloud Computing',
    price: 149.99,
    discount: 40,
    rating: 4.9,
    studentsCount: 3100,
    instructor: {
      name: 'David Miller',
      role: 'Cloud Architect',
      avatar: 'https://picsum.photos/seed/inst4/200/200',
      bio: 'David is a certified AWS Solutions Architect with a passion for teaching cloud-native data patterns.'
    },
    image: 'https://picsum.photos/seed/cloud1/600/400',
    duration: '40h 0m',
    level: 'Advanced',
    lessonsCount: 210,
    resourcesCount: 30,
    topics: ['AWS S3 & Glue', 'Redshift Architecture', 'Kinesis Real-time', 'Athena Queries', 'Security Best Practices']
  },
  {
    id: 'course-5',
    title: 'Data Engineering with Apache Spark',
    description: 'Learn to build scalable data pipelines and handle massive datasets efficiently using the power of Spark.',
    category: 'Data Engineering',
    price: 99.99,
    rating: 4.6,
    studentsCount: 4200,
    instructor: {
      name: 'James Wilson',
      role: 'Data Engineer',
      avatar: 'https://picsum.photos/seed/inst5/200/200',
      bio: 'James has architected data lakes for massive consumer platforms using Spark and Scala.'
    },
    image: 'https://picsum.photos/seed/spark1/600/400',
    duration: '22h 10m',
    level: 'Intermediate',
    lessonsCount: 110,
    resourcesCount: 12,
    topics: ['Spark Core', 'DataFrames API', 'Spark SQL', 'Streaming Data', 'Performance Tuning']
  },
  {
    id: 'course-6',
    title: 'Statistical Analysis with R',
    description: 'Master statistical modeling and hypothesis testing using the R programming language for rigorous data science.',
    category: 'Data Science',
    price: 69.99,
    discount: 50,
    rating: 4.5,
    studentsCount: 7800,
    instructor: {
      name: 'Dr. Sarah Johnson',
      role: 'Senior Data Scientist',
      avatar: 'https://picsum.photos/seed/inst1/200/200'
    },
    image: 'https://picsum.photos/seed/stats1/600/400',
    duration: '15h 20m',
    level: 'Intermediate',
    lessonsCount: 85,
    resourcesCount: 8,
    topics: ['Probability', 'Linear Regression', 'Hypothesis Testing', 'Tidyverse', 'Machine Learning Basics']
  }
];