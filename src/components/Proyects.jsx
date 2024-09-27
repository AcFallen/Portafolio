import React from 'react'

// Array de proyectos para mapear
const proyectos = [
  {
    id: 1,
    nombre: 'Proyecto Uno',
    descripcion: 'Descripción breve del proyecto uno.',
    imagen: 'proyecto1.jpg',
    demo: '#',
    repositorio: '#',
  },
  {
    id: 2,
    nombre: 'Proyecto Dos',
    descripcion: 'Descripción breve del proyecto dos.',
    imagen: 'proyecto2.jpg',
    demo: '#',
    repositorio: '#',
  },
  // Añade más proyectos según necesites
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Mis Proyectos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map(proyecto => (
            <div key={proyecto.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{proyecto.nombre}</h4>
                <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
                <div className="flex justify-between">
                  <a href={proyecto.demo} className="text-blue-500 hover:underline">Ver Demo</a>
                  <a href={proyecto.repositorio} className="text-blue-500 hover:underline">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
