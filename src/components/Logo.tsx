import React from 'react';

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      <style dangerouslySetInnerHTML={{__html: `
        .logo-text {
          font-family: 'Montserrat', sans-serif;
        }

        .logo-tagline {
          font-family: 'Inter', sans-serif;
        }
      `}} />

      {/* THE */}
      <text x="350" y="35"
            textAnchor="middle"
            fontWeight="500"
            fontSize="18"
            letterSpacing="8"
            fill="#b8c0d9"
            className="logo-text">
        THE
      </text>

      {/* STRATOSPHERE */}
      <text x="350" y="90"
            textAnchor="middle"
            fontWeight="600"
            fontSize="52"
            letterSpacing="12"
            fill="#ffffff"
            className="logo-text drop-shadow-md">
        STRATOSPHERE
      </text>

      {/* Divider */}
      <line x1="200" y1="120" x2="500" y2="120"
            stroke="#a855f7"
            strokeWidth="1.5"
            opacity="0.5"/>

      {/* Tagline */}
      <text x="350" y="145"
            textAnchor="middle"
            className="logo-tagline"
            fontSize="18"
            fill="#a0a8c0"
            letterSpacing="2">
        clarity <tspan fill="#a855f7" fontWeight="600">above</tspan> noise
      </text>
    </svg>
  );
}
