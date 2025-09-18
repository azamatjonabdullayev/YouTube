import { YouTubeHeader } from "@/components/youtube-header"
import { VideoPlayer } from "@/components/video-player"
import { VideoInfo } from "@/components/video-info"
import { CommentSection } from "@/components/comment-section"
import { RelatedVideos } from "@/components/related-videos"

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-white">
      <YouTubeHeader />
      <div className="flex gap-6 p-6">
        <div className="flex-1 max-w-4xl">
          <VideoPlayer />
          <VideoInfo />
          <CommentSection />
        </div>
        <div className="w-96">
          <RelatedVideos />
        </div>
      </div>
    </div>
  )
}
