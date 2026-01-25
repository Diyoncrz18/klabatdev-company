'use client'

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/data/mockData"
import Image from "next/image"

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Props {
    params: Promise<{ slug: string }>
}

export default function PortfolioDetailPage({ params }: Props) {
    const { slug } = use(params)
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <>
            {/* Hero */}
            <section className="section bg-card-hover">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Back button */}
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-8"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali ke Portfolio
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="badge">{project.category}</span>
                            <span className="text-muted text-sm">|</span>
                            <span className="text-muted text-sm">{project.year}</span>
                            {project.client && (
                                <>
                                    <span className="text-muted text-sm">|</span>
                                    <span className="text-muted text-sm">{project.client}</span>
                                </>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {project.title}
                        </h1>

                        <p className="text-lg text-muted max-w-3xl">
                            {project.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left: Description and Images */}
                        <div className="lg:col-span-2">
                            {/* Project Images */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-10"
                            >
                                {project.images.length > 1 ? (
                                    // Swiper slider for multiple images
                                    <div className="card overflow-hidden">
                                        <Swiper
                                            modules={[Navigation, Pagination, Autoplay]}
                                            navigation
                                            pagination={{ clickable: true }}
                                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                                            loop={true}
                                            className="portfolio-swiper aspect-video"
                                        >
                                            {project.images.map((image, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                                                        <Image
                                                            src={image}
                                                            alt={`${project.title} - ${index + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                ) : project.images.length === 1 ? (
                                    // Single image
                                    <div className="card overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    // No images - show icon
                                    <div className="card overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                        <span className="text-8xl opacity-30">
                                            {getCategoryIcon(project.category)}
                                        </span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Full Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-2xl font-semibold mb-4">Tentang Proyek</h2>
                                <p className="text-muted leading-relaxed mb-8">
                                    {project.fullDescription}
                                </p>

                                {/* Features */}
                                <h3 className="text-xl font-semibold mb-4">Fitur Utama</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="flex items-center gap-3 p-4 bg-card-hover rounded-lg"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="lg:col-span-1"
                        >
                            <div className="card p-6 sticky top-24">
                                {/* Technologies */}
                                <div className="mb-6">
                                    <h3 className="font-semibold mb-3">Teknologi</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <span className="text-muted text-sm">Kategori</span>
                                        <p className="font-medium">{project.category}</p>
                                    </div>
                                    <div>
                                        <span className="text-muted text-sm">Tahun</span>
                                        <p className="font-medium">{project.year}</p>
                                    </div>
                                    {project.client && (
                                        <div>
                                            <span className="text-muted text-sm">Klien</span>
                                            <p className="font-medium">{project.client}</p>
                                        </div>
                                    )}
                                </div>

                                {/* External Link */}
                                {project.externalLink && (
                                    <a
                                        href={project.externalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full justify-center"
                                    >
                                        Kunjungi Website
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}

                                {!project.externalLink && (
                                    <div className="text-center p-4 bg-card-hover rounded-lg">
                                        <p className="text-muted text-sm">
                                            Proyek ini tidak memiliki website publik
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* More Projects */}
            <section className="section bg-card-hover">
                <div className="container">
                    <h2 className="text-2xl font-semibold mb-8 text-center">Proyek Lainnya</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {projects
                            .filter(p => p.slug !== project.slug)
                            .slice(0, 3)
                            .map((p) => (
                                <Link
                                    key={p.slug}
                                    href={`/portfolio/${p.slug}`}
                                    className="card p-4 flex items-center gap-4 hover:border-primary transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-xl">
                                        {getCategoryIcon(p.category)}
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{p.title}</h3>
                                        <p className="text-sm text-muted">{p.category}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
        "Website": "🌐",
        "Mobile Apps": "📱",
        "RAG/AI": "🤖",
        "Branding": "✨",
        "Poster": "🖼️",
        "Undangan": "💌"
    }
    return icons[category] || "💻"
}
