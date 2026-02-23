import { statsData, matchData } from '../data/matchData';
import './StatsPanel.css';

export default function StatsPanel() {
  return (
    <div className="stats-panel">
      <div className="stats-header">
        <span className="stats-team-name">{matchData.homeTeam.shortName}</span>
        <span className="stats-title">Match Statistics</span>
        <span className="stats-team-name">{matchData.awayTeam.shortName}</span>
      </div>
      {statsData.map((stat) => {
        const max = Math.max(stat.home, stat.away) || 1;
        const homeWidth = (stat.home / (stat.home + stat.away)) * 100;
        const awayWidth = 100 - homeWidth;
        return (
          <div key={stat.label} className="stat-row">
            <span className="stat-value home-value">
              {stat.home}{stat.unit || ''}
            </span>
            <div className="stat-bar-container">
              <div className="stat-bar-wrapper">
                <div
                  className="stat-bar home-bar"
                  style={{ width: `${homeWidth}%` }}
                />
                <div
                  className="stat-bar away-bar"
                  style={{ width: `${awayWidth}%` }}
                />
              </div>
              <span className="stat-label">{stat.label}</span>
            </div>
            <span className="stat-value away-value">
              {stat.away}{stat.unit || ''}
            </span>
          </div>
        );
      })}
    </div>
  );
}
