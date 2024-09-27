import React from 'react'
// import tuFoto from '../assets/images/tu-foto.jpg' // Asegúrate de tener tu foto en esta ruta

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hola, soy [Tu Nombre]</h2>
        <p className="text-lg mb-6">Desarrollador Web Full Stack apasionado por crear experiencias digitales únicas y funcionales.</p>
        <a href="#projects" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Ver Proyectos</a>
      </div>
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        {/* <img src={tuFoto} alt="Foto de [Tu Nombre]" className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg object-cover" /> */}
      </div>
    </section>
  )
}

export default Hero
