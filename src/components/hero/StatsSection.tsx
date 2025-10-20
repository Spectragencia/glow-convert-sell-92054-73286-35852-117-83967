
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Award } from 'lucide-react';
import StatCard from './StatCard';

interface StatsSectionProps {
  statsRef: React.RefObject<HTMLDivElement> | null;
}

const StatsSection: React.FC<StatsSectionProps> = ({ statsRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.div 
      ref={statsRef} 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      <motion.div variants={itemVariants}>
        <StatCard 
          value="24/7" 
          description="Agenda cheia sem contratar" 
          icon={<TrendingUp className="w-6 h-6" />}
          details="atendimento 24/7 no WhatsApp com sequência confirma → lembra → reage em até 7 min. Resultado: mais cadeiras ocupadas com o mesmo time."
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <StatCard 
          value="100%" 
          description="Operação padronizada que não falha" 
          icon={<BarChart2 className="w-6 h-6" />}
          details="roteiros prontos e automação do básico (confirmação, lembrete e follow-up/retorno) — todo dia, igual, no horário certo. Menos erro, menos retrabalho na recepção."
        />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <StatCard 
          value="15min" 
          description="ROI rápido e risco baixo" 
          icon={<Award className="w-6 h-6" />}
          details="deploy em 15 min, piloto de 14 dias, sem fidelidade. Âncora simples de custo (menos que um turno) e decisão por número (confirmadas, no-show, horas livres)."
        />
      </motion.div>
    </motion.div>
  );
};

export default StatsSection;
