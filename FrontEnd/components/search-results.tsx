"use client"

import Link from "next/link"
import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"

const searchResults = [
  {
    id: "1",
    title: "How to Build a YouTube Clone with Next.js and Tailwind CSS - Complete Tutorial",
    channel: "Tech Tutorials",
    views: "1.2M views",
    timestamp: "2 days ago",
    duration: "15:30",
    thumbnail: "/coding-tutorial.png",
    description:
      "In this comprehensive tutorial, we'll build a complete YouTube clone using Next.js 14, Tailwind CSS, and modern React patterns. You'll learn responsive layouts, video players, routing, and more.",
  },
  {
    id: "2",
    title: "React 18 New Features Explained - Concurrent Rendering, Suspense, and More",
    channel: "React Academy",
    views: "850K views",
    timestamp: "1 week ago",
    duration: "12:45",
    thumbnail: "/react-programming.png",
    description:
      "Explore the latest features in React 18 including concurrent rendering, automatic batching, new Suspense features, and the new strict mode behaviors.",
  },
  {
    id: "3",
    title: "10 JavaScript Tips Every Developer Should Know in 2024",
    channel: "Code Masters",
    views: "2.1M views",
    timestamp: "3 days ago",
    duration: "18:22",
    thumbnail: "/javascript-tips.jpg",
    description:
      "Discover essential JavaScript tips and tricks that will make you a more efficient developer. From ES6+ features to performance optimization techniques.",
  },
  {
    id: "4",
    title: "CSS Grid vs Flexbox: When to Use Each Layout Method",
    channel: "Design Dev",
    views: "650K views",
    timestamp: "5 days ago",
    duration: "14:15",
    thumbnail: "/css-layout-design.jpg",
    description:
      "Learn the differences between CSS Grid and Flexbox, when to use each layout method, and see practical examples of both in action.",
  },
]

export function SearchResults() {
  const getAvatarColor = (channelName: string) => {
    const colors = [
      "bg-blue-600",
      "bg-green-600",
      "bg-red-600",
      "bg-yellow-600",
      "bg-indigo-600",
      "bg-purple-600",
      "bg-teal-600",
      "bg-orange-600",
    ]
    const index = channelName.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <p className="text-sm text-gray-600">About 1,240,000 results (0.45 seconds)</p>
      </div>

      <div className="space-y-4">
        {searchResults.map((video) => (
          <div key={video.id} className="flex gap-4 group">
            <Link href={`/watch?v=${video.id}`} className="flex-shrink-0">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-80 h-48 object-cover rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
            </Link>

            <div className="flex-1 min-w-0">
              <Link href={`/watch?v=${video.id}`}>
                <h3 className="font-medium text-lg line-clamp-2 text-blue-600 hover:text-blue-800 mb-1">
                  {video.title}
                </h3>
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <span>{video.views}</span>
                <span>•</span>
                <span>{video.timestamp}</span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-6 h-6 ${getAvatarColor(video.channel)} rounded-full flex items-center justify-center text-white text-xs font-medium`}
                >
                  {video.channel.charAt(0)}
                </div>
                <span className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer">{video.channel}</span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 flex-shrink-0"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
