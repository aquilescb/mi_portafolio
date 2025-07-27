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
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Vite", icon: "/icons/vite.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Java", icon: "/icons/java.svg" },
    { name: "SpringBoot", icon: "/icons/springboot.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Express.js", icon: "/icons/expressjs.svg" },
    { name: "Flask", icon: "/icons/flask.svg" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "SQL Server", icon: "/icons/sqlserver.svg" },
  ],
  tools: [
    { name: "JWT",icon: "/icons/jwt.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Spring Data JPA", icon: "/icons/springboot.svg" },
    {name:"Spring Security", icon: "/icons/springboot.svg" },
  ],
};
