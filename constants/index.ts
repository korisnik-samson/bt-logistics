import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, Shield, Clock, BarChart3, Headphones, Zap, Plane, Ship, Truck, Warehouse, TrendingUp, Users, MapPin, Award } from "lucide-react"

export const features = [
    {
        name: "Global Network",
        description: "Access our extensive network spanning 150+ countries with seamless cross-border logistics solutions.",
        icon: Globe,
    },
    {
        name: "Secure Handling",
        description: "Advanced security protocols and real-time monitoring ensure your cargo is protected at every step.",
        icon: Shield,
    },
    {
        name: "On-Time Delivery",
        description: "Our 99.7% on-time delivery rate is backed by optimized routing and predictive logistics.",
        icon: Clock,
    },
    {
        name: "Real-Time Analytics",
        description: "Gain insights with comprehensive dashboards tracking shipment status, costs, and performance.",
        icon: BarChart3,
    },
    {
        name: "24/7 Support",
        description: "Our dedicated support team is available around the clock to assist with any shipping needs.",
        icon: Headphones,
    },
    {
        name: "Express Options",
        description: "Time-critical shipments? Choose from our range of expedited delivery services.",
        icon: Zap,
    },
]

export const footerLinks = {
    services: [
        { name: "Air Freight", href: "#" },
        { name: "Ocean Freight", href: "#" },
        { name: "Ground Transport", href: "#" },
        { name: "Warehousing", href: "#" },
        { name: "Last-Mile Delivery", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Sustainability", href: "#" },
    ],
    resources: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API", href: "#" },
        { name: "Help Center", href: "#" },
    ],
}

export const navigation = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Tracking", href: "#tracking" },
    { name: "Contact", href: "#contact" },
]

export const services = [
    {
        title: "Air Freight",
        description: "Fast and reliable air cargo services for time-sensitive shipments across the globe.",
        icon: Plane,
        image: "/cargo-airplane-loading-freight-at-airport.jpg",
    },
    {
        title: "Ocean Freight",
        description: "Cost-effective sea freight solutions for large volume shipments with full container options.",
        icon: Ship,
        image: "/container-ship-at-port-with-cranes.jpg",
    },
    {
        title: "Ground Transport",
        description: "Comprehensive road logistics including FTL, LTL, and last-mile delivery services.",
        icon: Truck,
        image: "/fleet-of-delivery-trucks-on-highway.jpg",
    },
    {
        title: "Warehousing",
        description: "Strategic warehouse locations with inventory management and fulfillment services.",
        icon: Warehouse,
        image: "/modern-warehouse-interior-with-shelves-and-forklif.jpg",
    },
]

export const stats = [
    {
        icon: TrendingUp,
        value: "99.7%",
        label: "On-Time Delivery",
        description: "Industry-leading delivery performance",
    },
    {
        icon: Users,
        value: "10,000+",
        label: "Happy Clients",
        description: "Businesses trust us daily",
    },
    {
        icon: MapPin,
        value: "150+",
        label: "Countries Served",
        description: "Global reach, local expertise",
    },
    {
        icon: Award,
        value: "25+",
        label: "Years Experience",
        description: "Decades of logistics excellence",
    },
]

export const testimonials = [
    {
        content:
            "BT Logistics transformed our supply chain operations. Their real-time tracking and proactive communication have reduced our logistics headaches by 80%.",
        author: "Sarah Chen",
        role: "VP of Operations",
        company: "TechFlow Inc.",
        avatar: "/professional-woman-portrait.png",
        initials: "SC",
    },
    {
        content:
            "We've tried multiple logistics providers, but none match BT Logistics reliability and customer service. They truly understand the needs of growing e-commerce businesses.",
        author: "Marcus Johnson",
        role: "CEO",
        company: "Urban Essentials",
        avatar: "/professional-man-portrait.png",
        initials: "MJ",
    },
    {
        content:
            "The global reach combined with local expertise makes BT Logistics our go-to partner for international shipping. Their customs handling is impeccable.",
        author: "Elena Rodriguez",
        role: "Supply Chain Director",
        company: "Global Exports Ltd.",
        avatar: "/professional-latina-woman-portrait.png",
        initials: "ER",
    },
]