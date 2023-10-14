/* eslint-disable react/no-unescaped-entities */
"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

function About() {

    return (
        <div className="h-96 p-12 lg:mx-52 md:mx-16">
            <h1 className="text-gray-200 text-3xl font-semibold mb-5">
                About Me
            </h1>
            <div>
                <div className="space-y-1">
                    <p className="text-gray-300">
                        Hi! I'm a Junior Software Developer based in México. I'm passionate about crafting robust and elegant web and mobile applications. My mission is to build scalable products and deliver high-performance user experiences.
                    </p>
                </div>
                <Separator className="my-4 opacity-70" />
                <div className="mt-6">
                    <div className="w-[300px] float-right mx-6">
                        <AspectRatio ratio={16 / 9}>
                            <Image
                                src="/images/aboutImage.jpg"
                                alt="Image"
                                width={384}
                                height={216}
                                className="rounded-md object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </AspectRatio>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
