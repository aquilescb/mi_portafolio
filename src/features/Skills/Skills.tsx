import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import SkillBadge from "../../components/SkillBadge";

const skillGroups = [
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Databases", items: skills.databases },
  { title: "Soft", items: skills.soft },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background py-20 text-text">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Habilidades
        </h2>

        <motion.p
          className="text-center text-textMuted max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Estas son las tecnologías que utilizo para construir productos funcionales, eficientes y visualmente atractivos.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-card p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-primary font-semibold text-xl mb-4 uppercase tracking-wide text-center">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3 text-sm justify-center">
                {group.items.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
