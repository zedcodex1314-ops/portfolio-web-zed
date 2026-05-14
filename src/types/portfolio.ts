export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  websiteUrl: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  iconUrl: string;
  sortOrder: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  demoUrl: string;
  repoUrl: string;
  techStack: string[];
  featured: boolean;
  sortOrder: number;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  companyLogoUrl: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  sortOrder: number;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  logoUrl: string;
  startDate: string;
  endDate: string;
  description: string;
  sortOrder: number;
}

export interface Message {
  name: string;
  email: string;
  subject: string;
  body: string;
}

export interface ContactResponse {
  success: true;
}
