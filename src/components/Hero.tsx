import React, { useRef } from 'react';
import AnimatedBackground from './AnimatedBackground';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
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
  return <section className="relative min-h-[70vh] pt-24 pb-16 overflow-hidden bg-convrt-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20" poster="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png">
          {/* Adicione o src do seu vídeo aqui */}
          {/* <source src="/path-to-your-video.mp4" type="video/mp4" /> */}
          {/* <source src="/path-to-your-video.webm" type="video/webm" /> */}
        </video>
        {/* Dark overlay para manter legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-convrt-dark/80 via-convrt-dark/70 to-convrt-dark"></div>
      </div>
      
      <AnimatedBackground />
      
      <div className="container-section relative z-10">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-3xl mx-auto text-center">
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-accent/20 text-convrt-accent mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium font-inter tracking-wide">Feito para clínicas que vivem cheias</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-inter font-bold text-4xl md:text-5xl tracking-tight max-w-4xl mx-auto mb-4 text-convrt-light leading-[1.1] lg:text-5xl">
            Mais pacientes confirmados. Menos horários vagos.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-inter text-xl text-convrt-light/80 max-w-3xl mx-auto mb-3 leading-relaxed">A Spectra automatiza confirmações e mensagens da sua clínica via WhatsApp como uma secretária que trabalha 24 horas.</motion.p>
          
          <motion.p variants={itemVariants} className="font-inter text-sm text-convrt-accent/80 max-w-2xl mx-auto mb-20">
            1 em cada 3 pacientes agenda fora do horário comercial — aproveite essa demanda.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#cta" className="button-primary flex items-center group font-inter font-medium">
              Agendar demonstração
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;