import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Step2Dashboard = () => {
  const messages = [
    { time: '09:00', text: 'Lembrete: Consulta amanhã às 14h', status: 'enviado', delay: 0.1 },
    { time: '09:05', text: 'Confirmação recebida ✓', status: 'confirmado', delay: 0.2 },
    { time: '13:30', text: 'Lembrete: Sua consulta é em 30min', status: 'enviado', delay: 0.3 },
  ];

  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0A0B14] via-[#0F1120] to-[#6096ba]/10 p-4">
      <div className="h-full flex flex-col">
        <div className="mb-4">
          <h3 className="text-white text-lg font-bold mb-1">Mensagens Automáticas</h3>
          <p className="text-white/80 text-xs">Lembretes e confirmações via WhatsApp</p>
        </div>

        <div className="flex-1 space-y-2 mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: message.delay }}
              className={`${
                message.status === 'confirmado'
                  ? 'bg-[#1A1B2E]/80 border-green-500/50'
                  : 'bg-[#1A1B2E]/80 border-[#6096ba]/40'
              } border rounded-lg p-3`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full ${
                  message.status === 'confirmado' 
                    ? 'bg-green-500/30' 
                    : 'bg-[#6096ba]/30'
                } flex items-center justify-center flex-shrink-0`}>
                  {message.status === 'confirmado' ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <MessageSquare className="w-4 h-4 text-[#6096ba]" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">{message.text}</span>
                    <span className="text-white/60 text-xs font-medium">{message.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-white/50" />
                    <span className="text-white/70 text-xs">
                      {message.status === 'confirmado' ? 'Paciente confirmou' : 'Mensagem enviada'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#6096ba]/20 border border-[#6096ba]/60 rounded-lg p-3"
          >
            <div className="text-2xl font-bold text-[#a3cef1] mb-1">24/7</div>
            <p className="text-white/80 text-xs font-medium">Disponibilidade</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-green-500/20 border border-green-500/60 rounded-lg p-3"
          >
            <div className="text-2xl font-bold text-green-400 mb-1">92%</div>
            <p className="text-white/80 text-xs font-medium">Taxa de resposta</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Step2Dashboard;