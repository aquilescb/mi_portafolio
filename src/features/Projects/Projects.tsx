// src/features/Projects/Projects.tsx
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-backgroundAlt text-text">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Proyectos</h2>
        <p className="text-center text-textMuted max-w-xl mx-auto mb-12">
          Algunos de los proyectos en los que he trabajado recientemente.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-ce">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}