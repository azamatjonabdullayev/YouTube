"use client"

import { Play, Pause, Volume2, Settings, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative bg-black rounded-lg overflow-hidden mb-4">
      <div className="aspect-video relative">
        <img src="/coding-tutorial.png" alt="Video thumbnail" className="w-full h-full object-cover" />

        {/* Video controls overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 group">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
            </Button>
          </div>

          {/* Bottom controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-red-600 h-1 rounded-full mb-3">
              <div className="bg-red-600 h-full w-1/3 rounded-full relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
                  <Volume2 className="h-5 w-5" />
                </Button>
                <span className="text-sm">5:30 / 15:30</span>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white hover:bg-opacity-20">
                  <Maximize className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
