
// import React from 'react';
// import { Trophy, Award } from 'lucide-react';

// const achievements = [
//   {
//     title: 'Winner - HackVSIT 5.0 (Sustainable Theme)',
//     description: 'Won 1st place for building EcoEats, a solution to reduce food waste by connecting surplus sources with NGOs.',
//   },
//   {
//     title: 'Top 4 Finalist - AceHack 3.0 (UEM Jaipur)',
//     description: 'Selected as top 4 out of 300+ teams for EcoEats, showcasing innovation in sustainability and food logistics.',
//   },
//   {
//     title: '1st Prize - DTU RiseIn (SEEMA)',
//     description: 'Built a decentralized platform for solar energy tokenization using blockchain and won the top prize.',
//   },
// ];

// const certifications = [
//   {
//     title: 'Meta Front-End Developer Certification',
//     description: 'Completed an extensive front-end course from Meta via Coursera, covering React, testing, and UI/UX.',
//   },
//   {
//     title: 'Blockchain Development - Polygon x Devfolio',
//     description: 'Certified in blockchain development with focus on Solidity, Polygon, and dApp architecture.',
//   },
//   {
//     title: 'AWS Cloud Practitioner Essentials',
//     description: 'Learned core cloud concepts and AWS services, enabling efficient deployment and scalability.',
//   },
// ];

// const Achievements = () => {
//   return (
//     <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-white mb-12 text-center">
//           Achievements & Certifications
//         </h2>

//         {/* Achievements Section */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold text-white mb-8">Achievements</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {achievements.map((item, index) => (
//               <div
//                 key={`achievement-${index}`}
//                 className="bg-black/40 rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white/10 rounded-lg">
//                     <Trophy className="w-6 h-6 text-yellow-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-semibold text-white mb-2">
//                       {item.title}
//                     </h4>
//                     <p className="text-gray-300">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Certifications Section */}
//         <div>
//           <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {certifications.map((cert, index) => (
//               <div
//                 key={`certificate-${index}`}
//                 className="bg-black/40 rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-white/10 rounded-lg">
//                     <Award className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-semibold text-white mb-2">
//                       {cert.title}
//                     </h4>
//                     <p className="text-gray-300">{cert.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Achievements;

import React from 'react';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    title: 'Winner - HackVSIT 5.0 (Sustainable Theme)',
    description: 'Won 1st place for building EcoEats, a solution to reduce food waste by connecting surplus sources with NGOs.',
  },
  {
    title: 'Top 4 Finalist - AceHack 3.0 (UEM Jaipur)',
    description: 'Selected as top 4 out of 300+ teams for EcoEats, showcasing innovation in sustainability and food logistics.',
  },
  {
    title: '1st Prize - DTU RiseIn Web3 Hackathon (SEEMA)',
    description: 'Built a decentralized platform for solar energy tokenization using blockchain and won the top prize.',
  },
];

const certifications = 
  [
    {
      "title": "EY Techathon 5.0",
      "description": "Cleared the first round of EY's national-level tech challenge, showcasing innovative problem-solving skills."
    },
    {
      "title": "Electrothon 6.0 – NIT Hamirpur",
      "description": "Participated in the prestigious hackathon conducted at NIT Hamirpur, contributing to impactful tech solutions."
    },
    {
      "title": "Walmart Sparkathon 2024",
      "description": "Built a data-driven platform to connect Indian MSMEs with Walmart, aiming to optimize global supply chains."
    }
  ]

const Achievements = () => {
  return (
    <section id="achievements"> 
    <div  className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Achievements & Certifications
        </h2>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <div
                key={`achievement-${index}`}
                className="bg-black/40 rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={`certificate-${index}`}
                className="bg-black/40 rounded-xl p-6 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-gray-300">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </section>
  );
};

export default Achievements;