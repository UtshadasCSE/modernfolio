export type Education = {
  institution: string;
  degree: string;
  fromDate: string;
  toDate: string;
  description: string;
};

export const educationData: Education[] = [
  {
    institution: "Progamming Hero",
    degree: "Complete Web Development",
    fromDate: "2024-04",
    toDate: "2024-10",
    description:
      "Completed an intensive, project-based web development bootcamp focused on real-world skills. Learned HTML, CSS, JavaScript, React, Node.js, and modern frameworks. Built multiple full-stack projects and gained hands-on experience working with team-based tasks and real client projects.",
  },
  {
    institution: "Daffodil International University",
    degree: "Bachelor of Science in Computer Science and Engineering",
    fromDate: "2020-01",
    toDate: "2024-12",
    description:
      "Earned a B.Sc. in Computer Science and Engineering with coursework in software engineering, data structures, algorithms, database systems, and web technologies. Completed various academic and personal projects, collaborated with peers on research, and gained a strong foundation in both theoretical and practical aspects of computer science.",
  },
  {
    institution: "Narsingdi Public College",
    degree: "Science",
    fromDate: "2017-01",
    toDate: "2019-12",
    description:
      "Completed Higher Secondary Certificate (HSC) with a concentration in Science. Studied core subjects including Physics, Chemistry, Biology, and Mathematics. Developed strong analytical and problem-solving skills, participated in science fairs, and laid the groundwork for pursuing higher studies in technology.",
  },
  {
    institution: "Golakandail MRB High School",
    degree: "Science",
    fromDate: "2012-01",
    toDate: "2016-12",
    description:
      "Successfully completed Secondary School Certificate (SSC) in Science stream. Focused on core science subjects along with Mathematics and ICT. Actively participated in school projects, extracurricular activities, and built a solid academic base for further studies in the science and technology field.",
  },
];
