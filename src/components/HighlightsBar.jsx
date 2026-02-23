import { useState } from 'react';
import { FaPlay, FaChevronDown } from 'react-icons/fa';
import './HighlightsBar.css';

export default function HighlightsBar() {
  const [fullOpen, setFullOpen] = useState(false);

  return (
    <div className="highlights-bar">
      <button className="highlights-btn play-highlights">
        <FaPlay className="hl-icon" />
        Play Highlights
      </button>
      <div className="full90-wrapper">
        <button
          className="highlights-btn full90-btn"
          onClick={() => setFullOpen(!fullOpen)}
        >
          Full 90
          <FaChevronDown className={`hl-chevron ${fullOpen ? 'open' : ''}`} />
        </button>
        {fullOpen && (
          <div className="full90-dropdown">
            <button className="dropdown-item">1st Half</button>
            <button className="dropdown-item">2nd Half</button>
            <button className="dropdown-item">Full Match</button>
          </div>
        )}
      </div>
    </div>
  );
}
