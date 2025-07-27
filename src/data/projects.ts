import betasolveImage from '../assets/projects/betasolve.png';
import goImage from '../assets/projects/go.png';
import apibookImage from '../assets/projects/api_book.png';
import forohubImage from '../assets/projects/forohub.png';
import MonedaImage from '../assets/projects/conversormonedas.png';
import NovImage from '../assets/projects/novconsultoria.png'
export const projects = [
      {
    title: "GO Software",
    description: "Plataforma web interactiva y educativa para aprender y jugar GO contra un bot. Incluye guía reflexiva con IA, informes personalizados con OpenAI, ejercicios adaptativos, estadísticas de progreso, login seguro con JWT y arquitectura escalable usando NestJS y React.",
    tech: ["React","Vite","Tailwind", "Next.js", "TypeScript", "PostgreSQL", "Prisma","Docker"],
    image: goImage,
    repo: "https://github.com/aquilescb/GO"
  },
  {
    title: "BetaSolve",
    description: "Aplicación web interactiva y didáctica que resuelve problemas matemáticos utilizando métodos numéricos clásicos. Incluye herramientas para operaciones aritméticas, búsqueda de raíces y resolución de sistemas de ecuaciones, todo con visualizaciones gráficas, tablas de iteraciones y procedimientos paso a paso  .",
    tech: ["HTML5", "CSS3", "JavaScript", "Flask","Python"],
    image: betasolveImage,
    repo: "https://github.com/aquilescb/BetaSolve",
    video:"https://www.youtube.com/watch?v=ay6Fzo-aQsQ"
  },
    {
    title: "NOV Consultoria",
    description: "Desarrollo de un sistema integral de gestión para una consultora de abogados, diseñado para optimizar la administración de clientes, expedientes, tareas, actividades, audiencias y vencimientos legales. Todo el sistema está interconectado, permitiendo un acceso ágil a la información y una mejor organización para la gestión de casos jurídicos. Cuenta con autenticación por usuario (abogado) y manejo seguro de datos sensibles,",
    tech: ["Next.js", "PostgreSQL","Node.js","React.js","Tailwind","Docker","Git","TypeScript"],
    image: NovImage,
    repo: "https://github.com/tuusuario/libros-api"
  },
  {
    title: "API de libros",
    description: "Aplicación Java desarrollada con Spring Boot que permite buscar, importar y consultar libros desde la API pública de Gutendex. Integra persistencia con PostgreSQL y una arquitectura preparada para evolucionar hacia una API REST completa con autenticación, filtrado y dashboard personalizado.",
    tech: ["Java", "SpringBoot", "PostgreSQL","Lombok","Spring Data JPA"],
    image: apibookImage,
    repo: "https://github.com/aquilescb/api_book"
  },
  {
    title: "Foro Hub",
    description: "API REST construida con Java y Spring Boot como parte del Challenge Back-End del programa ONE - Oracle Next Education (Alura Latam). Simula el backend de un foro educativo donde los estudiantes pueden crear, visualizar, actualizar y eliminar tópicos, con autenticación JWT, validaciones y persistencia de datos.",
    tech: ["Java", "SpringBoot", "MySQL","SpringSecurity","JWT"],
    image: forohubImage,
    repo: "https://github.com/aquilescb/foro_hub",
  },
  {
  title: "Conversor de Monedas - Java API Client",
  description: "Proyecto Java desarrollado como parte del programa Oracle Next Education (ONE) - LATAM. Implementa un cliente para consumir una API de tasas de cambio en tiempo real, utilizando GSON para el parseo de datos. Incluye manejo de excepciones, registro de historial de conversiones y una interfaz simple de uso por consola. Requiere configuración de una API Key de Exchangerate y permite convertir entre múltiples monedas.",
  tech: ["Java"],
  image: MonedaImage,
  repo: "https://github.com/aquilescb/conversor_de_monedas",
  video: "https://www.youtube.com/watch?v=cebbVvV_q2Q,"
}
];
