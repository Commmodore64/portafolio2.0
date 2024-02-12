import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

function Projects() {
  // Array de proyectos
  const projectsData = [
    {
      name: "Medi Lock",
      description: "Medication Delivery Platform",
      image: "/images/medilockPhone.png",
      tags: ["REACT"],
      link: "https://midlock-ferretec.vercel.app",
    },
    {
      name: "Taglify",
      description: "Medical Record Plataform",
      image: "/images/taglifyPhone.png",
      tags: ["WEB3.0"],
      link: "https://taglify.vercel.app",
    },
    {
      name: "Umami Annany",
      description: "AI Chatbot for Restaurants",
      image: "/images/umamiPhone.png",
      tags: ["AI"],
      link: "https://taglify.vercel.app",
    },
    {
      name: "Analisis IKA",
      description: "Alghorithm for IKA Analysis",
      image: "/images/analisisPhone.png",
      tags: ["PYTHON"],
      link: "https://taglify.vercel.app",
    },
  ];

  return (
    <div className="mt-28 p-12 lg:mx-52 md:mx-16">
      <h1 className="text-gray-200 text-3xl font-semibold mb-5">Projects</h1>
      <div>
        {/* Mostrar tarjetas en pantallas más pequeñas (menos que lg) */}
        <div className="flex flex-row">
          {projectsData.map((project, index) => (
            <div key={index} className="hidden sm:block px-10">
              <Card className="bg-black">
                <CardHeader>
                  <CardTitle className="text-white">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={600}
                    height={600}
                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
                <CardFooter className="flex flex-col">
                  <div className="p-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <Button variant="secondary">Go to page</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        {/* Mostrar esto en pantallas más grandes (lg y más grandes) */}
        <div className="lg:hidden">
          {projectsData.map((project, index) => (
            <div key={index}>
              <h3 className="text-gray-200 text-xl font-semibold mt-5">
                {project.name}
              </h3>
              <div>
                <p className="text-gray-300 py-4">{project.description}</p>
              </div>
              <Link href={project.link}>
                <Button variant="secondary">Go to page</Button>
              </Link>
              <Separator className="my-4 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
