"use client";
//utils
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Frontbadges = ["HTML/CSS/JS", "React", "NextJS", "Tailwindcss"];
const Backbadges = ["Typescript", "C#", "MySQL", "ORM"];
function skills() {
  return (
    <div className="mt-64 p-12 lg:mx-52 md:mx-16">
      <h1 className="text-gray-200 text-3xl font-semibold mb-5">Skills</h1>
      <p className="text-gray-300">
        In my work, I primarily focus on the following technologies:
      </p>
      <h3 className="text-gray-200 text-xl font-semibold mt-5">Front-end</h3>
      <div className="m-6">
        {Frontbadges.map((badge, index) => (
          <Badge key={index} variant="secondary" className="m-2 text-sm">
            {badge}
          </Badge>
        ))}
      </div>
      <Separator className="my-4 opacity-70" />
      <h3 className="text-gray-200 text-xl font-semibold mt-5">Back-end</h3>
      <div className="m-6">
        {Backbadges.map((badge, index) => (
          <Badge key={index} variant="secondary" className="m-2 text-sm">
            {badge}
          </Badge>
        ))}
      </div>
      <Separator className="my-4 opacity-70" />
      <div className="flex justify-center items-center m-6">
        <Badge variant="secondary" className="m-2 text-sm">
          CISCO CCNAv7
        </Badge>
      </div>
    </div>
  );
}

export default skills;
