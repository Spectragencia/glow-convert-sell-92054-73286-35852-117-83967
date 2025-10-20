import React from 'react';
import { MessageSquare, Clock, Zap, Calendar, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
const ProblemStatement = () => {
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
  const benefits = [{
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Atendimento 24/7",
    description: "Responde seus pacientes qualquer hora sem sobrecarregar a equipe"
  }, {
    icon: <Users className="w-5 h-5" />,
    title: "Respostas naturais",
    description: "Conversa como humano, seus pacientes nem percebem a diferença"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    title: "Integra com seu sistema",
    description: "Conecta com seu sistema atual sem precisar mudar nada"
  }, {
    icon: <Clock className="w-5 h-5" />,
    title: "Menos no-show",
    description: "Lembretes automáticos que reduzem faltas e otimizam sua agenda"
  }, {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Atendimento fora do horário",
    description: "Marca consultas quando sua clínica está fechada automaticamente"
  }, {
    icon: <Zap className="w-5 h-5" />,
    title: "Foco no cliente",
    description: "Libera sua equipe das mensagens repetitivas para focar no cliente"
  }];
  return <section className="relative py-16 overflow-hidden border-t border-convrt-accent/10" id="problem">
      <div className="container-section relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants} className="max-w-3xl mx-auto text-center mb-12">
          <motion.div variants={itemVariants} className="section-tag">
            Por que tantas clínicas estão automatizando?
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="heading-lg text-convrt-light mb-6 text-4xl">
            Sua equipe aliviada, seus pacientes mais satisfeitos
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-convrt-light/70 mb-8 max-w-2xl mx-auto text-base">
            Atendimento rápido e humanizado que libera sua equipe para o que realmente importa.
          </motion.p>
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{
        once: true,
        margin: "-100px"
      }} variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          y: -5
        }} className="group p-6 rounded-xl bg-convrt-dark/50 border-2 border-convrt-accent/40 hover:border-convrt-accent/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-convrt-primary/20 text-convrt-accent flex items-center justify-center mb-4 group-hover:bg-convrt-primary/30 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-convrt-light mb-2">
                {benefit.title}
              </h3>
              <p className="text-convrt-light/60 text-sm">
                {benefit.description}
              </p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default ProblemStatement;