import { IoBarChartSharp } from 'react-icons/io5';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-center">
        <h1 className="header-logo">MatchVision</h1>
        <IoBarChartSharp className="header-icon" />
      </div>
      <div className="header-lang">
        EN <span className="flag">🇬🇧</span>
      </div>
    </header>
  );
}
