import { useState } from 'react';
import Header from './components/Header';
import MatchInfo from './components/MatchInfo';
import VideoPlayer from './components/VideoPlayer';
import ShareBar from './components/ShareBar';
import TabBar from './components/TabBar';
import ActionPanel from './components/ActionPanel';
import StatsPanel from './components/StatsPanel';
import PlayerPanel from './components/PlayerPanel';
import TimelinePanel from './components/TimelinePanel';
import LineupPanel from './components/LineupPanel';
import HighlightsBar from './components/HighlightsBar';
import RecentMatches from './components/RecentMatches';
import './App.css';

function TabContent({ activeTab }) {
  switch (activeTab) {
    case 'ACTION':
      return <ActionPanel />;
    case 'STATS':
      return <StatsPanel />;
    case 'PLAYER':
      return <PlayerPanel />;
    case 'TIMELINE':
      return <TimelinePanel />;
    case 'LINE-UP':
      return <LineupPanel />;
    default:
      return <ActionPanel />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('ACTION');

  return (
    <div className="app">
      <Header />
      <div className="main-divider" />
      <div className="main-layout">
        <div className="left-column">
          <MatchInfo />
          <VideoPlayer />
          <ShareBar />
        </div>
        <div className="right-column">
          <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="tab-content-area">
            <TabContent activeTab={activeTab} />
          </div>
          <HighlightsBar />
          <RecentMatches />
        </div>
      </div>
    </div>
  );
}
