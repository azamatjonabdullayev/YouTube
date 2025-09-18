"use client"

import Link from "next/link"

const relatedVideos = [
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
]

export function RelatedVideos() {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Up next</h3>

      <div className="space-y-3">
        {relatedVideos.map((video) => (
          <Link key={video.id} href={`/watch?v=${video.id}`}>
            <div className="flex gap-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
              <div className="relative flex-shrink-0">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-40 h-24 object-cover rounded-lg"
                />
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2 text-gray-900 mb-1">{video.title}</h4>
                <p className="text-xs text-gray-600 mb-1">{video.channel}</p>
                <p className="text-xs text-gray-600">
                  {video.views} • {video.timestamp}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
