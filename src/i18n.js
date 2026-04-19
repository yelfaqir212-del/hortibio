import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage =
  typeof window !== 'undefined' ? window.localStorage.getItem('hortibio-language') : null;

/* ─── French ─────────────────────────────────────────────────────────────── */
const fr = {
  nav: {
    about:   "À propos",
    catalog: "Nos produits",
    flow:    "Pourquoi nous",
    ceo:     "Notre vision",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    kicker:       "Votre partenaire de référence en solutions agricoles au Maroc",
    title:        "Des solutions complètes pour une agriculture performante, durable et résiliente.",
    lead:         "Horti Bio accompagne les agriculteurs marocains avec des plants certifiés, des solutions de protection des cultures et des structures agricoles de qualité — pour que chaque exploitation produise plus, mieux et durablement.",
    secondary:    "Contactez-nous",
    panelTitle:   "Notre mission",
    panelCopy:    "Accompagner chaque agriculteur dans toutes les dimensions de son exploitation, du plant à la structure.",
    panelFootnote:"Plantes biologiques · Filets de protection · Structures agricoles",
    floating: {
      products: "Plantes certifiées",
      plants:   "Protection des cultures",
      routing:  "Structures agricoles",
    },
    stats: {
      sectors:   "secteurs d'activité",
      partners:  "agriculteurs partenaires",
      certified: "plantes certifiées garanties",
    },
    pills: {
      hailNet: "Filet Anti-Grêle",
      plants:  "Plantes Certifiées",
      poles:   "Poteaux Précontraints",
    },
  },
  about: {
    eyebrow: "À propos de nous",
    title:   "Qui sommes-nous ?",
    lead:    "Horti Bio est le partenaire de référence des agriculteurs au Maroc, offrant une gamme complète de solutions du plant biologique aux équipements de protection et de structure.",
    body:    "De l'importation et commercialisation des plants certifiés aux équipements de protection et de structure, Horti Bio accompagne les agriculteurs dans toutes les dimensions de leur exploitation — pour que chaque exploitation dispose des meilleurs outils pour produire plus, mieux et durablement.",
    tags: {
      import:      "Importation",
      protection:  "Protection des cultures",
      accessories: "Accessoires agricoles",
      structures:  "Matériaux & Structures",
    },
  },
  advantages: {
    programs: {
      title: "Plantes de qualité supérieure",
      copy:  "Nous importons et commercialisons des plants certifiés, soigneusement sélectionnés auprès des meilleurs producteurs à l'international, adaptés aux conditions climatiques et pédologiques du Maroc.",
    },
    quality: {
      title: "Protection efficace des cultures",
      copy:  "Nos solutions de filets anti-grêle, filets d'ombrage et brise-vent sont conçues pour préserver vos récoltes contre la grêle, le vent et les aléas climatiques.",
    },
    durability: {
      title: "Structures durables et adaptées",
      copy:  "Nos poteaux précontraints, tubes galvanisés et wind machines sont pensés pour durer et optimiser votre production dans les conditions les plus exigeantes du terrain.",
    },
  },
  catalog: {
    eyebrow:   "Nos produits et services",
    title:     "Nos secteurs d'activité",
    lead:      "Horti Bio propose une gamme complète de solutions agricoles — des plants certifiés aux équipements de protection et aux structures agricoles.",
    liveLabel: "Gammes phares",
    liveTitle: "Des produits sélectionnés pour la performance et la durabilité de votre exploitation.",
    liveBody:  "Chaque solution est conçue pour répondre aux exigences spécifiques des agriculteurs marocains et aux conditions du terrain.",
    groups: {
      plants:      "Plantes",
      protection:  "Protection",
      accessories: "Accessoires",
      structures:  "Structures",
    },
    items: {
      certifiedPlants: {
        title:   "Plantes Certifiées Importées",
        teaser:  "Des plantes de haute qualité, soigneusement sélectionnées auprès des meilleurs producteurs mondiaux.",
        summary: "Variétés adaptées aux conditions climatiques et pédologiques du Maroc pour une production optimale.",
        detail:  "Chez Horti Bio, nous sommes spécialisés dans l'importation et la commercialisation des plants certifiés, soigneusement sélectionnés auprès des meilleurs producteurs à l'international. Nous mettons notre expertise au service des agriculteurs et exploitants marocains en leur proposant des plants de haute qualité, adaptés aux conditions climatiques et pédologiques du Maroc.",
        metric:  "Certifiés & contrôlés",
        market:  "Agriculteurs marocains",
        format:  "Toutes variétés disponibles",
      },
      hailNet: {
        title:   "Filet Anti-Grêle",
        teaser:  "Protégez vos récoltes contre la grêle avec nos filets de haute résistance.",
        summary: "Solutions robustes et durables pour préserver vos cultures face à la grêle et au vent.",
        detail:  "Nos filets anti-grêle sont sélectionnés pour leur résistance, leur durabilité et leur efficacité dans les conditions marocaines. Protégez efficacement vos cultures contre la grêle et les intempéries, préservant ainsi votre investissement et votre production saison après saison.",
        metric:  "Haute résistance",
        market:  "Vergers & cultures maraîchères",
        format:  "Sur mesure disponible",
      },
      shadingNet: {
        title:   "Brise-vent & Filet Ombrage",
        teaser:  "Régulation du microclimat et protection contre le vent pour des cultures optimales.",
        summary: "Filets d'ombrage, brise-vent et filet sur sol 70cm pour une protection complète de vos parcelles.",
        detail:  "Notre gamme inclut les filets d'ombrage pour réguler la luminosité et la température, les brise-vent pour protéger contre les vents violents, et le filet sur sol 70cm pour le contrôle des mauvaises herbes et la conservation de l'humidité. Des produits robustes pensés pour les conditions du Maroc.",
        metric:  "Gamme complète",
        market:  "Serres & plein champ",
        format:  "Filet ombrage · Brise-vent · Sol 70cm",
      },
      poles: {
        title:   "Poteaux Précontraints",
        teaser:  "Des structures solides et durables pour l'aménagement de vos parcelles.",
        summary: "Poteaux précontraints adaptés aux exigences du terrain marocain pour supporter vos filets et structures.",
        detail:  "Nos poteaux précontraints sont fabriqués pour résister aux conditions les plus exigeantes. Ils constituent la base solide de vos installations de filets anti-grêle et autres structures agricoles, garantissant longévité et résistance pour maximiser votre retour sur investissement.",
        metric:  "Haute durabilité",
        market:  "Toutes exploitations",
        format:  "Adaptés au terrain",
      },
      accessories: {
        title:   "Accessoires Agricoles",
        teaser:  "Tous les accessoires indispensables au bon fonctionnement de votre exploitation.",
        summary: "Attaches, clips, systèmes de liage, plaquettes et outillage horticole pour votre quotidien au champ.",
        detail:  "Retrouvez tous les accessoires indispensables au bon fonctionnement de votre exploitation : plaquettes & filet, systèmes de liage, chapeau, et accessoires & pièces détachées. Des produits pratiques et fiables, conçus pour faciliter votre travail quotidien au champ.",
        metric:  "Stock permanent",
        market:  "Tous agriculteurs",
        format:  "Plaquettes · Liage · Chapeaux · Pièces",
      },
      windMachine: {
        title:   "Tubes Galvanisés & Wind Machine",
        teaser:  "Équipements de structure pour optimiser et protéger votre production.",
        summary: "Tubes galvanisés résistants et wind machines pour la protection thermique et aéraulique de vos cultures.",
        detail:  "Nos tubes galvanisés complètent votre arsenal de structures agricoles avec une résistance optimale à la corrosion. Les wind machines offrent une protection contre le gel et contribuent à la circulation de l'air pour une production optimale toute l'année.",
        metric:  "Anti-corrosion garanti",
        market:  "Structures & protection",
        format:  "Tubes galvanisés · Wind Machine",
      },
    },
  },
  process: {
    eyebrow: "Pourquoi Horti Bio",
    title:   "Pourquoi Horti Bio ?",
    lead:    "La qualité, l'expertise et l'accompagnement personnalisé sont au cœur de chaque solution que nous proposons.",
    steps: {
      selection: {
        title: "Sélection internationale",
        copy:  "Nous sélectionnons nos plants et équipements auprès des meilleurs producteurs et fournisseurs à l'international, en privilégiant toujours la qualité.",
      },
      quality: {
        title: "Contrôle qualité rigoureux",
        copy:  "Chaque produit est soumis à un contrôle qualité strict avant d'être proposé aux agriculteurs marocains, garantissant conformité et performance.",
      },
      advice: {
        title: "Conseil et accompagnement",
        copy:  "Notre équipe d'experts vous accompagne dans le choix des solutions les mieux adaptées à votre exploitation, à votre terrain et à vos objectifs.",
      },
      delivery: {
        title: "Livraison sur exploitation",
        copy:  "Nous assurons la livraison directement sur votre exploitation avec un suivi personnalisé pour chaque commande, de la passation à la réception.",
      },
    },
  },
  sustainability: {
    eyebrow: "Agriculture durable",
    title:   "Un engagement pour une agriculture performante et responsable.",
    lead:    "Horti Bio s'engage à proposer des solutions qui améliorent la productivité tout en respectant l'environnement et les ressources naturelles du Maroc.",
    organic: {
      title: "Agriculture biologique",
      copy:  "Nos plants biologiques certifiés favorisent une agriculture respectueuse de l'environnement, de la biodiversité marocaine et de la santé des consommateurs.",
    },
    durability: {
      title: "Matériaux durables",
      copy:  "Nous privilégions des matériaux de longue durée pour nos structures et équipements, réduisant les besoins de remplacement fréquents et l'impact environnemental.",
    },
    support: {
      title: "Accompagnement continu",
      copy:  "Horti Bio reste à vos côtés après la vente, assurant un suivi technique et un conseil expert pour maximiser les performances de vos installations.",
    },
  },
  ceo: {
    eyebrow:   "Notre vision",
    title:     "Être le partenaire de confiance de chaque agriculteur marocain.",
    quote:     "Notre vision est d'être le partenaire de référence des agriculteurs au Maroc, en offrant une gamme complète de solutions — du plant biologique aux équipements de protection et de structure — pour une agriculture performante, durable et résiliente.",
    note:      "Notre mission est d'accompagner les agriculteurs dans toutes les dimensions de leur exploitation, pour que chaque parcelle dispose des meilleurs outils pour produire plus, mieux et durablement.",
    name:      "Driss Erraou",
    signature: "Fondateur, Horti Bio",
  },
  contact: {
    eyebrow:   "Contact",
    title:     "Parlons de votre exploitation.",
    lead:      "Que vous ayez besoin de plants certifiés, de filets de protection ou de structures agricoles, l'équipe Horti Bio est à votre disposition pour vous conseiller et vous proposer la solution la mieux adaptée.",
    mailLabel: "E-mail",
    email:     "contact@hortibio.ma",
    action:    "Demander un devis",
    cards: {
      imports: "Plantes certifiées",
      exports: "Filets de protection",
      plants:  "Structures agricoles",
    },
  },
  trust: {
    eyebrow: "Ils nous font confiance",
    title:   "Le partenaire choisi par les agriculteurs marocains pour la qualité, la durabilité et l'accompagnement.",
    lead:    "Des exploitations de toutes tailles au Maroc font confiance à Horti Bio pour s'équiper des meilleures solutions agricoles et maximiser leur production saison après saison.",
  },
  footer: {
    tag: "Solutions agricoles complètes pour une agriculture durable au Maroc.",
  },
};

