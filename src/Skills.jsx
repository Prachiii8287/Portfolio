
// import { useRef, useState } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Environment, Float, Html } from "@react-three/drei"
// import { Vector3 } from "three"

// // Tech icons data
// const techIcons = [
//   { name: "HTML5", position: [-6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
//   { name: "CSS3", position: [-3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
//   { name: "JavaScript", position: [-1.2, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
//   { name: "TypeScript", position: [1.2, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
//   { name: "React", position: [3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
//   { name: "Redux", position: [6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/redux.svg" },
//   { name: "Tailwind", position: [8.4, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
//   { name: "Node.js", position: [-6, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
//   { name: "Rails", position: [-3.6, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/rails.svg" },
//   { name: "GraphQL", position: [-1.2, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/graphql.svg" },
//   { name: "PHP", position: [1.2, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/php-1.svg" },
//   { name: "Git", position: [3.6, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
//   { name: "Figma", position: [6, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
//   { name: "Docker", position: [8.4, -1, 0], url: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
// ]

// function TechSphere({ position, name, url }) {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
//   const { size } = useThree()

//   const isMobile = size.width < 768
//   const iconScale = isMobile ? "250%" : "400%"
//   const distanceFactor = isMobile ? 1.5 : 1.17

//   useFrame(() => {
//     if (!meshRef.current) return
//     meshRef.current.rotation.y += 0.005
//     const targetScale = hovered ? 1.2 : 1
//     meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color={hovered ? "#333333" : "#222222"} metalness={0.5} roughness={0.2} />
//         <Html
//           transform
//           distanceFactor={distanceFactor}
//           position={[0, 0, 0]}
//           style={{
//             width: "300px",
//             height: "300px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={url || "/placeholder.svg"}
//             alt={name}
//             style={{
//               width: iconScale,
//               height: iconScale,
//               filter: "invert(1)",
//               objectFit: "contain",
//             }}
//           />
//         </Html>
//       </mesh>
//     </Float>
//   )
// }

// function TechScene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} />

//       {techIcons.map((icon, index) => (
//         <TechSphere key={index} position={icon.position} name={icon.name} url={icon.url} />
//       ))}

//       <Environment preset="city" />
//     </>
//   )
// }

// export default function Skills() {
//   return (
//     <div className="w-full h-screen bg-black flex flex-col items-center">
//       <h1 className="text-white text-5xl md:text-5xl font-bold mt-4 md:mt-8 mb-2 md:mb-1 z-10">Skills</h1>
//       <div className="w-full h-full">
//         <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//           <TechScene />
//         </Canvas>
//       </div>
//     </div>
//   )
// }

//2
// import { useRef, useState } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Environment, Float, Html } from "@react-three/drei"
// import { Vector3 } from "three"

// // Tech icons data
// const techIcons = [
//   { name: "HTML5", position: [-6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
//   { name: "CSS3", position: [-3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
//   { name: "JavaScript", position: [-1.2, 2, 0], url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "React", position: [1.2, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
//   { name: "Node.js", position: [3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
//   { name: "Express", position: [6, 2, 0], url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//   { name: "Bootstrap", position: [8.4, 2, 0], url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
//   { name: "Git", position: [-4.6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
//   { name: "GitHub", position: [-2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
//   { name: "C++", position: [0.2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/c.svg" },
//   { name: "MongoDB", position: [2.8, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
//   { name: "SQL", position: [5, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
//   { name: "Tailwind", position: [7.5, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" }
// ]

// function TechSphere({ position, name, url }) {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
//   const { size } = useThree()

//   const isMobile = size.width < 768
//   const iconScale = isMobile ? "250%" : "400%"
//   const distanceFactor = isMobile ? 1.5 : 1.17

//   useFrame(() => {
//     if (!meshRef.current) return
//     meshRef.current.rotation.y += 0.005
//     const targetScale = hovered ? 1.2 : 1
//     meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color={hovered ? "#333333" : "#222222"} metalness={0.5} roughness={0.2} />
//         <Html
//           transform
//           distanceFactor={distanceFactor}
//           position={[0, 0, 0]}
//           style={{
//             width: "300px",
//             height: "300px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={url || "/placeholder.svg"}
//             alt={name}
//             style={{
//               width: iconScale,
//               height: iconScale,
//               filter: name === "MongoDB" || name === "Bootstrap" ? "none" : "invert(1)",
//               objectFit: "contain",
//             }}
//           />
//         </Html>
//       </mesh>
//     </Float>
//   )
// }

// function TechScene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} />

//       {techIcons.map((icon, index) => (
//         <TechSphere key={index} position={icon.position} name={icon.name} url={icon.url} />
//       ))}

//       <Environment preset="city" />
//     </>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills">
//     <div id="skills" className="w-full h-screen bg-black flex flex-col items-center">
//       <h1 className="text-white text-5xl font-bold mt-2 md:mt-4 mb-0 z-10">Skills</h1>
//       <div className="w-full h-full">
//         <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//           <TechScene />
//         </Canvas>
//       </div>
//     </div>
//     </section>
//   )
// }
// import { useRef, useState } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Environment, Float, Html } from "@react-three/drei"
// import { Vector3 } from "three"

