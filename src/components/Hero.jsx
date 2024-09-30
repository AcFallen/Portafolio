import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import tuFoto from "../assets/images/perfil.jpg"; // Asegúrate de tener tu foto en esta ruta
import useIsMobile from "../hooks/IsMobile";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  { icon: <FaGithub className="text-black text-3xl" />, nombre: "GitHub" },
  {
    icon: <FaLinkedin className="text-teal-500 text-3xl" />,
    nombre: "LinkedIn",
  },
  // Añade más habilidades según necesites
];

const Hero = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center md:flex-row items-center md:justify-between bg-gradient-to-b from-slate-800 to-teal-600 text-white px-6 md:px-12 h-svh"
    >
      {/* Texto de Presentación */}
      <motion.div
        ref={ref}
        className="md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hola, soy{" "}
          <span className="text-teal-200">
            {isMobile ? <br /> : ""}
            [Roberto]
          </span>
        </h1>
        <p className="text-lg mb-6">
          Desarrollador Web Full Stack apasionado por crear experiencias
          digitales únicas y funcionales. Especializado en React, Tailwind CSS y
          Node.js.
        </p>
        <div className="flex flex-col items-start md:items-center md:flex-row gap-2 md:gap-4  mb-6">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          <a
            href="#projects"
            className="inline-block bg-teal-200 text-teal-800 px-6 py-3 rounded-full font-semibold hover:bg-teal-300 transition-colors"
          >
            Ver Proyectos
          </a>
          <div className="flex gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                {skill.icon}
                <span className="ml-2">{skill.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Imagen Personal */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-6 md:mb-0"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={tuFoto}
          alt="Foto de [Tu Nombre]"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
