import { timelineEvents } from '../data/matchData';
import { FaFutbol, FaExchangeAlt } from 'react-icons/fa';
import { IoWarning } from 'react-icons/io5';
import './TimelinePanel.css';

const EVENT_ICONS = {
  goal: '⚽',
  yellow: '🟨',
  sub: '🔄',
  shot: '🎯',
  corner: '📐',
  save: '🧤',
  kickoff: '▶',
  halftime: '⏸',
  fulltime: '⏹',
};

export default function TimelinePanel() {
  return (
    <div className="timeline-panel">
      <div className="timeline-line" />
      {timelineEvents.map((event, i) => (
        <div key={i} className={`timeline-event ${event.type}`}>
          <div className="timeline-minute">{event.minute}'</div>
          <div className="timeline-dot">
            <span className="timeline-icon">{EVENT_ICONS[event.type] || '•'}</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-desc">{event.description}</div>
            {event.player && (
              <div className={`timeline-player ${event.team || ''}`}>
                {event.player}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
