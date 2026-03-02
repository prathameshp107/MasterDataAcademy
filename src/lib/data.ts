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
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'Senior Engineer',
    company: 'Nexus Systems',
    content: "The AI-driven recommendations are spot on. It saved me hours of searching for the right course and kept me on a logical progression path.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't3',
    name: 'Sophia Rodriguez',
    role: 'ML Specialist',
    company: 'Global AI Lab',
    content: "High-quality production and expert instructors. This isn't just another tutorial site; it's a comprehensive career accelerator for serious professionals.",
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
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
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHdvbWFufGVufDB8fHx8MTc3MjE0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Johnson is a leading expert in computational statistics with over 15 years of experience at top-tier tech firms.'
    },
    image: 'https://images.unsplash.com/photo-1625535069654-cfeb8f829088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkYXRhJTIwc2NpZW5jZXxlbnwwfHx8fDE3NzIyMDE5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
      avatar: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwcm9mZXNzaW9uYWwlMjBwZXJzb258ZW58MHx8fHwxNzcyMTM1NjUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Michael is an AI researcher specializing in deep learning architectures and computer vision.'
    },
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc3MjE5Mzk3OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop',
      bio: 'Emma has consulted for Fortune 500 companies on their data strategy and visualization pipelines.'
    },
    image: 'https://images.unsplash.com/photo-1567193729952-23830c0743ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxidXNpbmVzcyUyMHNwcmVhZHNoZWV0fGVufDB8fHx8MTc3MjIxNzEyNXww&ixlib=rb-4.1.0&q=80&w=1080',
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
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
      bio: 'David is a certified AWS Solutions Architect with a passion for teaching cloud-native data patterns.'
    },
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&w=800&auto=format&fit=crop',
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
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHdvbWFufGVufDB8fHx8MTc3MjE0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop',
    duration: '15h 20m',
    level: 'Intermediate',
    lessonsCount: 85,
    resourcesCount: 8,
    topics: ['Probability', 'Linear Regression', 'Hypothesis Testing', 'Tidyverse', 'Machine Learning Basics']
  }
];