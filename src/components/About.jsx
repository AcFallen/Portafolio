import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Sobre Mí</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img src="tu-foto.jpg" alt="Foto de [Tu Nombre]" className="w-48 h-48 rounded-full mx-auto" />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="text-gray-700 mb-4">
              ¡Hola! Soy [Tu Nombre], un desarrollador web con experiencia en crear aplicaciones dinámicas y responsivas. Me apasiona la tecnología y siempre estoy buscando aprender nuevas herramientas y mejorar mis habilidades.
            </p>
            <p className="text-gray-700">
              Actualmente, me especializo en tecnologías como React, Tailwind CSS, y Node.js. En mi tiempo libre, disfruto contribuyendo a proyectos de código abierto y explorando nuevas tendencias en el desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
