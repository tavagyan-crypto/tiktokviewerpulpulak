# TikTok Trending Viewer

A modern web application to browse and interact with trending TikTok videos. Built with React, TypeScript, and Vite.

## Features

✨ **Core Features:**
- 📺 Browse trending TikTok videos
- ❤️ Like videos and manage your favorites
- 💾 Save videos for later
- 🔍 Search trending videos
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⌨️ Keyboard navigation (Arrow keys)
- 🖱️ Smooth scrolling and touch support
- 👤 User profile integration
- 💬 Comment section ready
- 📊 View counts and engagement metrics

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Package Manager:** npm/yarn

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tavagyan-crypto/tiktokviewerpulpulak.git
cd tiktokviewerpulpulak
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
VITE_API_URL=https://api.tiktok.com/v1
VITE_TIKTOK_API_KEY=your_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

The app will open at `http://localhost:3000`

### Building

Build for production:
```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation header with search
│   ├── TrendingFeed.tsx      # Main feed container
│   └── VideoCard.tsx         # Individual video component
├── services/
│   └── api.ts               # API calls and mock data
├── store/
│   └── videoStore.ts        # Zustand store for state management
├── types/
│   └── index.ts             # TypeScript type definitions
├── App.tsx                  # Main app component
├── main.tsx                 # React entry point
└── index.css                # Global styles
```

## Usage

### Navigation

- **Arrow Up/Down** - Navigate between videos
- **Mouse Wheel** - Scroll through videos
- **Touch Swipe** - Swipe up/down on mobile

### Video Actions

- **Heart Icon** - Like/unlike video
- **Comment Icon** - Open comments (feature coming soon)
- **Share Icon** - Share video (feature coming soon)
- **Bookmark Icon** - Save video for later

### Search

Use the search bar in the header to find specific videos by:
- Title
- Description
- Tags

## API Integration

Currently, the app uses mock data. To integrate with the real TikTok API:

1. Get API credentials from TikTok Developer Portal
2. Update the API endpoints in `src/services/api.ts`
3. Replace mock data with actual API calls
4. Update authentication headers as needed

## Components

### Header
- Logo and branding
- Search functionality
- Sign-in button
- Responsive mobile menu

### TrendingFeed
- Main video feed container
- Handles navigation between videos
- Keyboard and touch event handling
- Loading and error states

### VideoCard
- Individual video player
- Author information
- Engagement metrics (likes, comments, shares)
- Interactive buttons (like, save, share, comment)

## State Management (Zustand)

The app uses Zustand for state management:

```typescript
const { videos, loading, error, likedVideos, savedVideos, toggleLike, toggleSave } = useVideoStore()
```

Available actions:
- `setVideos()` - Set videos array
- `setLoading()` - Set loading state
- `setError()` - Set error message
- `toggleLike()` - Toggle like status
- `toggleSave()` - Toggle save status
- `addVideos()` - Add more videos
- `clearVideos()` - Clear all videos

## Styling

- Uses Tailwind CSS for utility-first styling
- Custom TikTok color scheme in `tailwind.config.js`
- Dark theme optimized for video viewing
- Responsive breakpoints for all device sizes

## Performance Optimizations

- Code splitting with Vite
- Lazy loading components
- Optimized re-renders with React.memo
- Efficient state updates with Zustand
- Image optimization

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- State managed with [Zustand](https://github.com/pmndrs/zustand)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

## Roadmap

- [ ] Real TikTok API integration
- [ ] User authentication
- [ ] Comments functionality
- [ ] Share to social media
- [ ] Video recommendations algorithm
- [ ] Hashtag browsing
- [ ] User profiles
- [ ] Watchlist/Favorites
- [ ] Dark/Light theme toggle
- [ ] Offline support with Service Worker

---

**Made with ❤️ by tavagyan-crypto**
