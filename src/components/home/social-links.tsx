"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SOCIAL_LINKS } from "@/constants/home-data";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {SOCIAL_LINKS.map(({ href, icon, label, external, color }) => (
        <a
          key={href}
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className={`relative group p-3 clip-chamfer-sm border-2 backdrop-blur-sm 
                     transition-all duration-300 hover:scale-110 ${color}`}
          aria-label={label}
        >
          <FontAwesomeIcon icon={icon} className="h-4 w-4 relative z-10" />

          {/* Tooltip */}
          <div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 
                          bg-card border border-primary/30 text-primary text-xs font-mono-cyber
                          clip-chamfer-sm opacity-0 group-hover:opacity-100 transition-opacity 
                          duration-300 whitespace-nowrap pointer-events-none"
          >
            <span className="text-cyan-400">[</span>
            {label}
            <span className="text-cyan-400">]</span>
          </div>

          {/* Corner Accents */}
          <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-current opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-current opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      ))}
    </div>
  );
}
