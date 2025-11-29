'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Menu, Truck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navigation } from "@/constants";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                            <Truck className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">BT Logistics</span>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                                        <Truck className="h-4 w-4 text-primary-foreground" />
                                    </div>
                                    BT Logistics
                                </SheetTitle>
                            </SheetHeader>
                            <Separator className="my-4" />
                            <div className="flex flex-col gap-2">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href}
                                        className="rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                                        onClick={() => setOpen(false)}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <Separator className="my-4" />
                            <div className="flex flex-col gap-2">
                                <Button variant="ghost" className="w-full justify-start">
                                    Sign In
                                </Button>
                                <Button className="w-full">Get Quote</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <Button variant="ghost">Sign In</Button>
                    <Button>Get Quote</Button>
                </div>
            </nav>
        </header>
    );
}

export default Header;