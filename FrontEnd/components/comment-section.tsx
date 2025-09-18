"use client"

import { ThumbsUp, ThumbsDown, MoreVertical, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface Comment {
  id: number
  author: string
  content: string
  likes: number
  timestamp: string
  avatar: string
  isLiked?: boolean
  replies?: Comment[]
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: "John Developer",
    content: "Great tutorial! Really helped me understand Next.js routing better.",
    likes: 24,
    timestamp: "2 days ago",
    avatar: "J",
    replies: [
      {
        id: 11,
        author: "Tech Tutorials",
        content: "Thanks John! Glad it was helpful. More Next.js content coming soon!",
        likes: 8,
        timestamp: "1 day ago",
        avatar: "T",
      },
    ],
  },
  {
    id: 2,
    author: "Sarah Code",
    content: "The explanation of Tailwind CSS integration was perfect. Thanks for sharing!",
    likes: 18,
    timestamp: "1 day ago",
    avatar: "S",
  },
  {
    id: 3,
    author: "Mike Frontend",
    content: "Could you make a follow-up video about adding authentication to this project?",
    likes: 12,
    timestamp: "3 hours ago",
    avatar: "M",
  },
]

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState("")
  const [showCommentForm, setShowCommentForm] = useState(false)

  const getAvatarColor = (author: string) => {
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
    const index = author.charCodeAt(0) % colors.length
    return colors[index]
  }

  const handleLikeComment = (commentId: number) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment,
      ),
    )
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: "You",
        content: newComment,
        likes: 0,
        timestamp: "now",
        avatar: "Y",
      }
      setComments((prev) => [comment, ...prev])
      setNewComment("")
      setShowCommentForm(false)
    }
  }

  return (
    <div>
      <div className="flex items-center gap-6 mb-6">
        <h3 className="text-lg font-medium">{comments.length + 4} Comments</h3>
        <Button variant="ghost" className="text-sm text-gray-600">
          Sort by
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-medium">
          Y
        </div>
        <div className="flex-1">
          <Textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onFocus={() => setShowCommentForm(true)}
            className="border-0 border-b border-gray-300 rounded-none resize-none focus-visible:ring-0 focus-visible:border-gray-900 p-0 pb-2"
          />
          {showCommentForm && (
            <div className="flex justify-end gap-2 mt-3">
              <Button
                variant="ghost"
                className="text-sm"
                onClick={() => {
                  setShowCommentForm(false)
                  setNewComment("")
                }}
              >
                Cancel
              </Button>
              <Button
                className="text-sm bg-blue-600 hover:bg-blue-700"
                onClick={handleAddComment}
                disabled={!newComment.trim()}
              >
                Comment
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className="flex gap-3">
              <div
                className={`w-10 h-10 ${getAvatarColor(comment.author)} rounded-full flex items-center justify-center text-white font-medium text-sm`}
              >
                {comment.avatar}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-sm">{comment.author}</span>
                  <span className="text-xs text-gray-600">{comment.timestamp}</span>
                  {comment.author === "Tech Tutorials" && <Heart className="h-3 w-3 text-red-500 fill-current" />}
                </div>

                <p className="text-sm text-gray-900 mb-2">{comment.content}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 hover:bg-gray-100 ${comment.isLiked ? "text-blue-600" : ""}`}
                      onClick={() => handleLikeComment(comment.id)}
                    >
                      <ThumbsUp className={`h-4 w-4 ${comment.isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <span className="text-xs text-gray-600">{comment.likes}</span>
                  </div>

                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
                    <ThumbsDown className="h-4 w-4" />
                  </Button>

                  <Button variant="ghost" className="text-xs text-gray-600 h-8 px-2">
                    Reply
                  </Button>

                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100 ml-auto">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>

                {comment.replies && comment.replies.length > 0 && (
                  <div className="mt-4 ml-6 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-3">
                        <div
                          className={`w-8 h-8 ${getAvatarColor(reply.author)} rounded-full flex items-center justify-center text-white font-medium text-xs`}
                        >
                          {reply.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm">{reply.author}</span>
                            <span className="text-xs text-gray-600">{reply.timestamp}</span>
                            {reply.author === "Tech Tutorials" && (
                              <Heart className="h-3 w-3 text-red-500 fill-current" />
                            )}
                          </div>
                          <p className="text-sm text-gray-900 mb-2">{reply.content}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-gray-100">
                                <ThumbsUp className="h-3 w-3" />
                              </Button>
                              <span className="text-xs text-gray-600">{reply.likes}</span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-gray-100">
                              <ThumbsDown className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" className="text-xs text-gray-600 h-6 px-2">
                              Reply
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
