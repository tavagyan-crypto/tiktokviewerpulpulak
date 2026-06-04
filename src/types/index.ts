export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  authorName: string;
  authorAvatar: string;
  authorHandle: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  isLiked: boolean;
  isSaved: boolean;
  createdAt: string;
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
  isFollowing: boolean;
}

export interface TrendingResponse {
  videos: Video[];
  hasMore: boolean;
  nextCursor?: string;
}
