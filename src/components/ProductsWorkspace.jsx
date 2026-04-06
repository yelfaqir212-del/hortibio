import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { InteractiveCatalog } from './InteractiveCatalog';
import { SectionTitle } from './SectionTitle';

export function ProductsWorkspace({ items }) {
  const { t } = useTranslation();

  return (
    <section className="products-page" id="products">
      <div className="products-page-intro">
        <SectionTitle
          eyebrow={t('catalog.eyebrow')}
          title={t('catalog.title')}
          text={t('catalog.lead')}
        />

        <motion.aside
          className="products-page-panel"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="products-page-panel-label">{t('catalog.liveLabel')}</span>
          <strong>{t('catalog.liveTitle')}</strong>
          <p>{t('catalog.liveBody')}</p>
        </motion.aside>
      </div>

      <InteractiveCatalog items={items} />
    </section>
  );
}