/* ─── English ─────────────────────────────────────────────────────────────── */
const en = {
  nav: {
    about:   'About us',
    catalog: 'Our products',
    flow:    'Why us',
    ceo:     'Our vision',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    kicker:       'Your reference partner for agricultural solutions in Morocco',
    title:        'Complete solutions for high-performance, sustainable and resilient farming.',
    lead:         'Horti Bio supports Moroccan farmers with certified plants, crop protection solutions, and quality agricultural structures — to produce more, better, and sustainably.',
    secondary:    'Contact us',
    panelTitle:   'Our mission',
    panelCopy:    'Supporting every farmer in all dimensions of their operation, from plant to structure.',
    panelFootnote:'Organic plants · Protective nets · Agricultural structures',
    floating: {
      products: 'Certified plants',
      plants:   'Crop protection',
      routing:  'Agricultural structures',
    },
    stats: {
      sectors:   'sectors of activity',
      partners:  'farmer partners',
      certified: 'certified plants',
    },
    pills: {
      hailNet: 'Anti-Hail Net',
      plants:  'Certified Plants',
      poles:   'Prestressed Poles',
    },
  },
  about: {
    eyebrow: 'About us',
    title:   'Who are we?',
    lead:    'Horti Bio is the reference partner for farmers in Morocco, offering a complete range of solutions from organic plants to protection equipment and agricultural structures.',
    body:    "From the importation and commercialization of certified plants to protection equipment and structures, Horti Bio supports farmers in all dimensions of their operations — so every farm has the best tools to produce more, better, and sustainably.",
    tags: {
      import:      'Importation',
      protection:  'Crop protection',
      accessories: 'Agricultural accessories',
      structures:  'Materials & Structures',
    },
  },
  advantages: {
    programs: {
      title: 'Premium quality plants',
      copy:  "We import and commercialize certified plants, carefully selected from the world's best international producers, adapted to Morocco's climate and soil conditions.",
    },
    quality: {
      title: 'Effective crop protection',
      copy:  'Our anti-hail nets, shading nets, and windbreaks are designed to protect your harvests against hail, wind, and all weather hazards.',
    },
    durability: {
      title: 'Durable, adapted structures',
      copy:  "Our prestressed poles, galvanized tubes, and wind machines are built to last and optimize your production under the most demanding field conditions.",
    },
  },
  catalog: {
    eyebrow:   'Our products and services',
    title:     'Our sectors of activity',
    lead:      'Horti Bio offers a complete range of agricultural solutions — from certified plants to crop protection equipment and agricultural structures.',
    liveLabel: 'Featured ranges',
    liveTitle: 'Products selected for the performance and durability of your farm.',
    liveBody:  "Each solution is designed to meet the specific requirements of Moroccan farmers and local field conditions.",
    groups: {
      plants:      'Plants',
      protection:  'Protection',
      accessories: 'Accessories',
      structures:  'Structures',
    },
    items: {
      certifiedPlants: {
        title:   'Imported Certified Plants',
        teaser:  "High-quality plants, carefully selected from the world's best producers.",
        summary: "Varieties adapted to Morocco's climate and soil conditions for optimal production.",
        detail:  "At Horti Bio, we specialize in the importation and commercialization of certified plants, carefully selected from the best international producers. We put our expertise at the service of Moroccan farmers, offering high-quality plants adapted to Morocco's climatic and soil conditions.",
        metric:  'Certified & controlled',
        market:  'Moroccan farmers',
        format:  'All varieties available',
      },
      hailNet: {
        title:   'Anti-Hail Net',
        teaser:  'Protect your harvests against hail with our high-resistance nets.',
        summary: 'Robust and durable solutions to protect your crops against hail and wind.',
        detail:  "Our anti-hail nets are selected for their resistance, durability, and effectiveness in Moroccan conditions. Effectively protect your crops against hail and bad weather, preserving your investment and production season after season.",
        metric:  'High resistance',
        market:  'Orchards & market gardens',
        format:  'Custom sizes available',
      },
      shadingNet: {
        title:   'Windbreak & Shading Net',
        teaser:  'Microclimate regulation and wind protection for optimal crops.',
        summary: 'Shading nets, windbreaks, and 70cm ground cover net for complete field protection.',
        detail:  'Our range includes shading nets to regulate light and temperature, windbreaks to protect against strong winds, and the 70cm ground net for weed control and moisture retention. Robust products designed for Moroccan field conditions.',
        metric:  'Complete range',
        market:  'Greenhouses & open field',
        format:  'Shading · Windbreak · Ground Net 70cm',
      },
      poles: {
        title:   'Prestressed Poles',
        teaser:  "Solid and durable structures for the layout of your plots.",
        summary: "Prestressed poles adapted to Morocco's terrain requirements to support your nets and structures.",
        detail:  'Our prestressed poles are manufactured to withstand the most demanding conditions. They form the solid foundation of your anti-hail net installations and other agricultural structures, guaranteeing longevity and strength to maximize your return on investment.',
        metric:  'High durability',
        market:  'All farms',
        format:  'Adapted to terrain',
      },
      accessories: {
        title:   'Agricultural Accessories',
        teaser:  'All the essential accessories for the smooth running of your farm.',
        summary: 'Ties, clips, tying systems, plates, and horticultural tools for your daily field work.',
        detail:  'Find all the essential accessories for the smooth running of your farm: plates & nets, tying systems, hats, and spare parts & accessories. Practical and reliable products designed to make your daily field work easier.',
        metric:  'Permanent stock',
        market:  'All farmers',
        format:  'Plates · Tying · Hats · Spare parts',
      },
      windMachine: {
        title:   'Galvanized Tubes & Wind Machine',
        teaser:  'Structural equipment to optimize and protect your production.',
        summary: 'Corrosion-resistant galvanized tubes and wind machines for thermal and airflow protection of your crops.',
        detail:  'Our galvanized tubes complete your agricultural structures with optimal corrosion resistance. Wind machines provide frost protection and contribute to air circulation for optimal year-round production.',
        metric:  'Anti-corrosion guaranteed',
        market:  'Structures & protection',
        format:  'Galvanized tubes · Wind Machine',
      },
    },
  },
  process: {
    eyebrow: 'Why Horti Bio',
    title:   'Why Horti Bio?',
    lead:    'Quality, expertise, and personalized support are at the heart of every solution we offer.',
    steps: {
      selection: {
        title: 'International selection',
        copy:  "We select our plants and equipment from the best producers and suppliers worldwide, always prioritizing quality.",
      },
      quality: {
        title: 'Rigorous quality control',
        copy:  "Every product undergoes strict quality control before being offered to Moroccan farmers, guaranteeing compliance and performance.",
      },
      advice: {
        title: 'Expert advice & support',
        copy:  "Our team of experts guides you in choosing the solutions best suited to your farm, your terrain, and your objectives.",
      },
      delivery: {
        title: 'Farm delivery',
        copy:  'We ensure delivery directly to your farm with personalized follow-up for every order, from placement to receipt.',
      },
    },
  },
  sustainability: {
    eyebrow: 'Sustainable farming',
    title:   'A commitment to high-performance and responsible agriculture.',
    lead:    "Horti Bio is committed to offering solutions that improve productivity while respecting Morocco's environment and natural resources.",
    organic: {
      title: 'Organic farming',
      copy:  "Our certified organic plants promote farming that respects the environment, Morocco's biodiversity, and consumer health.",
    },
    durability: {
      title: 'Durable materials',
      copy:  'We prioritize long-lasting materials for our structures and equipment, reducing replacement needs and environmental impact.',
    },
    support: {
      title: 'Ongoing support',
      copy:  'Horti Bio stays with you after the sale, providing technical follow-up and expert advice to maximize the performance of your installations.',
    },
  },
  ceo: {
    eyebrow:   'Our vision',
    title:     'To be the trusted partner of every Moroccan farmer.',
    quote:     'Our vision is to be the reference partner for farmers in Morocco, offering a complete range of solutions — from organic plants to protection equipment and structures — for high-performance, sustainable, and resilient agriculture.',
    note:      'Our mission is to support farmers in all dimensions of their operation, so every farm has the best tools to produce more, better, and sustainably.',
    name:      'Driss Erraou',
    signature: 'Founder, Horti Bio',
  },
  contact: {
    eyebrow:   'Contact',
    title:     "Let's talk about your farm.",
    lead:      "Whether you need certified plants, protective nets, or agricultural structures, the Horti Bio team is here to advise you and offer the solution best suited to your needs.",
    mailLabel: 'Email',
    email:     'contact@hortibio.ma',
    action:    'Request a quote',
    cards: {
      imports: 'Certified plants',
      exports: 'Protection nets',
      plants:  'Agricultural structures',
    },
  },
  trust: {
    eyebrow: 'They trust us',
    title:   'The partner chosen by Moroccan farmers for quality, durability, and support.',
    lead:    'Farms of all sizes across Morocco trust Horti Bio to equip themselves with the best agricultural solutions and maximize their production season after season.',
  },
  footer: {
    tag: 'Complete agricultural solutions for sustainable farming in Morocco.',
  },
};

