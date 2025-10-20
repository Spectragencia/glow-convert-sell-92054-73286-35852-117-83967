import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o período de teste?",
      answer: "Oferecemos um POC (Prova de Conceito) de 30 dias completamente gratuito. Durante este período, você tem acesso completo a todas as funcionalidades da plataforma sem necessidade de cadastrar cartão de crédito."
    },
    {
      question: "Preciso de conhecimentos técnicos para usar?",
      answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Além disso, oferecemos suporte humano em tempo real para ajudar em qualquer dúvida."
    },
    {
      question: "Como a IA identifica os pacientes ideais?",
      answer: "Nossa IA analisa dados de redes sociais, comportamento online e padrões de engajamento para identificar pessoas que se encaixam no perfil ideal de paciente para sua clínica, aumentando as chances de conversão."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim! Não trabalhamos com contratos de fidelidade. Você pode cancelar o serviço a qualquer momento, sem burocracias ou taxas de cancelamento."
    },
    {
      question: "Como é feita a integração com minha agenda?",
      answer: "A integração é simples e rápida. Nossa equipe te auxilia no processo de configuração e a plataforma se conecta diretamente com seu sistema de agendamento atual."
    },
    {
      question: "Meus dados e dos pacientes estão seguros?",
      answer: "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos todas as normas da LGPD. Seus dados são confidenciais e jamais serão compartilhados com terceiros."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-convrt-dark border-t border-convrt-accent/10" id="faq">
      <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-convrt-light mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-convrt-light/70">
            Tire suas dúvidas sobre a plataforma
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-convrt-dark/50 border-2 border-convrt-accent/20 rounded-xl px-6 hover:border-convrt-accent/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-convrt-light hover:text-convrt-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-convrt-light/70 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;