'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import type { Project } from "@/data/mockData"
import Image from "next/image"
import { ArrowRight, CategoryIcon, IconShell } from "@/lib/site-icons"

interface PortfolioCardProps {
    project: Project
    index: number
}

export const PortfolioCard = ({ project, index }: PortfolioCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Link href={`/portfolio/${project.slug}`} className="card block group">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        {project.thumbnail.length > 0 ? (
                            <Image src={project.thumbnail} alt={project.title} fill />
                        ) : (
                            <IconShell className="w-24 h-24">
                                <CategoryIcon category={project.category} size={48} className="text-primary/80" />
                            </IconShell>
                        )}
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium flex items-center gap-2">
                            Lihat Detail
                            <ArrowRight size={18} weight="bold" />
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Category & Year */}
                    <div className="flex items-center justify-between mb-3">
                        <span className="badge">{project.category}</span>
                        <span className="text-sm text-muted">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm line-clamp-2">
                        {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="text-xs text-muted-light px-2 py-1 bg-background rounded"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs text-muted-light px-2 py-1 bg-background rounded">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
