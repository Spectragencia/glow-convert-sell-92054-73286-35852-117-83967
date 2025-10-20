import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Check, Clock } from 'lucide-react';

const Step1Dashboard = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0A0B14] via-[#0F1120] to-[#6096ba]/10 p-4">
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-white text-lg font-bold mb-1">Integração de Agenda</h3>
          <p className="text-white/80 text-xs">Conecte sua agenda em minutos</p>
        </div>

        <div className="flex-1 grid grid-cols-1 gap-3 mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1A1B2E]/80 border border-green-500/40 rounded-lg p-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">Dashboard Próprio</span>
                  <span className="text-green-400 text-xs font-bold">Conectado</span>
                </div>
                <p className="text-white/70 text-xs">API integrada com sucesso</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1B2E]/80 border border-green-500/40 rounded-lg p-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">Google Calendar</span>
                  <span className="text-green-400 text-xs font-bold">Conectado</span>
                </div>
                <p className="text-white/70 text-xs">Sincronização ativa</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1A1B2E]/80 border border-green-500/40 rounded-lg p-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold text-sm">Seu Sistema</span>
                  <span className="text-green-400 text-xs font-bold">Conectado</span>
                </div>
                <p className="text-white/70 text-xs">Sincronização ativa</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-[#6096ba]/20 border border-[#6096ba]/60 rounded-lg p-3"
        >
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-5 h-5 text-[#6096ba]" />
            <span className="text-white font-bold text-xs">Tempo de configuração</span>
          </div>
          <div className="text-3xl font-bold text-[#a3cef1] mb-1">3-7 dias</div>
          <p className="text-white/80 text-xs">Após aprovação do acesso</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Step1Dashboard;
