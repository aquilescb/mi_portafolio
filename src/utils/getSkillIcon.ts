import { skills } from "../data/skills";

export function getSkillIcon(skillName: string): string | undefined {
  const allSkills = [
    ...skills.frontend,
    ...skills.backend,
    ...skills.databases,
    ...skills.tools,
  ];

  const match = allSkills.find((s) => s.name.toLowerCase() === skillName.toLowerCase());
  return match?.icon;
}
