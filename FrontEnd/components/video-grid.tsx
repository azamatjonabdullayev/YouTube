"use client"

import { VideoCard } from "./video-card"

const mockVideos = [
  {
    id: "1",
    title: "How to Build a YouTube Clone with Next.js and Tailwind CSS",
    channel: "Tech Tutorials",
    views: "1.2M views",
    timestamp: "2 days ago",
    duration: "15:30",
    thumbnail: "/coding-tutorial.png",
  },
  {
    id: "2",
    title: "React 18 New Features Explained",
    channel: "React Academy",
    views: "850K views",
    timestamp: "1 week ago",
    duration: "12:45",
    thumbnail: "/react-programming.png",
  },
  {
    id: "3",
    title: "10 JavaScript Tips Every Developer Should Know",
    channel: "Code Masters",
    views: "2.1M views",
    timestamp: "3 days ago",
    duration: "18:22",
    thumbnail: "/javascript-tips.jpg",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use Each",
    channel: "Design Dev",
    views: "650K views",
    timestamp: "5 days ago",
    duration: "14:15",
    thumbnail: "/css-layout-design.jpg",
  },
  {
    id: "5",
    title: "Building a Full Stack App with TypeScript",
    channel: "Full Stack Pro",
    views: "920K views",
    timestamp: "1 week ago",
    duration: "25:40",
    thumbnail: "/typescript-fullstack.jpg",
  },
  {
    id: "6",
    title: "Node.js Performance Optimization Techniques",
    channel: "Backend Guru",
    views: "480K views",
    timestamp: "4 days ago",
    duration: "20:18",
    thumbnail: "/nodejs-performance.jpg",
  },
  {
    id: "7",
    title: "Modern Web Development Workflow 2024",
    channel: "Dev Workflow",
    views: "1.5M views",
    timestamp: "1 day ago",
    duration: "22:35",
    thumbnail: "/web-development-workflow.jpg",
  },
  {
    id: "8",
    title: "Database Design Best Practices",
    channel: "Data Expert",
    views: "750K views",
    timestamp: "6 days ago",
    duration: "16:50",
    thumbnail: "/database-design-concept.png",
  },
  {
    id: "9",
    title: "API Security: Protecting Your Endpoints",
    channel: "Security First",
    views: "380K views",
    timestamp: "2 weeks ago",
    duration: "19:25",
    thumbnail: "/api-security.jpg",
  },
  {
    id: "10",
    title: "Docker for Beginners: Complete Guide",
    channel: "DevOps Academy",
    views: "1.8M views",
    timestamp: "3 weeks ago",
    duration: "28:15",
    thumbnail: "/docker-containers.jpg",
  },
  {
    id: "11",
    title: "Advanced React Patterns and Techniques",
    channel: "React Masters",
    views: "620K views",
    timestamp: "1 week ago",
    duration: "24:30",
    thumbnail: "/advanced-react-patterns.jpg",
  },
  {
    id: "12",
    title: "Git Workflow for Teams: Best Practices",
    channel: "Version Control",
    views: "890K views",
    timestamp: "5 days ago",
    duration: "17:40",
    thumbnail: "/git-workflow-team.jpg",
  },
]

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {mockVideos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  )
}
