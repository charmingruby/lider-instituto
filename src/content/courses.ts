enum SubcourseTypes {
  theoric = 'Teórico',
  practice = 'Prático',
  lab = 'Laboratorial',
}

interface Coordinator {
  name: string
  role?: string
}

interface Subcourse {
  title: string
  observation?: string
  durationInMonths: number
  type: SubcourseTypes[]
  coordination: Coordinator[]
}

interface Course {
  title: string
  subcourses: Subcourse[]
}

const courses: Course[] = [
  {
    title: 'Cursos de Especialização',
    subcourses: [
      {
        title: 'Especialização em Ortodontia',
        durationInMonths: 36,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          {
            name: 'Dr. Anderson Mamede',
            role: 'Doutor em Ortodontia',
          },
          {
            name: 'Dr. Saulo Gribel',
            role: 'Doutor em Ortodontia',
          },
          {
            name: 'Dr. Alysson Oriá',
            role: 'Mestre em Ortodontia',
          },
        ],
      },
      {
        title: 'Especialização em Endodontia',
        durationInMonths: 24,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          {
            name: 'Dra. Simone Tosta',
          },
        ],
      },
      {
        title: 'Especialização em Implantes e Prótese',
        observation: 'Dupla certificação',
        durationInMonths: 24,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          {
            name: 'Dr. Kelvin Borges',
          },
          {
            name: 'Dr. Tiago Galvão',
          },
        ],
      },
      {
        title: 'Especialização em Harmonização Orofacial',
        durationInMonths: 18,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          {
            name: 'Dr. Pedro Breda',
          },
          {
            name: 'Dra. Querlei Veloso',
          },
        ],
      },
    ],
  },
  {
    title: 'Cursos de Atualização',
    subcourses: [
      {
        title: 'Atualização em Cirurgia Oral e Plástica Periodontal',
        durationInMonths: 10,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          { name: 'Dr. Kelvin Borges' },
          { name: 'Dr. Tiago Galvão' },
        ],
      },
      {
        title: 'Atualização em Endodontia',
        durationInMonths: 10,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [{ name: 'Dra. Simone Tosta' }],
      },
      {
        title: 'Atualização em Dentística',
        durationInMonths: 10,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [{ name: 'Dr. Marcelo Filadelfo Silva' }],
      },
    ],
  },
  {
    title: 'Cursos de Mini-Residência',
    subcourses: [
      {
        title: 'Mini-Residência em Harmonização Orofacial',
        durationInMonths: 6,
        type: [
          SubcourseTypes.theoric,
          SubcourseTypes.practice,
          SubcourseTypes.lab,
        ],
        coordination: [
          {
            name: 'Dr. Pedro Breda',
          },
          {
            name: 'Dra. Querlei Veloso',
          },
        ],
      },
    ],
  },
]

export { courses }
