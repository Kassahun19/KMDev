export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface TimelineItem {
  id: number;
  period: string;
  title: string;
  institution: string;
  description: string;
}

export interface Theme {
  name: string;
  primary: string; // RGB values like "37 99 235"
  color: string; // Hex for UI display
}