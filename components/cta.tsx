import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

const CTA = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Card className="relative isolate overflow-hidden shadow-xl">
                    {/* Background decoration */}
                    <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl opacity-20">
                        <div
                            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary to-secondary"
                            style={{
                                clipPath:
                                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, " +
                                    "50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                            }}
                        />
                    </div>

                    <CardContent className="px-6 py-16 sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                                Ready to Optimize Your Logistics?
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                Get started with BT Logistics today and experience seamless shipping solutions tailored to your business
                                needs.
                            </p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                                <Button size="lg">
                                    Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    <Phone className="mr-2 h-4 w-4" /> Contact Sales
                                </Button>
                            </div>
                        </div>

                        <div className="relative mt-16 h-80 lg:mt-0 lg:flex-shrink-0">
                            <Image src="/logistics-team-meeting.png" alt="Team collaboration" width={576} height={432}
                                className="absolute left-0 top-0 w-[28rem] max-w-none rounded-2xl object-cover shadow-xl ring-1 ring-border" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default CTA;