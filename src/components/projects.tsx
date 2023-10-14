"use client";

//utils
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


function projects() {
    return (
        <div className="mt-28 p-12 lg:mx-52 md:mx-16">
            <h1 className="text-gray-200 text-3xl font-semibold mb-5">
                Projects
            </h1>
            <div>
                {/* Mostrar esta tarjeta en pantallas más pequeñas (menos que lg) */}
                <div className="flex flex-row">
                    <div className="hidden sm:block px-10">
                        <Card className="bg-black">
                            <CardHeader>
                                <CardTitle className="text-white">Medi Lock</CardTitle>
                                <CardDescription className="text-gray-400">Medication Delivery Platform</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/images/medilockPhone.png"
                                    alt="Image"
                                    width={600}
                                    height={600}
                                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <div className="p-3">
                                    <Badge variant="secondary">REACT</Badge>
                                </div>
                                <Link href="https://midlock-ferretec.vercel.app">
                                    <Button variant="secondary">Go to page</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="hidden sm:block">
                        <Card className="bg-black">
                            <CardHeader>
                                <CardTitle className="text-white">Taglify</CardTitle>
                                <CardDescription className="text-gray-400">Medical Record Plataform</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Image
                                    src="/images/medilockPhone.png"
                                    alt="Image"
                                    width={600}
                                    height={600}
                                    className="object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </CardContent>
                            <CardFooter className="flex flex-col">
                                <div className="p-3">
                                    <Badge variant="secondary">WEB3.0</Badge>
                                </div>
                                <Link href="https://taglify.vercel.app">
                                    <Button variant="secondary">Go to page</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                {/* Mostrar esto en pantallas más grandes (lg y más grandes) */}
                <div className=" lg:hidden">
                    <h3 className="text-gray-200 text-xl font-semibold mt-5">
                        Medi Lock
                    </h3>
                    <div>
                        <p className="text-gray-300 py-4">Medication Delivery Platform</p>
                    </div>
                    <Link href="https://midlock-ferretec.vercel.app">
                        <Button variant="secondary">Go to page</Button>
                    </Link>
                    <Separator className="my-4 opacity-70" />
                    <h3 className="text-gray-200 text-xl font-semibold mt-5">
                        Taglify
                    </h3>
                    <div>
                        <p className="text-gray-300 py-4">Medical Record Plataform web3.0</p>
                    </div>
                    <Link href="https://taglify.vercel.app">
                        <Button variant="secondary">Go to page</Button>
                    </Link>
                    <Separator className="my-4 opacity-70" />
                </div>
            </div>
        </div>
    );
}

export default projects;



