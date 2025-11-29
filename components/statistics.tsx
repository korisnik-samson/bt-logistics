import React from 'react'
import { stats } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

const Statistics = () => {
    return (
        <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">Trusted by Industry Leaders</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        Our numbers speak for themselves. Join thousands of businesses that rely on BT Logistics.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.label} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                            <CardContent className="p-6 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/10">
                                    <stat.icon className="h-7 w-7" />
                                </div>
                                <div className="mt-4 text-4xl font-bold">{stat.value}</div>
                                <div className="mt-1 text-lg font-medium">{stat.label}</div>
                                <div className="mt-1 text-sm text-primary-foreground/70">{stat.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Statistics;