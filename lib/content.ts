import type { LandingContent, LandingVariant, LocalizedLandingContent, LocalizedSiteMeta } from '@/lib/types';

const variant: LandingVariant = 'general';
const accent = {
  primary: 'sage',
  secondary: 'sky',
} as const;

function createLandingContent(content: Omit<LandingContent, 'variant' | 'accent'>): LandingContent {
  return {
    variant,
    accent,
    ...content,
  };
}

export const siteMetaByLocale: LocalizedSiteMeta = {
  en: {
    name: 'LifeDocs',
    title: 'LifeDocs — Documents, deadlines and reminders',
    description:
      'A calm place for important documents, renewal dates and recurring reminders across people, pets, vehicles, work and everyday admin.',
  },
  ru: {
    name: 'LifeDocs',
    title: 'LifeDocs — документы, сроки и напоминания',
    description:
      'Спокойное место для важных документов, сроков продления и повторяющихся напоминаний: люди, питомцы, транспорт, работа и повседневные дела.',
  },
  es: {
    name: 'LifeDocs',
    title: 'LifeDocs — documentos, plazos y recordatorios',
    description:
      'Un lugar sereno para documentos importantes, renovaciones y recordatorios recurrentes de personas, mascotas, vehículos, trabajo y gestiones cotidianas.',
  },
};

