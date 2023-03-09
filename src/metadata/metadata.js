module.exports = {
  name: 'Christopher Siller',
  title: 'Software Engineer, M.Sc.',
  facts: {
      'Residence': '<a href="https://www.google.com/maps/place/Innsbruck/@47.2855079,11.3437708,13z/data=!3m1!4b1!4m6!3m5!1s0x479d6ecfe1f8ca73:0x9d201c7d281d9b0d!8m2!3d47.2692124!4d11.4041024!16zL20vMGZobXk"><i class="fa fa-home fact-icon"></i>Innsbruck, AT</a>',
      'LinkedIn': `<a href="https://www.linkedin.com/in/christophersiller/en?original_referer=https%3A%2F%2Fwww.google.com%2F">
                  <i class="fa-brands fa-linkedin-in fact-icon"></i>Christopher Siller
                </a>`,
      'GitHub': `<a href="https://github.com/ChriSil/"><i class="fa-brands fa-github fact-icon"></i>ChriSil</a>`,
      'StackOverflow': '<a href="https://stackoverflow.com/users/7425011/chrisil"><i class="fa-brands fa-stack-overflow fact-icon"></i>ChriSil</a>',
      'Email': '<a href="mailto:chris.siller@alumni.fau.de"><i class="fa fa-envelope fact-icon"></i>chris.siller@alumni.fau.de</a>',
      'Phone': '<a href="tel:>+43-670-3522557"><i class="fa fa-phone fact-icon"></i>+43 670 3522557</a>'
  },
  skills: [
    ['Python', 100],
    ['C, C#', 70],
    ['TensorFlow', 70],
    ['ROS', 80],
    ['MatLab', 75],
    ['Kubernetes', 60],

    // r2
    ['C++', 80],
    ['Rust',50],
    ['PyTorch', 75],
    ['Docker', 75],
    ['Linux', 80],
    ['NodeJS', 60],
  ],
  positions: [
      {
        period: 'Apr 2022 - Present',
        title: 'Ferchau Engineering',
        location: 'Innsbruck, AT',
        subtitle: 'Software Engineer',
        skills: ['Python','AWS','Docker','Kubernetes','Pandas','Numpy', 'Dash'],
          contents: `Part of an interdisciplinary team of Engineers, Data Scientists and Developers,
        creating tools to enhance the reliability of industrial engines. The team's interest revolves around
        leveraging machine learning techniques to extract new insights from the data at our disposal.`,
        subcontents:['Processing and analyisis of machine and machine related data with Pandas/NumPy/SciPy.',
                     'Developing Data Visualization Interfaces using Flask/Dash/Plotly.',
                     'Backend Development and Data Availability with ClickHouse/Prefect/AWS/Lambda/SQL']
    },
    {
        period: 'Oct 2018 – Oct 2021',
        title: 'Hatch Ltd.',
        location: 'Portland, OR, USA',
        subtitle: 'Software and Systems Engineer',
        skills: ['C++', 'Python', 'MatLab'],
        contents: `Part of the Rail Systems Engineering group. Responsibilities revolved mainly around
                    development and application of TrainOps\u00A9 , Hatch LTKs proprietary operations and electrical
                    network simulation software, as well as some related field work.`,
        subcontents: ['TrainOps Development: feature implementation,beta testing, real world application.',
                      'Postprocessing and analysis of simulation results, working on new approaches to meet high data volumes.',
                      'Acquisition and preprocessing of field data to build simulation scenarios.']

    },
    {
        period: 'Nov 2015 – Dec 2017',
        title: 'Siemens Transmission Solutions,',
        location: 'Erlangen, Germany',
        subtitle: 'Working Student, R&D',
        skills: ['LabView', 'C++', 'MatLab'],
        contents: `R&D Team member,  building a test facility for a high voltage DC Switch. My task was to build a
        virtual workbench to allow remote charging, testing and monitoring, as well as test result analysis.`,
        subcontents:[]
    },
    {
        period: 'Oct 2014 - Jul 2015',
        title: 'Siemens Rail Electrification',
        location: 'Portland, OR, USA',
        subtitle: 'Trainee, Project Engineering',
        skills: ['LabView', 'MatLab', 'Siemens NX'],
        contents: `Introduction to technical project management. Assisted in installing inspecting DC Substations.
        Facilitated automated Factory Acceptance Test (FAT) workbench for Rectifiers and DC Switchgear. `,
        subcontents: []
    },
    {
        period: 'Jun 2012 - Sep 2014',
        title: 'Siemens Infrastructure and Cities,',
        location: 'Erlangen, Germany',
        subtitle: 'Working Student, IT Infrastructure',
        skills: ['SQL', 'Linux', 'VBA', 'SharePoint', 'Access'],
        contents: 'Working Student in part time, helping on-site with user IT issues, migration of Operating Systems, maintenance and migration of databases and server environments.',
        subcontents:[]
    }
  ],
 theses: [
          {
              header: 'Masters Thesis',
              skills: ['C++', 'Python', 'ROS'],
              contents: `"Software development to calculating flight trajectories for autonomous
      multicopters in intralogistics"`,
              subcontents: [
        'This project kickstarted my passion for software engineering, especially in utilizing Open Source resources. I was tasked with building the backend for an autonomous fleet or drones, and the integration of position data into flight trajectory calculations.',
        '<a href="https://www.faps.fau.de/curforsch/intrafly-einsatz-autonomer-flugroboter-in-der-intralogistik/">Intrafly Project, University of Erlangen</a>'
              ]
          },
          {
              header: 'Project Thesis',
              skills: ['3D Print', 'Aerosols','PLC'],
              contents: `"Fabrication of artficial muscles using the Aerosol-Jet-3D-Print method"`,
              subcontents:[]
          },
          {
              header: 'Bachelors Thesis',
              skills: ['FEM Analysis', 'Thermal Condictivity'],
              contents: `"Experimental and simulative analysis of thermally conductive polymers in
      high power LED-systems"`,
              subcontents:[]
          },
  ],
    additional: [ //unused
      {
          header: '',
          skills: ['', '', ''],
          contents: '',
          subcontents:['']
      },
      {
          header: '',
          skills: ['', '',''],
          contents: ``,
          subcontents:['']
      },
      {
          header: '',
          skills: [],
          contents:'' ,
          subcontents: []
      },
      ]
};