/* ─── Arabic ──────────────────────────────────────────────────────────────── */
const ar = {
  nav: {
    about:   'من نحن',
    catalog: 'منتجاتنا',
    flow:    'لماذا نحن',
    ceo:     'رؤيتنا',
    contact: 'تواصل',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغلاق القائمة',
  },
  hero: {
    kicker:       'شريكك المرجعي في الحلول الزراعية بالمغرب',
    title:        'حلول متكاملة لزراعة عالية الأداء ومستدامة وصامدة.',
    lead:         'هورتي بيو ترافق المزارعين المغاربة بالشتلات المعتمدة وحلول حماية المحاصيل والهياكل الزراعية عالية الجودة — لإنتاج أكثر، وأفضل، وبشكل مستدام.',
    secondary:    'تواصل معنا',
    panelTitle:   'مهمتنا',
    panelCopy:    'مرافقة كل مزارع في جميع أبعاد استغلاليته، من الشتلة إلى الهيكل.',
    panelFootnote:'شتلات بيولوجية · شبكات حماية · هياكل زراعية',
    floating: {
      products: 'شتلات معتمدة',
      plants:   'حماية المحاصيل',
      routing:  'هياكل زراعية',
    },
    stats: {
      sectors:   'قطاعات نشاط',
      partners:  'مزارع شريك',
      certified: 'شتلات معتمدة مضمونة',
    },
    pills: {
      hailNet: 'شبكة مضادة للبرد',
      plants:  'شتلات معتمدة',
      poles:   'أعمدة مسبقة الإجهاد',
    },
  },
  about: {
    eyebrow: 'من نحن',
    title:   'من نحن؟',
    lead:    'هورتي بيو هي الشريك المرجعي للمزارعين في المغرب، تقدم مجموعة متكاملة من الحلول من الشتلات البيولوجية إلى معدات الحماية والهياكل الزراعية.',
    body:    'من استيراد وتسويق الشتلات المعتمدة إلى معدات الحماية والهياكل الزراعية، ترافق هورتي بيو المزارعين في جميع أبعاد استغلالياتهم — لأن كل استغلالية تستحق أفضل الأدوات للإنتاج أكثر وأفضل وبشكل مستدام.',
    tags: {
      import:      'استيراد',
      protection:  'حماية المحاصيل',
      accessories: 'ملحقات زراعية',
      structures:  'مواد وهياكل',
    },
  },
  advantages: {
    programs: {
      title: 'شتلات عالية الجودة',
      copy:  'نستورد ونسوّق شتلات معتمدة مختارة بعناية من أفضل المنتجين الدوليين، متكيّفة مع المناخ والتربة المغربية.',
    },
    quality: {
      title: 'حماية فعّالة للمحاصيل',
      copy:  'شبكاتنا المضادة للبرد وشبكات التظليل ومكاسر الرياح مصممة لحماية محاصيلك من البرد والرياح وجميع الأخطار المناخية.',
    },
    durability: {
      title: 'هياكل متينة ومتكيّفة',
      copy:  'أعمدتنا مسبقة الإجهاد والأنابيب المجلفنة وآلات الرياح مصممة للمتانة وتحسين إنتاجك في أصعب ظروف الميدان.',
    },
  },
  catalog: {
    eyebrow:   'منتجاتنا وخدماتنا',
    title:     'قطاعات نشاطنا',
    lead:      'تقدم هورتي بيو مجموعة متكاملة من الحلول الزراعية — من الشتلات المعتمدة إلى معدات الحماية والهياكل الزراعية.',
    liveLabel: 'المجموعات الرئيسية',
    liveTitle: 'منتجات مختارة لأداء واستدامة استغلاليتك.',
    liveBody:  'كل حل مصمم لتلبية المتطلبات الخاصة للمزارعين المغاربة والظروف المحلية للميدان.',
    groups: {
      plants:      'الشتلات',
      protection:  'الحماية',
      accessories: 'الملحقات',
      structures:  'الهياكل',
    },
    items: {
      certifiedPlants: {
        title:   'شتلات معتمدة مستوردة',
        teaser:  'شتلات عالية الجودة مختارة بعناية من أفضل المنتجين في العالم.',
        summary: 'أصناف متكيّفة مع المناخ والتربة المغربية لإنتاج أمثل.',
        detail:  'في هورتي بيو، نتخصص في استيراد وتسويق الشتلات المعتمدة، المختارة بعناية من أفضل المنتجين الدوليين. نضع خبرتنا في خدمة المزارعين المغاربة من خلال تقديم شتلات عالية الجودة متكيّفة مع الظروف المناخية والبيدولوجية للمغرب.',
        metric:  'معتمدة ومراقبة',
        market:  'المزارعون المغاربة',
        format:  'جميع الأصناف متوفرة',
      },
      hailNet: {
        title:   'شبكة مضادة للبرد',
        teaser:  'احمِ محاصيلك من البرد بشبكاتنا عالية المقاومة.',
        summary: 'حلول متينة ومستدامة لحماية مزروعاتك من البرد والرياح.',
        detail:  'تُنتقى شبكاتنا المضادة للبرد لمقاومتها وصلابتها وفعاليتها في الظروف المغربية. احمِ محاصيلك بفعالية من البرد والأضرار الجوية، وحافظ على استثمارك وإنتاجك موسماً بعد موسم.',
        metric:  'مقاومة عالية',
        market:  'البساتين والمزارع',
        format:  'مقاسات حسب الطلب',
      },
      shadingNet: {
        title:   'مكسر رياح وشبكة تظليل',
        teaser:  'تنظيم المناخ المحلي وحماية من الرياح لمحاصيل مثلى.',
        summary: 'شبكات تظليل ومكاسر رياح وشبكة أرضية 70سم للحماية الكاملة لأراضيك.',
        detail:  'تشمل مجموعتنا شبكات التظليل لتنظيم الضوء والحرارة، ومكاسر الرياح للحماية من الرياح العاتية، والشبكة الأرضية 70سم للسيطرة على الأعشاب الضارة والحفاظ على الرطوبة.',
        metric:  'مجموعة متكاملة',
        market:  'البيوت المحمية والحقول',
        format:  'تظليل · مكسر رياح · شبكة أرضية',
      },
      poles: {
        title:   'أعمدة مسبقة الإجهاد',
        teaser:  'هياكل صلبة ومتينة لتهيئة أراضيك الزراعية.',
        summary: 'أعمدة مسبقة الإجهاد متكيّفة مع متطلبات التضاريس المغربية لدعم شبكاتك وهياكلك.',
        detail:  'تُصنَّع أعمدتنا مسبقة الإجهاد لمقاومة أصعب الظروف الميدانية. تُشكّل الأساس المتين لتركيبات شبكاتك المضادة للبرد وسائر هياكلك الزراعية، مع ضمان الصمود والقوة لتعظيم عائدك على الاستثمار.',
        metric:  'متانة عالية',
        market:  'جميع الاستغلاليات',
        format:  'مكيّفة مع طبيعة الأرض',
      },
      accessories: {
        title:   'ملحقات زراعية',
        teaser:  'جميع الملحقات الضرورية لحسن سير استغلاليتك.',
        summary: 'ربطات وكليبسات وأنظمة ربط ولوحات وأدوات بستانية لعملك اليومي في الحقل.',
        detail:  'اعثر على جميع الملحقات الضرورية لحسن سير استغلاليتك: لوحات وشبكات، أنظمة ربط، قبعات، وملحقات وقطع غيار. منتجات عملية وموثوقة مصممة لتسهيل عملك اليومي في الحقل.',
        metric:  'مخزون دائم',
        market:  'جميع المزارعين',
        format:  'لوحات · ربط · قبعات · قطع غيار',
      },
      windMachine: {
        title:   'أنابيب مجلفنة وآلة رياح',
        teaser:  'معدات هيكلية لتحسين إنتاجك وحمايته.',
        summary: 'أنابيب مجلفنة مقاومة للتآكل وآلات رياح للحماية الحرارية وتحسين تهوية محاصيلك.',
        detail:  'تُكمّل أنابيبنا المجلفنة هياكلك الزراعية بمقاومة مثلى للصدأ. توفر آلات الرياح حماية من الصقيع وتساهم في تحسين دوران الهواء لإنتاج أمثل على مدار السنة.',
        metric:  'مقاومة للصدأ مضمونة',
        market:  'الهياكل والحماية',
        format:  'أنابيب مجلفنة · آلة رياح',
      },
    },
  },
  process: {
    eyebrow: 'لماذا هورتي بيو',
    title:   'لماذا هورتي بيو؟',
    lead:    'الجودة والخبرة والمرافقة الشخصية في صلب كل حل نقدمه.',
    steps: {
      selection: {
        title: 'انتقاء دولي',
        copy:  'نختار شتلاتنا ومعداتنا من أفضل المنتجين والموردين على مستوى العالم، مع إعطاء الأولوية دائماً للجودة.',
      },
      quality: {
        title: 'مراقبة جودة صارمة',
        copy:  'كل منتج يخضع لمراقبة جودة دقيقة قبل عرضه على المزارعين المغاربة، لضمان المطابقة والأداء.',
      },
      advice: {
        title: 'نصيحة ومرافقة خبراء',
        copy:  'فريق خبرائنا يرشدك لاختيار الحلول الأنسب لاستغلاليتك وأرضك وأهدافك.',
      },
      delivery: {
        title: 'توصيل إلى الاستغلالية',
        copy:  'نضمن التوصيل مباشرة إلى استغلاليتك مع متابعة شخصية لكل طلب، من الإرسال إلى الاستلام.',
      },
    },
  },
  sustainability: {
    eyebrow: 'الزراعة المستدامة',
    title:   'التزام بزراعة عالية الأداء ومسؤولة.',
    lead:    'تلتزم هورتي بيو بتقديم حلول تحسّن الإنتاجية مع احترام البيئة والموارد الطبيعية للمغرب.',
    organic: {
      title: 'الزراعة البيولوجية',
      copy:  'شتلاتنا البيولوجية المعتمدة تعزز زراعة تحترم البيئة والتنوع البيولوجي المغربي وصحة المستهلكين.',
    },
    durability: {
      title: 'مواد متينة',
      copy:  'نفضّل مواد طويلة الأمد لهياكلنا ومعداتنا، مما يقلل الحاجة إلى الاستبدال المتكرر ويحد من الأثر البيئي.',
    },
    support: {
      title: 'مرافقة مستمرة',
      copy:  'هورتي بيو تبقى إلى جانبك بعد البيع، وتوفر متابعة تقنية ونصائح خبراء لتحقيق أقصى أداء من تجهيزاتك.',
    },
  },
  ceo: {
    eyebrow:   'رؤيتنا',
    title:     'أن نكون الشريك الموثوق لكل مزارع مغربي.',
    quote:     'رؤيتنا هي أن نكون الشريك المرجعي للمزارعين في المغرب، بتقديم مجموعة متكاملة من الحلول — من الشتلات البيولوجية إلى معدات الحماية والهياكل — من أجل زراعة عالية الأداء ومستدامة وصامدة.',
    note:      'مهمتنا هي مرافقة المزارعين في جميع أبعاد استغلالياتهم، لأن كل حقل يستحق أفضل الأدوات للإنتاج أكثر وأفضل وباستدامة.',
    name:      'درس الراو',
    signature: 'مؤسس هورتي بيو',
  },
  contact: {
    eyebrow:   'تواصل',
    title:     'لنتحدث عن استغلاليتك.',
    lead:      'سواء كنت بحاجة إلى شتلات معتمدة أو شبكات حماية أو هياكل زراعية، فريق هورتي بيو هنا لإرشادك وتقديم الحل الأنسب لاحتياجاتك.',
    mailLabel: 'البريد الإلكتروني',
    email:     'contact@hortibio.ma',
    action:    'طلب عرض أسعار',
    cards: {
      imports: 'الشتلات المعتمدة',
      exports: 'شبكات الحماية',
      plants:  'الهياكل الزراعية',
    },
  },
  trust: {
    eyebrow: 'يثقون بنا',
    title:   'الشريك الذي يختاره المزارعون المغاربة للجودة والمتانة والمرافقة.',
    lead:    'استغلاليات من جميع الأحجام في المغرب تثق بهورتي بيو للتجهيز بأفضل الحلول الزراعية وتعظيم إنتاجها موسماً بعد موسم.',
  },
  footer: {
    tag: 'حلول زراعية متكاملة لزراعة مستدامة في المغرب.',
  },
};

/* ─── Init ────────────────────────────────────────────────────────────────── */
const resources = {
  fr: { translation: fr },
  en: { translation: en },
  ar: { translation: ar },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  });
}

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (language) => {
    window.localStorage.setItem('hortibio-language', language);
  });
}

export default i18n;