export const landingContentByLocale: LocalizedLandingContent = {
  en: createLandingContent({
    hero: {
      eyebrow: 'LifeDocs',
      title: 'Keep important documents ready, not scattered.',
      subtitle:
        'A calm place for documents, deadlines and reminders across people, pets, vehicles, work, study and the everyday admin that keeps coming back.',
      primaryCta: 'Join the waitlist',
      secondaryCta: 'Explore the flow',
      chips: ['Built for renewals', 'Recurring reminders', 'Offline-ready'],
    },
    problem: {
      eyebrow: 'The problem',
      heading: 'Saving a file is easy. Finding it on time is harder.',
      body:
        'Most people already have the scan somewhere. What is missing is the link between the file, the person or thing it belongs to, and the reminder that should bring it back before it matters.',
      cards: [
        {
          title: 'Files without context',
          description: 'A scan can live in Drive or Photos for years without telling you why it matters or when it comes back.',
        },
        {
          title: 'Dates without the file',
          description: 'A reminder can mention the deadline and still leave you searching for the actual document.',
        },
        {
          title: 'Life spread across categories',
          description: 'People, pets, vehicles, work and study all create paperwork, but the tools around them are usually disconnected.',
        },
      ],
    },
    solution: {
      eyebrow: 'The product',
      heading: 'LifeDocs organizes by real life, not by app category.',
      body:
        'Keep the document, the profile it belongs to and the reminder that brings it back in one calm flow.',
      pillars: [
        {
          title: 'Today',
          description: 'A clear view of what is due soon, already overdue or worth handling this week.',
        },
        {
          title: 'Document wallet',
          description: 'A warmer, easier layer for the files you need to reopen, not just another folder tree.',
        },
        {
          title: 'Profiles and reminders',
          description: 'People, pets, vehicles and work or study records stay tied to the dates that matter.',
        },
      ],
    },
    features: {
      eyebrow: 'What it helps with',
      heading: 'Broad enough for real life, focused enough to stay clear.',
      body:
        'This version tests the wider LifeDocs story without slipping into “everything for everyone.” The promise stays simple: important files, the right dates and less mental clutter.',
      cards: [
        {
          title: 'Today view',
          description: 'See what is coming up next and what is worth handling before it becomes urgent.',
          label: 'One place to check',
          icon: 'clock',
        },
        {
          title: 'Document wallet',
          description: 'Passports, permits, insurance, certificates and scans in one softer, easier-to-search layer.',
          label: 'Ready to reopen',
          icon: 'file',
        },
        {
          title: 'Profiles',
          description: 'People, pets, vehicles and work or study records grouped by the life they belong to.',
          label: 'Grounded in context',
          icon: 'user',
        },
        {
          title: 'Recurring reminders',
          description: 'Not just expiries, but the repeating admin tasks that quietly come back over time.',
          label: 'Useful between big events',
          icon: 'check',
        },
        {
          title: 'Pinned offline files',
          description: 'Keep selected documents available on-device when signal is weak or time is short.',
          label: 'Offline by choice',
          icon: 'download',
        },
        {
          title: 'Privacy controls',
          description: 'Sensitive views can stay behind a lock step without making the whole experience feel heavy or alarming.',
          label: 'Clear and calm',
          icon: 'shield',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      heading: 'One simple loop, even in the broader version.',
      body: 'The goal is not to build a life operating system. The goal is to make recurring document chaos feel easier to stay ahead of.',
      stepLabel: 'Step',
      steps: [
        {
          title: 'Pick a profile',
          description: 'Start with the person, pet, vehicle or context you already manage in fragments.',
        },
        {
          title: 'Add the file',
          description: 'Keep the scan or PDF beside what it belongs to instead of in a disconnected archive.',
        },
        {
          title: 'Choose the reminder',
          description: 'Set an expiry, renewal or recurring date that matches how the task actually returns.',
        },
        {
          title: 'Come back when it matters',
          description: 'Use Today and the wallet when the next deadline, renewal or trip comes around.',
        },
      ],
    },
    preview: {
      eyebrow: 'Preview',
      heading: 'A calmer way to keep life-admin details close.',
      body:
        'The mockups show the tone more than the final interface: warm cards, clear statuses and just enough structure to feel reassuring.',
      note: 'Offline access is selective. Sensitive details can stay hidden until you deliberately open them.',
      mockup: {
        labels: {
          todayEyebrow: 'Today',
          todayTitle: 'What is worth checking next',
          pinnedChip: 'Pinned offline',
          walletEyebrow: 'Wallet',
          profileEyebrow: 'Profile',
          reminderEyebrow: 'Reminder',
          maskedDetailsChip: 'Sensitive details hidden',
          microchipLabel: 'Reference',
          rabiesLabel: 'Next review',
          rabiesValue: 'Review by 2027-03-12',
          documentStackEyebrow: 'Recent files',
        },
        todayItems: [
          'Emma passport — renew in 92 days',
          'Bruno rabies vaccine — due in 21 days',
          'Toyota insurance — due in 14 days',
        ],
        walletTitle: 'LifeDocs wallet',
        walletMeta: 'Documents, scans, reminders and profile context',
        profileTitle: 'Profiles by real life',
        profileMeta: 'People • Pets • Vehicles • Work / Study',
        reminderTitle: 'Recurring reminders',
        reminderMeta: 'Permit review every 6 months',
        floatingDocs: [
          {
            title: 'Residence permit copy',
            meta: 'Review in 30 days',
            accent: 'sage',
          },
          {
            title: 'Toyota insurance',
            meta: 'Due in 14 days',
            accent: 'warning',
          },
          {
            title: 'Passport scan',
            meta: 'Pinned for offline access',
            accent: 'sky',
          },
        ],
      },
    },
    trust: {
      eyebrow: 'Trust & privacy',
      heading: 'Sensitive information deserves restraint.',
      body:
        'LifeDocs should feel careful and controlled. The promise is thoughtful access and fewer surprises, not exaggerated security language.',
      bullets: [
        'Only selected files need to be available offline.',
        'Sensitive views can require an extra unlock step before full reveal.',
        'Reminders can stay useful without exposing private identifiers on screen.',
        'LifeDocs is an organizer, not an authority on legal, visa, veterinary or mechanical rules.',
      ],
    },
    useCases: {
      eyebrow: 'Use cases',
      heading: 'The broader situations this version speaks to.',
      body:
        'This is still about recurring friction, not about doing everything. The common thread is simple: the file matters again, and you need it fast.',
      cards: [
        {
          title: 'Documents and renewals',
          description: 'Passports, permits, licenses and insurance kept close to the dates that bring them back.',
        },
        {
          title: 'Profiles by context',
          description: 'People, pets, vehicles and work or study records all fit the same structure naturally.',
        },
        {
          title: 'Recurring admin',
          description: 'Track the tasks that quietly return every month, quarter or year.',
        },
        {
          title: 'Offline access when needed',
          description: 'Pin the few files you actually want to open in weak-signal or high-stress moments.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Early access',
      heading: 'Pricing shown to gauge interest, not to push a sale.',
      body:
        'This section is here to test interest in the broader LifeDocs promise. Early pricing is shown for research. Nothing is charged during the waitlist.',
      waitlistLabel: 'Waitlist for {{plan}}',
      plans: [
        {
          name: 'Free preview',
          price: '$0',
          description: 'Get a feel for the product without committing.',
          features: ['2 profiles', '10 documents', 'Basic reminders'],
          staticLabel: 'Browse the concept',
        },
        {
          name: 'Plus Early Access',
          price: '$39/year',
          description: 'The main option for people who want a calmer way to stay on top of important files and recurring dates.',
          features: [
            '15 profiles',
            '100 documents',
            'Pinned offline files',
            'Recurring reminders',
            'PDF export',
            'Pet emergency card',
          ],
          key: 'plus',
          featured: true,
          ctaLabel: 'Reserve early access',
        },
        {
          name: 'Family Later',
          price: '$69/year',
          description: 'A shared plan can come later if collaboration proves clearly worth it.',
          features: ['Shared workspace later', 'More profiles', 'Family access', 'Beta-first rollout'],
          key: 'family',
          ctaLabel: 'Notify me',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'A few plain answers before you join.',
      body: 'The broad version only works if the boundaries still feel clear, so the answers stay direct.',
      items: [
        {
          id: 'travel-app',
          question: 'Is this mainly a travel app?',
          answer: 'Travel is one entry point, but LifeDocs is broader: it is about important documents, dates and reminders across everyday life.',
        },
        {
          id: 'without-pets',
          question: 'Can I use it without pets?',
          answer: 'Yes. Pets are one profile type, not a requirement.',
        },
        {
          id: 'vehicle-docs',
          question: 'Can I keep vehicle documents here too?',
          answer: 'Yes. Insurance and registration fit naturally, without turning the product into a maintenance tracker.',
        },
        {
          id: 'reminders',
          question: 'Will it remind me before documents expire?',
          answer: 'Yes. That is the core loop: keep the file and the date connected.',
        },
        {
          id: 'offline-files',
          question: 'Can files be available offline?',
          answer: 'Selected pinned files can. The product is designed around intentional offline access, not full-device mirroring.',
        },
        {
          id: 'official-advice',
          question: 'Is this official legal, visa, vet or mechanic guidance?',
          answer: 'No. LifeDocs helps you stay organized. It does not replace official sources.',
        },
        {
          id: 'family-plan',
          question: 'Will there be a family plan?',
          answer: 'Yes, later. First we want to validate the solo value clearly.',
        },
        {
          id: 'mobile-app',
          question: 'Is the mobile app live already?',
          answer: 'Not yet. This page is here to test interest and refine the first release before the full product is built.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Join the waitlist',
      heading: 'Keep the important things close, not scattered.',
      body: 'If this feels like the calmer rhythm you want for documents and recurring deadlines, leave your email and help shape the first release.',
      cta: 'Join the waitlist',
    },
    waitlistForm: {
      emailLabel: 'Email',
      emailPlaceholder: 'anna@example.com',
      submitLabel: 'Reserve early access',
      validationLabelTemplate: 'Waitlist for {{plan}}.',
      noChargeLabel: 'No charge during the waitlist.',
      invalidEmail: 'Enter a valid email address.',
      successEyebrow: 'Saved',
      successTitleTemplate: 'You’re on the early list for {{plan}}.',
      successBody: 'Early pricing is shown for research. Nothing is charged during the waitlist.',
    },
  }),
  ru: createLandingContent({
    hero: {
      eyebrow: 'LifeDocs',
      title: 'Держите важное под рукой, а не по разным углам.',
      subtitle:
        'Спокойное место для документов, сроков и напоминаний: люди, питомцы, транспорт, работа, учеба и те повседневные дела, которые всё время возвращаются.',
      primaryCta: 'Записаться в лист ожидания',
      secondaryCta: 'Посмотреть сценарий',
      chips: ['Сделано для продлений', 'Повторяющиеся напоминания', 'Офлайн-доступ'],
    },
    problem: {
      eyebrow: 'В чем проблема',
      heading: 'Сохранить файл легко. Найти его вовремя — уже нет.',
      body:
        'У большинства людей нужный скан где-то уже есть. Не хватает другого: связки между самим документом, человеком или задачей, к которым он относится, и напоминанием, которое должно вернуть его в нужный момент.',
      cards: [
        {
          title: 'Файлы без контекста',
          description: 'Скан может лежать в Drive или Фото годами и никак не подсказывать, зачем он вообще нужен и когда снова пригодится.',
        },
        {
          title: 'Сроки без документа',
          description: 'Напоминание может напомнить о дате, но всё равно оставить вас искать сам файл.',
        },
        {
          title: 'Жизнь разбита по категориям',
          description: 'Люди, питомцы, транспорт, работа и учеба создают бумажные задачи, но инструменты вокруг них обычно никак не связаны.',
        },
      ],
    },
    solution: {
      eyebrow: 'Как помогает LifeDocs',
      heading: 'LifeDocs организует не по типу приложения, а по реальной жизни.',
      body:
        'Документ, профиль, к которому он относится, и напоминание о нем живут в одном спокойном потоке.',
      pillars: [
        {
          title: 'Today',
          description: 'Понятный экран для ближайших сроков, просроченного и того, чему лучше уделить внимание на этой неделе.',
        },
        {
          title: 'Документы',
          description: 'Более тёплое и удобное место для файлов, которые вы действительно открываете снова.',
        },
        {
          title: 'Профили и напоминания',
          description: 'Люди, питомцы, транспорт и работа или учеба остаются связаны с теми датами, которые к ним возвращаются.',
        },
      ],
    },
    features: {
      eyebrow: 'Что внутри',
      heading: 'Достаточно широко для жизни и достаточно собранно, чтобы не расползтись.',
      body:
        'Эта версия проверяет более широкий сценарий LifeDocs, не скатываясь в “всё для всех”. Обещание остается простым: важные файлы, правильные сроки и меньше ментального шума.',
      cards: [
        {
          title: 'Экран Today',
          description: 'Одно место, чтобы понять, что подходит, что уже требует внимания и что лучше закрыть заранее.',
          label: 'Один взгляд',
          icon: 'clock',
        },
        {
          title: 'Документный раздел',
          description: 'Паспорта, разрешения, страховки, сертификаты и сканы в более мягком и понятном слое.',
          label: 'Легко открыть снова',
          icon: 'file',
        },
        {
          title: 'Профили',
          description: 'Люди, питомцы, транспорт и работа или учеба сгруппированы по тому, как это живет в реальности.',
          label: 'По жизненному контексту',
          icon: 'user',
        },
        {
          title: 'Повторяющиеся напоминания',
          description: 'Не только сроки истечения, но и те тихие задачи, которые возвращаются каждый месяц, квартал или год.',
          label: 'Полезно между большими событиями',
          icon: 'check',
        },
        {
          title: 'Офлайн-доступ к выбранному',
          description: 'Храните на устройстве только нужные файлы — на случай слабого сигнала или стресса.',
          label: 'Офлайн по выбору',
          icon: 'download',
        },
        {
          title: 'Контроль приватности',
          description: 'Чувствительные экраны можно прятать за дополнительным шагом, без лишней показной “безопасности”.',
          label: 'Спокойно и понятно',
          icon: 'shield',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Как это работает',
      heading: 'Даже широкая версия всё равно держится на одном простом цикле.',
      body: 'Речь не о том, чтобы построить личную операционную систему жизни. Речь о том, чтобы recurring chaos вокруг документов стало проще удерживать под контролем.',
      stepLabel: 'Шаг',
      steps: [
        {
          title: 'Выберите профиль',
          description: 'Начните с человека, питомца, транспорта или контекста, который вы уже сейчас ведете кусками.',
        },
        {
          title: 'Добавьте файл',
          description: 'Положите скан или PDF рядом с тем, к чему он относится, а не в оторванный архив.',
        },
        {
          title: 'Поставьте напоминание',
          description: 'Выберите истечение, продление или повторяющийся ритм так, как задача реально возвращается.',
        },
        {
          title: 'Вернитесь, когда это понадобится',
          description: 'Открывайте Today и документы, когда приходит следующий срок, поездка или повторяющаяся задача.',
        },
      ],
    },
    preview: {
      eyebrow: 'Как это может выглядеть',
      heading: 'Более спокойный способ держать важные бытовые детали рядом.',
      body:
        'Макеты здесь больше про ощущение, чем про финальный UI: тёплые карточки, понятные статусы и ровно столько структуры, чтобы чувствовать уверенность.',
      note: 'Офлайн-доступ выборочный. Чувствительные данные можно оставить скрытыми до явного открытия.',
      mockup: {
        labels: {
          todayEyebrow: 'Сегодня',
          todayTitle: 'Что стоит проверить следующим',
          pinnedChip: 'Доступно офлайн',
          walletEyebrow: 'Документы',
          profileEyebrow: 'Профиль',
          reminderEyebrow: 'Напоминание',
          maskedDetailsChip: 'Чувствительные данные скрыты',
          microchipLabel: 'Справка',
          rabiesLabel: 'Следующая проверка',
          rabiesValue: 'Проверить до 2027-03-12',
          documentStackEyebrow: 'Недавние файлы',
        },
        todayItems: [
          'Паспорт Emma — продлить через 92 дня',
          'Прививка Bruno от rabies — через 21 день',
          'Страховка Toyota — срок через 14 дней',
        ],
        walletTitle: 'Документы LifeDocs',
        walletMeta: 'Файлы, сканы, напоминания и контекст профилей',
        profileTitle: 'Профили по реальной жизни',
        profileMeta: 'Люди • Питомцы • Транспорт • Работа / Учеба',
        reminderTitle: 'Повторяющиеся напоминания',
        reminderMeta: 'Проверка разрешения каждые 6 месяцев',
        floatingDocs: [
          {
            title: 'Копия residence permit',
            meta: 'Проверить через 30 дней',
            accent: 'sage',
          },
          {
            title: 'Страховка Toyota',
            meta: 'Срок через 14 дней',
            accent: 'warning',
          },
          {
            title: 'Скан паспорта',
            meta: 'Закреплен для офлайн-доступа',
            accent: 'sky',
          },
        ],
      },
    },
    trust: {
      eyebrow: 'Доверие и приватность',
      heading: 'Чувствительная информация просит сдержанности.',
      body:
        'LifeDocs должен ощущаться аккуратным и управляемым. Здесь обещание — продуманный доступ и меньше неприятных сюрпризов, а не громкие security-лозунги.',
      bullets: [
        'Офлайн доступны только выбранные файлы.',
        'Для чувствительных экранов можно включить дополнительный шаг перед полным показом.',
        'Напоминания могут быть полезными и без вывода приватных идентификаторов на экран.',
        'LifeDocs помогает всё держать в порядке, но не заменяет официальные юридические, визовые, ветеринарные или технические рекомендации.',
      ],
    },
    useCases: {
      eyebrow: 'Сценарии',
      heading: 'Каким более широким ситуациям адресована эта версия.',
      body:
        'Это всё ещё не про “вести в приложении всю жизнь”. Общая нить здесь простая: файл снова становится важным, и вам нужно быстро его найти.',
      cards: [
        {
          title: 'Документы и продления',
          description: 'Паспорта, разрешения, права и страховки рядом с теми датами, которые снова к ним возвращают.',
        },
        {
          title: 'Профили по контексту',
          description: 'Люди, питомцы, транспорт и работа или учеба естественно укладываются в одну структуру.',
        },
        {
          title: 'Повторяющиеся дела',
          description: 'Задачи, которые тихо возвращаются каждый месяц, квартал или год.',
        },
        {
          title: 'Офлайн тогда, когда нужно',
          description: 'Закрепляйте только те файлы, которые вы действительно хотите открыть в слабом интернете или в напряженный момент.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Ранний доступ',
      heading: 'Тарифы показаны для проверки интереса, а не давления.',
      body:
        'Этот блок нужен, чтобы понять реакцию на более широкий сценарий LifeDocs. Тарифы показаны для валидации. Во время листа ожидания ничего не списывается.',
      waitlistLabel: 'Лист ожидания для {{plan}}',
      plans: [
        {
          name: 'Бесплатный старт',
          price: '$0',
          description: 'Понять идею без обязательств.',
          features: ['2 профиля', '10 документов', 'Базовые напоминания'],
          staticLabel: 'Посмотреть концепт',
        },
        {
          name: 'Plus Early Access',
          price: '$39/year',
          description: 'Основной вариант для тех, кто хочет спокойнее держать под рукой важные файлы и повторяющиеся сроки.',
          features: [
            '15 профилей',
            '100 документов',
            'Выбранные файлы офлайн',
            'Повторяющиеся напоминания',
            'Экспорт в PDF',
            'Экстренная карточка питомца',
          ],
          key: 'plus',
          featured: true,
          ctaLabel: 'Оставить заявку',
        },
        {
          name: 'Family Later',
          price: '$69/year',
          description: 'Совместный доступ можно добавить позже, если станет ясно, что он действительно нужен.',
          features: ['Общий доступ позже', 'Больше профилей', 'Семейный режим', 'Бета раньше остальных'],
          key: 'family',
          ctaLabel: 'Сообщить мне',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Пара прямых ответов перед тем, как записаться.',
      body: 'Широкая версия работает только если её границы всё равно понятны, поэтому ответы здесь максимально прямые.',
      items: [
        {
          id: 'travel-app',
          question: 'Это в основном travel app?',
          answer: 'Поездки — лишь один вход. LifeDocs шире: документы, сроки и напоминания в повседневной жизни.',
        },
        {
          id: 'without-pets',
          question: 'Можно пользоваться без питомцев?',
          answer: 'Да. Питомцы — только один тип профиля, а не обязательная часть продукта.',
        },
        {
          id: 'vehicle-docs',
          question: 'Документы на транспорт тоже можно хранить?',
          answer: 'Да. Страховка и регистрация сюда естественно ложатся, но продукт не пытается стать приложением про обслуживание автомобиля.',
        },
        {
          id: 'reminders',
          question: 'Будут ли напоминания до истечения документов?',
          answer: 'Да. В этом и состоит основной цикл: документ и дата всегда остаются рядом.',
        },
        {
          id: 'offline-files',
          question: 'Файлы можно держать офлайн?',
          answer: 'Да, выбранные закрепленные файлы. Продукт строится вокруг осознанного офлайн-доступа, а не полного локального зеркала.',
        },
        {
          id: 'official-advice',
          question: 'Это официальная юридическая, визовая, ветеринарная или техническая информация?',
          answer: 'Нет. LifeDocs помогает ничего не потерять и не забыть, но не заменяет официальные источники.',
        },
        {
          id: 'family-plan',
          question: 'Будет ли семейный план?',
          answer: 'Да, позже. Сначала важно чётко подтвердить ценность для одного человека.',
        },
        {
          id: 'mobile-app',
          question: 'Мобильное приложение уже есть?',
          answer: 'Пока нет. Этот лендинг — часть валидации до начала полноценной разработки.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Записаться в лист ожидания',
      heading: 'Пусть важное будет рядом, а не разбросано.',
      body: 'Если вам близок именно такой более спокойный ритм для документов и повторяющихся сроков, оставьте email и помогите сформировать первую версию.',
      cta: 'Записаться в лист ожидания',
    },
    waitlistForm: {
      emailLabel: 'Email',
      emailPlaceholder: 'anna@example.com',
      submitLabel: 'Оставить заявку',
      validationLabelTemplate: 'Лист ожидания для {{plan}}.',
      noChargeLabel: 'Во время листа ожидания списаний нет.',
      invalidEmail: 'Введите корректный email.',
      successEyebrow: 'Готово',
      successTitleTemplate: 'Вы в раннем списке для {{plan}}.',
      successBody: 'Пока мы просто собираем ранний интерес. Пока действует лист ожидания, ничего не спишется.',
    },
  }),
  es: createLandingContent({
    hero: {
      eyebrow: 'LifeDocs',
      title: 'Ten lo importante cerca, no repartido.',
      subtitle:
        'Un lugar sereno para documentos, plazos y recordatorios de personas, mascotas, vehículos, trabajo, estudios y esas gestiones que siempre vuelven.',
      primaryCta: 'Únete a la lista',
      secondaryCta: 'Ver el recorrido',
      chips: ['Pensado para renovaciones', 'Recordatorios recurrentes', 'Acceso offline'],
    },
    problem: {
      eyebrow: 'El problema',
      heading: 'Guardar un archivo es fácil. Encontrarlo a tiempo no tanto.',
      body:
        'La mayoría ya tiene el escaneo en alguna parte. Lo que falta es el vínculo entre ese documento, la persona o tarea a la que pertenece y el recordatorio que debería traerlo de vuelta cuando haga falta.',
      cards: [
        {
          title: 'Archivos sin contexto',
          description: 'Un escaneo puede vivir años en Drive o Fotos sin decirte para qué importa ni cuándo volverá a hacer falta.',
        },
        {
          title: 'Plazos sin documento',
          description: 'Un recordatorio puede marcar la fecha y aun así dejarte buscando el archivo.',
        },
        {
          title: 'La vida partida en categorías',
          description: 'Personas, mascotas, vehículos, trabajo y estudio generan papeles, pero las herramientas que los rodean rara vez están conectadas.',
        },
      ],
    },
    solution: {
      eyebrow: 'La propuesta',
      heading: 'LifeDocs organiza según la vida real, no según categorías de apps.',
      body:
        'El documento, el perfil al que pertenece y el recordatorio que lo devuelve conviven en un mismo flujo sereno.',
      pillars: [
        {
          title: 'Today',
          description: 'Una vista clara de lo que se acerca, lo que ya requiere atención y lo que conviene revisar esta semana.',
        },
        {
          title: 'Documentos',
          description: 'Una capa más cálida y más simple para los archivos que realmente vuelves a abrir.',
        },
        {
          title: 'Perfiles y recordatorios',
          description: 'Personas, mascotas, vehículos y trabajo o estudio siguen unidos a las fechas que les corresponden.',
        },
      ],
    },
    features: {
      eyebrow: 'Qué resuelve',
      heading: 'Lo bastante amplio para la vida, lo bastante claro para no dispersarse.',
      body:
        'Esta versión prueba la historia más amplia de LifeDocs sin caer en “todo para todos”. La promesa sigue siendo simple: archivos importantes, fechas correctas y menos ruido mental.',
      cards: [
        {
          title: 'Pantalla Today',
          description: 'Un sitio para ver qué viene, qué ya toca atender y qué conviene resolver con calma.',
          label: 'Una sola mirada',
          icon: 'clock',
        },
        {
          title: 'Sección de documentos',
          description: 'Pasaportes, permisos, seguros, certificados y escaneos en una capa más amable y fácil de abrir.',
          label: 'Listo para reabrir',
          icon: 'file',
        },
        {
          title: 'Perfiles',
          description: 'Personas, mascotas, vehículos y trabajo o estudio agrupados según el contexto real al que pertenecen.',
          label: 'Según la vida real',
          icon: 'user',
        },
        {
          title: 'Recordatorios recurrentes',
          description: 'No solo vencimientos, también esas tareas que vuelven cada mes, trimestre o año.',
          label: 'Útil entre eventos grandes',
          icon: 'check',
        },
        {
          title: 'Acceso offline elegido',
          description: 'Guarda en el dispositivo solo los archivos que de verdad quieres tener a mano.',
          label: 'Offline por elección',
          icon: 'download',
        },
        {
          title: 'Controles de privacidad',
          description: 'Las vistas sensibles pueden ir detrás de un paso extra, sin convertir la app en teatro de seguridad.',
          label: 'Sereno y claro',
          icon: 'shield',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Cómo funciona',
      heading: 'Incluso la versión amplia se apoya en un bucle muy simple.',
      body: 'No se trata de construir un sistema operativo de la vida. Se trata de que el caos repetido alrededor de documentos resulte mucho más fácil de sostener.',
      stepLabel: 'Paso',
      steps: [
        {
          title: 'Elige un perfil',
          description: 'Empieza por la persona, mascota, vehículo o contexto que ya gestionas a trozos.',
        },
        {
          title: 'Añade el archivo',
          description: 'Deja el escaneo o PDF junto a aquello a lo que pertenece, no en un archivo aislado.',
        },
        {
          title: 'Pon el recordatorio',
          description: 'Marca un vencimiento, renovación o ritmo recurrente tal y como la tarea vuelve en la vida real.',
        },
        {
          title: 'Vuelve cuando haga falta',
          description: 'Abre Today y Documentos cuando llegue el siguiente plazo, viaje o gestión repetida.',
        },
      ],
    },
    preview: {
      eyebrow: 'Vista previa',
      heading: 'Una forma más serena de mantener cerca la gestión cotidiana.',
      body:
        'Los mockups hablan más de la sensación que del diseño final: tarjetas cálidas, estados claros y la cantidad justa de estructura para dar confianza.',
      note: 'El acceso offline es selectivo. Los datos sensibles pueden seguir ocultos hasta que decidas abrirlos.',
      mockup: {
        labels: {
          todayEyebrow: 'Hoy',
          todayTitle: 'Qué conviene revisar a continuación',
          pinnedChip: 'Disponible offline',
          walletEyebrow: 'Documentos',
          profileEyebrow: 'Perfil',
          reminderEyebrow: 'Recordatorio',
          maskedDetailsChip: 'Datos sensibles ocultos',
          microchipLabel: 'Referencia',
          rabiesLabel: 'Siguiente revisión',
          rabiesValue: 'Revisar antes de 2027-03-12',
          documentStackEyebrow: 'Archivos recientes',
        },
        todayItems: [
          'Pasaporte de Emma — renovar en 92 días',
          'Vacuna antirrábica de Bruno — en 21 días',
          'Seguro de Toyota — vence en 14 días',
        ],
        walletTitle: 'Documentos LifeDocs',
        walletMeta: 'Archivos, escaneos, recordatorios y contexto por perfil',
        profileTitle: 'Perfiles según la vida real',
        profileMeta: 'Personas • Mascotas • Vehículos • Trabajo / Estudio',
        reminderTitle: 'Recordatorios recurrentes',
        reminderMeta: 'Revisar el permiso cada 6 meses',
        floatingDocs: [
          {
            title: 'Copia del permiso de residencia',
            meta: 'Revisar en 30 días',
            accent: 'sage',
          },
          {
            title: 'Seguro de Toyota',
            meta: 'Vence en 14 días',
            accent: 'warning',
          },
          {
            title: 'Escaneo del pasaporte',
            meta: 'Fijado para acceso offline',
            accent: 'sky',
          },
        ],
      },
    },
    trust: {
      eyebrow: 'Confianza y privacidad',
      heading: 'La información sensible pide sobriedad.',
      body:
        'LifeDocs quiere sentirse cuidadoso y bajo control. La promesa es acceso pensado y menos sorpresas, no grandes frases de seguridad.',
      bullets: [
        'Solo los archivos elegidos pueden estar disponibles offline.',
        'Las vistas sensibles pueden requerir un paso extra antes de mostrarse por completo.',
        'Los recordatorios pueden seguir siendo útiles sin mostrar identificadores privados en pantalla.',
        'LifeDocs ayuda a poner orden, pero no sustituye reglas legales, de visado, veterinarias o mecánicas.',
      ],
    },
    useCases: {
      eyebrow: 'Casos de uso',
      heading: 'Las situaciones más amplias a las que apunta esta versión.',
      body:
        'Sigue sin tratarse de meter toda la vida en una app. El hilo común es sencillo: ese archivo vuelve a importar y necesitas encontrarlo rápido.',
      cards: [
        {
          title: 'Documentos y renovaciones',
          description: 'Pasaportes, permisos, licencias y seguros junto a las fechas que vuelven a traerlos.',
        },
        {
          title: 'Perfiles por contexto',
          description: 'Personas, mascotas, vehículos y trabajo o estudio encajan en una misma estructura de forma natural.',
        },
        {
          title: 'Tareas recurrentes',
          description: 'Las gestiones que vuelven cada mes, trimestre o año sin hacer ruido hasta que llega el momento.',
        },
        {
          title: 'Offline cuando conviene',
          description: 'Fija solo los archivos que de verdad quieres abrir con mala señal o en un momento tenso.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Acceso anticipado',
      heading: 'Los planes se muestran para validar interés, no para presionar.',
      body:
        'Este bloque existe para ver la reacción al enfoque más amplio de LifeDocs. Los precios se muestran como prueba. No se cobra nada durante la lista de espera.',
      waitlistLabel: 'Lista de espera para {{plan}}',
      plans: [
        {
          name: 'Vista gratuita',
          price: '$0',
          description: 'Entender la idea sin compromiso.',
          features: ['2 perfiles', '10 documentos', 'Recordatorios básicos'],
          staticLabel: 'Ver el concepto',
        },
        {
          name: 'Plus Early Access',
          price: '$39/year',
          description: 'La opción principal para quien quiere tener más cerca archivos importantes y plazos que se repiten.',
          features: [
            '15 perfiles',
            '100 documentos',
            'Archivos offline elegidos',
            'Recordatorios recurrentes',
            'Exportación en PDF',
            'Tarjeta de emergencia para mascotas',
          ],
          key: 'plus',
          featured: true,
          ctaLabel: 'Reservar acceso',
        },
        {
          name: 'Family Later',
          price: '$69/year',
          description: 'El acceso compartido puede venir después si queda claro que vale la pena construirlo.',
          features: ['Acceso compartido más adelante', 'Más perfiles', 'Modo familiar', 'Beta antes que nadie'],
          key: 'family',
          ctaLabel: 'Avísame',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Unas respuestas directas antes de apuntarte.',
      body: 'La versión amplia solo funciona si sus límites siguen claros, así que aquí las respuestas son muy directas.',
      items: [
        {
          id: 'travel-app',
          question: '¿Es sobre todo una app de viajes?',
          answer: 'Viajar es solo una puerta de entrada. LifeDocs es más amplio: documentos, plazos y recordatorios en la vida cotidiana.',
        },
        {
          id: 'without-pets',
          question: '¿Puedo usarla sin mascotas?',
          answer: 'Sí. Las mascotas son solo un tipo de perfil, no una condición para usar el producto.',
        },
        {
          id: 'vehicle-docs',
          question: '¿También caben los documentos del vehículo?',
          answer: 'Sí. Seguro y registro encajan bien aquí, sin convertir la app en una herramienta de mantenimiento.',
        },
        {
          id: 'reminders',
          question: '¿Recordará antes de que caduquen los documentos?',
          answer: 'Sí. Ese es el bucle central: el archivo y la fecha viven juntos.',
        },
        {
          id: 'offline-files',
          question: '¿Se pueden tener archivos offline?',
          answer: 'Sí, los que fijes de forma explícita. La idea es un offline intencional, no un espejo completo en el teléfono.',
        },
        {
          id: 'official-advice',
          question: '¿Esto es información legal, de visado, veterinaria o técnica oficial?',
          answer: 'No. LifeDocs te ayuda a no olvidar ni perder cosas, pero no sustituye fuentes oficiales.',
        },
        {
          id: 'family-plan',
          question: '¿Habrá un plan familiar?',
          answer: 'Sí, más adelante. Antes queremos validar bien el valor individual.',
        },
        {
          id: 'mobile-app',
          question: '¿La app móvil ya existe?',
          answer: 'Todavía no. Esta landing forma parte de la validación previa al desarrollo completo.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Únete a la lista',
      heading: 'Haz que lo importante esté cerca, no disperso.',
      body: 'Si te atrae una forma más serena de llevar documentos y plazos recurrentes, deja tu email y ayúdanos a definir la primera versión.',
      cta: 'Únete a la lista',
    },
    waitlistForm: {
      emailLabel: 'Email',
      emailPlaceholder: 'anna@example.com',
      submitLabel: 'Reservar acceso',
      validationLabelTemplate: 'Lista de espera para {{plan}}.',
      noChargeLabel: 'No se cobra nada durante la lista de espera.',
      invalidEmail: 'Introduce un email válido.',
      successEyebrow: 'Listo',
      successTitleTemplate: 'Ya estás en la lista anticipada para {{plan}}.',
      successBody: 'Por ahora solo estamos reuniendo interés temprano. No se hará ningún cobro durante la lista de espera.',
    },
  }),
};
