import React, { useState } from 'react';
import { FiShare2, FiMessageCircle, FiHeart } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';
import { Video } from '../types';
import { useVideoStore } from '../store/videoStore';

interface VideoCardProps {
  video: Video;
  isActive: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, isActive }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { likedVideos, savedVideos, toggleLike, toggleSave } = useVideoStore();

  const isLiked = likedVideos.has(video.id);
  const isSaved = savedVideos.has(video.id);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLike(video.id);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSave(video.id);
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Video */}
      {isActive && (
        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Thumbnail when not active */}
      {!isActive && (
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
      )}

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 pb-20">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={video.authorAvatar}
            alt={video.authorName}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div className="flex-1">
            <p className="font-semibold text-white">{video.authorName}</p>
            <p className="text-xs text-gray-300">{video.authorHandle}</p>
          </div>
          <button className="px-4 py-1 bg-red-500 rounded-full text-white font-semibold text-sm hover:bg-red-600 transition">
            Follow
          </button>
        </div>

        {/* Description */}
        <div className="mb-4 text-white">
          <p className={`text-sm transition-all ${showDescription ? 'line-clamp-none' : 'line-clamp-2'}`}>
            {video.description}
          </p>
          {video.title && (
            <p className="text-xs text-gray-300 mt-1 font-semibold">
              {video.title}
            </p>
          )}
          {video.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {video.tags.map((tag) => (
                <span key={tag} className="text-xs text-cyan-400">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col gap-6">
        {/* Like Button */}
        <button
          onClick={handleLike}
          className="flex flex-col items-center gap-1 hover:scale-110 transition transform"
        >
          <div className="bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100">
            <FiHeart
              size={24}
              className={isLiked ? 'text-red-500 fill-red-500' : 'text-white'}
            />
          </div>
          <span className="text-xs text-white font-semibold">
            {formatNumber(video.likes + (isLiked ? 1 : 0))}
          </span>
        </button>

        {/* Comment Button */}
        <button className="flex flex-col items-center gap-1 hover:scale-110 transition transform">
          <div className="bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100">
            <FiMessageCircle size={24} className="text-white" />
          </div>
          <span className="text-xs text-white font-semibold">
            {formatNumber(video.comments)}
          </span>
        </button>

        {/* Share Button */}
        <button className="flex flex-col items-center gap-1 hover:scale-110 transition transform">
          <div className="bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100">
            <FiShare2 size={24} className="text-white" />
          </div>
          <span className="text-xs text-white font-semibold">
            {formatNumber(video.shares)}
          </span>
        </button>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="flex flex-col items-center gap-1 hover:scale-110 transition transform"
        >
          <div className="bg-gray-800 bg-opacity-70 rounded-full p-3 hover:bg-opacity-100">
            <FiBookmark
              size={24}
              className={isSaved ? 'text-cyan-400 fill-cyan-400' : 'text-white'}
            />
          </div>
          <span className="text-xs text-white font-semibold">
            {isSaved ? 'Saved' : 'Save'}
          </span>
        </button>
      </div>

      {/* View Count */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-50 px-3 py-1 rounded-full">
        <p className="text-xs text-white">
          👁️ {formatNumber(video.views)} views
        </p>
      </div>
    </div>
  );
};
