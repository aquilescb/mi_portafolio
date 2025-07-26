// src/data/skills.ts
export type SkillItem = {
  name: string;
  icon?: string;
};

export const skills: Record<string, SkillItem[]>  = {
  frontend: [
    { name: "HTML5", icon: "icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Dart", icon: "/icons/dart.svg" },
    { name: "Python", icon: "/icons/python.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "SQL", icon: "/icons/mysql.svg" },
  ],
  soft: [
    { name: "Trabajo en equipo" },
    { name: "Comunicación" },
    { name: "Aprendizaje continuo" },
    { name: "Resolución de problemas" },
  ],
};
