import { useState } from 'react';
import { playerStats, matchData } from '../data/matchData';
import './PlayerPanel.css';

export default function PlayerPanel() {
  const [teamFilter, setTeamFilter] = useState('all');

  const filtered = teamFilter === 'all'
    ? playerStats
    : playerStats.filter((p) => p.team === teamFilter);

  return (
    <div className="player-panel">
      <div className="player-filter-bar">
        <button
          className={`player-filter-btn ${teamFilter === 'all' ? 'active' : ''}`}
          onClick={() => setTeamFilter('all')}
        >
          All
        </button>
        <button
          className={`player-filter-btn ${teamFilter === 'home' ? 'active' : ''}`}
          onClick={() => setTeamFilter('home')}
        >
          {matchData.homeTeam.shortName}
        </button>
        <button
          className={`player-filter-btn ${teamFilter === 'away' ? 'active' : ''}`}
          onClick={() => setTeamFilter('away')}
        >
          {matchData.awayTeam.shortName}
        </button>
      </div>
      <div className="player-table">
        <div className="player-table-header">
          <span className="col-name">Player</span>
          <span className="col-stat">G</span>
          <span className="col-stat">A</span>
          <span className="col-stat">SH</span>
          <span className="col-stat">PA</span>
          <span className="col-stat">Rating</span>
        </div>
        {filtered.map((p) => (
          <div key={p.name} className="player-table-row">
            <span className="col-name">
              <span className={`player-team-dot ${p.team}`} />
              {p.name}
            </span>
            <span className="col-stat">{p.goals}</span>
            <span className="col-stat">{p.assists}</span>
            <span className="col-stat">{p.shots}</span>
            <span className="col-stat">{p.passes}</span>
            <span className={`col-stat rating ${p.rating >= 7.5 ? 'high' : p.rating >= 6.5 ? 'mid' : 'low'}`}>
              {p.rating.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
