// src/components/Header.jsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importar iconos de React Icons
import { motion, AnimatePresence, useScroll } from "framer-motion"; // Importar Framer Motion

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar el menú al redimensionar la ventana a escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed w-full bg-gray-800 text-white shadow-md z-50">
      <motion.div
        className="fixed top-0 left-0 h-2 w-full bg-teal-500 origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Fallen Dev</h1>

        {/* Navegación Horizontal (Visible en pantallas medianas y superiores) */}
        <nav>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#hero" className="hover:text-teal-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-200">
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-teal-200">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-teal-200">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-200">
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        {/* Botón de Menú Burger (Visible en móviles) */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="focus:outline-none"
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }} // Rotación suave entre los iconos
            transition={{ duration: 0.3 }} // Duración de la animación
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Menú Desplegable (Visible en móviles) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-gray-800 md:hidden z-10"
            initial={{ opacity: 0, y: "-100%" }} // Menú inicialmente fuera de la pantalla (arriba)
            animate={{ opacity: 1, y: 0 }} // Animación hacia abajo hasta su posición original
            exit={{ opacity: 0, y: "-100%" }} // Cierre del menú deslizándose hacia arriba
            transition={{ duration: 0.5 }} // Duración de la animación
          >
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="#hero"
                  className="hover:text-teal-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-teal-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-teal-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-teal-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-200 transition-colors"
                  onClick={toggleMenu}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
