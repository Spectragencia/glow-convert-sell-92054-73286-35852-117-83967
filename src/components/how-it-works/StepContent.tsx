
import React from 'react';
import { motion } from 'framer-motion';

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: string;
  highlightText: string;
  highlightDetails: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  highlightText,
  highlightDetails,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <motion.div 
      className={`relative px-4 py-3 cursor-pointer transition-all duration-300 w-full ${
        isActive 
          ? 'border-l-4 border-convrt-accent rounded-r-lg' 
          : 'border-l-4 border-convrt-accent/20 rounded-r-lg'
      }`}
      onClick={onClick}
      initial={{ opacity: 0.9, x: -10 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        borderColor: isActive ? '#6096ba' : '#e5e7eb',
        backgroundColor: '#274c77'
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ x: isActive ? 0 : 5 }}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <motion.div 
            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${
              isActive 
                ? 'bg-convrt-primary text-convrt-light' 
                : 'bg-convrt-hover text-convrt-light'
            }`}
            animate={{ 
              backgroundColor: isActive ? '#274c77' : '#6096ba',
              color: isActive ? '#f7f7ff' : '#f7f7ff'
            }}
            transition={{ duration: 0.3 }}
          >
            {stepNumber}
          </motion.div>
        </div>
        
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-convrt-accent/10 text-convrt-accent mb-1">
            {icon}
          </div>
          
          <h3 className="text-base font-bold text-convrt-light mb-1">
            {title}
          </h3>
          
          <p className="text-sm text-convrt-light/70 mb-2 line-clamp-2">
            {description}
          </p>
          
          {isActive && (
            <motion.div 
              className="bg-convrt-primary/10 rounded-md p-2 text-xs text-convrt-light/90 border border-convrt-accent/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="font-medium text-convrt-accent">{highlightText}</span> {highlightDetails}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StepContent;
