import React from 'react'
import { testimonials } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
    return (
        <section className="py-20 sm:py-28 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                        What Our Clients Say
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.author}>
                            <CardContent className="p-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <blockquote className="mt-4 text-foreground leading-relaxed">"{testimonial.content}"</blockquote>
                                <div className="mt-6 flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;