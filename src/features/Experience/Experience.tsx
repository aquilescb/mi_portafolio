import { motion } from "framer-motion";
import { experience } from "../../data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-backgroundAlt text-text">
        
    <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">💼 Experiencia</h2>

        {/* Scroll horizontal en desktop */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 md:px-2"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {experience.map((exp, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, x: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false,amount: 0.5 }}
                className="w-[280px] md:w-[320px] bg-card rounded-lg p-5 border border-gray-700 snap-start shadow-sm flex-shrink-0"
            >
              <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
              <p className="text-primary font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-textMuted italic mb-4">{exp.period}</p>
              <p className="text-textMuted mb-4 text-justify">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
            </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
