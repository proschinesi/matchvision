import {
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaLink,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './ShareBar.css';

const SOCIAL = [
  { icon: FaFacebookF, label: 'Facebook', color: '#1877F2' },
  { icon: FaXTwitter, label: 'X (Twitter)', color: '#fff' },
  { icon: FaLinkedinIn, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaTelegramPlane, label: 'Telegram', color: '#26A5E4' },
  { icon: FaWhatsapp, label: 'WhatsApp', color: '#25D366' },
  { icon: FaEnvelope, label: 'Email', color: '#EA4335' },
  { icon: FaLink, label: 'Copy link', color: '#888' },
];

export default function ShareBar() {
  return (
    <div className="share-bar">
      {SOCIAL.map(({ icon: Icon, label, color }) => (
        <button key={label} className="share-btn" title={label}>
          <div className="share-icon-circle" style={{ background: color }}>
            <Icon />
          </div>
          <span className="share-label">{label}</span>
        </button>
      ))}
    </div>
  );
}
