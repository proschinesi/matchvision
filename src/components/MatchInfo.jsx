import { matchData } from '../data/matchData';
import './MatchInfo.css';

const BADGE_COLORS = {
  mancity: '#6CABDD',
  wolves: '#FDB913',
  arsenal: '#EF0107',
  palace: '#1B458F',
};

function TeamBadge({ badge, size = 40 }) {
  const color = BADGE_COLORS[badge] || '#888';
  return (
    <div
      className="team-badge"
      style={{
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.35,
        fontWeight: 700,
        color: '#fff',
        textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        flexShrink: 0,
      }}
    >
      {badge.slice(0, 3).toUpperCase()}
    </div>
  );
}

export { TeamBadge };

export default function MatchInfo() {
  const { date, stadium, homeTeam, awayTeam, scorers } = matchData;

  return (
    <div className="match-info">
      <div className="match-info-header">
        <span className="match-date">{date}</span>
        <span className="match-stadium">{stadium}</span>
      </div>
      <div className="match-info-teams">
        <div className="team home-team">
          <TeamBadge badge={homeTeam.badge} />
          <span className="team-name">{homeTeam.name}</span>
        </div>
        <div className="match-score-block">
          <span className="match-score-date">{date}</span>
          <span className="match-score">{homeTeam.score}-{awayTeam.score}</span>
        </div>
        <div className="team away-team">
          <span className="team-name">{awayTeam.name}</span>
          <TeamBadge badge={awayTeam.badge} />
        </div>
      </div>
      <div className="match-scorers">
        {scorers.map((s, i) => (
          <span key={i} className="scorer">
            {s.name} ({s.minute}')
          </span>
        ))}
        <span className="scorer-icon">⚽</span>
      </div>
    </div>
  );
}
