import type { DentalService } from '../types';

export const servicesData: DentalService[] = [
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: {
      en: 'General Dentistry & Preventive Care',
      ar: 'طب الأسنان العام والرعاية الوقائية',
    },
    category: {
      en: 'Preventive Care',
      ar: 'رعاية وقائية',
    },
    shortDescription: {
      en: 'Comprehensive oral health assessments, professional scaling, and preventive protocols designed to maintain long-term dental health.',
      ar: 'فحوصات شاملة لصحة الفم، تنظيف وتلميع احترافي، وخطط وقائية متقدمة للحفاظ على صحة الأسنان على المدى الطويل.',
    },
    fullDescription: {
      en: 'Preventive dentistry forms the foundation of lifelong oral wellbeing. General dental appointments typically include a meticulous clinical examination, digital imaging where appropriate, gentle plaque and calculus removal, and personalized guidance on daily home care.',
      ar: 'يشكل طب الأسنان الوقائي حجر الأساس لصحة الفم مدى الحياة. تشمل الجلسات الفحص الإكلينيكي الدقيق، التصوير الإشعاعي الرقمي عند الحاجة، إزالة التراكمات الجيرية بلطف، وتقديم إرشادات مخصصة للعناية اليومية.',
    },
    procedureOverview: {
      en: [
        'Detailed clinical assessment of teeth, gums, and oral soft tissues',
        'Ultrasonic scaling to remove hardened calculus and bacterial biofilm',
        'Gentle polishing to eliminate surface stains',
        'Preventive fluoride application or protective sealants when clinically indicated',
        'Discussion of findings and recommendations with your dentist',
      ],
      ar: [
        'فحص إكلينيكي شامل للأسنان واللثة والأنسجة المحيطة',
        'إزالة الرواسب الجيرية والبكتيرية بأجهزة الموجات فوق الصوتية الدقيقة',
        'تلميع لطيف للأسنان لإزالة التصبغات السطحية',
        'تطبيق الفلورايد الوقائي أو الطلاء الواقي عند الحاجة الطبية',
        'مناقشة النتائج وتقديم التوصيات مع طبيب الأسنان المختص',
      ],
    },
    typicalReasons: {
      en: [
        'Routine 6-month preventive checkup and cleaning',
        'Mild gum sensitivity or bleeding during tooth brushing',
        'Persistent bad breath or localized plaque buildup',
        'Desire for an objective assessment of overall oral health',
      ],
      ar: [
        'الفحص والتنظيف الوقائي الدوري كل 6 أشهر',
        'حساسية اللثة الخفيفة أو نزيف أثناء تنظيف الأسنان',
        'تراكم الجير الموضعي أو الرغبة في تجديد انتعاش الفم',
        'الرغبة في تقييم موضوعي شامل لصحة الفم والأسنان',
      ],
    },
    faqs: [
      {
        question: {
          en: 'How often should I schedule a routine dental checkup?',
          ar: 'كم مرة ينبغي إجراء فحص الأسنان الدوري؟',
        },
        answer: {
          en: 'Most international dental associations recommend a preventive consultation every six months, although individual needs may vary based on personal oral health conditions.',
          ar: 'توصي معظم الهيئات الطبية المتخصصة بزيارة الفحص الدوري كل 6 أشهر، مع مراعاة الاحتياجات الفردية لكل مريض وفق حالته الصحية.',
        },
      },
      {
        question: {
          en: 'Does routine dental scaling weaken tooth enamel?',
          ar: 'هل إزالة الجير تضعف مينا الأسنان؟',
        },
        answer: {
          en: 'No. Professional scaling safely removes hardened bacterial deposits without damaging natural tooth enamel when performed by a qualified dentist.',
          ar: 'لا، إزالة الجير الاحترافية تزيل الترسبات البكتيرية المتصلبة فقط دون المساس بطبقة المينا الطبيعية عند إجرائها بيد طبيب أسنان مختص.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'ShieldCheck',
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: {
      en: 'Cosmetic Dentistry & Aesthetic Solutions',
      ar: 'تجميل الأسنان وتصميم الابتسامة',
    },
    category: {
      en: 'Aesthetics',
      ar: 'تجميل الأسنان',
    },
    shortDescription: {
      en: 'Harmonious smile design, professional in-office whitening, and minimally invasive aesthetic enhancements tailored to facial proportions.',
      ar: 'تصميم متناسق للابتسامة، تبييض احترافي داخل العيادة، وتحسينات تجميلية طفيفة التوغل متوافقة مع ملامح الوجه.',
    },
    fullDescription: {
      en: 'Aesthetic dentistry focuses on enhancing the natural beauty, symmetry, and tone of your smile while preserving structural dental integrity. Treatments range from safe enamel brightening to custom porcelain laminates and conservative composite bonding.',
      ar: 'يركز تجميل الأسنان على تعزيز الجمال الطبيعي وتناسق الابتسامة مع الحفاظ التام على بنية الأسنان السليمة. تتنوع الحلول بين تفتيح لون الأسنان الآمن، والفينير الخزفي المصمم خصيصاً، وترميمات الكومبوزيت التجميلية التحفظية.',
    },
    procedureOverview: {
      en: [
        'Comprehensive facial and dental aesthetic analysis',
        'High-resolution digital photography and digital smile evaluation',
        'Conservative tooth preparation prioritizing enamel preservation',
        'Custom shade matching to natural adjacent dentition',
        'Final adhesive cementation and precise occlusal adjustment',
      ],
      ar: [
        'تحليل جمالي متكامل لملامح الوجه وتناسق الأسنان',
        'توثيق فوتوغرافي عالي الدقة وتخطيط رقمي للابتسامة',
        'تحضير تحفظي يركز على الحفاظ على مينا الأسنان الطبيعية',
        'اختيار دقيق لدرجات اللون بما يتطابق مع الأسنان الطبيعية',
        'تثبيت لاصق متطور وضبط دقيق لأطباق الأسنان',
      ],
    },
    typicalReasons: {
      en: [
        'Intrinsic or deep extrinsic tooth discoloration resistant to brushing',
        'Uneven tooth margins, small gaps, or slight chipping',
        'Desire for a rejuvenated, confident smile for personal or professional milestones',
      ],
      ar: [
        'تصبغات عميقة لا تستجيب لمعاجين الأسنان العادية',
        'فوارق طفيفة بين الأسنان، حواف غير متساوية، أو تشققات صغيرة',
        'الرغبة في تعزيز الثقة بالابتسامة للمناسبات الهامة والمظهر اليومي',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Will cosmetic dental treatments look artificial?',
          ar: 'هل تبدو العلاجات التجميلية غير طبيعية؟',
        },
        answer: {
          en: 'Modern aesthetic protocols emphasize natural translucency, delicate surface texture, and customized shade gradations that integrate seamlessly with your natural facial features.',
          ar: 'تعتمد المعايير الحديثة على محاكاة شفافية الأسنان الطبيعية وملمسها وتدرجات ألوانها بدقة لتندمج بانسجام كامل مع الوجه دون أي مظهر مصطنع.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Sparkles',
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: {
      en: 'Dental Implants & Tooth Replacement',
      ar: 'زراعة الأسنان والتعويضات الثابتة',
    },
    category: {
      en: 'Restorative & Surgical',
      ar: 'جراحة وتعويضات',
    },
    shortDescription: {
      en: 'Advanced titanium and zirconia biocompatible fixtures providing durable, natural-feeling replacements for missing single or multiple teeth.',
      ar: 'غرسات متوافقة حيوياً من التيتانيوم توفر بديلاً ثابتاً ودائماً للأسنان المفقودة بمظهر ووظيفة مماثلة للأسنان الطبيعية.',
    },
    fullDescription: {
      en: 'Dental implants represent the modern standard for replacing missing teeth without modifying neighboring healthy teeth. A titanium post acts as an artificial root, osseointegrating securely with the jawbone to support an individually crafted porcelain crown.',
      ar: 'تعد زراعة الأسنان المعيار الطبي الحديث لتعويض الأسنان المفقودة دون الحاجة لبرد الأسنان المجاورة السليمة. تعمل الغرسة كجذر صناعي يلتحم حيوياً بعظم الفك ليدعم تاجاً خزفياً متقناً.',
    },
    procedureOverview: {
      en: [
        '3D cone-beam computed tomography (CBCT) bone analysis and planning',
        'Gentle, minimally invasive surgical placement under local anesthesia',
        'Healing period allowing biologically sound osseointegration',
        'Precision digital impression taking using optical intraoral scanning',
        'Custom crown fabrication and secure placement',
      ],
      ar: [
        'تقييم ثلاثي الأبعاد لكثافة العظم عبر الأشعة المقطعية المتخصصة',
        'وضع الغرسة جراحياً بتدخل طفيف وتحت تخدير موضعي مريح',
        'فترة تعافي والتئام حيوي مع عظم الفك',
        'أخذ مقاسات رقمية دقيقة باستخدام الماسح الضوئي داخل الفم',
        'تصنيع التاج النهائي وتثبيته بدقة متناهية',
      ],
    },
    typicalReasons: {
      en: [
        'Loss of a single tooth due to trauma or deep decay',
        'Multiple missing teeth affecting chewing efficiency',
        'Desire to avoid removable dentures or shaving adjacent teeth for a traditional bridge',
      ],
      ar: [
        'فقدان سن نتيجة إصابة أو تسوس متقدم',
        'فقدان عدة أسنان مما يؤثر على كفاءة المضغ والمظهر',
        'الرغبة في تجنب التركيبات المتحركة أو برد الأسنان السليمة لعمل جسور تقليدية',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Am I a candidate for dental implants?',
          ar: 'هل أنا مرشح مناسب لزراعة الأسنان؟',
        },
        answer: {
          en: 'Suitability depends on adequate bone volume, overall oral health, and general medical status. A comprehensive clinical assessment and 3D imaging are required for confirmation.',
          ar: 'يعتمد ذلك على كمية وكثافة عظم الفك، وصحة اللثة، والحالة الصحية العامة. الفحص السريري والأشعة المقطعية هما السبيل الوحيد لتحديد ملائمة الإجراء.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Layers',
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    title: {
      en: 'Orthodontics & Clear Aligners',
      ar: 'تقويم الأسنان والمصففات الشفافة',
    },
    category: {
      en: 'Alignment',
      ar: 'تقويم وتصحيح الإطباق',
    },
    shortDescription: {
      en: 'Carefully planned alignment solutions, including clear aligner systems and modern braces, designed to optimize bite harmony and aesthetics.',
      ar: 'حلول تقويمية مدروسة تشمل المصففات الشفافة والتقويم الحديث لتصحيح اصطفاف الأسنان وتحقيق إطباق وظيفي وجمالي مثالي.',
    },
    fullDescription: {
      en: 'Orthodontic therapy corrects dental misalignment, crowding, spacing, and functional bite discrepancies. Modern treatments utilize discreet clear aligners or low-profile brackets to guide teeth into balanced positions gently over time.',
      ar: 'يعالج تقويم الأسنان تزاحم الأسنان، الفراغات، واختلالات الإطباق الوظيفي. تتيح الخيارات المعاصرة مصففات شفافة غير مرئية أو حاصرات معدنية وخزفية متطورة لتحريك الأسنان برفق وثبات.',
    },
    procedureOverview: {
      en: [
        'Digital diagnostic records including photographs, scans, and cephalometric analysis',
        'Customized digital movement simulation and staging',
        'Delivery of personalized aligners or comfortable bracket placement',
        'Periodic progress reviews to ensure biological tooth movement',
        'Post-treatment retention protocol to stabilize long-term results',
      ],
      ar: [
        'سجلات تشخيصية رقمية تشمل صوراً فوتوغرافية ومسحاً ثلاثي الأبعاد وتحليلاً إشعاعياً',
        'محاكاة رقمية لمراحل حركة الأسنان المتوقعة',
        'تسليم المصففات الشفافة أو تركيب أجهزة التقويم بدقة',
        'متابعة دورية منتظمة للتحقق من سلامة تقدم حركة الأسنان',
        'مرحلة التثبيت بعد انتهاء العلاج للحفاظ على النتيجة الدائمة',
      ],
    },
    typicalReasons: {
      en: [
        'Crowded, overlapping, or rotated teeth',
        'Pronounced gaps or spacing between teeth',
        'Bite concerns such as overbite, underbite, or crossbite',
      ],
      ar: [
        'تزاحم وتراكب الأسنان أو استدارتها',
        'فراغات ومسافات ملحوظة بين الأسنان',
        'مشكلات في إطباق الفكين مثل العضة العميقة أو المفتوحة',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Can adults benefit from orthodontic treatment?',
          ar: 'هل يمكن للبالغين الاستفادة من تقويم الأسنان؟',
        },
        answer: {
          en: 'Yes. Orthodontic movement is biologically possible at virtually any age, provided the supporting bone and gums are healthy.',
          ar: 'نعم بكل تأكيد؛ تحريك الأسنان ممكن بيولوجياً في أي عمر طالما كانت اللثة والعظم المحيط بصحة جيدة.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Compass',
  },
  {
    id: 'root-canal-treatment',
    slug: 'root-canal-treatment',
    title: {
      en: 'Root Canal Treatment & Endodontics',
      ar: 'علاج جذور وعصب الأسنان',
    },
    category: {
      en: 'Endodontics',
      ar: 'علاج الجذور',
    },
    shortDescription: {
      en: 'Pain-relieving endodontic therapy using modern rotary instruments and digital apex locators to save natural teeth from extraction.',
      ar: 'علاج دقيق ومريح لقنوات الجذور باستخدام أدوات آلية حديثة ومحددات القمة الإلكترونية لإنقاذ السن الطبيعي وتجنب الخلع.',
    },
    fullDescription: {
      en: 'When tooth decay reaches the inner pulp tissue or trauma causes inflammation, endodontic therapy gently clears infected tissue, cleanses the internal canal anatomy, and seals it with biocompatible material to retain the natural tooth structure.',
      ar: 'عندما يصل التسوس إلى لب السن الداخلي أو تسبب الصدمات التهاباً حاداً، يقوم علاج الجذور بإزالة الأنسجة المصابة وتعقيم القنوات بدقة وإحكام إغلاقها بمواد متوافقة حيوياً للمحافظة على السن الطبيعي في الفم.',
    },
    procedureOverview: {
      en: [
        'Effective local anesthesia ensuring absolute patient comfort',
        'Rubber dam isolation to maintain a sterile working field',
        'Gentle rotary canal debridement and ultrasonic irrigation',
        'Hermetic root canal obturation using biocompatible sealing materials',
        'Structural crown or coronal restoration to reinforce the treated tooth',
      ],
      ar: [
        'تخدير موضعي فعال يضمن راحة المريض التامة أثناء الجلسة',
        'عزل السن بالحاجز المطاطي للحفاظ على بيئة عمل معقمة تماماً',
        'تنظيف وتطهير القنوات بمبردات آلية ومحاليل ري متطورة بالموجات فوق الصوتية',
        'حشو قنوات الجذر بمواد متوافقة بيولوجياً مانعة للتسرب',
        'ترميم السن أو تتويجه بتاج خزفي لحمايته من الكسر مستقبلاً',
      ],
    },
    typicalReasons: {
      en: [
        'Persistent, throbbing toothache exacerbated by temperature changes',
        'Spontaneous pain radiating to the jaw, ear, or head',
        'Localized swelling or tenderness on the gum adjacent to a tooth',
      ],
      ar: [
        'ألم نابض ومستمر يزداد مع المشروبات الباردة أو الساخنة',
        'ألم تلقائي يمتد إلى الفك أو الأذن',
        'تورم موضعي أو حساسية شديدة في اللثة المجاورة للسن',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Is root canal treatment painful?',
          ar: 'هل علاج العصب مؤلم؟',
        },
        answer: {
          en: 'With modern local anesthetics and contemporary instrumentation, root canal therapy feels very similar to receiving a standard dental filling and provides immediate pain relief.',
          ar: 'مع أساليب التخدير الموضعي الحديثة والتقنيات المعاصرة، يكون الإجراء مريحاً للغاية ويشبه وضع حشوة عادية، بل ويزيل الألم الحاد الذي كان يعاني منه المريض.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Activity',
  },
  {
    id: 'dental-restorations',
    slug: 'dental-restorations',
    title: {
      en: 'Restorative Dentistry & Crowns',
      ar: 'ترميمات الأسنان والتيجان الخزفية',
    },
    category: {
      en: 'Restorative',
      ar: 'ترميمات تحفظية',
    },
    shortDescription: {
      en: 'Tooth-colored composite fillings, inlays, onlays, and premium porcelain crowns engineered for biological durability and natural appearance.',
      ar: 'حشوات تجميلية بلون السن، ترميمات خزفية دقيقة (Inlays & Onlays)، وتيجان سيراميك عالية المتانة لمظهر طبيعي يدوم طويلاً.',
    },
    fullDescription: {
      en: 'Restorative care repairs teeth compromised by decay, wear, or structural fractures. We prioritize conservative techniques that preserve as much healthy tooth structure as possible while restoring full chewing strength.',
      ar: 'تعالج الترميمات الأسنان المتضررة من التسوس أو التآكل أو الكسور الجزئية. نركز على الأساليب التحفظية التي تحمي أكبر قدر ممكن من بنية السن الطبيعية مع استعادة قوة المضغ الكاملة.',
    },
    procedureOverview: {
      en: [
        'Removal of compromised or decayed tooth structure under magnification',
        'Adhesive bonding using advanced biocompatible composite resin',
        'Layering technique reproducing natural optical tooth anatomy',
        'High-gloss polishing and precise bite verification',
      ],
      ar: [
        'إزالة التسوس بدقة تحت التكبير المجهري',
        'الترميم بمواد راتنجية مركبة متوافقة حيوياً وعالية القوة',
        'بناء تشريحي بطبقات تحاكي انعكاس الضوء الطبيعي',
        'صقل وتلميع عالي الدقة وضبط الإطباق لمنع أي إجهاد زائد',
      ],
    },
    typicalReasons: {
      en: [
        'Visible cavities or sensitivity when chewing',
        'Old, worn, or defective metal fillings needing replacement',
        'Chipped tooth corners from accidental biting',
      ],
      ar: [
        'وجود تسوس مرئي أو حساسية عند مضغ الأطعمة الصلبة',
        'حشوات قديمة متآكلة أو متشققة تتطلب التجديد',
        'كسور طفيفة في حواف الأسنان نتيجة قضم شيء صلب',
      ],
    },
    faqs: [
      {
        question: {
          en: 'How long do tooth-colored restorations last?',
          ar: 'كم تدوم حشوات الكومبوزيت التجميلية؟',
        },
        answer: {
          en: 'With regular oral hygiene and periodic professional checkups, high-quality composite restorations frequently endure for 7 to 10 years or longer.',
          ar: 'مع العناية اليومية الجيدة بالفرشاة والخيط والفحوصات الدورية، تدوم الحشوات عالية الجودة عادة من 7 إلى 10 سنوات أو أكثر.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Wrench',
  },
  {
    id: 'gum-care',
    slug: 'gum-care',
    title: {
      en: 'Periodontal Care & Gum Health',
      ar: 'صحة اللثة وعلاج الأنسجة المحيطة',
    },
    category: {
      en: 'Periodontics',
      ar: 'علاج اللثة',
    },
    shortDescription: {
      en: 'Deep cleaning, root planing, and personalized periodontal maintenance to protect the supporting foundation of your teeth.',
      ar: 'تنظيف عميق، كشط الجذور، وخطط متابعة دورية متخصصة للحفاظ على الأنسجة الداعمة للأسنان ووقايتها من التراجع.',
    },
    fullDescription: {
      en: 'Healthy gums are the foundation of a stable dentition. Periodontal therapy addresses gingivitis and periodontitis, halting progressive bone loss and restoring firm, healthy gingival attachment.',
      ar: 'اللثة الصحية هي الدرع الواقي والأساس الداعم للأسنان. تهدف علاجات اللثة إلى السيطرة على الالتهابات وإيقاف تآكل العظم المحيط وإعادة تماسك الأنسجة وصحتها.',
    },
    procedureOverview: {
      en: [
        'Gentle periodontal pocket measurement and assessment',
        'Targeted subgingival scaling and root planing under local comfort',
        'Antimicrobial irrigation to reduce bacterial colonies',
        'Tailored interdental hygiene instruction for home maintenance',
      ],
      ar: [
        'قياس عمق الجيوب اللثوية بدقة وبدون ألم',
        'كشط جذور الأسنان وتنظيف ما تحت خط اللثة بإحكام',
        'ري موضعي بمضادات الميكروبات لتقليل الحمل البكتيري',
        'تدريب شخصي على استخدام الخيط المائي والفراشي بين السنية',
      ],
    },
    typicalReasons: {
      en: [
        'Bleeding gums when brushing or flossing',
        'Red, swollen, or receding gum margins',
        'A sensation of loose teeth or persistent bad breath',
      ],
      ar: [
        'نزيف اللثة المتكرر أثناء التفريش أو استخدام الخيط',
        'احمرار أو تورم أو تراجع ملحوظ في مستوى اللثة',
        'الشعور بحركة طفيفة في الأسنان أو رائحة فم غير مرغوبة',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Can gum disease be cured?',
          ar: 'هل يمكن الشفاء من أمراض اللثة؟',
        },
        answer: {
          en: 'Early gingivitis is completely reversible with professional care. Advanced periodontitis can be successfully stabilized and controlled through dedicated maintenance.',
          ar: 'التهاب اللثة في مراحله الأولى قابل للشفاء التام بتنظيف احترافي وعناية منزلية. أما المراحل المتقدمة فيمكن السيطرة عليها وتثبيتها ومنع تدهورها.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'HeartPulse',
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    title: {
      en: 'Children’s Dental Care',
      ar: 'طب أسنان الأطفال والرعاية المبكرة',
    },
    category: {
      en: 'Pediatric',
      ar: 'طب أسنان الأطفال',
    },
    shortDescription: {
      en: 'Gentle, reassuring dental visits for children focusing on positive experiences, preventive sealants, and early dental development.',
      ar: 'زيارات دافئة ومطمئنة للأطفال تركز على بناء تجربة إيجابية، طلاء الشقوق الوقائي، ومتابعة نمو الأسنان وتبديلها.',
    },
    fullDescription: {
      en: 'Creating a safe, friendly relationship with dental care from an early age prevents dental anxiety and builds lifelong oral habits. We emphasize gentle preventive measures, habit guidance, and positive reinforcement.',
      ar: 'بناء علاقة مريحة وممتعة مع عيادة الأسنان منذ الصغر يمنع الخوف ويبني عادات صحية دائمة. نركز على الإجراءات الوقائية اللطيفة كالحشوات الواقية وتوجيه العادات الفموية السليمة.',
    },
    procedureOverview: {
      en: [
        'Gentle familiarization and friendly chairside explanation',
        'Developmental check of primary and erupting permanent teeth',
        'Plaque removal and tooth-friendly protective polishing',
        'Fissure sealants on chewing surfaces to deter cavities',
        'Patient and parent guidance on balanced nutrition and brushing',
      ],
      ar: [
        'جلسة تمهيدية ودية لكسر رهبة الطفل والتعرف على أدوات العيادة',
        'فحص مراحل بزوغ الأسنان اللبنية والدائمة وسلامة الإطباق',
        'تنظيف لطيف وإزالة التصبغات والترسبات',
        'تطبيق سدادات الشقوق الوقائية لحماية أسطح المضغ من التسوس',
        'إرشادات مبسّطة للطفل والوالدين حول التغذية والتفريش الصحيح',
      ],
    },
    typicalReasons: {
      en: [
        'First dental visit when the first baby teeth emerge or at age 1',
        'Cavity prevention and dietary advice',
        'Monitoring thumb sucking or tooth development patterns',
      ],
      ar: [
        'الزيارة الأولى للأسنان مع ظهور أول سن أو إتمام العام الأول',
        'الوقاية المبكرة من تسوس الأسنان اللبنية',
        'متابعة تبديل الأسنان وعادات مص الأصابع',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Why treat baby teeth if they fall out anyway?',
          ar: 'لماذا نهتم بعلاج الأسنان اللبنية وهي ستسقط؟',
        },
        answer: {
          en: 'Primary teeth are vital for speech development, proper chewing, and saving space for permanent teeth. Premature loss can cause severe crowding later.',
          ar: 'الأسنان اللبنية ضرورية للمضغ والنطق السليم، وتحافظ على المسافات المناسبة لبزوغ الأسنان الدائمة. فقدانها المبكر يسبب تزاحماً شديداً مستقبلاً.',
        },
      },
    ],
    isDraftPlaceholder: true,
    iconName: 'Smile',
  },
];
