import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import bg from "../../assets/hero-bg.jpg";
import profile from "../../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center"
    >
      {/* Fondo con imagen */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl px-4"
      >
        {/* Foto de perfil */}
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-6 shadow-lg">
          <img src={profile} alt="Aquiles" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">Aquiles Cancinos</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Software Developer | Estudiante de Ingeniería Informática
        </p>

        <div className="flex justify-center gap-5 mb-6 text-white">
          <a href="https://github.com/" target="_blank" className="hover:text-primary transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-primary transition">
            <Linkedin size={24} />
          </a>
          <a href="mailto:tuemail@gmail.com" className="hover:text-primary transition">
            <Mail size={24} />
          </a>
        </div>

        <a
          href="/cv.pdf"
          download
          className="bg-primary hover:bg-primaryHover text-white font-semibold py-2 px-5 rounded-md transition"
        >
          Descargar CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
