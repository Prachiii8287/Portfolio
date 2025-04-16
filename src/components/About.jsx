
export default function About() {
    return (
      <section id="about" className="w-full bg-black text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Video/Illustration on the Left */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-full overflow-hidden shadow-lg">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/female-web-developer.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
  
            {/* Text Content on the Right */}
            <div className="w-full md:w-1/2 space-y-6 mb-22">
              <h2 className="text-5xl md:text-6xl font-bold">About Me</h2>
              <p className="text-gray-300 mr-10">
                Hi! I'm a passionate software developer with a knack for turning ideas into functional, user-focused digital products. 
                Whether it's building full-stack applications or diving into complex algorithms, I love crafting tech that makes a difference.
              </p>
              <p className="text-gray-300 mr-10">
              Driven by curiosity and a desire to solve real-world problems, I constantly seek opportunities to create technology that combines innovation, sustainability, and scalability. I am passionate about building solutions that go beyond the code and are meaningful, impactful, and centered around the user experience.
              </p>
              <p className="text-gray-300 mr-10">
              Let’s connect and build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
