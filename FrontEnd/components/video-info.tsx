"use client"

import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function VideoInfo() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [likeCount, setLikeCount] = useState(12000)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikeCount((prev) => prev - 1)
    } else {
      setLiked(true)
      setDisliked(false)
      setLikeCount((prev) => prev + 1)
    }
  }

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false)
    } else {
      setDisliked(true)
      if (liked) {
        setLiked(false)
        setLikeCount((prev) => prev - 1)
      }
    }
  }

  return (
    <div className="mb-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-2">
        How to Build a YouTube Clone with Next.js and Tailwind CSS
      </h1>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">1,234,567 views</span>
          <span className="text-sm text-gray-600">Dec 15, 2023</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100 rounded-full">
            <Button
              variant="ghost"
              className={`rounded-l-full px-4 py-2 hover:bg-gray-200 ${liked ? "bg-gray-200" : ""}`}
              onClick={handleLike}
            >
              <ThumbsUp className={`h-5 w-5 mr-2 ${liked ? "fill-current" : ""}`} />
              {likeCount.toLocaleString()}
            </Button>
            <div className="w-px h-6 bg-gray-300"></div>
            <Button
              variant="ghost"
              className={`rounded-r-full px-4 py-2 hover:bg-gray-200 ${disliked ? "bg-gray-200" : ""}`}
              onClick={handleDislike}
            >
              <ThumbsDown className={`h-5 w-5 ${disliked ? "fill-current" : ""}`} />
            </Button>
          </div>

          <Button variant="ghost" className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
            <Share className="h-5 w-5 mr-2" />
            Share
          </Button>

          <Button variant="ghost" className="rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200">
            <Download className="h-5 w-5 mr-2" />
            Download
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 hover:bg-gray-200">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
          T
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium text-gray-900">Tech Tutorials</h3>
            <span className="text-sm text-gray-600">2.1M subscribers</span>
          </div>

          <div className={`text-sm text-gray-700 ${showDescription ? "" : "line-clamp-2"}`}>
            In this comprehensive tutorial, we'll build a complete YouTube clone using Next.js 14, Tailwind CSS, and
            modern React patterns. You'll learn how to create responsive layouts, implement video players, handle
            routing, and much more. Perfect for developers looking to enhance their full-stack skills!
            {showDescription && (
              <div className="mt-2">
                <p>🔗 Links mentioned in the video:</p>
                <p>- Next.js Documentation: https://nextjs.org</p>
                <p>- Tailwind CSS: https://tailwindcss.com</p>
                <p>- Source Code: https://github.com/example/youtube-clone</p>
              </div>
            )}
          </div>

          <Button
            variant="ghost"
            className="text-sm text-gray-600 hover:text-gray-900 p-0 h-auto mt-1"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show less" : "Show more"}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isSubscribed ? "outline" : "default"}
            className={`px-6 py-2 rounded-full ${
              isSubscribed ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
            }`}
            onClick={() => setIsSubscribed(!isSubscribed)}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </Button>

          {isSubscribed && (
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-200">
              <Bell className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
