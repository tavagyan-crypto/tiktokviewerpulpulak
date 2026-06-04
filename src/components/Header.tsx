import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { useVideoStore } from '../store/videoStore';
import { searchVideos } from '../services/api';

interface HeaderProps {
  onSearch?: (results: any[]) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearching(true);
    try {
      const results = await searchVideos(searchQuery);
      onSearch?.(results);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setSearching(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-red-500">
                TT
              </div>
              <span className="text-white font-bold hidden sm:inline">
                Trending
              </span>
            </a>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search trending videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition"
              >
                <FiSearch size={18} />
              </button>
            </div>
          </form>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:px-6 sm:py-2 sm:flex sm:items-center sm:gap-2 text-white bg-red-500 rounded-full font-semibold hover:bg-red-600 transition">
              Sign In
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800">
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400"
                >
                  <FiSearch size={18} />
                </button>
              </div>
            </form>
            <button className="w-full mt-4 px-6 py-2 text-white bg-red-500 rounded-full font-semibold hover:bg-red-600 transition">
              Sign In
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
