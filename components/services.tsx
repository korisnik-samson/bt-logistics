import React from 'react'
import { services } from "@/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
    return (
        <section id="services" className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Complete Logistics Solutions
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        From pickup to delivery, we handle every aspect of your supply chain with precision.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {services.map((service, index) => (
                        <Card key={service.title} className={`group overflow-hidden ${index === 0 ? "lg:col-span-2" : ""}`}>
                            <div className={`flex flex-col ${index === 0 ? "lg:flex-row" : ""}`}>
                                <div className={`relative ${index === 0 ? "lg:w-1/2" : "h-48"}`}>
                                    <img
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        className={`w-full object-cover ${index === 0 ? "h-64 lg:h-full" : "h-48"}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r" />
                                </div>
                                <div className={`${index === 0 ? "lg:w-1/2" : ""}`}>
                                    <CardHeader>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <service.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="mt-4">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base">{service.description}</CardDescription>
                                        <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                        </Button>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;