//components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

//utils
import { GrGithub } from 'react-icons/gr';
import { ImTwitter } from 'react-icons/im';

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Skills", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
]
const Navbar: React.FC = () => {
  return (
    <div className="bg-black text-white p-5 lg:mx-52 md:mx-16">
      {/* Contenido del navbar */}
      <div className="flex items-center justify-between">
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm leading-6 transition-colors duration-300 hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4"> {/* Cambiamos grid a flex y ajustamos el espaciado */}
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/Commmodore64.png" />
              <AvatarFallback>C64</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex space-x-2"> {/* Crear una fila de botones */}
            <Link href="https://github.com/Commmodore64" className={buttonVariants({ variant: "ghost" })}>
              <GrGithub style={{ fontSize: '24px' }} />
            </Link>
            <Link href="https://twitter.com/SimpleCyberUser" className={buttonVariants({ variant: "ghost" })}>
              <ImTwitter style={{ fontSize: '24px' }} />
            </Link>
          </div>
        </div>
      </div>
      {/* Línea blanca en la parte inferior */}
      <div className="border-t border-white mt-2" />

    </div>

  );
};

export default Navbar;
