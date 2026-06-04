# Getting Started - Quick Reference

## 🎯 What You Get

A modern, fully-functional TikTok-style video viewer with:
- ✅ Trending video feed (5 sample videos)
- ✅ Full-screen video player
- ✅ Like, Comment, Share, Save buttons
- ✅ User profile system
- ✅ Search functionality
- ✅ Multi-device responsive design
- ✅ Keyboard & touch navigation

## 🚀 Quick Commands

```bash
# Install & Run
npm install
npm run dev

# Build for Production
npm run build

# Preview Build
npm run preview
```

## 📖 How It Works

### Viewing Videos
1. Open the app at `http://localhost:3000`
2. The first trending video loads automatically
3. Use arrow keys or scroll wheel to navigate
4. On mobile, swipe up/down to change videos

### Interacting with Videos
- **❤️ Like:** Click the heart icon (turns pink, increments count)
- **💬 Comment:** Click comment icon (ready for future feature)
- **📤 Share:** Click share icon (ready for future feature)  
- **💾 Save:** Click bookmark icon (turns cyan, adds to favorites)
- **👥 Follow:** Click follow button on author info

### Searching Videos
1. Click the search bar in the header
2. Type keywords (title, description, or hashtags)
3. Results will appear automatically
4. Navigate through filtered results

### Time Format Toggle
- Click **24-Hour** / **12-Hour** button to switch time format
- Setting persists during session

## 📁 Project Structure

```
tiktokviewerpulpulak/
├── src/
│   ├── components/
│   │   ├── Header.tsx           (Navigation & Search)
│   │   ├── TrendingFeed.tsx      (Main Video Feed)
│   │   └── VideoCard.tsx         (Single Video Player)
│   ├── services/
│   │   └── api.ts               (Video Data & API Calls)
│   ├── store/
│   │   └── videoStore.ts        (State Management)
│   ├── types/
│   │   └── index.ts             (TypeScript Definitions)
│   ├── App.tsx                  (Main Component)
│   ├── main.tsx                 (Entry Point)
│   └── index.css                (Global Styles)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── index.html
├── README.md                    (Full Documentation)
└── PREVIEW.md                   (This File)
```

## 🎬 Sample Videos Included

The app loads 5 pre-configured trending videos:

| # | Title | Creator | Views | Engagement |
|---|-------|---------|-------|------------|
| 1 | Amazing Dance Move | Alex Dance | 2.5M | 125K ❤️ |
| 2 | Funny Cat Moments | Cat Lover | 5M | 450K ❤️ |
| 3 | DIY Home Hack | Home DIY | 8.9M | 890K ❤️ |
| 4 | Cooking Recipe | Chef Master | 3.2M | 320K ❤️ |
| 5 | Gaming Highlight | Pro Gamer | 6.8M | 680K ❤️ |

## 🎨 Technology Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Fast Build Tool
- **Tailwind CSS** - Styling
- **Zustand** - State Management
- **React Icons** - Icon Library
- **Axios** - HTTP Client

## 🔧 Customization

### Adding More Videos
Edit `src/services/api.ts` and add to `mockVideos` array:

```typescript
{
  id: '6',
  title: 'Your Video Title',
  description: 'Your description',
  videoUrl: 'https://your-video-url.mp4',
  thumbnailUrl: 'https://your-thumbnail.jpg',
  authorName: 'Author Name',
  authorHandle: '@handle',
  authorAvatar: 'https://avatar-url.jpg',
  likes: 100000,
  comments: 5000,
  shares: 2000,
  views: 1000000,
  isLiked: false,
  isSaved: false,
  createdAt: new Date().toISOString(),
  tags: ['tag1', 'tag2', 'tag3'],
}
```

### Changing Colors
Edit `tailwind.config.js` to customize the TikTok color scheme:

```javascript
colors: {
  tiktok: {
    black: "#000000",    // Background
    white: "#ffffff",    // Text
    accent: "#25f4ee",   // Highlights
    pink: "#ff0050",     // Likes/Follow
  }
}
```

### Adding Timezones
To integrate with real TikTok API:
1. Get API credentials from TikTok Developer Portal
2. Update `src/services/api.ts` with real endpoints
3. Replace mock data with API calls
4. Update authentication headers

## 📱 Responsive Design

The app works perfectly on:
- 📱 Mobile (375px - 767px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (1025px+)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ↑ | Previous Video |
| ↓ | Next Video |
| Scroll | Navigate Videos |

## 🎯 Navigation Methods

| Input | Method | Platform |
|-------|--------|----------|
| ↑↓ Keys | Keyboard | Desktop |
| Mouse Wheel | Scroll | Desktop |
| Touch Swipe | Gesture | Mobile |
| Tap Buttons | Touch | Mobile/All |

## 🐛 Troubleshooting

### App Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Videos Not Loading
- Check internet connection
- Ensure `src/services/api.ts` is configured
- Check browser console for errors

## 📚 Learn More

- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev
- **Tailwind CSS:** https://tailwindcss.com
- **Zustand:** https://github.com/pmndrs/zustand

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 📝 Notes

- Mock data is used for demo purposes
- Real API integration needed for production
- All interactions are stored in Zustand (in-memory)
- No backend database currently

## ✨ Features Ready for Future Development

- 🔔 Notifications
- 💬 Real Comments System
- 🔐 User Authentication
- 📊 Analytics Dashboard
- 🎥 Video Upload
- ⏲️ Watch History
- 👥 User Profiles

## 🎉 You're All Set!

Your TikTok Trending Viewer is ready to use. Start the dev server and explore!

```bash
npm run dev
```

Visit `http://localhost:3000` and enjoy! 🚀

---

**For detailed information, see:** [README.md](README.md)
**For complete preview:** [PREVIEW.md](PREVIEW.md)
