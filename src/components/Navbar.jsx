
// import React from 'react';
// import { useState } from "react"
// import { Menu, X } from "lucide-react"

// const Navbar = ({ activeSection, setActiveSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   const handleNavItemClick = (section) => {
//     setActiveSection(section)
//     setIsMenuOpen(false)
//   }

//   const navItems = ["About", "Skills", "Projects", "Achievements"]

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-white font-mono tracking-wider">{"{ PS }"}</span>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                   className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
//                     activeSection === item.toLowerCase() ? "border-b border-white" : ""
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-900 shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => handleNavItemClick(item.toLowerCase())}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                   activeSection === item.toLowerCase()
//                     ? "text-white bg-gray-800"
//                     : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar


///2
// import { useState } from "react"
// import { Menu, X } from "lucide-react"

// const Navbar = ({ activeSection, setActiveSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   const handleNavItemClick = (section) => {
//     setActiveSection(section)
//     setIsMenuOpen(false)

//     // Scroll to the section
//     const sectionElement = document.getElementById(section)
//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   //const navItems = ["About", "Skills", "Projects", "Achievements"]
//   const navItems = [
//     { display: "About", id: "about" },
//     { display: "Skills", id: "skills" },
//     { display: "Projects", id: "projects" },
//     { display: "Achievements", id: "achievements" }
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-white font-mono tracking-wider">{"{ PS }"}</span>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => handleNavItemClick(item.toLowerCase())}
//                   className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
//                     activeSection === item.toLowerCase() ? "border-b border-white" : ""
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => handleNavItemClick(item.toLowerCase())}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                   activeSection === item.toLowerCase() ? "text-white bg-gray-800" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

//3
// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = ({ activeSection, setActiveSection }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleNavItemClick = (section) => {
//     setActiveSection(section);
//     setIsMenuOpen(false);

//     // Scroll to the section with offset for fixed header
//     const sectionElement = document.getElementById(section);
//     if (sectionElement) {
//       const offset = 70; // Adjust this value based on your navbar height
//       const elementPosition = sectionElement.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   const navItems = [
//     { display: "About", id: "about" },
//     { display: "Skills", id: "skills" },
//     { display: "Projects", id: "projects" },
//     { display: "Achievements", id: "achievements" }
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <span className="text-2xl font-bold text-white font-mono tracking-wider">
//               {"{ PS }"}
//             </span>
//           </div>

//           {/* Desktop navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleNavItemClick(item.id)}
//                   className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
//                     activeSection === item.id ? "border-b border-white" : ""
//                   }`}
//                 >
//                   {item.display}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => handleNavItemClick(item.id)}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                   activeSection === item.id ? "text-white bg-gray-800" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 {item.display}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

////4
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   // Track active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['about', 'skills', 'projects', 'achievements'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navItems = [
//     { name: "About", id: "about" },
//     { name: "Skills", id: "skills" },
//     { name: "Projects", id: "projects" },
//     { name: "Achievements", id: "achievements" }
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <a 
//             href="#about" 
//             className="flex-shrink-0 text-2xl font-bold text-white font-mono tracking-wider hover:text-gray-300 transition-colors"
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//             }}
//           >
//             {"{ PS }"}
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document.getElementById(item.id)?.scrollIntoView({ 
//                       behavior: "smooth",
//                       block: "start"
//                     });
//                   }}
//                   className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
//                     activeSection === item.id ? "border-b-2 border-white" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   document.getElementById(item.id)?.scrollIntoView({ 
//                     behavior: "smooth",
//                     block: "start"
//                   });
//                   setIsMenuOpen(false);
//                 }}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                   activeSection === item.id ? "text-white bg-gray-800" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

////5
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   // Track active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['about', 'skills', 'projects', 'achievements'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             // Update URL hash without jumping
//             window.history.replaceState(null, null, `#${section}`);
//             break;
//           }
//         }
//       }
//     };

//     // Also check initial hash
//     const initialHash = window.location.hash.replace('#', '');
//     if (initialHash && sections.includes(initialHash)) {
//       setActiveSection(initialHash);
//     }

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const navItems = [
//     { name: "About", id: "about" },
//     { name: "Skills", id: "skills" },
//     { name: "Projects", id: "projects" },
//     { name: "Achievements", id: "achievements" }
//   ];

//   const handleNavClick = (id, e) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       setActiveSection(id);
//       setIsMenuOpen(false);
//       element.scrollIntoView({ 
//         behavior: "smooth",
//         block: "start"
//       });
//       // Update URL hash
//       window.history.replaceState(null, null, `#${id}`);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo that links to About section */}
//           <a 
//             href="#about" 
//             className="flex-shrink-0 text-2xl font-bold text-white font-mono tracking-wider hover:text-gray-300 transition-colors"
//             onClick={(e) => handleNavClick('about', e)}
//           >
//             {"{ PS }"}
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   onClick={(e) => handleNavClick(item.id, e)}
//                   className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
//                     activeSection === item.id ? "border-b-2 border-white" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-gray-300 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-black shadow-lg">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={(e) => handleNavClick(item.id, e)}
//                 className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
//                   activeSection === item.id ? "text-white bg-gray-800" : "text-white hover:bg-gray-700"
//                 }`}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

////6
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'achievements']; // ✅ Moved here

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            window.history.replaceState(null, null, `#${section}`);
            break;
          }
        }
      }
    };

    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && sections.includes(initialHash)) {
      setActiveSection(initialHash);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" }
  ];

  const handleNavClick = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      setIsMenuOpen(false);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      window.history.replaceState(null, null, `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#about"
            className="flex-shrink-0 text-2xl font-bold text-white font-mono tracking-wider hover:text-gray-300 transition-colors"
            onClick={(e) => handleNavClick('about', e)}
          >
            {"{ PS }"}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`text-white hover:text-gray-300 transition-colors duration-200 text-sm tracking-wide ${
                    activeSection === item.id ? "border-b-2 border-white" : ""
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id ? "text-white bg-gray-800" : "text-white hover:bg-gray-700"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
