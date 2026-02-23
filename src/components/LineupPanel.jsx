import { lineupData, matchData } from '../data/matchData';
import './LineupPanel.css';

function TeamLineup({ team, teamData, side }) {
  return (
    <div className={`lineup-team ${side}`}>
      <div className="lineup-team-header">
        <span className="lineup-team-name">{team}</span>
        <span className="lineup-formation">{teamData.formation}</span>
      </div>
      <div className="lineup-players">
        {teamData.players.map((p) => (
          <div key={p.number} className="lineup-player">
            <span className="lineup-number">{p.number}</span>
            <span className="lineup-player-name">{p.name}</span>
            <span className="lineup-position">{p.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LineupPanel() {
  return (
    <div className="lineup-panel">
      <TeamLineup
        team={matchData.homeTeam.name}
        teamData={lineupData.home}
        side="home"
      />
      <TeamLineup
        team={matchData.awayTeam.name}
        teamData={lineupData.away}
        side="away"
      />
    </div>
  );
}
