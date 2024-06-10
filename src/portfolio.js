const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://jng-portfolio.vercel.app/",
  title: 'JN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'James Ng',
  role: 'MERN stack developer',
  description: [
    '💡 Curious learner committed to a life of learning and practice.',
    '🧠 Problem solver passionate about implementing creative solutions to solve real world issues.',
    '📚 Educator for over a decade, yearning to give back and empower others.',
  ],
  resume: 'https://docs.google.com/document/d/1KHa5zH_FXcrF3tIHWAbpn3EIk-3tC40vJs1WCwZRAsk/edit?usp=sharing',
  social: {
    linkedin: 'http://www.linkedin.com/in/jamesng15/',
    github: 'https://github.com/jng34',
    medium: 'https://jng15.medium.com/'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LoCodeLy',
    description:
      'A mobile app where users can search based on zip codes for cafes that are great for coding, studying, and connecting with other programmers.',
    stack: [
      'React Native', 'Node', 'Express', 'MongoDB', 'GraphQL', 'Mapbox'
    ],
    sourceCode: 'https://github.com/jng34/loCodeLy',
    livePreview: 'https://vimeo.com/956049268?share=copy',
  },
  {
    name: 'Math is a Joke',
    description:
      'An e-learning web app where users get random jokes and math problems to solve for the punchlines. They get to contribute to the pool of jokes and compete with other users.',
    stack: ['React', 'Ruby on Rails', 'PostgreSQL', 'Bootstrap'],
    sourceCode: 'https://github.com/jng34/math-is-a-joke',
    livePreview: 'https://www.linkedin.com/feed/update/urn:li:activity:7041515119935152128/',
  },
  {
    name: 'Fetch Dogs Adoption',
    description:
      'A frontend web app for dog adoption where the user can use multiple search filters to find the right dog.',
    stack: ['React', 'TypeScript', 'CSS'],
    sourceCode: 'https://github.com/jng34/fetch-dogs',
    livePreview: 'https://fetch-dogs-adoption.vercel.app/',
  },
  {
    name: 'Wordle',
    description:
      'A recreation of the popular New York Times word game, with added features such as suggested hints and Word of the Day.',
    stack: ['React', 'CSS', 'Bootstrap'],
    sourceCode: 'https://github.com/jng34/wordle',
    livePreview: 'https://flatiron-wordle.vercel.app/',
  },
  {
    name: 'JS Calculator',
    description:
      'A simple calculator used to perform basic math operations.',
    stack: ['TypeScript'],
    sourceCode: 'https://github.com/jng34/js-calculator',
    livePreview: 'https://js-calculator-123.vercel.app/',
  },
  {
    name: 'Turtle Crossing',
    description:
      'A recreation of the classic Frogger game, where the turtle (user) must go across the screen and avoid all oncoming cars to make it to the next level.',
    stack: ['Python'],
    sourceCode: 'https://github.com/jng34/turtle_crossing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'MERN',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Ruby on Rails',
  'Python',
  'SQL',
  'GraphQL',
  'Mapbox',
  'Bootstrap',
  'Git',
  'Object Oriented Programming',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'njames15@mail.com',
}

export { header, about, projects, skills, contact }
