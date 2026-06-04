import React, { useEffect, useRef, useCallback } from 'react';
import { VideoCard } from './VideoCard';
import { useVideoStore } from '../store/videoStore';
import { fetchTrendingVideos } from '../services/api';
import { FiLoader } from 'react-icons/fi';

export const TrendingFeed: React.FC = () => {
  const {
    videos,
    loading,
    error,
    currentVideoIndex,
    setVideos,
    setLoading,
    setError,
    setCurrentVideoIndex,
  } = useVideoStore();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef<number>(0);

  // Fetch trending videos on mount
  useEffect(() => {
    const loadTrendingVideos = async () => {
      setLoading(true);
      try {
        const response = await fetchTrendingVideos();
        setVideos(response.videos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadTrendingVideos();
  }, [setVideos, setLoading, setError]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePreviousVideo();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleNextVideo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentVideoIndex, videos.length]);

  const handleNextVideo = useCallback(() => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  }, [currentVideoIndex, videos.length, setCurrentVideoIndex]);

  const handlePreviousVideo = useCallback(() => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  }, [currentVideoIndex, setCurrentVideoIndex]);

  // Handle wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        handleNextVideo();
      } else if (e.deltaY < 0) {
        handlePreviousVideo();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: true });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [handleNextVideo, handlePreviousVideo]);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextVideo();
      } else {
        handlePreviousVideo();
      }
    }
  };

  if (loading && videos.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <FiLoader className="animate-spin text-4xl text-tiktok-accent" />
          <p className="text-white">Loading trending videos...</p>
        </div>
      </div>
    );
  }

  if (error && videos.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-tiktok-pink text-white rounded-full font-semibold hover:bg-red-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video Container */}
      <div className="relative w-full h-screen">
        {videos.length > 0 && (
          <VideoCard
            video={videos[currentVideoIndex]}
            isActive={true}
          />
        )}
      </div>

      {/* Navigation Hints */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-400 text-sm">
          {currentVideoIndex + 1} / {videos.length}
        </p>
      </div>

      {/* Navigation Buttons (Mobile) */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between sm:hidden">
        <button
          onClick={handlePreviousVideo}
          disabled={currentVideoIndex === 0}
          className="px-4 py-2 bg-black bg-opacity-50 text-white rounded disabled:opacity-50"
        >
          ↑ Prev
        </button>
        <button
          onClick={handleNextVideo}
          disabled={currentVideoIndex === videos.length - 1}
          className="px-4 py-2 bg-black bg-opacity-50 text-white rounded disabled:opacity-50"
        >
          Next ↓
        </button>
      </div>

      {/* Keyboard hint */}
      <div className="absolute top-4 right-4 hidden sm:block text-gray-400 text-xs text-right">
        <p>↑↓ or Scroll to navigate</p>
        <p>👆 Tap for more options</p>
      </div>
    </div>
  );
};
