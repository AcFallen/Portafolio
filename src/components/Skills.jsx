import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'

const habilidades = [
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, nombre: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, nombre: 'CSS3' },
  { icon: <FaJs className="text-yellow-500 text-5xl" />, nombre: 'JavaScript' },
  { icon: <FaReact className="text-blue-400 text-5xl" />, nombre: 'React' },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, nombre: 'Node.js' },
  // Añade más habilidades según necesites
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Habilidades</h3>
        <div className="flex flex-wrap justify-center">
          {habilidades.map((habilidad, index) => (
            <div key={index} className="m-4 flex flex-col items-center">
              {habilidad.icon}
              <span className="mt-2">{habilidad.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
