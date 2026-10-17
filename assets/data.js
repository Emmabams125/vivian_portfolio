export const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Case Study', href: '/case-study' },
    { label: 'Work Samples', href: '/work-samples' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
]

export const heroTags = ['MARKETING STRATEGIST', 'PRODUCT MARKETING', 'GROWTH MARKETING']

export const contactInfo = {
    email: 'nwijevivian@gmail.com',
    linkedinHandle: 'linkedin.com/in/vivian-nwije-530936236',
    linkedinUrl: 'https://www.linkedin.com/in/vivian-nwije-530936236',
}

// Opens a new Gmail draft addressed to Vivian
contactInfo.gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`

// ---------- Home ----------

export const homeIntro = {
    hook: "People don't buy simply because they see you. They buy when they understand why you matter to them.",
    story: [
        'Think about the last time you scrolled past a product without a second thought.',
        'Now think about the last time something made you stop, get curious, or think, “I actually need this.”',
        "The difference wasn't always the product. Sometimes, it was how the product was presented.",
    ],
    turn: "A good product can go unnoticed when its message fails to connect. That's where I come in.",
    body: [
        "I'm a marketing strategist who combines audience understanding, product positioning, creative messaging and campaign execution to help businesses reach the right people, communicate their value and encourage action.",
        "I don't believe in creating content just to fill a calendar. I believe in understanding who we're trying to reach, what would make them care, and what we want them to do next.",
    ],
    closing: "Let's help the right people notice your business, understand its value, and choose you.",
}

export const servicesIntro = [
    "Different businesses have different marketing challenges. Sometimes the product needs clearer positioning. Sometimes the message isn't connecting. Other times, the business needs a better way to reach potential customers.",
    "Here's where I can contribute.",
]

export const services = [
    {
        title: 'Product Marketing',
        icon: 'strategy',
        tags: ['Positioning', 'Value Proposition', 'Product Messaging'],
        description: 'I work on how a product is presented to its intended audience, identifying its value, understanding customer needs, and shaping messaging that helps people see why it matters.',
    },
    {
        title: 'Growth Marketing',
        icon: 'growth',
        tags: ['Customer Acquisition', 'Outreach', 'Campaigns'],
        description: 'I support growth initiatives through targeted outreach, marketing campaigns, audience engagement, and practical strategies for attracting potential customers.',
    },
    {
        title: 'Content Strategy',
        icon: 'content',
        tags: ['Content Planning', 'Audience Engagement', 'Creative Direction'],
        description: "I develop content ideas and plans based on audience interests and business objectives, with a focus on making content relevant, purposeful, and consistent with the brand's message.",
    },
    {
        title: 'Copywriting',
        icon: 'copy',
        tags: ['Landing Pages', 'Ad Copy', 'Emails', 'Video Scripts'],
        description: 'I turn ideas and product information into clear, compelling copy tailored to the audience, platform, and purpose of each piece.',
    },
    {
        title: 'Audience Research',
        icon: 'research',
        tags: ['Customer Needs', 'Pain Points', 'Market Understanding'],
        description: 'I explore audience needs, behaviour, interests, and challenges to inform marketing decisions, messaging, and content direction.',
    },
    {
        title: 'Campaign Analysis',
        icon: 'analysis',
        tags: ['Performance Tracking', 'Insights', 'Optimisation'],
        description: 'I monitor available campaign data, assess performance against objectives, and identify insights that can guide future marketing decisions.',
    },
]

export const servicesClosing = 'The kind of work I enjoy most: understanding a marketing challenge, figuring out what the audience needs to hear, and turning that understanding into a strategy and execution plan.'

// ---------- Case study: Benva ----------

export const benvaCaseStudy = {
    company: 'Benva',
    logo: '/benva-logo.png',
    title: 'Marketing for an early-stage tailoring management app',
    website: { label: 'benva.app', url: 'https://benva.app/' },
    role: 'Chief Marketing Officer (CMO)',
    channels: ['Facebook', 'Instagram', 'WhatsApp', 'TikTok', 'Meta Ads', 'Direct outreach'],
    challenge: 'Benva helps tailors and fashion designers manage customer measurements, orders, delivery dates, and related shop information in one digital workspace. As an early-stage product, it needed awareness among its target audience and a clear explanation of how the app could support day-to-day tailoring work.',
    contribution: [
        'Developed customer-focused messaging to explain the product’s practical value.',
        'Planned and created social content around common tailoring workflow challenges.',
        'Supported Facebook marketing and paid advertising, and monitored campaign performance.',
        'Reached out directly to potential users and communicated with prospects to encourage sign-ups and gather feedback.',
    ],
    // Two separate Meta ads, as recorded in Meta's "Results from this ad" screens
    ads: [
        { name: 'Ad 1', linkClicks: 591, views: 750, viewers: 660, screenshot: '/case-study/ad-1-results.jpg' },
        { name: 'Ad 2', linkClicks: 234, views: 855, viewers: 772, screenshot: '/case-study/ad-2-results.jpg' },
    ],
    adsNote: 'These are two separate ads; clicks are not necessarily unique people and do not prove sign-ups. User registrations are tracked separately in Benva’s internal admin tool and are not displayed here.',
    approach: [
        {
            title: 'Lead with the customer problem',
            text: 'Frame Benva around everyday tasks tailors need to manage, such as keeping customer measurements and delivery details organised.',
        },
        {
            title: 'Use content to make the product tangible',
            text: 'Create practical, relatable content that helps potential users understand how the app fits into their workflow.',
        },
        {
            title: 'Combine channels',
            text: 'Use social content and paid promotion to build awareness, alongside direct outreach and conversations with prospective users.',
        },
        {
            title: 'Separate attention from acquisition',
            text: 'Review ad clicks and views as campaign engagement indicators, then verify registrations using the product’s own records when authorised access is available.',
        },
    ],
    demonstrates: [
        'Hands-on marketing execution for an early-stage digital product.',
        'Ability to connect product messaging with audience needs.',
        'Experience reviewing social and paid campaign metrics.',
        'A practical, multi-channel approach to early user acquisition.',
    ],
}

// ---------- Work samples ----------

export const workSamples = [
    {
        title: 'Benva Landing Page Copy',
        brand: 'Benva',
        format: 'Landing page',
        concept: false,
        objective: 'Communicate Benva’s value to tailors and encourage product sign-ups.',
        contribution: 'Rewrote the landing page copy to communicate the product’s features and benefits more clearly.',
        approach: 'Focused on tailors’ everyday challenges and positioned Benva as a practical solution to managing measurements, customer records and orders.',
        outcome: 'Created clearer, benefit-focused messaging to help potential users understand the product and take the next step.',
        links: [{ label: 'View the website', url: 'https://benva.app/' }],
    },
    {
        title: 'Fall Collection Email Campaign',
        brand: 'Fiora Luxe',
        format: 'Email campaign',
        concept: true,
        objective: 'Promote the Fall Collection, introduce featured products, and encourage first-time purchases with a 10% discount.',
        contribution: 'Wrote the promotional email copy, including the subject line, product descriptions, brand messaging, discount offer, and call to action.',
        approach: 'Used seasonal storytelling, comfort-focused benefits, and an introductory discount to capture attention and encourage purchase.',
        outcome: 'Produced a ready-to-use promotional email designed to drive traffic to the Fall Collection and encourage first-time orders.',
        links: [{ label: 'View the email', url: 'https://docs.google.com/document/d/1OnTiCcSE6j0OzJPLxmwfq8GJu_XUQS8v_YjT1eTZrVg/edit?usp=drivesdk' }],
    },
    {
        title: 'Creative Advertising Copy',
        brand: 'Baked by Vee',
        format: 'Ad copy',
        concept: true,
        objective: 'Create engaging promotional copy that showcases the cakes and encourages customer orders.',
        contribution: 'Wrote the advertising copy, highlighting product appeal, emotional connection, and a clear call to action.',
        approach: 'Used sensory descriptions and relatable celebration moments to make the cakes more appealing and connect the brand with customers’ emotions.',
        outcome: 'Developed a sample of persuasive, customer-focused copywriting designed to spark interest and encourage enquiries.',
        links: [{ label: 'View the copy', url: 'https://docs.google.com/document/d/1rNZ9wu5Sf8-2LHLhztjp6FGIqWAevNB6bVJMQ62MfoQ/edit?usp=drivesdk' }],
    },
    {
        title: 'AI Demo Video Script',
        brand: 'Benva',
        format: 'Video script',
        concept: false,
        objective: 'Demonstrate how to create a customer record on Benva in an engaging, easy-to-follow video.',
        contribution: 'Wrote the creative video script, including the storyline, scene directions, AI visual prompts, voiceover, and app demonstration.',
        approach: 'Combined a relatable tailoring scenario with step-by-step product instructions to make the demo informative, engaging, and easy to follow.',
        outcome: 'Developed a concept script that presents a practical app tutorial through creative storytelling.',
        links: [
            { label: 'Watch the demo video', url: 'https://www.facebook.com/share/r/19fPnqX6ze/' },
            { label: 'View the script', url: 'https://docs.google.com/document/d/1CbA_EiHDKT2gQZfTFgyAakVvZwaHL8vNb-8hUBs_JG4/edit?usp=drivesdk' },
        ],
    },
]

// ---------- About ----------

export const aboutWork = 'I help products communicate their value clearly and reach the people most likely to need them. My work combines audience-focused messaging, content planning, social media execution, paid promotion, and direct prospect outreach.'

export const focusAreas = [
    'Product positioning and customer-focused messaging',
    'Content strategy and social media marketing',
    'Paid campaign monitoring and performance review',
    'Direct outreach and early-stage user acquisition',
]

export const profileSummary = [
    'Develop product-focused marketing strategies that connect customer problems to clear, compelling value propositions.',
    'Turn customer and competitor research into positioning, messaging, campaigns and acquisition experiments.',
    'Acquire users through direct outreach, social media, community marketing and paid advertising.',
    'Write landing pages, email campaigns, social content, scripts, brochures and grant proposals.',
    'Work closely with founders and product teams to connect customer feedback with product and marketing decisions.',
]

export const skills = [
    'Product Marketing', 'Growth Marketing', 'Digital Marketing',
    'Content Strategy', 'Copywriting', 'Customer Research', 'Audience Research',
    'Customer Acquisition', 'Product Positioning', 'Social Media Marketing',
    'Competitor Research', 'Lead Generation', 'AI-Assisted Content',
]

export const tools = [
    { name: 'Google Workspace', icon: 'google' },
    { name: 'Meta Business Suite', icon: 'meta' },
    { name: 'ChatGPT', icon: 'chatgpt' },
    { name: 'Claude', icon: 'claude' },
    { name: 'Google Flow', icon: 'flow' },
    { name: 'Google Analytics', icon: 'analytics' },
    { name: 'Mailchimp', icon: 'mailchimp' },
]

// ---------- Experience & Education ----------

export const experienceData = [
    {
        initials: 'B',
        logo: '/benva-logo.png',
        role: 'Chief Marketing Officer (CMO)',
        company: 'Benva',
        period: 'May 2026 – Present',
        bullets: [
            'Lead marketing strategy, product positioning and user acquisition for an early-stage SaaS product serving tailors and fashion designers.',
            'Research customers and competitors to identify pain points, objections and opportunities for growth.',
            'Develop customer-focused messaging that turns product features into clear, relevant benefits.',
            'Acquire users through direct outreach, social media, community marketing and paid advertising.',
            'Create product demos, social content and campaigns across Facebook, Instagram, WhatsApp and TikTok.',
            'Work directly with the founder/developer to connect customer feedback with product and marketing decisions.',
            "Grew Benva's Facebook presence to 200+ followers organically.",
        ],
    },
    {
        initials: 'U',
        role: 'Copywriter & Content Writer',
        company: 'Urban Flow Parkour',
        period: 'September 2024 – March 2026',
        bullets: [
            'Created grant proposals, social media content, brochures and other marketing communication materials.',
            'Researched audiences and topics to develop relevant, useful content.',
            'Developed 70+ content and blog ideas to support content strategy.',
        ],
    },
    {
        initials: 'F',
        role: 'Copywriter & Marketing Support',
        company: 'Freelance',
        period: '2023 – Present',
        bullets: [
            'Develop landing pages, email campaigns, social media content, scripts and product messaging.',
            'Research target audiences and competitors before developing marketing campaigns.',
            'Translate product features into clear, customer-focused messaging for different audiences.',
        ],
        selectedWork: ['Cardtonic', 'Fiora Luxe', 'Sqkii', 'Algopower', 'DeFinux'],
    },
]

export const education = {
    school: 'University of Nigeria, Nsukka (UNN)',
    degree: 'B.A. Mass Communication',
    grade: 'Second Class Upper',
    year: '2024',
}
