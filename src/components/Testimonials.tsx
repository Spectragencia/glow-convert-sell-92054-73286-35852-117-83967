import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "A agenda parou de ter buracos. Hoje 95% dos pacientes confirmam sozinhos via WhatsApp.",
    name: "Dra. Ana Paula",
    title: "Clínica Bem Cuidar",
    company: "São Paulo, SP",
    logo: "bem-cuidar",
    bgColor: "bg-convrt-primary/10",
  },
  {
    id: 2,
    quote: "Não precisamos mais ficar no celular confirmando. A Spectra faz isso por nós e os pacientes adoram.",
    name: "Dr. Ricardo",
    title: "Odonto Excellence",
    company: "Belo Horizonte, MG",
    logo: "odonto",
    bgColor: "bg-convrt-hover/10",
  },
  {
    id: 3,
    quote: "Reduzimos 28% das faltas em apenas 3 semanas de uso. Foi impressionante.",
    name: "Recepção",
    title: "Clínica Sorriso Novo",
    company: "Rio de Janeiro, RJ",
    logo: "sorriso",
    bgColor: "bg-convrt-accent/10",
  }
];

const stats = [
  {
    id: 1,
    value: "35%",
    description: "redução média de no-show no primeiro mês",
    name: "Dra. Mariana Silva",
    title: "Clínica Sorrirmais",
    company: "São Paulo, SP",
    bgColor: "bg-convrt-primary/10",
  },
  {
    id: 2,
    value: "42%",
    description: "de agendamentos concluídos fora do horário comercial",
    name: "Dr. Carlos Mendes",
    title: "Odonto Prime",
    company: "Curitiba, PR",
    bgColor: "bg-convrt-hover/10",
  },
  {
    id: 3,
    value: "+50",
    description: "Pacientes respondidos em menos de 1 minuto todo dia.",
    name: "Dra. Juliana Costa",
    title: "Clínica Vida Nova",
    company: "Brasília, DF",
    bgColor: "bg-convrt-accent/10",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 border-t border-convrt-accent/10" id="testimonials">
      <div className="container-section max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-convrt-light mb-3">Clínicas que confiam na Spectra</h2>
          <p className="text-convrt-light/60">Resultados reais de quem usa todos os dias</p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4">
          {/* Stats box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-4 rounded-xl overflow-hidden border border-convrt-accent/10"
          >
            <div className={`h-full ${stats[0].bgColor} p-8 flex flex-col`}>
              <div>
                <div className="text-5xl font-bold mb-2 text-convrt-light">{stats[0].value}</div>
                <div className="text-convrt-light/60">{stats[0].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-medium text-convrt-light">{stats[0].name}</div>
                <div className="text-convrt-light/60 text-sm">{stats[0].title}</div>
                <div className="text-convrt-accent text-sm mt-1">{stats[0].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Stats box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-4 rounded-xl overflow-hidden border border-convrt-accent/10"
          >
            <div className={`h-full ${stats[1].bgColor} p-8 flex flex-col`}>
              <div>
                <div className="text-5xl font-bold mb-2 text-convrt-light">{stats[1].value}</div>
                <div className="text-convrt-light/60">{stats[1].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-medium text-convrt-light">{stats[1].name}</div>
                <div className="text-convrt-light/60 text-sm">{stats[1].title}</div>
                <div className="text-convrt-accent text-sm mt-1">{stats[1].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Stats box 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-4 lg:col-span-4 rounded-xl overflow-hidden border border-convrt-accent/10"
          >
            <div className={`h-full ${stats[2].bgColor} p-8 flex flex-col`}>
              <div>
                <div className="text-5xl font-bold mb-2 text-convrt-light">{stats[2].value}</div>
                <div className="text-convrt-light/60">{stats[2].description}</div>
              </div>
              <div className="mt-auto pt-6">
                <div className="font-medium text-convrt-light">{stats[2].name}</div>
                <div className="text-convrt-light/60 text-sm">{stats[2].title}</div>
                <div className="text-convrt-accent text-sm mt-1">{stats[2].company}</div>
              </div>
            </div>
          </motion.div>

          {/* First testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 lg:col-span-6 rounded-xl overflow-hidden border border-convrt-accent/10"
          >
            <div className={`h-full ${testimonials[0].bgColor} p-8 flex flex-col`}>
              <div className="text-xl md:text-2xl font-medium mb-8 text-convrt-light">
                "{testimonials[0].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium text-convrt-light">{testimonials[0].name}</div>
                <div className="text-convrt-light/60 text-sm">{testimonials[0].title}</div>
                <div className="text-convrt-accent text-sm mt-1">{testimonials[0].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Second testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 lg:col-span-6 rounded-xl overflow-hidden border border-convrt-accent/10"
          >
            <div className={`h-full ${testimonials[1].bgColor} p-8 flex flex-col`}>
              <div className="text-xl md:text-2xl font-medium mb-8 text-convrt-light">
                "{testimonials[1].quote}"
              </div>
              <div className="mt-auto">
                <div className="font-medium text-convrt-light">{testimonials[1].name}</div>
                <div className="text-convrt-light/60 text-sm">{testimonials[1].title}</div>
                <div className="text-convrt-accent text-sm mt-1">{testimonials[1].company}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
