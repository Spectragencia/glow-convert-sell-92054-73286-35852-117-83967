
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  value: string;
  description: string;
  icon: React.ReactNode;
  details: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, description, icon, details }) => {
  return (
    <div className="bg-convrt-dark/50 rounded-xl border-2 border-convrt-accent/40 relative overflow-hidden group h-full hover:border-convrt-accent/60 transition-all duration-300">
      <div className="p-6 text-center h-full flex flex-col">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-convrt-primary/20 text-convrt-accent mb-4 relative z-10 mx-auto">
          {icon}
        </div>
        <div className="flex items-baseline gap-1 justify-center">
          <div className="text-3xl font-bold text-convrt-accent font-inter relative z-10">{value}</div>
        </div>
        <div className="text-convrt-light/90 mt-2 font-inter text-lg font-semibold relative z-10">
          {description}
        </div>
        <div className="text-convrt-light/60 text-xs mt-2 relative z-10 leading-relaxed flex-grow">
          {details}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
