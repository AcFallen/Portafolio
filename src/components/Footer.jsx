import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          {/* Añade más enlaces a redes sociales si lo deseas */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
