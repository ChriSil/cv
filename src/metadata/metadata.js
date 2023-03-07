module.exports = {
  name: 'William Shakespeare',
  title: 'Software Engineer, M.Sc.',
  facts: {
      'Residence': '<a href="https://www.google.com/maps/place/Innsbruck/@47.2855079,11.3437708,13z/data=!3m1!4b1!4m6!3m5!1s0x479d6ecfe1f8ca73:0x9d201c7d281d9b0d!8m2!3d47.2692124!4d11.4041024!16zL20vMGZobXk"><i class="fa fa-home fact-icon"></i>Innsbruck, AT</a>',
      'LinkedIn': `<a href="https://www.linkedin.com/in/christophersiller/en?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-wikipedia-w fact-icon"></i>Christopher Siller
                </a>`,
    'Twitter': `<a href="https://twitter.com/shakespeare"><i class="fa-brands fa-twitter fact-icon"></i>Shakespeare</a>`,
    'Email': '<a href="mailto:chris.siller@alumni.fau.de"><i class="fa fa-envelope fact-icon"></i>chris.siller@alumni.fau.de</a>'
  },
  skills: [
    ['Python', 100],
    ['C++', 80],
    ['', 100],
    ['', 100],
    ['', 100],
    ['', 75],
    ['', 100],
    ['', 100],
    ['', 100],
    ['', 75],
    ['', 100],
    ['', 100],
  ],
  positions: [
    {
        title: 'Ferchau Engineering, Innsbruck, AT',
        subtitle: 'Software Engineer',
        period: 'Apr 2022 - Present',
        skills: ['Python', 'X', 'X'],
        contents: `Working as Software Developer in the reliability management system scrum team, utilizing
        data science principles to enhance the reliability of industrial machinery.`
    },
    {
        title: 'Hatch Ltd.',
        subtitle: 'Software and Systems Engineer',
        period: 'October 2018 – October 2021',
        skills: ['C++', 'Python', 'MatLab'],
        contents: `Part of the Rail Systems Engineering group.    Responsibilities revolved mainly around
        development and application of TrainOps\u00A9 , Hatch LTKs proprietary operations and electrical
        network simulation software, as well as some related field work.`,
        subcontents: ['TrainOps Development: Incorporation of user feedback, documentation, beta testing.',
                      'Postprocessing and analysis of simulation results, worked on new approaches to meet high data volumes.',
                      'Acquisition and preprocessing of field data to build simulation scenarios.']

    },
    {
      title: 'The Tragedy of Romeo and Juliet',
      period: '1595–1596, with a possible early draft written in 1591',
      skills: ['tragedy', 'death', 'love'],
      contents: `
In Verona, Italy, two families, the Montagues and the Capulets, are in the midst of a bloody feud. Romeo, a Montague, and Juliet, a Capulet, fall in love and struggle to maintain their relationship in the face of familial hatred. After Romeo kills Juliet's cousin Tybalt in a fit of passion, things fall apart. Both lovers eventually commit suicide within minutes of each other, and the feuding families make peace over their recent grief.

    }
  ],
  experience: [
    {
      header: 'Performance',
      skills: ['theater', 'play'],
      contents: `
Thousands of performances of my plays have been staged since the end of the 16th century. Many of my greatest plays were performed by the Lord Chamberlain's Men and King's Men acting companies at the [Globe](https://en.wikipedia.org/wiki/Globe_Theatre) and Blackfriars Theatres.
`
    },
    {
      header: 'Poetry',
      skills: ['poetry', 'erotic'],
      contents: `
In 1593 and 1594, when the theatres were closed because of plague, I published two narrative poems on sexual themes, Venus and Adonis and The Rape of Lucrece. I dedicated them to Henry Wriothesley, Earl of Southampton.
`
    }
  ]
};
