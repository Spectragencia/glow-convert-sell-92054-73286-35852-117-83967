import React from 'react';
import { motion } from 'framer-motion';
import DashboardDemo from './hero/DashboardDemo';
import StatsSection from './hero/StatsSection';

const ProductShowcaseSection = () => {
  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section className="relative py-8 overflow-hidden bg-convrt-dark border-t border-convrt-accent/10">
      <div className="container-section relative z-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          className="max-w-5xl mx-auto"
        >
          <motion.p variants={itemVariants} className="text-xl text-center text-convrt-light/90 mb-8 font-semibold md:text-4xl">
            A melhor amiga da sua secretaria!
          </motion.p>
          
          <motion.div variants={itemVariants} className="mb-24">
            <DashboardDemo />
          </motion.div>
          
          {/* Stats Section */}
          <StatsSection statsRef={null} />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;