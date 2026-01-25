'use client'

import { motion } from "framer-motion"
import { services } from "@/data/mockData"
import { ServiceCard } from "@/components/ServiceCard"

export default function ServicesPage() {
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
                        <span className="badge mb-4 inline-block">Layanan Kami</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Solusi Digital <span className="gradient-text">Lengkap</span>
                        </h1>
                        <p className="text-lg text-muted">
                            Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
                            berkembang di era digital. Dari pengembangan aplikasi hingga desain kreatif.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-card-hover">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="badge mb-4 inline-block">Proses Kerja</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Bagaimana Kami Bekerja
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto">
                            Proses kerja yang terstruktur untuk memastikan hasil terbaik
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Diskusi & Analisis",
                                description: "Memahami kebutuhan dan tujuan bisnis Anda melalui konsultasi mendalam.",
                                icon: "💬"
                            },
                            {
                                step: "02",
                                title: "Perencanaan",
                                description: "Merancang solusi yang tepat dengan timeline dan estimasi biaya yang jelas.",
                                icon: "📋"
                            },
                            {
                                step: "03",
                                title: "Pengembangan",
                                description: "Mengembangkan produk dengan standar kualitas tinggi dan update berkala.",
                                icon: "⚙️"
                            },
                            {
                                step: "04",
                                title: "Peluncuran & Support",
                                description: "Meluncurkan produk dan memberikan support berkelanjutan.",
                                icon: "🚀"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <div className="text-sm text-primary font-medium mb-2">{item.step}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-muted text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="card p-10 md:p-16 bg-gradient-to-br from-primary to-primary-dark text-white text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Butuh Layanan Khusus?
                        </h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8">
                            Tidak menemukan layanan yang Anda cari? Hubungi kami untuk
                            mendiskusikan kebutuhan spesifik Anda.
                        </p>
                        <a
                            href="/contact"
                            className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex"
                        >
                            Konsultasi Gratis
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}