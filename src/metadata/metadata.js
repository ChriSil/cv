module.exports = {
  name: 'Christopher Siller',
  title: 'Software Engineer, M.Sc.',
  facts: {
      'Residence': '<a href="https://www.google.com/maps/place/Innsbruck/@47.2855079,11.3437708,13z/data=!3m1!4b1!4m6!3m5!1s0x479d6ecfe1f8ca73:0x9d201c7d281d9b0d!8m2!3d47.2692124!4d11.4041024!16zL20vMGZobXk"><i class="fa fa-home fact-icon"></i>Innsbruck, AT</a>',
      'LinkedIn': `<a href="https://www.linkedin.com/in/christophersiller/en?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-linkedin-in fact-icon"></i>Christopher Siller
                </a>`,
      'Github': `<a href="https://github.com/ChriSil/"><i class="fa-brands fa-github fact-icon"></i>ChriSil</a>`,
      'Email': '<a href="mailto:chris.siller@alumni.fau.de"><i class="fa fa-envelope fact-icon"></i>chris.siller@alumni.fau.de</a>',
      'Phone': '<a href="tel:>+43-670-3522557"><i class="fa fa-phone fact-icon"></i>+43 670 3522557</a>'
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
        title: 'Ferchau Engineering, Innsbruck, AT', // used
        subtitle: 'Software Engineer',
        period: 'Apr 2022 - Present', // used
        skills: ['Python', 'X', 'X'], // used
        contents: `Working as Software Developer in the reliability management system scrum team, utilizing
        data science principles to enhance the reliability of industrial machinery.` // used
    },
    {
        title: 'Hatch Ltd.',
        subtitle: 'Software and Systems Engineer',
        period: 'Oct 2018 – Oct 2021',
        skills: ['C++', 'Python', 'MatLab'],
        contents: `Part of the Rail Systems Engineering group.    Responsibilities revolved mainly around
        development and application of TrainOps\u00A9 , Hatch LTKs proprietary operations and electrical
        network simulation software, as well as some related field work.`,
        subcontents: ['TrainOps Development: Incorporation of user feedback, documentation, beta testing.',
                      'Postprocessing and analysis of simulation results, worked on new approaches to meet high data volumes.',
                      'Acquisition and preprocessing of field data to build simulation scenarios.']

    },
    {
        title: 'Siemens Transmission Solutions,',
        period: 'Nov 2015 – Dec 2017',
        subtitle: 'Erlangen, Germany',
        jtitle: 'Working Student, R&D',
        badges: ['LabView', 'C++', 'MatLab'],
        contents: `R&D Team member,  building a test facility for a high voltage DC Switch. My task was to build a virtual workbench to allow remote charging, testing and monitoring, as well as test result analysis. `
    },
    {
        title: 'Siemens Rail Electrification,',
        subtitle: 'Portland, OR, USA',
        jtitle: 'Trainee, Project Engineering',
        period: 'Oct 2014 - Jul 2015',
        badges: ['LabView', 'MatLab', 'Siemens NX'],
        contents: `Introduction to technical project management. Assisted in installing inspecting DC Substations. Facilitated automated Factory Acceptance Test (FAT) workbench for Rectifiers and DC Switchgear. `,
        subcontents: []
    },
    {
        title: 'Siemens Infrastructure and Cities,',
        subtitle: 'Erlangen, Germany',
        jtitle: 'Working Student, IT Infrastructure',
        period: 'Jun 2012 - Sep 2014',
        badges: ['SQL', 'Linux', 'VBA', 'SharePoint', 'Access'],
        contents: 'Working Student in part time, helping on-site with user IT issues, migration of Operating Systems, maintenance and migration of databases and server environments.'
    }
  ],
 experience: [
          {
              header: 'Masters Thesis',
              skills: ['C++', 'Python', 'ROS'],
              contents: `Software development to calculating flight trajectories for autonomous
      multicopters in intralogistics`
          },
          {
              header: 'Project Thesis',
              skills: ['3d Print', 'Aerosols'],
              contents: `Fabrication of artficial muscles using the Aerosol-Jet-3D-Print method`
          },
          {
              header: 'Bachelors Thesis',
              skills: ['FEM Analysis', 'Thermal Condictivity'],
              contents: `Experimental and simulative analysis of thermally conductive polymers in
      high power LED-systems`
          },
  ]
};
