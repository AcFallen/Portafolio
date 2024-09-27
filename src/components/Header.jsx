import React from 'react'

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-800 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Tu Nombre</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:text-blue-400">Inicio</a></li>
            <li><a href="#about" className="hover:text-blue-400">Sobre Mí</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Proyectos</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Habilidades</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
