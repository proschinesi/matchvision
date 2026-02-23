import { FaPlay } from 'react-icons/fa';
import './VideoPlayer.css';

export default function VideoPlayer() {
  return (
    <div className="video-player">
      <div className="video-placeholder">
        <div className="video-overlay">
          <div className="video-field">
            <div className="field-line half-line" />
            <div className="field-line center-circle" />
            <div className="field-penalty-home" />
            <div className="field-penalty-away" />
          </div>
          <div className="video-teams-overlay">
            <div className="overlay-team home-overlay">
              <div className="player-dot" style={{ top: '45%', left: '8%' }} />
              <div className="player-dot" style={{ top: '20%', left: '25%' }} />
              <div className="player-dot" style={{ top: '40%', left: '25%' }} />
              <div className="player-dot" style={{ top: '60%', left: '25%' }} />
              <div className="player-dot" style={{ top: '80%', left: '25%' }} />
              <div className="player-dot" style={{ top: '25%', left: '45%' }} />
              <div className="player-dot" style={{ top: '50%', left: '42%' }} />
              <div className="player-dot" style={{ top: '75%', left: '45%' }} />
              <div className="player-dot" style={{ top: '20%', left: '62%' }} />
              <div className="player-dot" style={{ top: '50%', left: '65%' }} />
              <div className="player-dot" style={{ top: '80%', left: '62%' }} />
            </div>
            <div className="overlay-team away-overlay">
              <div className="player-dot away-dot" style={{ top: '45%', left: '92%' }} />
              <div className="player-dot away-dot" style={{ top: '25%', left: '78%' }} />
              <div className="player-dot away-dot" style={{ top: '50%', left: '78%' }} />
              <div className="player-dot away-dot" style={{ top: '75%', left: '78%' }} />
              <div className="player-dot away-dot" style={{ top: '15%', left: '65%' }} />
              <div className="player-dot away-dot" style={{ top: '38%', left: '62%' }} />
              <div className="player-dot away-dot" style={{ top: '62%', left: '62%' }} />
              <div className="player-dot away-dot" style={{ top: '85%', left: '65%' }} />
              <div className="player-dot away-dot" style={{ top: '20%', left: '52%' }} />
              <div className="player-dot away-dot" style={{ top: '50%', left: '50%' }} />
              <div className="player-dot away-dot" style={{ top: '80%', left: '52%' }} />
            </div>
          </div>
        </div>
        <button className="play-button-overlay">
          <FaPlay />
        </button>
        <div className="video-badge">
          <span className="badge-text">MV</span>
        </div>
      </div>
    </div>
  );
}
