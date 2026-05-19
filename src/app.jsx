const projects = [
  {
    title: "GenAI Vehicle Diagnostic Assistant",
    category: "GenAI + Automotive Diagnostics",
    tech: ["Python", "FastAPI", "Streamlit", "ChromaDB", "Ollama", "RAG"],
    desc: "Built an end-to-end RAG-based diagnostic assistant that analyzes DTCs, symptoms, and sensor inputs using semantic retrieval and local LLM reasoning.",
  },
  {
    title: "AI-Based Lane Detection & ADAS Warning System",
    category: "ADAS + Computer Vision",
    tech: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Streamlit"],
    desc: "Developed an ADAS prototype for lane detection, object detection, lane departure alerts, and real-time safety visualization.",
  },
  {
    title: "GNSS Vehicle Positioning with KF/EKF",
    category: "Telematics + Sensor Fusion",
    tech: ["Python", "GNSS", "Kalman Filter", "EKF"],
    desc: "Improved vehicle positioning accuracy using Kalman and Extended Kalman Filters on GNSS-based vehicle tracking data.",
  },
  {
    title: "Real-Time Vehicle Tracking & Geofencing",
    category: "Connected Vehicle Systems",
    tech: ["Python", "FastAPI", "Streamlit", "Folium", "GPS"],
    desc: "Created a fleet tracking dashboard with circular geofencing, live GPS updates, and real-time entry/exit alerts.",
  },
  {
    title: "Vehicle Diagnostics Tool",
    category: "OBD-II + ECU Simulation",
    tech: ["C++", "TCP/IP", "JSON", "OBD-II"],
    desc: "Built a simulation-based diagnostic tool to emulate ECU communication, OBD-II PIDs, vehicle parameters, and fault responses.",
  },
  {
    title: "EV Battery Health Prediction Dashboard",
    category: "AI + Electric Vehicles",
    tech: ["Python", "Scikit-learn", "FastAPI", "Streamlit"],
    desc: "Developed an ML dashboard to predict EV battery State of Health, degradation risk, and maintenance recommendations.",
  },
];

const skills = {
  Automotive: ["OBD-II", "ECU Basics", "Vehicle Diagnostics", "ADAS", "Telematics", "GNSS", "Geofencing"],
  "AI / GenAI": ["Python", "PyTorch", "YOLOv8", "OpenCV", "RAG", "Ollama", "ChromaDB", "Scikit-learn"],
  Connectivity: ["REST APIs", "TCP/IP", "HTTP/JSON", "AT Commands", "3GPP Basics", "Cellular Modem Basics"],
  Tools: ["Linux", "Git", "Streamlit", "FastAPI", "React.js", "MATLAB", "CST Studio Suite"],
};

function App() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h2 className="text-lg font-extrabold text-blue-400">Charan MS</h2>
          <div className="hidden gap-7 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative max-w-5xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-blue-400">
            Automotive Connectivity • ADAS • GenAI
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Charan Mettur <span className="text-blue-400">Selvaraj</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Master’s student in Information and Communication Systems at TU Chemnitz,
            focused on connected vehicles, vehicle diagnostics, telematics,
            ADAS prototypes, GNSS systems, and AI-driven automotive applications.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {/* <a href="/Charan_MasterResume.pdf" target="_blank" className="rounded-xl bg-blue-500 px-7 py-3 font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600">
              Download CV
            </a> */}
            <a href="https://github.com/charanmswork-projects" target="_blank" className="rounded-xl border border-white/20 px-7 py-3 font-bold hover:border-blue-400 hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/charan223" target="_blank" className="rounded-xl border border-white/20 px-7 py-3 font-bold hover:border-blue-400 hover:text-blue-400">
              LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-black text-blue-400">2+</h3>
              <p className="mt-1 text-sm text-gray-300">Years Telematics Experience</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-black text-blue-400">8+</h3>
              <p className="mt-1 text-sm text-gray-300">Automotive / AI Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-black text-blue-400">100+</h3>
              <p className="mt-1 text-sm text-gray-300">Vehicles Supported in Work</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">About</p>
        <h2 className="mt-3 text-4xl font-black">Building software for intelligent mobility systems</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="leading-8 text-gray-300">
              I combine automotive domain knowledge with software development, AI, and communication systems.
              My interests include vehicle diagnostics, ADAS, telematics platforms, GNSS-based tracking,
              connected vehicle data pipelines, and GenAI-based diagnostic assistants.
            </p>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-blue-400/10 p-8">
            <h3 className="text-xl font-bold text-blue-300">Currently Seeking</h3>
            <p className="mt-4 leading-8 text-gray-300">
              Internship or Working Student roles in Automotive Connectivity, ADAS, Telematics,
              Vehicle Diagnostics, Software Testing, or AI-driven mobility applications.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">Skills</p>
        <h2 className="mt-3 text-4xl font-black">Technical Focus Areas</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-xl font-bold text-blue-300">{group}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span key={item} className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">Experience</p>
        <h2 className="mt-3 text-4xl font-black">Professional Experience</h2>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-black">Telematics Systems Engineer</h3>
              <p className="mt-2 text-blue-300">ZED Digital, India</p>
            </div>
            <p className="rounded-full bg-blue-400/10 px-4 py-2 text-sm text-blue-200">2022 – 2024</p>
          </div>

          <ul className="mt-6 space-y-3 text-gray-300">
            <li>• Worked on IoT-based truck tracking and fleet monitoring solutions using GNSS and OBD-II data.</li>
            <li>• Supported real-time tracking, geofencing alerts, REST API workflows, and telemetry validation.</li>
            <li>• Assisted dashboard development to improve fleet visibility and reduce manual monitoring effort.</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">Projects</p>
        <h2 className="mt-3 text-4xl font-black">Selected Technical Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-blue-400/50 hover:bg-white/10">
              <p className="text-sm font-bold text-blue-300">{project.category}</p>
              <h3 className="mt-3 text-xl font-black">{project.title}</h3>
              <p className="mt-4 leading-7 text-gray-300">{project.desc}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-blue-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">Certifications</p>
        <h2 className="mt-3 text-4xl font-black">Certifications & Learning</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            "PCEP – Certified Entry-Level Python Programmer",
            "Software Defined Vehicles – Coursera",
            "Prompt Engineering with Vertex AI – Google Cloud",
          ].map((cert) => (
            <div key={cert} className="rounded-2xl border border-white/10 bg-white/5 p-6 font-semibold text-gray-200">
              {cert}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-10">
          <h2 className="text-4xl font-black">Let’s Connect</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">
            Open to Internship and Working Student opportunities in automotive software,
            connected vehicles, ADAS, telematics, diagnostics, and AI-driven mobility.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:charanms.work@gmail.com" className="rounded-xl bg-blue-500 px-8 py-3 font-bold hover:bg-blue-600">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/charan223" target="_blank" className="rounded-xl border border-white/20 px-8 py-3 font-bold hover:border-blue-400 hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © 2026 Charan Mettur Selvaraj.
      </footer>
    </main>
  );
}

export default App;