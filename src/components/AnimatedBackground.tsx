
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-convrt-dark">
      {/* Boxed rectangular shape with rounded corners and space from sides */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80vh] bg-convrt-dark/50 border border-convrt-accent/5 rounded-[40px]" />
    </div>
  );
};

export default AnimatedBackground;
