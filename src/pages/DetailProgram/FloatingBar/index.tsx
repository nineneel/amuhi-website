import './FloatingBar.css';

const navItems = [
  { label: 'Overview', href: '#detail-hero' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Register', href: '#register' },
];

export default function FloatingBar() {
  return (
    <div className="floating-bar">
      <div className="floating-bar__content">
        <ul className="floating-bar__nav">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
