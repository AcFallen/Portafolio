import tuFoto from "../assets/images/perfil.jpg"; // Asegúrate de tener tu foto en esta ruta
import useIsMobile from "../hooks/IsMobile";

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="flex flex-col-reverse justify-center md:flex-row items-center md:justify-between min-h-dvh bg-gradient-to-b from-slate-800 to-teal-600 text-white px-6 md:px-12"
    >
      {/* Texto de Presentación */}
      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hola, soy{" "}
          <span className="text-teal-200">
            {isMobile ? <br /> : ""}
            [Roberto Carlos]
          </span>
        </h1>
        <p className="text-lg mb-6">
          Desarrollador Web Full Stack apasionado por crear experiencias
          digitales únicas y funcionales. Especializado en React, Tailwind CSS y
          Node.js.
        </p>
        <a
          href="#projects"
          className="inline-block bg-teal-200 text-teal-800 px-6 py-3 rounded-full font-semibold hover:bg-teal-300 transition-colors"
        >
          Ver Proyectos
        </a>
      </div>

      {/* Imagen Personal */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={tuFoto}
          alt="Foto de [Tu Nombre]"
          className="w-40 h-40 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
