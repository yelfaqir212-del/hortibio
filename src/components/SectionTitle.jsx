import { motion } from 'framer-motion';

export function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <motion.div
      className={`section-title ${align}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}
