import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { actionFilters } from '../data/matchData';
import './ActionPanel.css';

export default function ActionPanel() {
  const [selected, setSelected] = useState(new Set(['Crosses']));

  const toggle = (filter) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(filter)) {
        next.delete(filter);
      } else {
        next.add(filter);
      }
      return next;
    });
  };

  return (
    <div className="action-panel">
      <div className="action-grid">
        {actionFilters.map((filter) => (
          <button
            key={filter}
            className={`action-btn ${selected.has(filter) ? 'action-selected' : ''}`}
            onClick={() => toggle(filter)}
          >
            {filter}
            {selected.has(filter) && (
              <span className="action-check">
                <FaCheck />
              </span>
            )}
          </button>
        ))}
      </div>
      <button className="action-play-btn">Play</button>
    </div>
  );
}
