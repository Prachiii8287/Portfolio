// import React from 'react';
// import { Code2 } from 'lucide-react';
// import { TypeAnimation } from 'react-type-animation';


// const codeSnippets = [
//   '<div>', 'const', 'function()', 'return', 'import', 'export',
//   'useState', '{props}', '<App />', 'npm install', 'git push',
//   '=>', 'async', 'await', '.map()', '.filter()', 'useEffect',
//   'class', 'interface', 'type', 'extends', 'implements', 'Promise',
//   'try/catch', '.then()', 'npm run dev', 'docker build', 'git merge',
//   'let', 'const', '<React.Fragment>', '</>', 'middleware',
//   'npm start', 'git clone', 'yarn add', 'docker-compose', 'kubectl',
//   'sudo apt-get', 'ssh-keygen', 'webpack', 'babel', 'eslint',
//   'prettier', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis',
//   'REST API', 'GraphQL', '<template>', 'v-for', '@click', '',
//   'useCallback', 'useMemo', 'useContext', 'useRef', 'useState',
//   'npm test', 'jest', 'describe', 'it()', 'expect()', 'toBe()',
//   'CI/CD', '.env', 'README.md', 'package.json', 'tsconfig.json'
// ];

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#000]">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.01),transparent)]" />
//         {codeSnippets.map((snippet, index) => (
//           <div
//             key={index}
//             className="absolute animate-float select-none"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDuration: `${1 + Math.random()}s`, // random speed
//               animationDelay: `${Math.random() * 3}s`,
//               opacity: 0.5,
//               textShadow: '0 0 10px rgba(255,255,255,0.3)'
//             }}
//           >
//             <span className="text-white font-mono text-xs sm-sm md-base bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
//               {snippet}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
//         <div className="text-center space-y-4 sm-y-6">
//           <div className="flex items-center justify-center mb-2 sm-4">
//             <Code2 className="w-8 h-8 sm-10 sm-10 md-12 md-12 text-white animate-pulse" />
//           </div>
//           <div className="h-16 sm-20 md-24">
//             <TypeAnimation
//               sequence={[
//                 'Hello, I am Prachi👋',
//                 1000,
//                 '',
//                 500,
//                 'I am a Full Stack Web Developer👩‍💻',
//                 2000,
//               ]}
//               wrapper="h1"
//               speed={50}
//               repeat={Infinity}
//               className="text-4xl sm-3xl md-8xl lg-5xl xl-6xl font-bold text-white"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
 
////////////////////////////////2
// import React from 'react';
// import { Code2 } from 'lucide-react';
// import { TypeAnimation } from 'react-type-animation';

// const codeSnippets = [
//   '<div>', 'const', 'function()', 'return', 'import', 'export',
//   'useState', '{props}', '<App />', 'npm install', 'git push',
//   '=>', 'async', 'await', '.map()', '.filter()', 'useEffect',
//   'class', 'interface', 'type', 'extends', 'implements', 'Promise',
//   'try/catch', '.then()', 'npm run dev', 'docker build', 'git merge',
//   'let', 'const', '<React.Fragment>', '</>', 'middleware',
//   'npm start', 'git clone', 'yarn add', 'docker-compose', 'kubectl',
//   'sudo apt-get', 'ssh-keygen', 'webpack', 'babel', 'eslint',
//   'prettier', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis',
//   'REST API', 'GraphQL', '<template>', 'v-for', '@click',
//   'useCallback', 'useMemo', 'useContext', 'useRef', 'useState',
//   'npm test', 'jest', 'describe', 'it()', 'expect()', 'toBe()',
//   'CI/CD', '.env', 'README.md', 'package.json', 'tsconfig.json'
// ];

// const Hero = () => {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#000]">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.01),transparent)]" />
//         {codeSnippets.map((snippet, index) => {
//           const animationClass =
//             index % 3 === 0
//               ? 'animate-float'
//               : index % 3 === 1
//               ? 'animate-float-slow'
//               : 'animate-float-fast';

//           return (
//             <div
//               key={index}
//               className={`absolute select-none ${animationClass}`}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random()* 3}s`,
//                 opacity: 0.5,
//                 textShadow: '0 0 10px rgba(255,255,255,0.3)'
//               }}
//             >
//               <span className="text-white font-mono text-xs sm:text-sm md:text-base bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
//                 {snippet}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
//         <div className="text-center space-y-4 sm:space-y-6">
//           <div className="flex items-center justify-center mb-2 sm:mb-4">
//             <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-pulse" />
//           </div>
//           <div className="h-16 sm:h-20 md:h-24">
//             <TypeAnimation
//               sequence={[
//                 'Hello, I am Prachi👋',
//                 1000,
//                 '',
//                 500,
//                 'I am a Full Stack Web Developer👩‍💻',
//                 2000,
//               ]}
//               wrapper="h1"
//               speed={50}
//               repeat={Infinity}
//               className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

///////////////3
import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const codeSnippets = [
  '<div>', 'const', 'function()', 'return', 'import', 'export',
  'useState', '{props}', '<App />', 'npm install', 'git push',
  '=>', 'async', 'await', '.map()', '.filter()', 'useEffect',
  'class', 'interface', 'type', 'extends', 'implements', 'Promise',
  'try/catch', '.then()', 'npm run dev', 'docker build', 'git merge',
  'let', 'const', '<React.Fragment>', '</>', 'middleware',
  'npm start', 'git clone', 'yarn add', 'docker-compose', 'kubectl',
  'sudo apt-get', 'ssh-keygen', 'webpack', 'babel', 'eslint',
  'prettier', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Redis',
  'REST API', 'GraphQL', '<template>', 'v-for', '@click',
  'useCallback', 'useMemo', 'useContext', 'useRef', 'useState',
  'npm test', 'jest', 'describe', 'it()', 'expect()', 'toBe()',
  'CI/CD', '.env', 'README.md', 'package.json', 'tsconfig.json'
];

const Hero = () => {
  const [snippetPositions, setSnippetPositions] = useState([]);

  useEffect(() => {
    // Generate random positions and delays once on mount
    const positions = codeSnippets.map(() => ({
      top: Math.random() * 100, // Keep away from edges (10% to 90%)
      left: Math.random() * 100,
      delay: Math.random() * 5 // Random delay between 0-5s
    }));
    setSnippetPositions(positions);
  }, []);

  return (
    <section id="home">
    <div className="relative min-h-screen overflow-hidden bg-[#000]">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_50%,rgba(255,255,255,0.01),transparent)]" />
        {codeSnippets.map((snippet, index) => {
          const position = snippetPositions[index] || { top: 0, left: 0, delay: 0 };
          const animationClass = 
            index % 3 === 0 
              ? 'animate-float' 
              : index % 3 === 1 
              ? 'animate-float-slow' 
              : 'animate-float-fast';

          return (
            <div
              key={index}
              className={`absolute select-none ${animationClass}`}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                opacity: 0.15,
                textShadow: '0 0 10px rgba(255,255,255,0.3)',
                willChange: 'transform',
                animationDelay: `${position.delay}s`
              }}
            >
              <span className="text-white font-mono text-xs sm:text-sm md:text-base bg-clip-text bg-gradient-to-r from-white/80 to-white/40">
                {snippet}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center mb-2 sm:mb-4">
            <Code2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white animate-pulse" />
          </div>
          <div className="h-16 sm:h-20 md:h-24">
            <TypeAnimation
              sequence={[
                'Hello, I am Prachi👋',
                1000,
                '',
                500,
                'I build stuff for the web👩‍💻',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;