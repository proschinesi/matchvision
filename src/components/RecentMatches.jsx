import { recentMatches } from '../data/matchData';
import { TeamBadge } from './MatchInfo';
import './RecentMatches.css';

export default function RecentMatches() {
  return (
    <div className="recent-matches">
      {recentMatches.map((match, i) => (
        <div key={i} className="recent-match-card">
          <TeamBadge badge={match.homeTeam.badge} size={28} />
          <div className="recent-match-info">
            <span className="recent-match-date">{match.date}</span>
            <span className="recent-match-score">
              {match.homeScore}-{match.awayScore}
            </span>
          </div>
          <TeamBadge badge={match.awayTeam.badge} size={28} />
        </div>
      ))}
      <button className="more-matches-btn">More Matches</button>
    </div>
  );
}
