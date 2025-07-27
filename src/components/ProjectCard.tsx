import { Github, Youtube  } from "lucide-react";
import { getSkillIcon } from "../utils/getSkillIcon";
type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo: string;
  video?: string; 
};

export default function ProjectCard({ title, description, tech, image, repo, video }: Props) {
return (
    <div className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
        {/* Imagen de portada */}
        <img src={image} alt={title} className="w-full h-48 object-cover"/>
        {/* Contenido */}
        <div className="p-5 flex flex-col gap-3 flex-1">
            {/* Título + Link */}
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{title}</h3>
                 <div className="flex gap-2">
                    {video && (
                    <a
                        href={video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-red-600"
                    >
                        <Youtube size={24} />
                    </a>
                    )}
                    <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primaryHover"
                    >
                    <Github size={24} />
                    </a>
                </div>
            </div>
            {/* Descripción */}
            <p className="text-textMuted text-sm text-justify">{description}</p>
            {/* Tecnologías */}
            <div className="flex flex-wrap gap-2 mt-auto">
            {tech.map((t) => {
            const icon = getSkillIcon(t);
            return (
                <div key={t} className="flex items-center gap-2 bg-backgroundAlt text-sm px-3 py-1 rounded-full text-textMuted border border-gray-600 hover:border-primary">
                {icon && (
                    <img src={icon} alt={t} className="w-4 h-4" />
                )}{t}
                </div>);
            })}
            </div>
        </div>
    </div>
    );
}