// // Tech icons data — matches current stack
// const techIcons = [
//   { name: "HTML5", position: [-6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
//   { name: "CSS3", position: [-3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
//   { name: "JavaScript", position: [-1.2, 2, 0], url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "TypeScript", position: [1.2, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
//   { name: "React", position: [3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
//   { name: "Tailwind", position: [6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
//   { name: "Git", position: [8.4, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
//   { name: "Python", position: [-6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
//   { name: "Django", position: [-3.6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/django.svg" },
//   { name: "FastAPI", position: [-1.2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
//   { name: "PostgreSQL", position: [1.2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
//   { name: "Redis", position: [3.6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
//   { name: "Celery", position: [6, -1.6, 0], url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/celery.svg" },
//   { name: "GCP", position: [8.4, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
// ]

// // Logos that should keep their real brand colors instead of the inverted white treatment
// const TRUE_COLOR_ICONS = ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Celery", "GCP"]

// function TechSphere({ position, name, url }) {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
//   const { size } = useThree()

//   const isMobile = size.width < 768
//   const iconScale = isMobile ? "250%" : "400%"
//   const distanceFactor = isMobile ? 1.5 : 1.17

//   useFrame(() => {
//     if (!meshRef.current) return
//     meshRef.current.rotation.y += 0.005
//     const targetScale = hovered ? 1.2 : 1
//     meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color={hovered ? "#333333" : "#222222"} metalness={0.5} roughness={0.2} />
//         <Html
//           transform
//           distanceFactor={distanceFactor}
//           position={[0, 0, 0]}
//           style={{
//             width: "300px",
//             height: "300px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={url || "/placeholder.svg"}
//             alt={name}
//             style={{
//               width: iconScale,
//               height: iconScale,
//               filter: TRUE_COLOR_ICONS.includes(name) ? "none" : "invert(1)",
//               objectFit: "contain",
//             }}
//           />
//         </Html>
//       </mesh>
//     </Float>
//   )
// }

// function TechScene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} />

//       {techIcons.map((icon, index) => (
//         <TechSphere key={index} position={icon.position} name={icon.name} url={icon.url} />
//       ))}

//       <Environment preset="city" />
//     </>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills">
//     <div id="skills" className="w-full h-screen bg-black flex flex-col items-center">
//       <h1 className="text-white text-5xl font-bold mt-2 md:mt-4 mb-0 z-10">Skills</h1>
//       <div className="w-full h-full">
//         <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//           <TechScene />
//         </Canvas>
//       </div>
//     </div>
//     </section>
//   )
// }
// import { useRef, useState } from "react"
// import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Environment, Float, Html } from "@react-three/drei"
// import { Vector3 } from "three"

// // Tech icons data — matches current stack
// const techIcons = [
//   { name: "HTML5", position: [-6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
//   { name: "CSS3", position: [-3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
//   { name: "JavaScript", position: [-1.2, 2, 0], url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//   { name: "TypeScript", position: [1.2, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
//   { name: "React", position: [3.6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
//   { name: "Tailwind", position: [6, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
//   { name: "Git", position: [8.4, 2, 0], url: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
//   { name: "Python", position: [-6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
//   { name: "Django", position: [-3.6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/django.svg" },
//   { name: "FastAPI", position: [-1.2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg" },
//   { name: "PostgreSQL", position: [1.2, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
//   { name: "Redis", position: [3.6, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
//   { name: "Celery", position: [6, -1.6, 0], url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/celery.svg" },
//   { name: "GCP", position: [8.4, -1.6, 0], url: "https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg" },
// ]

// // Logos that should keep their real brand colors instead of the inverted white treatment
// const TRUE_COLOR_ICONS = ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Celery", "GCP"]

// function TechSphere({ position, name, url }) {
//   const meshRef = useRef()
//   const [hovered, setHovered] = useState(false)
//   const { size } = useThree()

//   const isMobile = size.width < 768
//   const iconScale = isMobile ? "250%" : "400%"
//   const distanceFactor = isMobile ? 1.5 : 1.17

//   useFrame(() => {
//     if (!meshRef.current) return
//     meshRef.current.rotation.y += 0.005
//     const targetScale = hovered ? 1.2 : 1
//     meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
//   })

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//       <mesh
//         ref={meshRef}
//         position={position}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial color={hovered ? "#333333" : "#222222"} metalness={0.5} roughness={0.2} />
//         <Html
//           transform
//           distanceFactor={distanceFactor}
//           position={[0, 0, 0]}
//           style={{ pointerEvents: "none" }}
//         >
//           <div
//             style={{
//               width: "300px",
//               height: "300px",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               position: "relative",
//             }}
//           >
//             {/* Name tooltip — only visible on hover */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-52px",
//                 padding: "8px 20px",
//                 borderRadius: "999px",
//                 background: "rgba(0, 0, 0, 0.85)",
//                 border: "1px solid rgba(255, 255, 255, 0.25)",
//                 color: "white",
//                 fontFamily: "monospace",
//                 fontSize: "34px",
//                 whiteSpace: "nowrap",
//                 opacity: hovered ? 1 : 0,
//                 transform: hovered ? "translateY(0)" : "translateY(10px)",
//                 transition: "opacity 0.2s ease, transform 0.2s ease",
//               }}
//             >
//               {name}
//             </div>

