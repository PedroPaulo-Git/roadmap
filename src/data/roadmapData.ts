

// Dados dos roadmaps
const roadmapData = {
  frontend: {
    title: 'Frontend Development',
    description: 'Aprenda a criar interfaces de usuário modernas e responsivas',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'Frontend Basics',
          description: 'Aprenda os fundamentos do desenvolvimento frontend',
          freeResources: [
            { title: 'HTML & CSS Crash Course', url: 'https://youtube.com/watch?v=example1', type: 'video' as const },
            { title: 'JavaScript Fundamentals', url: 'https://youtube.com/watch?v=example2', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Complete Web Development Course', url: 'https://udemy.com/course/example', platform: 'Udemy', price: '$49.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'HTML',
          description: 'Estrutura básica de páginas web',
          freeResources: [
            { title: 'HTML Tutorial', url: 'https://youtube.com/watch?v=html', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'CSS',
          description: 'Estilização e layout de páginas',
          freeResources: [
            { title: 'CSS Grid & Flexbox', url: 'https://youtube.com/watch?v=css', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '4',
        position: { x: 250, y: 225 },
        data: {
          title: 'JavaScript',
          description: 'Programação interativa para web',
          freeResources: [
            { title: 'JS Fundamentals', url: 'https://youtube.com/watch?v=js', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Advanced JavaScript Course', url: 'https://udemy.com/course/js-advanced', platform: 'Udemy', price: '$39.99' },
          ],
        },
      },
      {
        id: '5',
        position: { x: 250, y: 325 },
        data: {
          title: 'React',
          description: 'Biblioteca para interfaces de usuário',
          freeResources: [
            { title: 'React Tutorial', url: 'https://youtube.com/watch?v=react', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Complete React Course', url: 'https://udemy.com/course/react-complete', platform: 'Udemy', price: '$59.99' },
          ],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
      { id: 'e2-4', source: '2', target: '4', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
      { id: 'e4-5', source: '4', target: '5', animated: true },
    ],
  },
  backend: {
    title: 'Backend Development',
    description: 'Desenvolva APIs e sistemas do lado servidor',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'Backend Fundamentals',
          description: 'Conceitos básicos de desenvolvimento backend',
          freeResources: [
            { title: 'Backend Development Basics', url: 'https://youtube.com/watch?v=backend1', type: 'video' as const },
            { title: 'API Design Principles', url: 'https://youtube.com/watch?v=api1', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Complete Backend Development', url: 'https://udemy.com/course/backend', platform: 'Udemy', price: '$69.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'Node.js',
          description: 'JavaScript no servidor',
          freeResources: [
            { title: 'Node.js Tutorial', url: 'https://youtube.com/watch?v=nodejs', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'Python',
          description: 'Desenvolvimento backend com Python',
          freeResources: [
            { title: 'Python for Backend', url: 'https://youtube.com/watch?v=python', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '4',
        position: { x: 250, y: 225 },
        data: {
          title: 'Databases',
          description: 'Bancos de dados relacionais e NoSQL',
          freeResources: [
            { title: 'Database Fundamentals', url: 'https://youtube.com/watch?v=db', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Database Design Course', url: 'https://udemy.com/course/database', platform: 'Udemy', price: '$44.99' },
          ],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
      { id: 'e2-4', source: '2', target: '4', animated: true },
      { id: 'e3-4', source: '3', target: '4', animated: true },
    ],
  },
  fullstack: {
    title: 'Full Stack Development',
    description: 'Combine frontend e backend para aplicações completas',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'Full Stack Basics',
          description: 'Fundamentos do desenvolvimento full stack',
          freeResources: [
            { title: 'Full Stack Overview', url: 'https://youtube.com/watch?v=fullstack1', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Complete Full Stack Course', url: 'https://udemy.com/course/fullstack', platform: 'Udemy', price: '$89.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'MERN Stack',
          description: 'MongoDB, Express, React, Node.js',
          freeResources: [
            { title: 'MERN Tutorial', url: 'https://youtube.com/watch?v=mern', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'MEAN Stack',
          description: 'MongoDB, Express, Angular, Node.js',
          freeResources: [
            { title: 'MEAN Tutorial', url: 'https://youtube.com/watch?v=mean', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
    ],
  },
  cybersecurity: {
    title: 'Cybersecurity',
    description: 'Proteja sistemas e dados contra ameaças digitais',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'Security Fundamentals',
          description: 'Conceitos básicos de segurança cibernética',
          freeResources: [
            { title: 'Cybersecurity Basics', url: 'https://youtube.com/watch?v=security1', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Ethical Hacking Course', url: 'https://udemy.com/course/ethical-hacking', platform: 'Udemy', price: '$79.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'Network Security',
          description: 'Segurança de redes e protocolos',
          freeResources: [
            { title: 'Network Security Tutorial', url: 'https://youtube.com/watch?v=network', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'Penetration Testing',
          description: 'Testes de invasão e vulnerabilidades',
          freeResources: [
            { title: 'Pentesting Basics', url: 'https://youtube.com/watch?v=pentest', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
    ],
  },
  mobile: {
    title: 'Mobile Development',
    description: 'Desenvolva aplicativos para dispositivos móveis',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'Mobile Fundamentals',
          description: 'Conceitos básicos de desenvolvimento mobile',
          freeResources: [
            { title: 'Mobile Development Intro', url: 'https://youtube.com/watch?v=mobile1', type: 'video' as const },
          ],
          paidResources: [
            { title: 'React Native Course', url: 'https://udemy.com/course/react-native', platform: 'Udemy', price: '$64.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'React Native',
          description: 'Desenvolvimento cross-platform com React',
          freeResources: [
            { title: 'React Native Tutorial', url: 'https://youtube.com/watch?v=rn', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'Flutter',
          description: 'Framework do Google para mobile',
          freeResources: [
            { title: 'Flutter Tutorial', url: 'https://youtube.com/watch?v=flutter', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
    ],
  },
  devops: {
    title: 'DevOps',
    description: 'Automatize e otimize o ciclo de desenvolvimento',
    nodes: [
      {
        id: '1',
        position: { x: 250, y: 25 },
        data: {
          title: 'DevOps Fundamentals',
          description: 'Conceitos básicos de DevOps',
          freeResources: [
            { title: 'DevOps Introduction', url: 'https://youtube.com/watch?v=devops1', type: 'video' as const },
          ],
          paidResources: [
            { title: 'Complete DevOps Course', url: 'https://udemy.com/course/devops', platform: 'Udemy', price: '$74.99' },
          ],
        },
      },
      {
        id: '2',
        position: { x: 100, y: 125 },
        data: {
          title: 'Docker',
          description: 'Containerização de aplicações',
          freeResources: [
            { title: 'Docker Tutorial', url: 'https://youtube.com/watch?v=docker', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
      {
        id: '3',
        position: { x: 400, y: 125 },
        data: {
          title: 'Kubernetes',
          description: 'Orquestração de containers',
          freeResources: [
            { title: 'Kubernetes Basics', url: 'https://youtube.com/watch?v=k8s', type: 'video' as const },
          ],
          paidResources: [],
        },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', animated: true },
      { id: 'e1-3', source: '1', target: '3', animated: true },
    ],
  },
};

export default roadmapData;