import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/constants";


const Features = () => {
    return (
        <section id="about" className="py-20 sm:py-28 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                        Why Choose Us
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        Logistics Solutions Built for Modern Business
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Experience the difference with our comprehensive suite of shipping and fulfillment services.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-5xl">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <Card key={feature.name} className="group transition-all hover:border-primary/50 hover:shadow-lg">
                                <CardHeader>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary
                                        group-hover:text-primary-foreground transition-colors">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="mt-4">{feature.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;