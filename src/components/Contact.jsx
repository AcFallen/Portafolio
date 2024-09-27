import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes manejar el envío del formulario, por ejemplo, usando EmailJS o una API backend
    console.log(formData)
    // Resetear el formulario
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Contacto</h3>
        <div className="flex flex-col md:flex-row justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu mensaje"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
