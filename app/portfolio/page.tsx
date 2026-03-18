'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { projects, categories } from "@/data/mockData"
import { PortfolioCard } from "@/components/PortfolioCard"
import { Buildings, CalendarDots, CategoryIcon, IconShell, Sparkle } from "@/lib/site-icons"

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    return (
        <>
            {/* Hero Section */}
            <section className="section bg-card-hover">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Karya <span className="gradient-text">Terbaik</span> Kami
                        </h1>
                        <p className="text-lg text-muted">
                            Lihat berbagai proyek yang telah kami kerjakan untuk klien dari berbagai industri.
                            Setiap proyek adalah bukti komitmen kami terhadap kualitas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Portfolio Grid */}
            <section className="section">
                <div className="container">
                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 mb-12"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-card-bg border border-border hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <span className="inline-flex items-center gap-2">
                                    <CategoryIcon category={category} size={16} className={activeCategory === category ? "text-white" : "text-primary"} />
                                    {category}
                                </span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Portfolio Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <PortfolioCard key={project.slug} project={project} index={index} />
                        ))}
                    </motion.div>

                    {/* No results */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <p className="text-muted">
                                Tidak ada proyek dalam kategori ini.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Stats Section */}
            <section className="section bg-card-hover">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "5", label: "Proyek Selesai", icon: Sparkle },
                            { number: "3", label: "Klien Puas", icon: Buildings },
                            { number: "6+", label: "Tahun Pengalaman", icon: CalendarDots },
                            { number: "100%", label: "Tingkat Kepuasan", icon: Sparkle },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <IconShell className="w-14 h-14 mx-auto mb-4 rounded-full">
                                    <stat.icon size={24} weight="duotone" className="text-primary" />
                                </IconShell>
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-muted text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}