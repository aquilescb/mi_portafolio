import { motion } from "framer-motion";
type Props = {
  name: string;
  icon?: string;
};

export default function SkillBadge({ name, icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1f2937] text-sm text-text shadow-sm transition-colors duration-200 border border-transparent hover:border-primary"
    >
      {icon && (
        <img src={icon} alt={name} className="w-5 h-5" />
      )}
      <span>{name}</span>
    </motion.div>
  );
}
