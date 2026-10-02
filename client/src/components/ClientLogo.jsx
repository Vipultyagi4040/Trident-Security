import React from 'react';

// Crisp, high-impact vector brand badges for all 20 verified corporate & institutional clients
export default function ClientLogo({ id, name, category, className = "w-full h-full" }) {
  switch (id) {
    case 'infantry':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0F172A" />
          {/* Defence Gold Laurel & Crossed Swords */}
          <circle cx="50" cy="50" r="32" fill="#1E293B" stroke="#EAB308" strokeWidth="2.5" />
          <path d="M 38 62 L 62 38 M 62 62 L 38 38" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" />
          <polygon points="50,28 54,38 64,38 56,44 59,54 50,48 41,54 44,44 36,38 46,38" fill="#EAB308" />
          {/* Typography */}
          <text x="96" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF" letterSpacing="0.5">THE INFANTRY</text>
          <text x="96" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="800" fill="#FDE047">DEFENCE ACADEMY</text>
          <text x="96" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="700" fill="#94A3B8">INDIAN ARMY ESTB.</text>
        </svg>
      );

    case 'nitttr':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#1E3A8A" />
          <circle cx="50" cy="50" r="32" fill="#FFFFFF" />
          <circle cx="50" cy="50" r="26" fill="none" stroke="#2563EB" strokeWidth="3" strokeDasharray="6 3" />
          <text x="50" y="55" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="950" fill="#1E3A8A" textAnchor="middle">NITTTR</text>
          <text x="96" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">NITTTR BHOPAL</text>
          <text x="96" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="700" fill="#93C5FD">MINISTRY OF EDUCATION</text>
          <text x="96" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#BFDBFE">GOVT. OF INDIA</text>
        </svg>
      );

    case 'hyundai':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#002C5F" />
          {/* Hyundai Oval & Slanted H */}
          <ellipse cx="50" cy="50" rx="32" ry="24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
          <path d="M 38 64 C 42 46 44 40 44 36 M 56 64 C 56 60 58 54 62 36 M 40 50 C 48 48 52 48 60 50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" />
          <text x="96" y="46" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="18" fontWeight="950" fill="#FFFFFF" letterSpacing="2">HYUNDAI</text>
          <text x="96" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="700" fill="#93C5FD" letterSpacing="1">MOTORS DEALERSHIP</text>
        </svg>
      );

    case 'maruti-suzuki':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          {/* Suzuki Red & Blue S Icon */}
          <rect x="24" y="24" width="52" height="52" rx="8" fill="#E11D48" />
          <path d="M 58 36 L 40 46 L 60 54 L 42 64" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="88" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="950" fill="#0F172A">MARUTI SUZUKI</text>
          <rect x="88" y="52" width="76" height="16" rx="4" fill="#0284C7" />
          <text x="126" y="64" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">ARENA HUB</text>
        </svg>
      );

    case 'honda':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#DC2626" />
          {/* Honda Wing Vector */}
          <circle cx="48" cy="50" r="30" fill="#FFFFFF" />
          <path d="M 32 60 C 38 42 54 38 64 36 C 58 44 54 50 50 62 C 44 56 40 56 36 60 Z" fill="#DC2626" />
          <text x="92" y="46" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="18" fontWeight="950" fill="#FFFFFF" letterSpacing="2.5">HONDA</text>
          <text x="92" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#FEE2E2" letterSpacing="1">2 WHEELERS SHOWROOM</text>
        </svg>
      );

    case 'gyan-ganga':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0F172A" />
          <circle cx="48" cy="50" r="30" fill="#1E3A8A" stroke="#F59E0B" strokeWidth="2.5" />
          {/* Academic Book & Sun */}
          <path d="M 36 56 C 44 52 48 54 48 54 C 48 54 52 52 60 56 L 60 44 C 52 40 48 42 48 42 C 48 42 44 40 36 44 Z" fill="#FDE047" />
          <circle cx="48" cy="36" r="4" fill="#FDE047" />
          <text x="90" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">GYAN GANGA</text>
          <text x="90" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" fill="#FBBF24">GROUP OF INSTITUTES</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="600" fill="#94A3B8">ENGINEERING CAMPUS</text>
        </svg>
      );

    case 'aakash':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0284C7" />
          {/* Aakash Sun Emblem */}
          <circle cx="48" cy="50" r="28" fill="#FACC15" />
          <path d="M 48 30 L 48 70 M 28 50 L 68 50 M 34 36 L 62 64 M 34 64 L 62 36" stroke="#0284C7" strokeWidth="3" />
          <circle cx="48" cy="50" r="14" fill="#FFFFFF" />
          <text x="90" y="46" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="17" fontWeight="950" fill="#FFFFFF" letterSpacing="1.5">+Aakash</text>
          <text x="90" y="66" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#FEF08A">BYJU'S PREMIER NETWORK</text>
        </svg>
      );

    case 'holy-cross':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#312E81" />
          <circle cx="48" cy="50" r="30" fill="#4338CA" stroke="#FBBF24" strokeWidth="2.5" />
          {/* Golden Cross */}
          <rect x="45" y="30" width="6" height="40" fill="#FDE047" rx="1" />
          <rect x="34" y="42" width="28" height="6" fill="#FDE047" rx="1" />
          <text x="90" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF">HOLY CROSS</text>
          <text x="90" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="700" fill="#FDE047">SR. SEC. SCHOOL</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#C7D2FE">CONVENT EDUCATION</text>
        </svg>
      );

    case 'balak-mandir':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#047857" />
          <circle cx="48" cy="50" r="30" fill="#FFFFFF" />
          {/* Wisdom Torch / Lamp */}
          <path d="M 40 60 L 56 60 L 52 48 L 44 48 Z" fill="#D97706" />
          <path d="M 48 34 C 44 40 46 46 48 48 C 50 46 52 40 48 34 Z" fill="#EF4444" />
          <text x="90" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF">BALAK MANDIR</text>
          <text x="90" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="700" fill="#A7F3D0">HIGHER SEC. SCHOOL</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#D1FAE5">ACADEMIC EXCELLENCE</text>
        </svg>
      );

    case 'vkmcpl':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0F172A" />
          {/* Heavy Construction Crane & Diamond */}
          <rect x="22" y="22" width="56" height="56" rx="10" fill="#D97706" />
          <path d="M 32 64 L 50 36 L 68 64 Z" fill="none" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="50" y1="36" x2="50" y2="64" stroke="#FFFFFF" strokeWidth="3" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="950" fill="#FFFFFF" letterSpacing="1">VKMCPL</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#FBBF24">INFRASTRUCTURE</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#94A3B8">HEAVY PROJECTS LTD</text>
        </svg>
      );

    case 'ellcon':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#1E293B" />
          <circle cx="48" cy="50" r="30" fill="#2563EB" />
          <path d="M 36 38 L 60 38 L 48 64 Z" fill="#F8FAFC" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="950" fill="#FFFFFF" letterSpacing="1">ELLCON</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#60A5FA">PROJECTS PVT LTD</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#94A3B8">ENGINEERING &amp; CIVIL</text>
        </svg>
      );

    case 'jkr':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#4338CA" />
          <circle cx="48" cy="50" r="28" fill="#FFFFFF" />
          {/* Logistics Express Arrows */}
          <path d="M 34 50 L 52 38 L 52 46 L 62 46 L 62 54 L 52 54 L 52 62 Z" fill="#4338CA" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="950" fill="#FFFFFF" letterSpacing="1">JKR GROUP</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#A5B4FC">ENTERPRISE &amp; LOGISTICS</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#E0E7FF">SUPPLY CHAIN NETWORK</text>
        </svg>
      );

    case 'tektronics':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0F172A" />
          <rect x="22" y="22" width="56" height="56" rx="10" fill="#0284C7" />
          {/* Microchip / Circuit Lines */}
          <rect x="36" y="36" width="28" height="28" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.5" />
          <circle cx="50" cy="50" r="5" fill="#38BDF8" />
          <line x1="50" y1="28" x2="50" y2="36" stroke="#38BDF8" strokeWidth="2" />
          <line x1="50" y1="64" x2="50" y2="72" stroke="#38BDF8" strokeWidth="2" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="15" fontWeight="950" fill="#FFFFFF" letterSpacing="0.5">TEKTRONICS</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#38BDF8">SYSTEMS &amp; TECH</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#94A3B8">AUTOMATION SOLUTIONS</text>
        </svg>
      );

    case 'nnt-developers':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#1E3A8A" />
          {/* Skyline Towers */}
          <circle cx="48" cy="50" r="30" fill="#0F172A" stroke="#F59E0B" strokeWidth="2" />
          <rect x="36" y="44" width="10" height="24" fill="#FDE047" />
          <rect x="48" y="34" width="12" height="34" fill="#FFFFFF" />
          <rect x="58" y="48" width="8" height="20" fill="#60A5FA" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="950" fill="#FFFFFF">NNT BUILDERS</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#FDE047">DEVELOPERS PVT LTD</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#93C5FD">TOWNSHIP &amp; RESIDENTIAL</text>
        </svg>
      );

    case 'maha-koshal-hospital':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#BE123C" />
          <circle cx="48" cy="50" r="30" fill="#FFFFFF" />
          {/* Medical Red Cross */}
          <rect x="43" y="32" width="10" height="36" fill="#BE123C" rx="2" />
          <rect x="30" y="45" width="36" height="10" fill="#BE123C" rx="2" />
          <text x="90" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13.5" fontWeight="950" fill="#FFFFFF">MAHA KOSHAL</text>
          <text x="90" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#FECDD3">HOSPITAL &amp; RESEARCH</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#FFE4E6">MULTISPECIALTY CENTER</text>
        </svg>
      );

    case 'frontier-ent-hospital':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#0D9488" />
          <circle cx="48" cy="50" r="30" fill="#FFFFFF" />
          {/* Healthcare Pulse Line */}
          <path d="M 28 50 L 38 50 L 44 36 L 50 64 L 56 46 L 62 50 L 68 50" fill="none" stroke="#0D9488" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="90" y="42" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13.5" fontWeight="950" fill="#FFFFFF">FRONTIER ENT</text>
          <text x="90" y="58" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="800" fill="#99F6E4">SPECIALTY HOSPITAL</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#CCFBF1">ADVANCED CLINICAL CARE</text>
        </svg>
      );

    case 'rajul-dream-city':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#065F46" />
          <circle cx="48" cy="50" r="28" fill="#FBBF24" />
          {/* Luxury Villa Roof & Sun */}
          <polygon points="48,32 30,48 66,48" fill="#065F46" />
          <rect x="36" y="48" width="24" height="18" fill="#065F46" />
          <rect x="44" y="54" width="8" height="12" fill="#FEF08A" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="15" fontWeight="950" fill="#FFFFFF">RAJUL DREAM CITY</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#FDE047">LUXURY TOWNSHIPS</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#A7F3D0">GATED COMMUNITIES</text>
        </svg>
      );

    case 'ojas':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#6B21A8" />
          <circle cx="48" cy="50" r="30" fill="#F3E8FF" />
          {/* Diamond Crystal Vector */}
          <polygon points="48,28 64,46 48,68 32,46" fill="#7E22CE" stroke="#A855F7" strokeWidth="2" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="18" fontWeight="950" fill="#FFFFFF" letterSpacing="1.5">OJAS GROUP</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#E9D5FF">COMMERCIAL COMPLEXES</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#F3E8FF">BUSINESS CENTERS</text>
        </svg>
      );

    case 'swastik':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#C2410C" />
          <circle cx="48" cy="50" r="28" fill="#FFFFFF" />
          <path d="M 48 34 L 48 66 M 34 48 L 66 48" stroke="#C2410C" strokeWidth="4" strokeLinecap="round" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="15" fontWeight="950" fill="#FFFFFF">SWASTIK GROUP</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#FED7AA">DEVELOPERS &amp; HOUSING</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#FFEDD5">RESIDENTIAL REALTY</text>
        </svg>
      );

    case 'royal-delite':
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#1C1917" stroke="#EAB308" strokeWidth="2" />
          <circle cx="48" cy="50" r="28" fill="#292524" />
          {/* Royal 5-Star Crown */}
          <polygon points="34,58 38,40 44,48 48,34 52,48 58,40 62,58" fill="#FDE047" stroke="#CA8A04" strokeWidth="1" />
          <text x="90" y="44" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="950" fill="#FFFFFF" letterSpacing="0.5">ROYAL DELITE</text>
          <text x="90" y="60" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9.5" fontWeight="800" fill="#FDE047">LUXURY HOTEL &amp; SUITES</text>
          <text x="90" y="74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="600" fill="#A8A29E">PREMIUM HOSPITALITY</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 240 100" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect width="240" height="100" rx="12" fill="#1E293B" />
          <circle cx="48" cy="50" r="28" fill="#334155" />
          <text x="48" y="56" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="900" fill="#FFFFFF" textAnchor="middle">{name.charAt(0)}</text>
          <text x="90" y="46" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">{name}</text>
          <text x="90" y="64" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" fill="#94A3B8">{category}</text>
        </svg>
      );
  }
}
