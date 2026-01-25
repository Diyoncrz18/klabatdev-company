'use client'

import { motion } from "framer-motion"
import type { Service } from "@/data/mockData"

interface ServiceCardProps {
    service: Service
    index: number
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card p-6 group"
            id={service.id}
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-muted text-sm leading-relaxed mb-4">
                {service.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
                {service.features.slice(0, 4).map((feature) => (
                    <span key={feature} className="badge">
                        {feature}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}
