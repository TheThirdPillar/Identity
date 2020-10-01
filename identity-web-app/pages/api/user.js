const user = {
  "personalInformation": {
    "public": {
      "fullname": "Gaurav Singh",
      "username": "gauravsingh",
      "profileImage": "",
      "verified": false,
      "social": {
        "facebook": "",
        "twitter": "",
        "github": "",
        "medium": "",
        "dribble": "",
        "pinterest": "",
      },
    },
    "private": {
      "documents": [],
      "email": [
        {
          "address": "thegauravks@gmail.com",
          "verified": true,
          "tags": [],
        },
        {
          "address": "gaurav.singh@skillschain.org",
          "verified": false,
          "tags": [],
        }
      ],
      "phone": [
        {
          "number": "9591724957",
          "verified": true,
          "tags": [],
        }
      ],
    }
  },
  "skillInformation": [
    {
      fieldOfInterest: 'Software Engineering',
      associatedSkill: 'Full-Stack Developer',
      skillDetails: [
        'Javascript',
        'NodeJS',
        'ReactJS'
      ],
      skillLevel: 0,
      endorsements: [],
      skillTag: 'primary'
    },
    {
      fieldOfInterest: 'Software Engineering',
      associatedSkill: 'Network Programming',
      skillDetails: [
        'GoLang',
        'Distributed Systems',
        'Blockchain'
      ],
      skillLevel: 0,
      endorsements: [],
      skillTag: 'primary'
    },
    {
      fieldOfInterest: 'Software Engineering',
      associatedSkill: 'Shell Scripting',
      skillDetails: [
        'Bash',
        'Linux Kernel',
      ],
      skillLevel: 0,
      endorsements: [],
      skillTag: 'secondary'
    },
    {
      fieldOfInterest: 'Teaching',
      associatedSkill: 'Federated Identity Systems',
      skillDetails: [
        'Single-Sign-On',
        'Anonymous Authentication',
      ],
      skillLevel: 0,
      endorsements: [],
      skillTag: 'secondary'
    },
    {
      fieldOfInterest: 'Quantum Computing',
      associatedSkill: 'Qiskit Programming',
      skillDetails: [
        'Theory'
      ],
      skillLevel: 0,
      endorsements: [],
      skillTag: 'tertiary'
    }
  ],
  "educationInformation": [
    {
      organizationName: "PES Institute of Technology",
      certificationName: "B.Tech",
      specialization: "Information Science",
      startDate: "", 
      endDate: ""
    },
    {
      organizationName: "Delhi Public School, Patna",
      certificationName: "12th Standard",
      specialization: "",
      startDate: "", 
      endDate: ""
    }
  ],
  "professionalInformation": [
    {
      organizationName: "Third Pillar",
      workType: "fulltime",
      position: "Cofounder",
      startDate: "", 
      endDate: ""
    },
    {
      organizationName: "Heptagon Technologies Pvt Ltd",
      workType: "fulltime",
      position: "Head of Blockchain",
      startDate: "", 
      endDate: ""
    }
  ]
}

export default ((req, res) => {
  res.status(200).json(user)
})
