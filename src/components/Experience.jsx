// import React from 'react';

// const experience = {
//   role: "Software Development Engineer (SDE-1)",
//   company: "Likwid Techserve",
//   location: "Bangalore, India · Remote",
//   duration: "2024 — Present",
//   achievements: [
//     "Built a two-agent Claude orchestration layer using the tool-use API, now running in production.",
//     "Designed a BOM-driven scheduling engine for 1,000+ machines, cutting planning time by roughly 60%.",
//     "Owned the architecture end-to-end for a Shopify D2C integration."
//   ],
//   stack: ["Python", "Django", "FastAPI", "React", "TypeScript", "GCP", "Celery", "Redis", "PostgreSQL"]
// };

// const Experience = () => {
//   return (
//     <section id="experience">
//       <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center">
//         <div className="max-w-5xl mx-auto w-full">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
//             Experience
//           </h2>

//           <div className="bg-black/40 rounded-xl p-8 md:p-10 shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-[1.02]">
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
//               <div>
//                 <h3 className="text-2xl font-semibold text-white">{experience.role}</h3>
//                 <p className="text-gray-300">
//                   {experience.company} · {experience.location}
//                 </p>
//               </div>
//               <span className="text-gray-400 text-sm whitespace-nowrap md:pt-1">
//                 {experience.duration}
//               </span>
//             </div>

//             <ul className="space-y-3 mb-8">
//               {experience.achievements.map((item, index) => (
//                 <li key={index} className="text-gray-300 flex gap-3">
//                   <span className="text-white/40 mt-1">›</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex flex-wrap gap-2">
//               {experience.stack.map((tech, index) => (
//                 <span
//                   key={index}
//                   className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React, { useEffect, useRef, useState } from 'react';

const experience = {
  role: "Software Development Engineer (SDE-1)",
  company: "Likwid Techserve",
  location: "Bangalore, India · Remote",
  duration: " June 2025 — Present",
  achievements: [
    "Built a two-agent Claude orchestration layer using the tool-use API, now running in production.",
    "Designed a BOM-driven scheduling engine for 1,000+ machines, cutting planning time by roughly 60%.",
    "Owned the architecture end-to-end for a Shopify D2C integration."
  ],
  stack: ["Python", "Django", "FastAPI", "React", "TypeScript", "GCP", "Celery", "Redis", "PostgreSQL","Agentic AI systems","LLM orchestration","Prompt engineering","Software architecture"]
};

// Small helper so line numbers stay in sync no matter how the content shifts
function useLineCounter() {
  let n = 0;
  return () => {
    n += 1;
    return n;
  };
}

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const Line = ({ n, children, delay = 0, visible }) => (
  <div
    className="flex gap-4 md:gap-6 transition-all duration-500 ease-out"
    style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(-8px)',
      transitionDelay: `${delay}ms`
    }}
  >
    <span className="select-none text-white/20 text-xs sm:text-sm w-5 sm:w-6 text-right flex-shrink-0 pt-[2px]">
      {n}
    </span>
    <span className="text-[13px] sm:text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
      {children}
    </span>
  </div>
);

const Key = ({ children }) => <span className="text-sky-400">{children}</span>;
const Str = ({ children }) => <span className="text-emerald-400">"{children}"</span>;
const Punc = ({ children }) => <span className="text-white/40">{children}</span>;
const Comment = ({ children }) => <span className="text-white/30 italic">{children}</span>;

const Experience = () => {
  const [ref, visible] = useReveal();
  const line = useLineCounter();

  return (
    <section id="experience">
      <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full" ref={ref}>
          {/* <p className="font-mono text-white/40 text-sm mb-3 tracking-wide">// experience</p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
            Where I've been working
          </h2>

          {/* Editor window */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.08)] bg-[#0a0a0a]">
            {/* Title bar */}
            <div className="flex items-center justify-between bg-[#111] px-4 py-3 border-b border-white/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="hidden sm:block text-white/30 text-xs font-mono">
                experience.js
              </span>
              <span className="w-14" />
            </div>

            {/* Tabs */}
            <div className="flex text-xs sm:text-sm font-mono border-b border-white/10 bg-[#0d0d0d]">
              <span className="px-4 py-2 text-white/30 border-r border-white/10">about.js</span>
              <span className="px-4 py-2 text-white border-r border-white/10 bg-[#0a0a0a] relative">
                experience.js
                <span className="absolute left-0 right-0 -bottom-px h-[2px] bg-emerald-400" />
              </span>
              <span className="px-4 py-2 text-white/30 border-r border-white/10">skills.js</span>
            </div>

            {/* Code body */}
            <div className="p-5 sm:p-8 font-mono overflow-x-auto">
              <Line n={line()} visible={visible} delay={0}>
                <Key>const</Key> experience <Punc>=</Punc> <Punc>{'{'}</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={40}>
                {'  '}role<Punc>:</Punc> <Str>{experience.role}</Str><Punc>,</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={80}>
                {'  '}company<Punc>:</Punc> <Str>{experience.company}</Str><Punc>,</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={120}>
                {'  '}location<Punc>:</Punc> <Str>{experience.location}</Str><Punc>,</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={160}>
                {'  '}duration<Punc>:</Punc> <Str>{experience.duration}</Str><Punc>,</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={200}>
                {'  '}achievements<Punc>:</Punc> <Punc>[</Punc>
              </Line>
              {experience.achievements.map((item, i) => (
                <Line key={i} n={line()} visible={visible} delay={240 + i * 60}>
                  {'    '}<Str>{item}</Str><Punc>,</Punc>
                </Line>
              ))}
              <Line n={line()} visible={visible} delay={240 + experience.achievements.length * 60}>
                {'  '}<Punc>],</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={300 + experience.achievements.length * 60}>
                {'  '}stack<Punc>:</Punc> <Punc>[</Punc>
                {experience.stack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <Str>{tech}</Str>
                    {i < experience.stack.length - 1 && <Punc>{', '}</Punc>}
                  </React.Fragment>
                ))}
                <Punc>]</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={340 + experience.achievements.length * 60}>
                <Punc>{'}'}</Punc>
              </Line>
              <Line n={line()} visible={visible} delay={380 + experience.achievements.length * 60}>
                <Comment>{'// currently shipping'}</Comment>
                <span className="inline-block w-[8px] h-[1em] bg-emerald-400 ml-1 align-middle animate-blink" />
              </Line>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;