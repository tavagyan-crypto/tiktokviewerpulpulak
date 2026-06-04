import { create } from 'zustand';
import { Video } from '../types';

interface VideoStore {
  videos: Video[];
  loading: boolean;
  error: string | null;
  currentVideoIndex: number;
  likedVideos: Set<string>;
  savedVideos: Set<string>;
  
  // Actions
  setVideos: (videos: Video[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCurrentVideoIndex: (index: number) => void;
  toggleLike: (videoId: string) => void;
  toggleSave: (videoId: string) => void;
  addVideos: (videos: Video[]) => void;
  clearVideos: () => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  videos: [],
  loading: false,
  error: null,
  currentVideoIndex: 0,
  likedVideos: new Set(),
  savedVideos: new Set(),
  
  setVideos: (videos) => set({ videos }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCurrentVideoIndex: (index) => set({ currentVideoIndex: index }),
  
  toggleLike: (videoId) => set((state) => {
    const newLiked = new Set(state.likedVideos);
    if (newLiked.has(videoId)) {
      newLiked.delete(videoId);
    } else {
      newLiked.add(videoId);
    }
    return { likedVideos: newLiked };
  }),
  
  toggleSave: (videoId) => set((state) => {
    const newSaved = new Set(state.savedVideos);
    if (newSaved.has(videoId)) {
      newSaved.delete(videoId);
    } else {
      newSaved.add(videoId);
    }
    return { savedVideos: newSaved };
  }),
  
  addVideos: (videos) => set((state) => ({
    videos: [...state.videos, ...videos]
  })),
  
  clearVideos: () => set({ videos: [], currentVideoIndex: 0 }),
}));
