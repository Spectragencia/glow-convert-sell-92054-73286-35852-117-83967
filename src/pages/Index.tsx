
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductShowcaseSection from '@/components/ProductShowcaseSection';
import ProblemStatement from '@/components/ProblemStatement';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import characterBubble from '@/assets/character-bubble.png';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section').forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-convrt-dark overflow-hidden">
      <div className="fixed w-full z-50">
        <Navbar />
      </div>
      
      <main className="pt-16">
        <Hero />
        
        {/* Product Showcase Section */}
        <ProductShowcaseSection />
        
        {/* Problem Statement with gradient background */}
        <div className="relative bg-gradient-to-b from-convrt-dark via-convrt-primary/5 to-convrt-dark">
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
          {/* Divider wave effect */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-convrt-accent/30 to-transparent"></div>
          <ProblemStatement />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-convrt-accent/30 to-transparent"></div>
        </div>
        
        {/* How It Works with darker background */}
        <div className="relative bg-convrt-dark">
          <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
          <HowItWorks />
        </div>
        
        {/* Testimonials with subtle gradient */}
        <div className="relative bg-gradient-to-b from-convrt-dark via-convrt-hover/5 to-convrt-dark">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-convrt-accent/30 to-transparent"></div>
          <Testimonials />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-convrt-accent/30 to-transparent"></div>
        </div>
        
        {/* CTA Section with dramatic gradient */}
        <section className="relative py-16 px-6 border-t border-convrt-accent/10 bg-gradient-to-br from-convrt-dark via-convrt-primary/10 to-convrt-dark overflow-hidden" id="cta">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <div className="container mx-auto max-w-5xl relative z-10">
            <div 
              className="rounded-2xl overflow-hidden relative bg-convrt-primary/20 border border-convrt-accent/20"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/lovable-uploads/eada8c8b-332c-4ac7-813d-42884f942368.png" 
                  alt="Clínica" 
                  className="w-full h-full object-cover object-center opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-convrt-dark via-convrt-dark/95 to-convrt-dark/90"></div>
              </div>
              
              <div className="relative z-10 p-12 md:p-16 text-convrt-light grid md:grid-cols-[2fr_1fr] gap-8 items-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-convrt-accent/20 text-convrt-accent mb-6">
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium font-inter tracking-wide">Sem contrato, sem complicação</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-convrt-light">
                    Chega de horários vagos. Comece seu teste gratuito agora.
                  </h2>
                  
                  <p className="text-lg text-convrt-light/80 mb-8">
                    Só mais pacientes na sua agenda.
                  </p>
                  
                  <div className="flex flex-col space-y-3 mb-8">
                    {[
                      "POC de 30 dias",
                      "Cancelamento fácil",
                      "Suporte humano em tempo real"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-convrt-accent mr-2 flex-shrink-0" />
                        <span className="text-convrt-light/90 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.a
                    href="#cta"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="button-primary flex items-center text-lg px-8 py-4 shadow-lg shadow-convrt-primary/10 hover:shadow-xl hover:shadow-convrt-primary/20 rounded-full group"
                  >
                    Começar agora
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  
                  <p className="text-xs text-convrt-light/50 mt-4">
                    Seus dados são confidenciais e não serão compartilhados.
                  </p>
                </motion.div>
                
                {/* Character Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="hidden md:flex justify-center items-center"
                >
                  <img 
                    src={characterBubble} 
                    alt="Assistente Spectra OS" 
                    className="w-64 h-64 object-contain animate-floating"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>
      
      <footer className="bg-convrt-dark py-8 border-t border-convrt-accent/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h3 className="text-2xl font-bold text-convrt-light">Spectra OS</h3>
              <p className="text-sm text-convrt-light/60 mt-2">© {new Date().getFullYear()} Spectra OS • CNPJ 56.988.458/0001-55</p>
              <p className="text-sm text-convrt-accent mt-1">contato@spectraos.com</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-8"
            >
              <a href="#" className="text-convrt-light/60 hover:text-convrt-accent transition-colors text-sm">LGPD</a>
              <a href="#" className="text-convrt-light/60 hover:text-convrt-accent transition-colors text-sm">Termos</a>
              <a href="#" className="text-convrt-light/60 hover:text-convrt-accent transition-colors text-sm">Contato</a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
