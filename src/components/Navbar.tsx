import { motion } from "framer-motion";

const Navbar = () => {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

return (
    <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Branding */}
            <div
                onClick={() => scrollTo("hero")}
                className="text-xl font-bold text-white cursor-pointer hover:text-primary transition"
            >
            Aquiles.dev
            </div>
            <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                <li className="cursor-pointer hover:text-primary transition" onClick={() => scrollTo("about")}>Sobre mí</li>
                <li className="cursor-pointer hover:text-primary transition" onClick={() => scrollTo("experience")}>Experiencia</li>
                <li className="cursor-pointer hover:text-primary transition" onClick={() => scrollTo("skills")}>Habilidades</li>
                <li className="cursor-pointer hover:text-primary transition" onClick={() => scrollTo("projects")}>Proyectos</li>
                <li className="cursor-pointer hover:text-primary transition" onClick={() => scrollTo("contact")}>Contacto</li>
            </ul>
        </div>
    </motion.nav>
    );
};

export default Navbar;
