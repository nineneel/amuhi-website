import type { SVGProps } from 'react';
import type { ProgramIconName } from '../../types/program';

type IconProps = SVGProps<SVGSVGElement>;

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 12.5L9.5 17.5L19.5 7.5" />
    </svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 4.5H15.5C16.6046 4.5 17.5 5.39543 17.5 6.5V19.5H7C5.89543 19.5 5 18.6046 5 17.5V4.5Z" />
      <path d="M17.5 19.5C17.5 18.3954 16.6046 17.5 15.5 17.5H7" />
      <path d="M9 7H14" />
      <path d="M9 10H14" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="7" r="2.5" />
      <path d="M3 19C3 15.6863 5.68629 13 9 13C12.3137 13 15 15.6863 15 19" />
      <path d="M16 13C18.2091 13 20 14.7909 20 17V19" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7V12L15 13.5" />
    </svg>
  );
}

export function BarsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 16.5V14" />
      <path d="M11 16.5V11" />
      <path d="M16 16.5V8" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5C10 6.5 9 10 9 12C9 14 10 17.5 12 20.5" />
      <path d="M12 3.5C14 6.5 15 10 15 12C15 14 14 17.5 12 20.5" />
      <path d="M4.5 12H19.5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3L5 6V12C5 15.866 7.68629 19.3482 11.4142 20.682C11.7815 20.8114 12.2185 20.8114 12.5858 20.682C16.3137 19.3482 19 15.866 19 12V6L12 3Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 4V15" />
      <path d="M7.5 10L12 15L16.5 10" />
      <path d="M5 17H19" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 18L4.5 20.5L9 19.5C9.5 19.5 10 19.7 10.5 19.9C11.6 20.3 12.8 20.5 14 20.5C17.866 20.5 21 18.0899 21 14.75V9.25C21 5.91015 17.866 3.5 14 3.5H10C6.13401 3.5 3 5.91015 3 9.25V14.75C3 16.2211 3.70754 17.5305 4.88263 18.4773" />
      <path d="M8.5 9.5H15.5" />
      <path d="M8.5 13H12.5" />
    </svg>
  );
}

export function renderProgramIcon(name?: ProgramIconName) {
  switch (name) {
    case 'clock':
      return <ClockIcon />;
    case 'bars':
      return <BarsIcon />;
    case 'globe':
      return <GlobeIcon />;
    case 'shield':
      return <ShieldIcon />;
    case 'book':
      return <BookIcon />;
    case 'users':
      return <UsersIcon />;
    case 'check':
      return <CheckIcon />;
    case 'download':
      return <DownloadIcon />;
    case 'chat':
      return <ChatIcon />;
    default:
      return null;
  }
}
