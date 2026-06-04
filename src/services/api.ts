import axios from 'axios';
import { Video, TrendingResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.tiktok.com/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock trending videos data
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Amazing Dance Move',
    description: 'Check out this incredible dance routine! 💃✨',
    videoUrl: 'https://v16-webapp.tiktok.com/example1.mp4',
    thumbnailUrl: 'https://p16-amd-va.tiktokcdn.com/img/example1.jpeg',
    authorName: 'Alex Dance',
    authorHandle: '@alexdance',
    authorAvatar: 'https://p16-amd-va.tiktokcdn.com/avatar/example1.jpeg',
    likes: 125000,
    comments: 8500,
    shares: 5200,
    views: 2500000,
    isLiked: false,
    isSaved: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    tags: ['dance', 'viral', 'trending'],
  },
  {
    id: '2',
    title: 'Funny Cat Moments',
    description: 'Cats doing silly things 😹',
    videoUrl: 'https://v16-webapp.tiktok.com/example2.mp4',
    thumbnailUrl: 'https://p16-amd-va.tiktokcdn.com/img/example2.jpeg',
    authorName: 'Cat Lover',
    authorHandle: '@catlover',
    authorAvatar: 'https://p16-amd-va.tiktokcdn.com/avatar/example2.jpeg',
    likes: 450000,
    comments: 25000,
    shares: 15000,
    views: 5000000,
    isLiked: false,
    isSaved: false,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    tags: ['cats', 'funny', 'pets'],
  },
  {
    id: '3',
    title: 'DIY Home Hack',
    description: 'This home hack will blow your mind! 🏠',
    videoUrl: 'https://v16-webapp.tiktok.com/example3.mp4',
    thumbnailUrl: 'https://p16-amd-va.tiktokcdn.com/img/example3.jpeg',
    authorName: 'Home DIY',
    authorHandle: '@homediy',
    authorAvatar: 'https://p16-amd-va.tiktokcdn.com/avatar/example3.jpeg',
    likes: 890000,
    comments: 45000,
    shares: 67000,
    views: 8900000,
    isLiked: false,
    isSaved: false,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    tags: ['diy', 'home', 'hack'],
  },
  {
    id: '4',
    title: 'Cooking Quick Recipe',
    description: 'Learn how to make this amazing dish in 60 seconds! 🍳',
    videoUrl: 'https://v16-webapp.tiktok.com/example4.mp4',
    thumbnailUrl: 'https://p16-amd-va.tiktokcdn.com/img/example4.jpeg',
    authorName: 'Chef Master',
    authorHandle: '@chefmaster',
    authorAvatar: 'https://p16-amd-va.tiktokcdn.com/avatar/example4.jpeg',
    likes: 320000,
    comments: 18000,
    shares: 12000,
    views: 3200000,
    isLiked: false,
    isSaved: false,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    tags: ['cooking', 'recipe', 'food'],
  },
  {
    id: '5',
    title: 'Gaming Highlight',
    description: 'Epic gaming moment! 🎮',
    videoUrl: 'https://v16-webapp.tiktok.com/example5.mp4',
    thumbnailUrl: 'https://p16-amd-va.tiktokcdn.com/img/example5.jpeg',
    authorName: 'Pro Gamer',
    authorHandle: '@progamer',
    authorAvatar: 'https://p16-amd-va.tiktokcdn.com/avatar/example5.jpeg',
    likes: 680000,
    comments: 35000,
    shares: 42000,
    views: 6800000,
    isLiked: false,
    isSaved: false,
    createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    tags: ['gaming', 'esports', 'highlight'],
  },
];

export const fetchTrendingVideos = async (_cursor?: string): Promise<TrendingResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      videos: mockVideos,
      hasMore: true,
      nextCursor: 'next_page_cursor',
    };
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    throw new Error('Failed to fetch trending videos');
  }
};

export const searchVideos = async (query: string): Promise<Video[]> => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const lowerQuery = query.toLowerCase();
    return mockVideos.filter(video =>
      video.title.toLowerCase().includes(lowerQuery) ||
      video.description.toLowerCase().includes(lowerQuery) ||
      video.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  } catch (error) {
    console.error('Error searching videos:', error);
    throw new Error('Failed to search videos');
  }
};

export const getVideoDetails = async (videoId: string): Promise<Video | null> => {
  try {
    return mockVideos.find(video => video.id === videoId) || null;
  } catch (error) {
    console.error('Error fetching video details:', error);
    throw new Error('Failed to fetch video details');
  }
};

export default apiClient;
