import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    const year = new Date().getFullYear();

return (
    <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-gray-300 py-6"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          © {year} Aquiles Cancinos. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/tuUsuario"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tuUsuario"
            target="_blank"
            className="hover:text-yellow-400 transition"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
