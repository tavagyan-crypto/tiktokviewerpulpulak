import React from 'react'
import { Header } from './components/Header'
import { TrendingFeed } from './components/TrendingFeed'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative">
        <TrendingFeed />
      </main>
    </div>
  )
}

export default App
