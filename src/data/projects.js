const projects = [
  {
    title: 'Handshake AI',
    description: 'Projects: Project Lighthouse, Project Hedgehog, Project Lizard (v3)',
    detailSections: [
      {
        title: 'Project Lighthouse',
        subtitle: 'AI Evaluation: Financial Reasoning & Benchmark Design',
        text: "Designed complex, real-world financial reasoning tasks to evaluate AI agents' ability to analyze personal financial data and provide accurate, actionable insights. Developed multi-step evaluation scenarios using bank statements, transaction histories, and consumer financial profiles, incorporating challenges such as recurring payment identification, subscription discrepancies, and cash-flow calculations. Authored reference solutions, failure analyses, and weighted evaluation rubrics with 20–35 criteria to systematically assess model accuracy, reasoning, and instruction adherence. Analyzed multiple AI model responses to identify reasoning failures, calculation errors, and gaps in financial decision-making.",
      },
      {
        title: 'Project Hedgehog',
        subtitle: 'Multimodal AI Evaluation: Visual Reasoning & Dataset Annotation',
        text: "Developed challenging visual question-and-answer pairs to evaluate and improve AI models' image understanding and reasoning capabilities. Analyzed image datasets to construct unambiguous questions requiring visual interpretation, contextual reasoning, and attention to fine-grained details rather than simple object recognition. Tested generated questions against AI models, identified incorrect responses, and provided verified ground-truth answers to support model improvement. Managed annotation and evaluation workflows across SuperAnnotate and Handshake AI, maintaining dataset quality through precise labeling, answer validation, and adherence to annotation standards.",
      },
      {
        title: 'Project Lizard',
        subtitle: 'Multimodal AI Training: Visual Reasoning & Model Evaluation',
        text: "Contributed to multimodal AI training by creating image-grounded question-and-answer pairs designed to strengthen models' visual reasoning abilities. Examined visual content to develop challenging prompts involving spatial relationships, object attributes, contextual clues, and multi-step visual inference. Evaluated model-generated answers against image evidence, identifying interpretation errors and documenting accurate responses for training and assessment. Produced structured, quality-focused annotations to support the development of more reliable vision-language models.",
      },
    ],
    image: '/assets/handshakeai-logo.png',
    imageAlt: 'Handshake AI logo',
    tags: ['AI', 'Prompt Engineering'],
    year: '2026',
    role: 'Handshake AI Engineer',
  },
  {
    number: '01',
    title: 'Glimpse',
    description:
      'A one-stop-shop album-making web app made for capturing and customising memories with ease.',
    details:
      'Glimpse is a web-based photo album editor I created to make designing personalized albums more intuitive and flexible, which addresses many of the usability challenges I noticed in existing online photo editing tools.\n\nI led the project from initial concept through implementation by conducting user research, mapping customer journeys, designing the interface in Figma, and developing the application using React, CSS, JavaScript, and Flask.\n\nSome of Glimpse\'s features includes an interactive canvas that allows users to arrange, customize, and save album layouts with reusable UI components and customizable templates, the ability to create and save multiple photo albums, and logins to save your progress.\n\nThe project is still actively evolving, and I\'m currently redesigning and rebuilding it with a stronger focus on modern UI/UX, improved architecture, enhanced performance, and a more scalable codebase to create an even more polished user experience.',
    image: '/assets/glimpse-home.png',
    imageAlt: 'Glimpse album dashboard',
    galleryImages: [
      {
        src: '/assets/glimpse-home.png',
        alt: 'Glimpse album dashboard',
      },
      {
        src: '/assets/glimpse-template.png',
        alt: 'Glimpse album template selection',
      },
      {
        src: '/assets/glimpse-upload-photo.png',
        alt: 'Glimpse photo upload screen',
      },
      {
        src: '/assets/glimpse-editing.png',
        alt: 'Glimpse album editing canvas',
      },
      {
        src: '/assets/glimpse-home-editing.png',
        alt: 'Glimpse home editing view',
      },
    ],
    tags: ['Web App', 'React', 'Full-Stack'],
    year: '2024',
    role: 'Full-stack developer and product designer',
    focus: 'Album creation flows, canvas editing tools, saved user changes, and responsive UI polish.',
    route: '/glimpse',
  },
  {
    number: '02',
    title: 'Stay Positive',
    description:
      'A cross-platform wellness experience for affirmations, meditation, and journaling.',
    details:
      'https://staypositiveapp.com/\n\nStay Positive is a mental health platform I developed with a five-person team to create a supportive space where users could build healthy habits through features like affirmations, meditation, and journaling.\n\nI collaborated on the UX design process by creating wireframes, prototypes, and user flows in Figma, then translated those designs into code by developing the responsive homepage, Terms of Service, and Contact webpage using TypeScript, while also contributing to the iOS app in Swift.',
    image: '/assets/staypositive-cover.png',
    imageAlt: 'Stay Positive website designs',
    galleryImages: [
      {
        src: '/assets/staypositive-cover.png',
        alt: 'Stay Positive cover designs',
      },
      {
        src: '/assets/sp-figma-website.png',
        alt: 'Stay Positive website Figma designs',
      },
      {
        src: '/assets/sp-figma-ios.png',
        alt: 'Stay Positive iOS Figma designs',
      },
      {
        src: '/assets/sp-contactpg.png',
        alt: 'Stay Positive contact page',
      },
    ],
    tags: ['Web + iOS', 'TypeScript', 'Swift'],
    year: '2025',
    role: 'Frontend and iOS contributor',
    focus: 'Website interface, support workflow, onboarding screens, and mobile experience consistency.',
    route: '/staypositive',
  },
  {
    title: 'Portfolio Website',
    description:
      'A portfolio showcasing my development work and design approach. Click to read more about my redesign process!',
    details:
      'I originally built my portfolio website in 2024 as a place to showcase my projects and experience, but after I had taken a step back and revisited it after graduating in 2026, I realized it didn’t fully reflect my personality or design style. \n\n\n\n During Jun of 2026, I set out to redesign my entire portfolio experience by reworking the visual hierarchy, refining the layout, and creating a more cohesive design system with consistent spacing, typography, and reusable React components. \n\n\n\n Throughout the process, I balanced aesthetics with performance, continuously iterating on both the UI and code structure to create something that felt more polished, professional, and uniquely mine!',
    image: null,
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/port2024-home.jpeg',
        alt: '2024 portfolio home page',
      },
      {
        src: '/assets/port2024-projs.jpeg',
        alt: '2024 portfolio projects page',
      },
      {
        src: '/assets/port2024-glimpse.jpeg',
        alt: '2024 portfolio Glimpse project page',
      },
      {
        src: '/assets/port2026-home.png',
        alt: '2026 portfolio home page',
      },
      {
        src: '/assets/port2026-projs.png',
        alt: '2026 portfolio projects page',
      },
      {
        src: '/assets/port2026-modal.png',
        alt: '2026 portfolio project modal',
      },
    ],
    tags: ['React', 'Figma', 'Web App', 'Full Stack', 'AI'],
    year: '2026',
    role: 'UI/UX Designer and Full Stack Developer',
    focus: 'Visual identity, interaction design, responsive React components, and editorial presentation.',
    route: '/',
  },
  {
    number: '04',
    title: 'GenLARP @ NCSU',
    description:
      'Explored the use of AI and LARPing at North Carolina State University and how it can be used to enhance eductational experiences for students.',
    details:
      'GENLARP was part of a research initiative focused on exploring how AI and immersive technologies could enhance educational experiences within AR/VR environments.\n\nMy work involved testing and evaluating multiple 2D-to-3D generation pipelines and comparing different 3D modeling tools + workflows to determine the most effective way to transform images into usable 3D assets for Unity-based applications.\n\nI also experimented with Stable Diffusion–based texture generation and application to assist in the creation of more realistic and customizable educational content while contributing to projects and research efforts related to immersive learning experiences.\n\nAs part of the project, I contributed to research efforts that were presented at the IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2025. I helped design and create the research poster in Figma, collaborated on writing sections of the accompanying paper, and supported the communication of our findings on AI-assisted content generation and XR learning experiences.',
    image: '/assets/bigmac-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/bigmac-poster.png',
        alt: 'GenLARP research poster',
      },
      {
        src: '/assets/bigmac-block.png',
        alt: 'GenLARP block generation preview',
      },
      {
        src: '/assets/bigmac-texture-%20generation.mov',
        alt: 'GenLARP texture generation demo',
        type: 'video',
      },
      {
        src: '/assets/bigmac-3dmodel.HEIC',
        alt: 'GenLARP 3D model preview',
      },
      {
        src: '/assets/bigmac-assign.png',
        alt: 'GenLARP assignment preview',
      },
    ],
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2026',
    role: 'Research Assistant',
    focus: 'Educational interaction design, AI-assisted experiences, and exploratory prototyping.',
    route: '/',
  },
  {
    number: '05',
    title: 'rhymASL',
    description:
      'Assisted in the conversion of a web application that utilizes AI for sign language instruction.',
    details:
      'rhymASL is an educational web application I helped modernize by converting the existing Python-based frontend to React to make the platform more maintainable, responsive, and easier to expand with new features.\n\nrhymASL aims to helps deaf children learn American Sign Language by using AI to translate user prompts into ASL glosses and pairing them with instructional sign language videos, so I focused on building reusable React components, integrating the FastAPI backend, and implementing dynamic video playback and API-driven interactions.',
    image: '/assets/rhymASL_UI.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/rhymASL_UI.png',
        alt: 'rhymASL interface preview',
      },
      {
        src: '/assets/rhymasldemo.mp4',
        alt: 'rhymASL demo video',
        type: 'video',
      },
    ],
    tags: ['Unity', 'Figma', 'Research', 'AI'],
    year: '2025',
    role: 'Design and development contributor',
    focus: 'Interface conversion, accessibility-minded UX, and AI-supported learning flows.',
    route: '/',
  },
  {
    number: '06',
    title: 'Web/App Design Intern @ GYB',
    description:
      'Designed & created client websites and modals through GoHighLevel, audited & debugged workflows.',
    details:
      'https://mrgyb.com/\n\nGrow Your Business (GYB) was a fast-paced web development internship where I built and maintained client-facing websites, calculators, chatbots, and workflow automations for a variety of businesses using GoHighLevel, JavaScript, HTML/CSS, and API integrations.\n\nI designed and developed (pictured in the gallery) responsive landing pages and funnels, coded interactive tools such as ROI, pricing, and quote calculators, built AI-powered chatbot experiences, and debugged complex CRM, calendar, payment, email, and workflow automations while balancing multiple client deadlines and rapidly changing requirements.\n\nBeyond development, I regularly audited existing systems to improve reliability and user experience, collaborated closely with designers and project managers, and learned how to communicate technical limitations, prioritize tasks, and deliver polished solutions under tight deadlines-- an experience that solidified my passion for frontend development and building products that create real business value.',
    image: '/assets/gyb-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/gyb1.png',
        alt: 'GYB project screenshot 1',
      },
      {
        src: '/assets/gyb2.png',
        alt: 'GYB project screenshot 2',
      },
      {
        src: '/assets/gyb3.png',
        alt: 'GYB project screenshot 3',
      },
      {
        src: '/assets/gyb4.png',
        alt: 'GYB project screenshot 4',
      },
      {
        src: '/assets/gyb5.png',
        alt: 'GYB project screenshot 5',
      },
      {
        src: '/assets/gyb6.png',
        alt: 'GYB project screenshot 6',
      },
    ],
    tags: ['GoHighLevel', 'HTML', 'CSS', 'Business'],
    year: '2025',
    role: 'Web/App Design Intern',
    focus: 'Client websites, modal design, workflow auditing, debugging, and business-facing UX.',
    route: '/',
  },
  {
    number: '07',
    title: 'Before You Visit: A VR Experience',
    description:
      'An immersive VR experience of life on a farm. Locate, collect, & transport chickens before your family comes to visit.',
    details:
      'Before You Visit is a VR game I independently developed in Unity where players navigate a farm environment to locate 10 hidden chickens before time expires while avoiding a roaming bear that actively pursues them and triggers a game-over state upon contact.\n\nI created the bear asset from scratch in Blender, including 3D modeling, material creation, UV mapping, rigging, and animation setup, then optimized and imported the model into Unity for real-time VR performance.\n\nUsing C# and Unity, I developed the core gameplay systems, including pathfinding and detection logic for the bear, VR locomotion and interaction mechanics, collectible tracking, countdown timers, collision-based win/loss conditions, and scene management to deliver a complete and immersive gameplay experience.',
    image: '/assets/byv-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: 'https://www.youtube.com/embed/ALl4Ogo013Q',
        alt: 'Before You Visit gameplay video',
        type: 'youtube',
      },
      {
        src: '/assets/byv-bear.png',
        alt: 'Before You Visit bear model',
      },
    ],
    tags: ['Unity', 'C#', 'Blender'],
    year: '2026',
    role: 'VR developer and experience designer',
    focus: 'Unity interaction design, C# gameplay scripting, 3D assets, and immersive scene building.',
    route: '/',
  },
    {
    number: '08',
    title: 'FitCheck',
    description:
      'A proof-of-concept augmented reality application built in Lens Studio for Snap Spectacles. Enables virtual clothing try-on through real-time body region detection and AR garment overlay',
    details:
      'FitCheck is an AR-powered, proof-of-concept fashion application built my me and 2 other peers in Lens Studio to help users visualize and experiment with outfits in a more interactive and engaging way.\n\nWe utilized Lens Studio’s scripting tools, image tracking, and AR capabilities.\n\nOur motiavations behinf this project was to explore how augmented reality  (AR) could bridge the gap between browsing and trying on clothing, so I focused heavily on creating intuitive interactions and a seamless user experience that felt both useful and fun.\n\nI also made flyers for the showcase we attended, where we demonstarted how out AR application worked.',
    image: '/assets/fitcheck-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/fitcheckdemo.MOV',
        alt: 'FitCheck AR demo video',
        type: 'video',
      },
      {
        src: '/assets/fitcheckflyer.png',
        alt: 'FitCheck showcase flyer',
      },
    ],
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2026',
    role: 'AR prototyper',
    focus: 'Lens Studio prototyping, body-region detection concepts, and wearable AR interaction.',
    route: '/',
  },
  {
    number: '09',
    title: 'Par Vous Même',
    description:
      'A hands-free cooking expereince and interactive recipe guide that allows for a seamless & engaging cooking experience. ',
    details:
      'Par Vous Même is a proof-of-concept interactive cooking assistant a team of 3 and I developed to make following recipes more hands-free and intuitive through voice-guided navigation and real-time ingredient recommendations.\n\nAs the project lead, I coordinated development tasks, managed project timelines, and collaborated closely with my teammates while also contributing to the application\'s development using HTML, CSS, Flask, and Python to integrate the frontend with backend functionality.\n\nI really enjoyed balancing both the technical and leadership sides of the project, continuously refining the user experience and application flow to create a platform that felt natural, accessible, and genuinely helpful in the kitchen.',
    image: '/assets/pvm-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/pvmdemo.mp4',
        alt: 'Par Vous Même demo video',
        type: 'video',
      },
      {
        src: '/assets/pvmusecase2.png',
        alt: 'Par Vous Même use case 1',
      },
      {
        src: '/assets/pvmusecase1.png',
        alt: 'Par Vous Même use case 2',
      },
      {
        src: '/assets/pvmusecase3.png',
        alt: 'Par Vous Même use case 3',
      },
    ],
    tags: ['Python', 'LensStudio', 'AR', 'AI'],
    year: '2025',
    role: 'Interaction designer and prototyper',
    focus: 'Hands-free interaction, recipe guidance, and AR-assisted task flow design.',
    route: '/',
  },
  {
    number: '10',
    title: 'Molez',
    description:
      'A modern take on the classic game: Whack-a-Mole.',
    details:
      '(https://github.com/jxiang0608/Molez) Molez is a game a team of four and I developed in our Mobile App Development course as a modern spin on the classic Whack-a-Mole. Instead of simply remaking the classic game, we added new gameplay mechanics such as timed rounds, power-ups, and hand-drawn pixel art to create a more engaging experience. I contributed throughout the development process by collaborating on game design, implementing gameplay functionality, and iterating on mechanics to make the game feel responsive, balanced, and enjoyable.',
    image: '/assets/molez-cover.png',
    imageAlt: '',
    galleryImages: [
      {
        src: '/assets/molez-cover.png',
        alt: 'Molez game preview',
      },
    ],
    tags: ['Swift', 'Canva'],
    year: '2024',
    role: 'Mobile app developer',
    focus: 'Swift development, game interaction patterns, and lightweight visual design.',
    route: '/',
  },
  {
    number: '11',
    title: 'SD Zoo App',
    description:
      'A gamified educational mobile experience designed to help children engage more deeply with animals, habitats, and conservation at the San Diego Zoo.',
    details:
      'The San Diego Zoo has always been one of my favorite places to visit, and my love for animals made me especially aware of how younger visitors often move quickly from exhibit to exhibit without fully engaging with the animals, their habitats, or conservation efforts. To address this problem, I independently designed a gamified educational mobile experience for the San Diego Zoo.\n\nI created the scavenger hunt concept as a way to make learning more interactive and memorable for kids while they explore the zoo. I developed the experience from scratch-- first by defining the product concept and user journey, then creating user flows and wireframes, then crafted a high-fidelity prototype in Figma. I focused on combining educational content with playful challenges and gamification to encourage children to observe animals more closely, learn about their behaviors and environments, and build greater awareness of wildlife conservation.',
    image: '/assets/sdzoooverviewfigma.png',
    imageAlt: 'SD Zoo App Figma overview',
    galleryImages: [
      {
        src: 'https://drive.google.com/file/d/1O8yjGv1FUJrKvajUrbvMn69M0gYV8nYH/preview',
        alt: 'SD Zoo App project overview',
        type: 'iframe',
      },
      {
        src: '/assets/sdzoooverviewfigma.png',
        alt: 'SD Zoo App Figma overview',
      },
      {
        src: '/assets/sdzoolofi.png',
        alt: 'SD Zoo App low-fidelity wireframes',
      },
      {
        src: '/assets/sdzoohifi1.png',
        alt: 'SD Zoo App high-fidelity design 1',
      },
      {
        src: '/assets/sdzoohifi2.png',
        alt: 'SD Zoo App high-fidelity design 2',
      },
    ],
    tags: ['Figma', 'UI/UX Design', 'User Research', 'A/B Prototyping'],
    year: '2026',
    date: 'Jan 2026 - May 2026',
    role: 'UX Designer',
    focus: 'UX research, mobile UI design, gamification, and high-fidelity prototyping.',
    route: '/',
  },
  
];

export default projects;
