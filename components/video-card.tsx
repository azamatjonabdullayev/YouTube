"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

interface VideoCardProps {
  id: string
  title: string
  channel: string
  views: string
  timestamp: string
  duration: string
  thumbnail: string
}

export function VideoCard({ id, title, channel, views, timestamp, duration, thumbnail }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

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
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/watch?v=${id}`}>
        <div className="relative mb-3">
          <img
            src={thumbnail || "/placeholder.svg"}
            alt={title}
            className="w-full aspect-video object-cover rounded-lg transition-all duration-200 group-hover:rounded-none"
          />
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
            {duration}
          </div>
        </div>
      </Link>

      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div
            className={`w-9 h-9 ${getAvatarColor(channel)} rounded-full flex items-center justify-center text-white font-medium text-sm`}
          >
            {channel.charAt(0)}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <Link href={`/watch?v=${id}`}>
            <h3 className="font-medium text-sm line-clamp-2 text-gray-900 group-hover:text-gray-700 mb-1">{title}</h3>
          </Link>
          <p className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer mb-1">{channel}</p>
          <p className="text-sm text-gray-600">
            {views} • {timestamp}
          </p>
        </div>

        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
