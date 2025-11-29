import React from 'react'
import Link from "next/link";
import { Mail, MapPin, Phone, Truck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    {/* Brand column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                <Truck className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold text-foreground">BT Logistics</span>
                        </Link>
                        <p className="text-sm leading-6 text-muted-foreground max-w-xs">
                            Delivering excellence across the globe with innovative logistics solutions for businesses of all sizes.
                        </p>

                        <div className="space-y-3">
                            <p className="text-sm font-medium text-foreground">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <Input placeholder="Enter your email" className="max-w-[220px]" />
                                <Button>Subscribe</Button>
                            </div>
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>contact@btlogisitcs.rs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+381 60 123 4567</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>123 Logistics Way, Chicago, IL</span>
                            </div>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-foreground">Services</h3>
                                <ul className="mt-6 space-y-4">
                                    {footerLinks.services.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-foreground">Company</h3>
                                <ul className="mt-6 space-y-4">
                                    {footerLinks.company.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-foreground">Resources</h3>
                                <ul className="mt-6 space-y-4">
                                    {footerLinks.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold text-foreground">Legal</h3>
                                <ul className="mt-6 space-y-4">
                                    <li>
                                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="mt-16 mb-8" />

                <p className="text-xs text-muted-foreground text-center">
                    &copy; {new Date().getFullYear()} BT Logistics. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;