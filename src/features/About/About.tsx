import { motion } from "framer-motion";
import perfil from "../../assets/foto-empr.jpg"; 

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
          {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={perfil}
            alt="Aquiles Cancinos"
            className="rounded-xl shadow-lg border-4 border-primary object-cover max-h-[400px] w-full"
          />
        </motion.div>
        {/* Contenido */}
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-center text-white">Sobre mí</h2>
            <p className="text-textMuted mb-6 leading-relaxed text-justify">
                Soy estudiante de <span className="text-primary font-medium ">Ingeniería Informática</span>, con una fuerte pasión por el desarrollo de software. Me encanta participar en todas las etapas del ciclo de vida de un proyecto, desde la idea inicial hasta la entrega final, buscando siempre soluciones que combinen funcionalidad, diseño y propósito.
          </p>

          <div className="space-y-3 text-center">
            <div>
              <span className="font-semibold text-text">🎯 Enfoque:</span>{" "}
              <span className="text-textMuted">Escalabilidad, eficiencia, experiencia de usuario</span>
            </div>
            <div>
              <span className="font-semibold text-text">🚀 Objetivo:</span>{" "}
              <span className="text-textMuted">Aprender y construir software con propósito</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
