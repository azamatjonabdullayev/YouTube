"use client"

import type React from "react"

import { Search, Mic, Video, Bell, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function YouTubeHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/results?search_query=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left section - Menu and Logo */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
          <Menu className="h-6 w-6" />
        </Button>
        <Link href="/" className="flex items-center gap-1">
          <img src="/logo.svg" alt="YouTube" className="h-6" />
        </Link>
      </div>

      {/* Center section - Search */}
      <div className="flex items-center max-w-2xl flex-1 mx-8">
        <form onSubmit={handleSearch} className="flex flex-1 max-w-xl">
          <div className="flex flex-1 border border-gray-300 rounded-l-full">
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 rounded-l-full px-4 py-2 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            className="border-l-0 rounded-r-full px-6 py-2 bg-gray-50 hover:bg-gray-100 border-gray-300"
          >
            <Search className="h-5 w-5" />
          </Button>
        </form>
        <Button variant="ghost" size="icon" className="ml-4 hover:bg-gray-100 rounded-full">
          <Mic className="h-5 w-5" />
        </Button>
      </div>

      {/* Right section - User actions */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
          <Video className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          className="text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full border border-gray-300"
        >
          Sign in
        </Button>
      </div>
    </header>
  )
}
