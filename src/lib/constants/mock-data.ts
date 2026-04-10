export interface StudentProfile {
  id: string;
  name: string;
  avatar?: string;
  university: string;
  faculty: string;
  field: string;
  level: string;
  matric: string;
  email: string;
  origin: string;
  gpa: string;
  status: 'verified' | 'pending' | 'incomplete';
  remainingGoal: number;
  totalGoal: number;
  raisedAmount: number;
  story: string;
  bio: string;
  honors: { title: string; date: string }[];
  verificationStatus: {
    nin: boolean;
    transcript: boolean;
    admission: boolean;
  };
  sponsors: { name: string; logo?: string; amount: number }[];
  verifiedDocs?: { type: string; url: string; name: string }[];
}

export const STUDENTS_DATA: StudentProfile[] = [
  {
    id: "1",
    name: "Adebayo Chioma",
    university: "University of Lagos",
    faculty: "Engineering",
    field: "Chemical Engineering",
    level: "300 Level",
    matric: "UNILAG/2021/ENG/402",
    email: "a.chioma@unilag.edu.ng",
    origin: "Anambra State / Ihiala LGA",
    gpa: "4.72",
    status: 'verified',
    remainingGoal: 900000,
    totalGoal: 1250000,
    raisedAmount: 350000,
    bio: "Chemical Engineering student at UNILAG, passionate about sustainable energy and industrial chemistry. Maintains a first-class GPA while working part-time to support tuition.",
    story: "I am a highly motivated Chemical Engineering student at the University of Lagos. Despite the financial hurdles, I have maintained a 4.72 CGPA. This scholarship will ensure I finish my final year and contribute to sustainable energy solutions in Nigeria. My goal is to bridge the gap between rural energy access and industrial efficiency using bio-chemical processes.",
    honors: [
      { title: "Dean's List 2022/2023", date: "2023" },
      { title: "Best Student in Thermo-Dynamics", date: "2022" }
    ],
    verificationStatus: {
      nin: true,
      transcript: true,
      admission: true
    },
    sponsors: [
      { name: "Shell Niger Delta", amount: 200000 },
      { name: "Indigent Aid Fund", amount: 150000 }
    ],
    verifiedDocs: [
      { type: "Official Transcript", url: "#", name: "Transcript_A_Chioma.pdf" },
      { type: "Admission Letter", url: "#", name: "Admission_UNILAG_2021.pdf" },
      { type: "NIN Verification", url: "#", name: "NIN_Slip_Verified.png" }
    ]
  },
  {
    id: "2",
    name: "Ibrahim Musa",
    university: "Ahmadu Bello University",
    faculty: "Science",
    field: "Computer Science",
    level: "400 Level",
    matric: "ABU/2020/SCI/015",
    email: "i.musa@abu.edu.ng",
    origin: "Kano State / Dala LGA",
    gpa: "4.85",
    status: 'verified',
    remainingGoal: 450000,
    totalGoal: 850000,
    raisedAmount: 400000,
    bio: "Final year Computer Science student focusing on AI and Machine Learning. Winner of the 2023 North-West Tech Hackathon.",
    story: "Growing up in Kano, I was always fascinated by how technology could solve local logistics problems. My research focuses on using AI to optimize agricultural supply chains for small-scale farmers in Northern Nigeria.",
    honors: [
      { title: "North-West Tech Hackathon Winner", date: "2023" },
      { title: "Google Student Developer Lead", date: "2022" }
    ],
    verificationStatus: {
      nin: true,
      transcript: true,
      admission: true
    },
    sponsors: [
      { name: "TechNext Africa", amount: 300000 },
      { name: "Indigent Aid Fund", amount: 100000 }
    ],
    verifiedDocs: [
      { type: "Academic Record", url: "#", name: "Musa_TR_2024.pdf" },
      { type: "Tech Hackathon Cert", url: "#", name: "Hackathon_Winner_23.pdf" }
    ]
  },
  {
    id: "3",
    name: "Olawale Tolu",
    university: "Obafemi Awolowo University",
    faculty: "Arts",
    field: "History",
    level: "200 Level",
    matric: "OAU/2022/ART/112",
    email: "o.tolu@oauife.edu.ng",
    origin: "Oyo State / Ibadan North",
    gpa: "4.10",
    status: 'verified',
    remainingGoal: 600000,
    totalGoal: 650000,
    raisedAmount: 500000,
    bio: "History major with a focus on West African socio-economic developments. Dedicated to preserving oral traditions through digital archival projects.",
    story: "History is more than just dates; it is the blueprint of our future. My mission is to document the marginalized voices of our ancestors using modern digital tools to ensure they are never forgotten.",
    honors: [
      { title: "OAU Literary Prize", date: "2023" }
    ],
    verificationStatus: {
      nin: true,
      transcript: true,
      admission: true
    },
    sponsors: [
      { name: "Heritage Foundation", amount: 500000 }
    ],
    verifiedDocs: [
      { type: "Admission Letter", url: "#", name: "OAU_ADM_2022.pdf" }
    ]
  }
];
