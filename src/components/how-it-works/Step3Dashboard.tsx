import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Calendar, Users } from 'lucide-react';

const Step3Dashboard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0A0B14] via-[#0F1120] to-[#6096ba]/10 p-4">
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-white text-lg font-bold mb-1">Resultados em Tempo Real</h3>
          <p className="text-white/80 text-xs">Acompanhe o impacto na sua agenda</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-green-500/20 border border-green-500/60 rounded-lg p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-white/80 text-xs font-medium">Agendamentos</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">+42%</div>
            <p className="text-white/80 text-[10px]">Fora do horário comercial</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-red-500/20 border border-red-500/60 rounded-lg p-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-red-500/30 flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-white/80 text-xs font-medium">No-show</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">-28%</div>
            <p className="text-white/80 text-[10px]">Redução de faltas</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#1A1B2E]/80 border border-[#6096ba]/50 rounded-lg p-3 mb-3"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-xs">Ocupação da Agenda</span>
            <span className="text-[#a3cef1] font-bold text-lg">87%</span>
          </div>
          <div className="w-full bg-[#0A0B14] rounded-full h-2.5 overflow-hidden border border-[#6096ba]/30">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '87%' }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-full bg-gradient-to-r from-[#6096ba] to-[#a3cef1] rounded-full"
            />
          </div>
          <p className="text-white/80 text-xs mt-2 font-medium">+15% vs. mês anterior</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#6096ba]/20 border border-[#6096ba]/60 rounded-lg p-2"
          >
            <Calendar className="w-5 h-5 text-[#a3cef1] mb-1" />
            <div className="text-lg font-bold text-[#a3cef1] mb-1">156</div>
            <p className="text-white/80 text-[10px] font-medium">Horários preenchidos</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#6096ba]/20 border border-[#6096ba]/60 rounded-lg p-2"
          >
            <Users className="w-5 h-5 text-[#a3cef1] mb-1" />
            <div className="text-lg font-bold text-[#a3cef1] mb-1">89%</div>
            <p className="text-white/80 text-[10px] font-medium">Taxa de confirmação</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Step3Dashboard;