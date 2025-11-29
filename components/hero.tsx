import React from 'react'
import { ArrowRight, Package, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
                    <div
                        className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-primary to-secondary"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, " +
                                "0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                        <Package className="mr-2 h-4 w-4 text-primary" />
                        Trusted by 10,000+ businesses worldwide
                    </Badge>

                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                        Delivering Excellence <span className="text-primary">Across the Globe</span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                        Streamline your supply chain with our cutting-edge logistics solutions. From freight forwarding to last-mile
                        delivery, we ensure your cargo reaches its destination safely and on time.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button size="lg" className="w-full sm:w-auto">
                            Start Shipping <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                            Learn More
                        </Button>
                    </div>

                    <Card className="mt-12 mx-auto max-w-xl">
                        <CardContent className="p-2">
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input placeholder="Enter tracking number..." className="pl-10 h-12 border-0 bg-transparent focus-visible:ring-0" />
                                </div>
                                <Button size="lg" className="h-12">
                                    Track Package
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Hero image */}
                <div className="mt-16 sm:mt-20">
                    <Card className="overflow-hidden shadow-2xl">
                        <div className="relative">
                            <Image src="/modern-logistics-warehouse-with-trucks-and-cargo-c.jpg"
                                alt="Logistics operations overview" width={600} height={900}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                    {[
                                        { label: "Countries", value: "150+" },
                                        { label: "Deliveries/Day", value: "50K+" },
                                        { label: "Warehouses", value: "200+" },
                                        { label: "Fleet Size", value: "5,000+" },

                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center sm:text-left">
                                            <div className="text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default Hero;