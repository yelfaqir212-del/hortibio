import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage =
  typeof window !== 'undefined' ? window.localStorage.getItem('hortibio-language') : null;

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About us',
        catalog: 'Products & Plants',
        flow: 'Services',
        ceo: 'CEO Word',
        contact: 'Contact',
      },
      views: {
        label: 'page views',
        home: 'Landing',
        products: 'Products',
      },
      hero: {
        kicker: 'Agri-food sourcing and export',
        title: 'Tailored agricultural trade, prepared to move with confidence across borders.',
        lead:
          'Hortibio connects growers, nurseries, importers, and distributors through fresh produce, plant material, and disciplined export execution.',
        primary: 'Open products tab',
        secondary: 'Contact us',
        panelTitle: 'Field to destination',
        panelCopy:
          'Fresh produce, plant material, and export coordination shaped around the pace of your market.',
        panelFootnote: 'Flexible sourcing, controlled finishing, and responsive routing.',
        floating: {
          products: 'Fresh products',
          plants: 'Plant material',
          routing: 'Export coordination',
        },
        stats: {
          partners: 'grower and nursery partners',
          markets: 'priority destination markets',
          readiness: 'days of dispatch readiness',
        },
        pills: {
          coldChain: 'Cold-chain monitored',
          nursery: 'Nursery stock secured',
          privateLabel: 'Private label packaging',
        },
      },
      about: {
        eyebrow: 'About us',
        title: 'Who are we?',
        lead:
          'Hortibio is a sourcing and export partner for fresh produce, plant material, and disciplined agricultural programs.',
        body:
          'From plant propagation to export-ready produce, Hortibio coordinates grading, packaging, compliance, and timing so every shipment protects freshness, shelf life, and market confidence.',
        tags: {
          wholesale: 'Wholesale programs',
          retail: 'Retail-ready presentation',
          landscaping: 'Landscaping plant material',
          distribution: 'Import distribution support',
        },
      },
      advantages: {
        programs: {
          title: 'Flexible programs',
          copy:
            'Seasonal schedules can be built around retailer campaigns, wholesale windows, or nursery projects.',
        },
        quality: {
          title: 'Export-grade finishing',
          copy:
            'Packing lines, visual quality checks, and load composition are handled with destination standards in mind.',
        },
        traceability: {
          title: 'Clear batch visibility',
          copy:
            'Product origin, plant condition, and shipment readiness stay visible from source to handoff.',
        },
      },
      catalog: {
        eyebrow: 'Products and applications',
        title: 'Products & Applications',
        lead:
          'From fresh produce to nursery material, Hortibio builds commercial lines that balance presentation, compliance, and reliable delivery.',
        tabsLabel: 'product groups',
        liveLabel: 'Signature ranges',
        liveTitle: 'Collections shaped for distributors, retailers, growers, and project buyers.',
        liveBody:
          'Each program is organized to protect freshness, plant vitality, and commercial confidence from source to destination.',
        filters: {
          products: 'Products',
          plants: 'Plants',
        },
        groups: {
          products: 'Products',
          plants: 'Plants',
        },
        search: {
          label: 'Search the active tab',
          placeholder: 'Search {{group}} by name, market, format, or detail',
          clear: 'Clear',
          live: 'Live search',
          results: '{{count}} of {{total}} {{group}} matches',
          emptyTitle: 'No matches yet',
          emptyText: 'Nothing in this tab matches "{{query}}". Try a shorter term or clear the search.',
          reset: 'Clear search',
        },
        tap: 'Tap to reveal',
        close: 'Close',
        items: {
          atlasCitrus: {
            title: 'Atlas Citrus Program',
            teaser: 'Bright, export-ready citrus with balanced sizing and cold-chain discipline.',
            summary: 'Built for retail, wholesale, or juice channels with freshness-first handling.',
            detail:
              'Ideal for buyers who need clean visual quality, consistent sizing, and delivery windows that protect merchandising plans. Hortibio aligns harvest rhythm, packhouse finishing, and route timing around market demand.',
            metric: '48h chilled dispatch',
            market: 'Retail and wholesale',
            format: 'Branded or bulk packs',
          },
          sunvineTomatoes: {
            title: 'Sunvine Tomato Clusters',
            teaser: 'High-gloss clusters packed for visual impact and controlled shelf life.',
            summary: 'A fast-moving tomato program for display-focused retail and food service.',
            detail:
              'Cluster integrity, ripeness stage, and protective packing are tuned to preserve color and firmness during transit. The result is a premium presentation with fewer handling losses at destination.',
            metric: 'Daily harvest rhythm',
            market: 'Retail and food service',
            format: 'Flow-wrap and crate formats',
          },
          emeraldHerbs: {
            title: 'Emerald Herbs Collection',
            teaser: 'Aromatic herbs selected for freshness, fragrance, and quick market rotation.',
            summary: 'Mint, basil, parsley, and specialty herbs managed for high-turn channels.',
            detail:
              'Hortibio structures cut windows, rapid cooling, and humidity-sensitive packing to keep herbs visually alive. This line works well for importers that sell freshness and aroma, not just weight.',
            metric: 'Rapid cooling protocol',
            market: 'Fresh market specialists',
            format: 'Sleeves, punnets, or mixed crates',
          },
          oliveSaplings: {
            title: 'Olive Sapling Lines',
            teaser: 'Structured young trees for orchards, projects, and resilient planting programs.',
            summary: 'Healthy root systems and disciplined nursery handling for transplant success.',
            detail:
              'Each program focuses on clean development, travel stability, and arrival readiness. Hortibio positions olive lines for growers, estate projects, and buyers who need plant material that settles quickly after delivery.',
            metric: 'Nursery stability indexed',
            market: 'Growers and estate projects',
            format: 'Pots, sleeves, and project lots',
          },
          berrySeedlings: {
            title: 'Berry Seedling Packs',
            teaser: 'Compact, vigorous starts for intensive fruit programs and protected agriculture.',
            summary: 'Young material selected for uniformity, vigor, and controlled transit.',
            detail:
              'The focus is on plant health through every touchpoint: tray integrity, moisture balance, and clean separation between lots. Buyers gain a more reliable start for commercial fruiting programs.',
            metric: 'Uniformity-led batches',
            market: 'Protected agriculture',
            format: 'Tray and nursery packs',
          },
          signaturePalms: {
            title: 'Signature Landscape Palms',
            teaser: 'Architectural palms delivered with presentation quality and transport discipline.',
            summary: 'A landscaping range designed for hospitality, public spaces, and premium residences.',
            detail:
              'The program is built around canopy protection, stable root containment, and a polished arrival look. It supports landscaping buyers who need strong visual presence without compromising transport resilience.',
            metric: 'Project-ready specimens',
            market: 'Landscape and hospitality',
            format: 'Container and project supply',
          },
        },
      },
      process: {
        eyebrow: 'Why Hortibio',
        title: 'Why Hortibio?',
        lead:
          'Flexible service, export discipline, and tailored execution are built into every program.',
        steps: {
          network: {
            title: 'Origin network',
            copy:
              'Growers, nurseries, and field teams align around volumes, varieties, and harvest windows.',
          },
          finish: {
            title: 'Grading and packing',
            copy:
              'Export finishing, protective packaging, and brand-ready presentation are built into the workflow.',
          },
          corridor: {
            title: 'Cold chain and customs',
            copy:
              'Documentation, phytosanitary control, and temperature discipline move in the same lane.',
          },
          arrival: {
            title: 'Market-ready arrival',
            copy:
              'Distributors, retail teams, and landscape buyers receive material ready to move.',
          },
        },
      },
      sustainability: {
        eyebrow: 'Responsible growth',
        title: 'Operational discipline that protects the crop and the ecosystem.',
        lead:
          'Hortibio pairs commercial ambition with efficient resource use, export compliance, and presentation quality.',
        water: {
          title: 'Water-smart cultivation',
          copy:
            'Growing programs favor irrigation awareness and handling routines that respect plant stress and post-harvest life.',
        },
        packaging: {
          title: 'Protective, efficient packing',
          copy:
            'Packaging is selected to secure the product, reduce unnecessary waste, and support branded presentation.',
        },
        compliance: {
          title: 'Compliance-minded trade',
          copy:
            'Documentation, phytosanitary preparation, and shipment discipline stay central to every export flow.',
        },
      },
      ceo: {
        eyebrow: 'A word from the CEO',
        title: 'The business only succeeds when the product still feels alive at destination.',
        quote:
          'Our promise is simple: we do not move anonymous boxes. We move flavor, vitality, and trust with the precision international agriculture deserves.',
        note:
          'That means choosing the right growers, respecting the plant, planning the route, and staying accountable until delivery.',
        signature: 'CEO, Hortibio',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Build your next agricultural program with Hortibio.',
        lead:
          'Fresh produce, nursery stock, import planning, export execution, and branded packing can be coordinated through one response desk.',
        mailLabel: 'Mail',
        email: 'hello@hortibio.com',
        action: 'Request seasonal availability',
        cards: {
          imports: 'Import sourcing',
          exports: 'Export scheduling',
          plants: 'Plant programs',
        },
      },
      trust: {
        eyebrow: 'They trust us',
        title: 'A sourcing partner chosen for consistency, flexibility, and destination-ready presentation.',
        lead:
          'Importers, retailers, growers, and project buyers work with Hortibio when the brief demands responsive coordination and dependable finish quality.',
      },
      footer: {
        tag: 'Green supply chains for products and plants.',
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: 'A propos',
        catalog: 'Produits et plantes',
        flow: 'Services',
        ceo: 'Mot du CEO',
        contact: 'Contact',
      },
      views: {
        label: 'vues de page',
        home: 'Accueil',
        products: 'Produits',
      },
      hero: {
        kicker: 'Sourcing et export agroalimentaire',
        title: 'Un commerce agricole sur mesure, prepare pour circuler avec confiance au dela des frontieres.',
        lead:
          'Hortibio relie producteurs, pepinieres, importateurs et distributeurs autour de produits frais, de materiel vegetal et d une execution export rigoureuse.',
        primary: 'Ouvrir l onglet produits',
        secondary: 'Contactez-nous',
        panelTitle: 'Du terrain a la destination',
        panelCopy:
          'Produits frais, materiel vegetal et coordination export calibres selon le rythme de votre marche.',
        panelFootnote: 'Sourcing flexible, finition controlee et routage reactif.',
        floating: {
          products: 'Produits frais',
          plants: 'Materiel vegetal',
          routing: 'Coordination export',
        },
        stats: {
          partners: 'partenaires producteurs et pepinieres',
          markets: 'marches prioritaires',
          readiness: 'jours de disponibilite logistique',
        },
        pills: {
          coldChain: 'Chaine du froid suivie',
          nursery: 'Stock pepiniere securise',
          privateLabel: 'Conditionnement marque privee',
        },
      },
      about: {
        eyebrow: 'A propos',
        title: 'Qui sommes-nous ?',
        lead:
          'Hortibio est un partenaire sourcing et export pour les produits frais, le materiel vegetal et les programmes agricoles bien executes.',
        body:
          'De la propagation vegetale aux produits prets a l export, Hortibio coordonne tri, emballage, conformite et timing pour proteger la fraicheur, la tenue et la confiance du marche.',
        tags: {
          wholesale: 'Programmes grossistes',
          retail: 'Presentation prete pour le retail',
          landscaping: 'Materiel vegetal paysager',
          distribution: 'Support distribution import',
        },
      },
      advantages: {
        programs: {
          title: 'Programmes flexibles',
          copy:
            'Les calendriers saisonniers peuvent suivre des campagnes retail, des fenetres de gros ou des projets pepinieres.',
        },
        quality: {
          title: 'Finition niveau export',
          copy:
            'Les lignes de conditionnement, les controles visuels et la composition des charges sont penses pour la destination.',
        },
        traceability: {
          title: 'Visibilite lot par lot',
          copy:
            'L origine, l etat des plantes et la disponibilite expedition restent visibles de la source a la remise.',
        },
      },
      catalog: {
        eyebrow: 'Produits et applications',
        title: 'Produits et applications',
        lead:
          'Des produits frais au materiel vegetal, Hortibio construit des lignes commerciales qui equilibrent presentation, conformite et livraison fiable.',
        tabsLabel: 'groupes produits',
        liveLabel: 'Gammes signature',
        liveTitle: 'Des collections pensees pour distributeurs, enseignes, producteurs et acheteurs projet.',
        liveBody:
          'Chaque programme est organise pour proteger la fraicheur, la vitalite vegetale et la confiance commerciale de la source a la destination.',
        filters: {
          products: 'Produits',
          plants: 'Plantes',
        },
        groups: {
          products: 'Produits',
          plants: 'Plantes',
        },
        search: {
          label: 'Rechercher dans l onglet actif',
          placeholder: 'Rechercher dans {{group}} par nom, marche, format ou detail',
          clear: 'Effacer',
          live: 'Recherche live',
          results: '{{count}} sur {{total}} resultats {{group}}',
          emptyTitle: 'Aucun resultat',
          emptyText: 'Aucun element de cet onglet ne correspond a "{{query}}". Essayez un terme plus court ou effacez la recherche.',
          reset: 'Effacer la recherche',
        },
        tap: 'Appuyer pour ouvrir',
        close: 'Fermer',
        items: {
          atlasCitrus: {
            title: 'Programme agrumes Atlas',
            teaser: 'Des agrumes lumineux, prets pour l export, avec calibrage regulier et chaine du froid maitrisee.',
            summary: 'Concu pour le retail, le gros ou le jus avec une logique fraicheur en premier.',
            detail:
              'Ideal pour les acheteurs qui exigent une qualite visuelle nette, des calibres coherents et des fenetres de livraison qui protegent les plans merchandising. Hortibio aligne rythme de recolte, finition station et timing route sur la demande.',
            metric: 'Expedition refrigeree en 48h',
            market: 'Retail et grossistes',
            format: 'Marquee ou vrac',
          },
          sunvineTomatoes: {
            title: 'Tomates grappe Sunvine',
            teaser: 'Des grappes brillantes emballees pour un impact visuel fort et une bonne tenue.',
            summary: 'Un programme tomate rapide pour le retail visuel et la restauration.',
            detail:
              'L integrite des grappes, le stade de maturite et la protection emballage sont ajustes pour garder couleur et fermete pendant le transport. Le resultat est une presentation premium avec moins de pertes de manipulation.',
            metric: 'Rythme de recolte quotidien',
            market: 'Retail et restauration',
            format: 'Flow pack et caisses',
          },
          emeraldHerbs: {
            title: 'Collection d herbes Emerald',
            teaser: 'Des herbes aromatiques choisies pour la fraicheur, le parfum et la rotation rapide.',
            summary: 'Menthe, basilic, persil et herbes de specialite pour les circuits a forte rotation.',
            detail:
              'Hortibio structure coupe, refroidissement rapide et emballage sensible a l humidite pour garder les herbes vivantes visuellement. Cette gamme sert les importateurs qui vendent la fraicheur et l arome, pas seulement le poids.',
            metric: 'Refroidissement rapide',
            market: 'Specialistes du frais',
            format: 'Manchons, barquettes ou mix caisses',
          },
          oliveSaplings: {
            title: 'Lignes de jeunes oliviers',
            teaser: 'De jeunes arbres structures pour vergers, projets et plantations resistantes.',
            summary: 'Racines saines et manutention pepiniere disciplinee pour une bonne reprise.',
            detail:
              'Chaque programme se concentre sur un developpement propre, une stabilite au transport et une readiness a l arrivee. Hortibio positionne ces lignes pour producteurs, domaines et projets a besoin de materiel vegetal fiable.',
            metric: 'Stabilite pepiniere mesuree',
            market: 'Producteurs et domaines',
            format: 'Pots, sleeves et lots projets',
          },
          berrySeedlings: {
            title: 'Packs de jeunes plants berries',
            teaser: 'Des departs compacts et vigoureux pour programmes fruitiers intensifs et serres.',
            summary: 'Jeunes plants choisis pour uniformite, vigueur et transport controle.',
            detail:
              'L attention porte sur la sante vegetale a chaque etape: integrite plateau, equilibre hydrique et separation nette entre lots. Les acheteurs obtiennent un meilleur point de depart pour les programmes de production commerciale.',
            metric: 'Lots guides par l uniformite',
            market: 'Agriculture protegee',
            format: 'Plateaux et packs pepiniere',
          },
          signaturePalms: {
            title: 'Palmiers Signature paysage',
            teaser: 'Des palmiers architecturaux livres avec qualite visuelle et discipline transport.',
            summary: 'Une gamme paysage pour l hotellerie, les espaces publics et les residences premium.',
            detail:
              'Le programme est construit autour de la protection du feuillage, de la stabilite racinaire et d une belle presentation a l arrivee. Il repond aux acheteurs paysage qui veulent une forte presence visuelle sans sacrifier la resilience logistique.',
            metric: 'Specimens prets projet',
            market: 'Paysage et hotellerie',
            format: 'Conteneurs et supply projet',
          },
        },
      },
      process: {
        eyebrow: 'Pourquoi Hortibio',
        title: 'Pourquoi Hortibio ?',
        lead:
          'Service flexible, discipline export et execution sur mesure sont integres a chaque programme.',
        steps: {
          network: {
            title: 'Reseau origine',
            copy:
              'Producteurs, pepinieres et equipes terrain s alignent sur les volumes, varietes et fenetres de recolte.',
          },
          finish: {
            title: 'Tri et conditionnement',
            copy:
              'La finition export, les protections et la presentation marquee sont integrees au workflow.',
          },
          corridor: {
            title: 'Froid et douane',
            copy:
              'Documentation, phytosanitaire et discipline temperature avancent dans la meme voie.',
          },
          arrival: {
            title: 'Arrivee prete marche',
            copy:
              'Les distributeurs, equipes retail et acheteurs paysage recoivent un materiel pret a bouger.',
          },
        },
      },
      sustainability: {
        eyebrow: 'Croissance responsable',
        title: 'Une discipline operationnelle qui protege la culture et l ecosysteme.',
        lead:
          'Hortibio associe ambition commerciale, efficience des ressources, conformite export et qualite de presentation.',
        water: {
          title: 'Culture attentive a l eau',
          copy:
            'Les programmes privilegient une logique irrigation consciente et des manipulations respectueuses du stress plante.',
        },
        packaging: {
          title: 'Emballage protecteur et efficace',
          copy:
            'L emballage est choisi pour securiser le produit, limiter le gaspillage inutile et soutenir la marque.',
        },
        compliance: {
          title: 'Commerce centre sur la conformite',
          copy:
            'Documentation, preparation phytosanitaire et discipline expedition restent au coeur de chaque flux.',
        },
      },
      ceo: {
        eyebrow: 'Mot du CEO',
        title: 'Le business ne reussit que si le produit semble encore vivant a destination.',
        quote:
          'Notre promesse est simple: nous ne deplacons pas des boites anonymes. Nous deplacons saveur, vitalite et confiance avec la precision que l agriculture internationale exige.',
        note:
          'Cela veut dire choisir les bons producteurs, respecter la plante, planifier la route et rester responsable jusqu a la livraison.',
        signature: 'CEO, Hortibio',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Construisez votre prochain programme agricole avec Hortibio.',
        lead:
          'Produits frais, stock pepiniere, planification import, execution export et conditionnement marque peuvent passer par un seul desk.',
        mailLabel: 'Mail',
        email: 'hello@hortibio.com',
        action: 'Demander les disponibilites saisonnieres',
        cards: {
          imports: 'Sourcing import',
          exports: 'Planning export',
          plants: 'Programmes plantes',
        },
      },
      trust: {
        eyebrow: 'Ils nous font confiance',
        title: 'Un partenaire sourcing choisi pour sa regularite, sa flexibilite et une presentation prete a la destination.',
        lead:
          'Importateurs, enseignes, producteurs et acheteurs projet travaillent avec Hortibio quand le cahier des charges exige coordination reactive et qualite de finition fiable.',
      },
      footer: {
        tag: 'Des chaines vertes pour les produits et les plantes.',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        about: 'من نحن',
        catalog: 'المنتجات والنباتات',
        flow: 'الخدمات',
        ceo: 'كلمة المدير',
        contact: 'تواصل',
      },
      views: {
        label: 'طرق العرض',
        home: 'الرئيسية',
        products: 'المنتجات',
      },
      hero: {
        kicker: 'توريد وتصدير زراعي غذائي',
        title: 'تجارة زراعية مصممة حسب الطلب ومهيأة للتحرك بثقة عبر الحدود.',
        lead:
          'هورتيبيو تربط بين المزارعين والمشاتل والمستوردين والموزعين عبر منتجات طازجة ومادة نباتية وتنفيذ تصدير منضبط.',
        primary: 'افتح تبويب المنتجات',
        secondary: 'اتصل بنا',
        panelTitle: 'من الحقل الى الوجهة',
        panelCopy:
          'منتجات طازجة ومادة نباتية وتنسيق تصدير مصمم حسب ايقاع سوقك.',
        panelFootnote: 'توريد مرن وتشطيب مضبوط وتوجيه سريع.',
        floating: {
          products: 'منتجات طازجة',
          plants: 'مادة نباتية',
          routing: 'تنسيق التصدير',
        },
        stats: {
          partners: 'شركاء من المزارع والمشاتل',
          markets: 'اسواق اولوية',
          readiness: 'ايام جاهزية للشحن',
        },
        pills: {
          coldChain: 'سلسلة تبريد مراقبة',
          nursery: 'مخزون مشاتل مؤمن',
          privateLabel: 'تعبئة بعلامة خاصة',
        },
      },
      about: {
        eyebrow: 'من نحن',
        title: 'من نحن؟',
        lead:
          'هورتيبيو شريك في التوريد والتصدير للمنتجات الطازجة والمادة النباتية والبرامج الزراعية المنضبطة.',
        body:
          'من اكثار النباتات الى المنتجات الجاهزة للتصدير، تنسق هورتيبيو الفرز، التعبئة، المطابقة، والتوقيت حتى يحافظ كل شحن على الطزاجة والعمر التسويقي وثقة السوق.',
        tags: {
          wholesale: 'برامج الجملة',
          retail: 'عرض جاهز للتجزئة',
          landscaping: 'مواد نباتية للتنسيق',
          distribution: 'دعم توزيع الاستيراد',
        },
      },
      advantages: {
        programs: {
          title: 'برامج مرنة',
          copy:
            'يمكن بناء الجداول الموسمية حول حملات التجزئة، نوافذ الجملة، او مشاريع المشاتل.',
        },
        quality: {
          title: 'تشطيب بمستوى التصدير',
          copy:
            'خطوط التعبئة، الفحص البصري، وتكوين الحمولة تتم كلها وفق متطلبات السوق النهائي.',
        },
        traceability: {
          title: 'رؤية واضحة لكل دفعة',
          copy:
            'يبقى مصدر المنتج، حالة النبات، وجاهزية الشحن واضحة من البداية حتى التسليم.',
        },
      },
      catalog: {
        eyebrow: 'المنتجات والتطبيقات',
        title: 'المنتجات والتطبيقات',
        lead:
          'من المنتجات الطازجة الى المادة النباتية، تبني هورتيبيو خطوطا تجارية توازن بين العرض والامتثال والتسليم الموثوق.',
        tabsLabel: 'مجموعات المنتجات',
        liveLabel: 'مجموعات مميزة',
        liveTitle: 'تشكيلات مصممة للموزعين وتجار التجزئة والمزارعين ومشتري المشاريع.',
        liveBody:
          'كل برنامج منظم لحماية الطزاجة وحيوية النبات والثقة التجارية من المصدر حتى الوصول.',
        filters: {
          products: 'المنتجات',
          plants: 'النباتات',
        },
        groups: {
          products: 'المنتجات',
          plants: 'النباتات',
        },
        search: {
          label: 'ابحث داخل التبويب النشط',
          placeholder: 'ابحث داخل {{group}} بالاسم او السوق او الشكل او التفاصيل',
          clear: 'مسح',
          live: 'بحث مباشر',
          results: '{{count}} من {{total}} نتائج {{group}}',
          emptyTitle: 'لا توجد نتائج',
          emptyText: 'لا يوجد عنصر في هذا التبويب يطابق "{{query}}". جرب كلمة اقصر او امسح البحث.',
          reset: 'مسح البحث',
        },
        tap: 'اضغط للكشف',
        close: 'اغلاق',
        items: {
          atlasCitrus: {
            title: 'برنامج حمضيات اطلس',
            teaser: 'حمضيات مشرقة جاهزة للتصدير مع احجام متوازنة وانضباط في سلسلة التبريد.',
            summary: 'مناسبة للتجزئة والجملة والعصائر مع معالجة تضع الطزاجة اولا.',
            detail:
              'مثالية للمشترين الذين يحتاجون جودة بصرية نظيفة، احجاما متسقة، ومواعيد تسليم تحمي خطط العرض. تنسق هورتيبيو بين ايقاع الحصاد، تشطيب المحطة، وتوقيت المسار حسب طلب السوق.',
            metric: 'شحن مبرد خلال 48 ساعة',
            market: 'التجزئة والجملة',
            format: 'تعبئة خاصة او بالجملة',
          },
          sunvineTomatoes: {
            title: 'عناقيد طماطم صنفاين',
            teaser: 'عناقيد لامعة معبأة لتأثير بصري قوي وعمر عرض مضبوط.',
            summary: 'برنامج طماطم سريع للحسابات التي تعتمد على العرض القوي والخدمة الغذائية.',
            detail:
              'سلامة العنقود، مرحلة النضج، والحماية اثناء التعبئة يتم ضبطها للمحافظة على اللون والصلابة خلال النقل. النتيجة عرض ممتاز مع خسائر تداول اقل عند الوصول.',
            metric: 'ايقاع حصاد يومي',
            market: 'التجزئة والخدمة الغذائية',
            format: 'تغليف فردي وصناديق',
          },
          emeraldHerbs: {
            title: 'مجموعة اعشاب ايميرالد',
            teaser: 'اعشاب عطرية مختارة للطزاجة والرائحة والدوران السريع في السوق.',
            summary: 'نعناع، ريحان، بقدونس واعشاب خاصة للقنوات السريعة.',
            detail:
              'تنظم هورتيبيو اوقات القطع، التبريد السريع، والتعبئة الحساسة للرطوبة للحفاظ على مظهر الاعشاب حيا. هذا الخط مناسب للمستوردين الذين يبيعون الطزاجة والرائحة وليس الوزن فقط.',
            metric: 'بروتوكول تبريد سريع',
            market: 'متخصصو السوق الطازج',
            format: 'اكياس، علب، او صناديق متنوعة',
          },
          oliveSaplings: {
            title: 'خطوط شتلات الزيتون',
            teaser: 'اشجار صغيرة منظمة للبساتين والمشاريع وبرامج الزراعة المتحملة.',
            summary: 'جذور صحية ومناولة مشتل منضبطة لنجاح افضل بعد النقل.',
            detail:
              'يركز كل برنامج على نمو نظيف، ثبات اثناء السفر، وجاهزية عند الوصول. تضع هورتيبيو هذه الخطوط لخدمة المزارعين والمشاريع العقارية والمشترين الذين يحتاجون مادة نباتية تستقر بسرعة بعد التسليم.',
            metric: 'ثبات مشتل محسوب',
            market: 'المزارعون والمشاريع',
            format: 'اصص واغلفة ودفعات مشاريع',
          },
          berrySeedlings: {
            title: 'حزم شتلات التوت',
            teaser: 'بدايات قوية ومضغوطة لبرامج الفاكهة المكثفة والزراعة المحمية.',
            summary: 'مادة نباتية صغيرة مختارة للتجانس والقوة والنقل المنضبط.',
            detail:
              'التركيز هنا على صحة النبات في كل نقطة: سلامة الصواني، توازن الرطوبة، والفصل الواضح بين الدفعات. يحصل المشتري على بداية اكثر موثوقية لبرامج الاثمار التجارية.',
            metric: 'دفعات مبنية على التجانس',
            market: 'الزراعة المحمية',
            format: 'صواني وحزم مشاتل',
          },
          signaturePalms: {
            title: 'نخيل سيغنتشر للتنسيق',
            teaser: 'نخيل معماري يصل بجودة عرض عالية وانضباط في النقل.',
            summary: 'مجموعة تنسيق مخصصة للضيافة والمساحات العامة والمساكن الراقية.',
            detail:
              'يبنى البرنامج حول حماية التاج، ثبات الجذور، ومظهر مصقول عند الوصول. وهو يخدم مشترين يحتاجون حضورا بصريا قويا من دون التضحية بقدرة النبات على تحمل النقل.',
            metric: 'نماذج جاهزة للمشاريع',
            market: 'التنسيق والضيافة',
            format: 'حاويات وتوريد مشاريع',
          },
        },
      },
      process: {
        eyebrow: 'لماذا هورتيبيو',
        title: 'لماذا هورتيبيو؟',
        lead:
          'الخدمة المرنة والانضباط التصديري والتنفيذ المصمم حسب الحاجة موجودة داخل كل برنامج.',
        steps: {
          network: {
            title: 'شبكة المصدر',
            copy:
              'يتم توحيد المزارعين والمشاتل والفرق الميدانية حول الكميات والاصناف ونوافذ الحصاد.',
          },
          finish: {
            title: 'الفرز والتعبئة',
            copy:
              'تشطيب التصدير، الحماية، والعرض الجاهز للعلامة يتم دمجه داخل سير العمل.',
          },
          corridor: {
            title: 'التبريد والجمارك',
            copy:
              'الوثائق، المتطلبات النباتية، والانضباط الحراري تتحرك في مسار واحد.',
          },
          arrival: {
            title: 'وصول جاهز للسوق',
            copy:
              'يتسلم الموزعون وفرق التجزئة ومشترو التنسيق نباتات ومنتجات جاهزة للحركة.',
          },
        },
      },
      sustainability: {
        eyebrow: 'نمو مسؤول',
        title: 'انضباط تشغيلي يحمي المحصول والنظام البيئي.',
        lead:
          'تجمع هورتيبيو بين الطموح التجاري وكفاءة الموارد والامتثال للتصدير وجودة العرض.',
        water: {
          title: 'زراعة واعية بالمياه',
          copy:
            'تعطي برامج النمو اولوية للري الواعي ومناولة تحترم اجهاد النبات وما بعد الحصاد.',
        },
        packaging: {
          title: 'تعبئة واقية وفعالة',
          copy:
            'يتم اختيار التعبئة لحماية المنتج وتقليل الهدر غير الضروري ودعم صورة العلامة.',
        },
        compliance: {
          title: 'تجارة قائمة على المطابقة',
          copy:
            'تبقى الوثائق والتحضير النباتي وانضباط الشحن في قلب كل تدفق تصدير.',
        },
      },
      ceo: {
        eyebrow: 'كلمة من المدير التنفيذي',
        title: 'ينجح العمل فقط عندما يبدو المنتج حيا حتى عند الوصول.',
        quote:
          'وعدنا بسيط: نحن لا ننقل صناديق مجهولة. نحن ننقل النكهة والحيوية والثقة بالدقة التي تستحقها الزراعة الدولية.',
        note:
          'هذا يعني اختيار المزارعين المناسبين، احترام النبات، تخطيط المسار، والبقاء مسؤولين حتى التسليم.',
        signature: 'المدير التنفيذي، هورتيبيو',
      },
      contact: {
        eyebrow: 'تواصل',
        title: 'ابن برنامجك الزراعي القادم مع هورتيبيو.',
        lead:
          'المنتجات الطازجة، مخزون المشاتل، تخطيط الاستيراد، تنفيذ التصدير، والتعبئة المخصصة يمكن تنسيقها عبر مكتب واحد.',
        mailLabel: 'البريد',
        email: 'hello@hortibio.com',
        action: 'اطلب التوفر الموسمي',
        cards: {
          imports: 'توريد الاستيراد',
          exports: 'جدولة التصدير',
          plants: 'برامج النباتات',
        },
      },
      trust: {
        eyebrow: 'يثقون بنا',
        title: 'شريك توريد يتم اختياره بسبب الثبات والمرونة وجودة العرض عند الوصول.',
        lead:
          'يعمل مع هورتيبيو المستوردون وتجار التجزئة والمزارعون ومشترو المشاريع عندما يتطلب الملف تنسيقا سريعا وجودة تنفيذ موثوقة.',
      },
      footer: {
        tag: 'سلاسل خضراء للمنتجات والنباتات.',
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (language) => {
    window.localStorage.setItem('hortibio-language', language);
  });
}

export default i18n;
