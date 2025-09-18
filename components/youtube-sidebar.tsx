"use client"

import {
  Home,
  Scissors,
  PlaySquare,
  FolderOpen,
  Clock,
  TrendingUp,
  ShoppingBag,
  Music,
  Tv,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  GraduationCap,
  Shirt,
  Podcast,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function YouTubeSidebar() {
  const mainItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Scissors, label: "Shorts" },
    { icon: PlaySquare, label: "Subscriptions" },
  ]

  const libraryItems = [
    { icon: FolderOpen, label: "Library" },
    { icon: Clock, label: "History" },
  ]

  const exploreItems = [
    { icon: TrendingUp, label: "Trending" },
    { icon: ShoppingBag, label: "Shopping" },
    { icon: Music, label: "Music" },
    { icon: Tv, label: "Movies & TV" },
    { icon: Radio, label: "Live" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Newspaper, label: "News" },
    { icon: Trophy, label: "Sports" },
    { icon: GraduationCap, label: "Learning" },
    { icon: Shirt, label: "Fashion & Beauty" },
    { icon: Podcast, label: "Podcasts" },
  ]

  return (
    <aside className="w-60 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="py-2">
        <div className="px-3 mb-2">
          {mainItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start px-3 py-2 mb-1 rounded-lg ${
                item.active ? "bg-gray-100 hover:bg-gray-100" : "hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-6 w-6 mr-6" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>

        <hr className="border-gray-200 my-3" />

        <div className="px-3 mb-2">
          {libraryItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start px-3 py-2 mb-1 rounded-lg hover:bg-gray-100"
            >
              <item.icon className="h-6 w-6 mr-6" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>

        <hr className="border-gray-200 my-3" />

        <div className="px-3 mb-4">
          <p className="text-sm text-gray-700 mb-3 px-3">Sign in to like videos, comment, and subscribe.</p>
          <Button
            variant="outline"
            className="w-fit mx-3 text-blue-600 border-blue-300 hover:bg-blue-50 rounded-full px-4 py-1.5 bg-transparent"
          >
            <div className="w-5 h-5 mr-2 rounded-full border-2 border-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            </div>
            Sign in
          </Button>
        </div>

        <hr className="border-gray-200 my-3" />

        <div className="px-3">
          <h3 className="text-sm font-medium text-gray-900 mb-2 px-3">Explore</h3>
          {exploreItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start px-3 py-2 mb-1 rounded-lg hover:bg-gray-100"
            >
              <item.icon className="h-6 w-6 mr-6" />
              <span className="text-sm font-medium">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  )
}
