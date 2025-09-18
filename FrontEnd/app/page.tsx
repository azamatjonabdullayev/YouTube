import { YouTubeHeader } from "@/components/youtube-header"
import { YouTubeSidebar } from "@/components/youtube-sidebar"
import { VideoGrid } from "@/components/video-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <YouTubeHeader />
      <div className="flex">
        <YouTubeSidebar />
        <main className="flex-1">
          <VideoGrid />
        </main>
      </div>
    </div>
  )
}
