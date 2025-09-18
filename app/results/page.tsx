import { YouTubeHeader } from "@/components/youtube-header"
import { SearchResults } from "@/components/search-results"
import { SearchFilters } from "@/components/search-filters"

export default function SearchResultsPage() {
  return (
    <div className="min-h-screen bg-white">
      <YouTubeHeader />
      <div className="flex">
        <div className="w-60 border-r border-gray-200 p-4">
          <SearchFilters />
        </div>
        <main className="flex-1">
          <SearchResults />
        </main>
      </div>
    </div>
  )
}
