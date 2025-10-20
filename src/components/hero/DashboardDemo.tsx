import React from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, MessageSquare, Users, FileText, BarChart3, Settings, User, Clock, Star, TrendingDown, Sparkles } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis } from 'recharts';

const DashboardDemo = () => {
  const pieData = [
    { name: 'Consultas', value: 45 },
    { name: 'Retornos', value: 30 },
    { name: 'Procedimentos', value: 25 },
  ];

  const barData = [
    { name: 'Dr. Silva', value: 85 },
    { name: 'Dra. Ana', value: 92 },
    { name: 'Dr. João', value: 78 },
    { name: 'Dra. Maria', value: 88 },
    { name: 'Dr. Pedro', value: 95 },
    { name: 'Dra. Clara', value: 82 },
  ];

  const COLORS = ['#6096ba', '#274c77', '#a3cef1'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative max-w-6xl mx-auto"
    >
      {/* Browser Window Frame */}
      <div className="bg-convrt-light/5 backdrop-blur-sm rounded-2xl border border-convrt-accent/20 overflow-hidden shadow-2xl">
        {/* Browser Header */}
        <div className="bg-convrt-light/10 border-b border-convrt-accent/20 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 text-center text-convrt-light/50 text-sm">
            spectra.app/dashboard
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="bg-gradient-to-br from-[#E8F1F8] to-[#D4E6F5] p-6 flex gap-6 min-h-[500px]">
          {/* Sidebar */}
          <div className="w-64 bg-[#D4E8F7]/60 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-convrt-primary/80 text-convrt-light px-4 py-3 rounded-lg mb-2">
              <Home className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </div>
            
            {[
              { icon: Calendar, label: 'Agenda' },
              { icon: MessageSquare, label: 'Conversas' },
              { icon: Users, label: 'Pacientes e Serviços' },
              { icon: FileText, label: 'Convênios' },
              { icon: BarChart3, label: 'Relatórios' },
              { icon: Settings, label: 'Configurações' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 text-convrt-primary/70 hover:text-convrt-primary px-4 py-3 rounded-lg hover:bg-convrt-light/20 transition-all cursor-pointer"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-convrt-primary mb-1 flex items-center gap-2">
                  Bom dia, Dra. Fernanda
                  <span className="text-2xl">☀️</span>
                </h2>
                <p className="text-convrt-primary/70 text-lg">
                  Hoje você tem 18 sorrisos para transformar.
                </p>
              </div>
              <div className="text-right text-sm font-semibold text-convrt-primary/80">
                Clínica Inteligente
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-convrt-hover/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-convrt-hover" />
                  </div>
                  <div className="text-3xl font-bold text-convrt-primary">24</div>
                </div>
                <div className="text-sm text-convrt-primary/70 font-medium">Pacientes atendidos</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-convrt-hover/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-convrt-hover" />
                  </div>
                  <div className="text-3xl font-bold text-convrt-primary">12</div>
                </div>
                <div className="text-sm text-convrt-primary/70 font-medium">Serviços agendados</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-convrt-hover/20 flex items-center justify-center">
                    <Star className="w-5 h-5 text-convrt-hover" />
                  </div>
                  <div className="text-3xl font-bold text-convrt-primary">98%</div>
                </div>
                <div className="text-sm text-convrt-primary/70 font-medium">Satisfação</div>
              </motion.div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-4">
              {/* Chart Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
              >
                <h3 className="text-lg font-semibold text-convrt-primary mb-4">
                  Atendimentos por categoria
                </h3>
                <div className="h-48 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Suggestion Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-convrt-primary mb-2 flex items-center gap-2">
                        Deseja uma ação sugerida?
                        <Sparkles className="w-4 h-4 text-convrt-hover" />
                      </h3>
                      <p className="text-xs text-convrt-primary/70 leading-relaxed">
                        Percebi que sua taxa de retorno caiu 8% esta semana.
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-convrt-hover/20 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-5 h-5 text-convrt-hover" />
                    </div>
                  </div>
                </motion.div>

                {/* Performance Chart */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-convrt-light/40 backdrop-blur-sm rounded-xl p-5 border border-convrt-accent/20"
                >
                  <h3 className="text-sm font-semibold text-convrt-primary mb-3">
                    Desempenho por profissional
                  </h3>
                  <div className="h-24">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <XAxis dataKey="name" hide />
                        <Bar dataKey="value" fill="#6096ba" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardDemo;