//             <img
//               src={url || "/placeholder.svg"}
//               alt={name}
//               style={{
//                 width: iconScale,
//                 height: iconScale,
//                 filter: TRUE_COLOR_ICONS.includes(name) ? "none" : "invert(1)",
//                 objectFit: "contain",
//               }}
//             />
//           </div>
//         </Html>
//       </mesh>
//     </Float>
//   )
// }

// function TechScene() {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
//       <pointLight position={[-10, -10, -10]} intensity={0.5} />

//       {techIcons.map((icon, index) => (
//         <TechSphere key={index} position={icon.position} name={icon.name} url={icon.url} />
//       ))}

//       <Environment preset="city" />
//     </>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills">
//     <div id="skills" className="w-full h-screen bg-black flex flex-col items-center">
//       <h1 className="text-white text-5xl font-bold mt-2 md:mt-4 mb-0 z-10">Skills</h1>
//       <p className="text-white/40 text-sm font-mono mb-2 z-10">hover a sphere to see what it is</p>
//       <div className="w-full h-full">
//         <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//           <TechScene />
//         </Canvas>
//       </div>
//     </div>
//     </section>
//   )
// }
import { useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, Float, Html } from "@react-three/drei"
import { Vector3 } from "three"

// Tech icons — using Simple Icons CDN (single reliable source, real brand colors baked into the URL)
const techIcons = [
  { name: "HTML5", position: [-6, 2, 0], url: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", position: [-3.6, 2, 0], url: "https://cdn.simpleicons.org/css3/1572B6" },
  { name: "JavaScript", position: [-1.2, 2, 0], url: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", position: [1.2, 2, 0], url: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", position: [3.6, 2, 0], url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS", position: [6, 2, 0], url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Git", position: [8.4, 2, 0], url: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Python", position: [-6, -1.6, 0], url: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Django", position: [-3.6, -1.6, 0], url: "https://cdn.simpleicons.org/django/44B78B" },
  { name: "FastAPI", position: [-1.2, -1.6, 0], url: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "PostgreSQL", position: [1.2, -1.6, 0], url: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Redis", position: [3.6, -1.6, 0], url: "https://cdn.simpleicons.org/redis/DC382D" },
  { name: "Celery", position: [6, -1.6, 0], url: "https://cdn.simpleicons.org/celery/A9CC54" },
  { name: "Google Cloud", position: [8.4, -1.6, 0], url: "https://cdn.simpleicons.org/googlecloud/4285F4" },
]

function TechSphere({ position, name, url }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const { size } = useThree()

  const isMobile = size.width < 768
  const iconScale = isMobile ? "250%" : "400%"
  const distanceFactor = isMobile ? 1.5 : 1.17

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.005
    const targetScale = hovered ? 1.2 : 1
    meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1)
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={hovered ? "#333333" : "#222222"} metalness={0.5} roughness={0.2} />

        {/* Icon — scales with the 3D scene so it sits on the sphere */}
        <Html transform distanceFactor={distanceFactor} position={[0, 0, 0]} style={{ pointerEvents: "none" }}>
          <div
            style={{
              width: "300px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={url || "/placeholder.svg"}
              alt={name}
              style={{ width: iconScale, height: iconScale, objectFit: "contain" }}
            />
          </div>
        </Html>

        {/* Name tooltip — screen-space, NOT scaled by distance, so text stays readable at any zoom */}
        {hovered && (
          <Html position={[0, 1.5, 0]} center occlude={false} style={{ pointerEvents: "none" }}>
            <div
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(0, 0, 0, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                fontFamily: "monospace",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
                transform: "translateY(-100%)",
              }}
            >
              {name}
            </div>
          </Html>
        )}
      </mesh>
    </Float>
  )
}

function TechScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {techIcons.map((icon, index) => (
        <TechSphere key={index} position={icon.position} name={icon.name} url={icon.url} />
      ))}

      <Environment preset="city" />
    </>
  )
}

export default function Skills() {
  return (
    <section id="skills">
    <div id="skills" className="w-full h-screen bg-black flex flex-col items-center">
      <h1 className="text-white text-5xl font-bold mt-2 md:mt-4 mb-0 z-10">Skills</h1>
      <p className="text-white/40 text-sm font-mono mb-2 z-10">hover a sphere to see what it is</p>
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <TechScene />
        </Canvas>
      </div>
    </div>
    </section>
  )
}