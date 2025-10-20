
import React, { useState } from 'react';
import { Target, Users, LineChart } from 'lucide-react';
import StepContent from './how-it-works/StepContent';
import { motion } from 'framer-motion';
import Step1Dashboard from './how-it-works/Step1Dashboard';
import Step2Dashboard from './how-it-works/Step2Dashboard';
import Step3Dashboard from './how-it-works/Step3Dashboard';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Steps data with corresponding dashboard components
  const steps = [
    {
      id: 1,
      icon: <Target className="w-4 h-4" />,
      title: "Conectamos à sua agenda em poucos minutos",
      description: "Integramos com o seu sistema, Google Calendar e temos nosso próprio dashboard...",
      highlightText: "Rápido e simples:",
      highlightDetails: "Configuração em 3-7 dias úteis após aprovação",
      dashboard: <Step1Dashboard />
    },
    {
      id: 2,
      icon: <Users className="w-4 h-4" />,
      title: "Ativamos lembretes e confirmações inteligentes",
      description: "A Spectra envia mensagens automáticas via WhatsApp, confirma horários e responde dúvidas comuns — naturalmente.",
      highlightText: "Automatização total:",
      highlightDetails: "Lembretes, confirmações e respostas 24/7",
      dashboard: <Step2Dashboard />
    },
    {
      id: 3,
      icon: <LineChart className="w-4 h-4" />,
      title: "Você vê a diferença na agenda",
      description: "Em dias, não semanas: menos faltas, mais horários preenchidos e equipe focada no atendimento.",
      highlightText: "Resultados reais:",
      highlightDetails: "28% menos no-show, 42% mais agendamentos fora do horário",
      dashboard: <Step3Dashboard />
    }
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-16 bg-convrt-dark border-t border-convrt-accent/10" id="how-it-works">
      <div className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="section-tag">
            Como funciona
          </div>
          <h2 className="heading-lg text-convrt-light mb-4">
            3 passos para automatizar sua clínica
          </h2>
          <p className="text-convrt-light/70 text-lg max-w-2xl mx-auto">
            Configure rápido, ative e veja os resultados na prática.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto bg-convrt-dark/50 border border-convrt-accent/10 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            {/* Steps Section - Now on the left */}
            <div className="lg:w-1/3 h-full flex flex-col gap-1 p-4 bg-convrt-dark/30">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
            
            {/* Dashboard Display - Now covering the entire right section */}
            <div className="lg:w-2/3 relative h-full">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: activeStep === step.id ? 1 : 0,
                    zIndex: activeStep === step.id ? 10 : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: "easeInOut"
                  }}
                >
                  {step.dashboard}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
