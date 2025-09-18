"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SearchFilters() {
  const uploadDate = ["Last hour", "Today", "This week", "This month", "This year"]
  const type = ["Video", "Channel", "Playlist", "Movie"]
  const duration = ["Under 4 minutes", "4-20 minutes", "Over 20 minutes"]
  const features = ["Live", "4K", "HD", "Subtitles/CC", "Creative Commons", "360°", "VR180", "3D", "HDR"]
  const sortBy = ["Relevance", "Upload date", "View count", "Rating"]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-sm mb-3">UPLOAD DATE</h3>
        <div className="space-y-2">
          {uploadDate.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start text-sm h-8 px-2">
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium text-sm mb-3">TYPE</h3>
        <div className="space-y-2">
          {type.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start text-sm h-8 px-2">
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium text-sm mb-3">DURATION</h3>
        <div className="space-y-2">
          {duration.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start text-sm h-8 px-2">
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium text-sm mb-3">FEATURES</h3>
        <div className="space-y-2">
          {features.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start text-sm h-8 px-2">
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium text-sm mb-3">SORT BY</h3>
        <div className="space-y-2">
          {sortBy.map((item) => (
            <Button key={item} variant="ghost" className="w-full justify-start text-sm h-8 px-2">
              {item}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
