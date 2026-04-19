import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d16eff"/>
          <stop offset="100%" stopColor="#7a2cff"/>
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <style dangerouslySetInnerHTML={{__html: `
        .streak {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: draw 2s ease-out forwards;
        }

        .streak:nth-child(2) {
          animation-delay: 0.2s;
        }
        .streak:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        .star {
          animation: pulse 2s infinite ease-in-out;
          transform-origin: center;
          filter: url(#glow);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        .logo-group {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .logo-text {
          font-family: 'Montserrat', sans-serif;
        }

        .logo-tagline {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      <g className="logo-group">
        <path className="streak" d="M260 130 Q420 60 650 40" stroke="url(#purple)" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path className="streak" d="M270 145 Q430 80 655 60" stroke="url(#purple)" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round"/>
        <path className="streak" d="M280 160 Q440 100 660 80" stroke="url(#purple)" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round"/>

        <g className="star">
          <circle cx="660" cy="40" r="3" fill="#d16eff"/>
          <g stroke="#d16eff" strokeWidth="1">
            <line x1="660" y1="28" x2="660" y2="52"/>
            <line x1="648" y1="40" x2="672" y2="40"/>
            <line x1="650" y1="30" x2="670" y2="50"/>
            <line x1="650" y1="50" x2="670" y2="30"/>
          </g>
        </g>
      </g>

      <text x="450" y="175"
            textAnchor="middle"
            fontWeight="500"
            fontSize="14"
            letterSpacing="6"
            fill="#b8c0d9"
            className="logo-text">
        THE
      </text>

      <text x="450" y="220"
            textAnchor="middle"
            fontWeight="600"
            fontSize="40"
            letterSpacing="10"
            fill="#ffffff"
            className="logo-text">
        STRATOSPHERE
      </text>

      <line x1="300" y1="240" x2="600" y2="240"
            stroke="#7a2cff"
            strokeWidth="1"
            opacity="0.6"/>

      <text x="450" y="265"
            textAnchor="middle"
            className="logo-tagline"
            fontSize="16"
            fill="#a0a8c0"
            letterSpacing="1">
        clarity <tspan fill="#9d5cff" fontWeight="600">above</tspan> noise
      </text>
    </svg>
  );
}
