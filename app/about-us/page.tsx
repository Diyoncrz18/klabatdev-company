'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { companyInfo } from "@/data/mockData"

export default function AboutPage() {
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
                        <span className="badge mb-4 inline-block">Tentang Kami</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Mengenal Lebih Dekat <span className="gradient-text">{companyInfo.name}</span>
                        </h1>
                        <p className="text-lg text-muted">
                            {companyInfo.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="badge mb-4 inline-block">Cerita Kami</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Dari Passion Menjadi Profesi
                            </h2>
                            <div className="space-y-4 text-muted">
                                <p>
                                    {companyInfo.name} didirikan pada tahun {companyInfo.founded} dengan visi sederhana:
                                    membantu bisnis lokal berkembang melalui teknologi digital.
                                </p>
                                <p>
                                    Berawal dari sendiri, kini sudah memiliki tim yang siap membantu mendigitalisasikan bisnis lokal dan instansi lokal.
                                </p>
                                <p>
                                    Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak mendapatkan
                                    solusi digital berkualitas tinggi dengan harga yang terjangkau.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="card p-8 bg-gradient-to-br from-primary/10 to-accent/10"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold gradient-text mb-2">
                                        6+
                                    </div>
                                    <div className="text-muted text-sm">Tahun Pengalaman</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold gradient-text mb-2">5</div>
                                    <div className="text-muted text-sm">Proyek Selesai</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold gradient-text mb-2">3</div>
                                    <div className="text-muted text-sm">Klien Puas</div>
                                </div>
                                <div className="text-center p-4">
                                    <div className="text-4xl font-bold gradient-text mb-2">8</div>
                                    <div className="text-muted text-sm">Layanan</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section bg-card-hover">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="card p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                                🎯
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Visi</h3>
                            <p className="text-muted">{companyInfo.vision}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="card p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                                🚀
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">Misi</h3>
                            <p className="text-muted">{companyInfo.mission}</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="badge mb-4 inline-block">Nilai Kami</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Prinsip yang Kami Pegang
                        </h2>
                        <p className="text-muted max-w-2xl mx-auto">
                            Nilai-nilai ini menjadi fondasi dalam setiap pekerjaan yang kami lakukan
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyInfo.values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-6 text-center group hover:bg-primary hover:text-white transition-colors"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-2xl mx-auto mb-4 transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted group-hover:text-white/80 text-sm transition-colors">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="section bg-card-hover">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mx-auto mb-6">
                                📍
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Lokasi Kami</h2>
                            <p className="text-muted text-lg mb-8">{companyInfo.location}</p>
                            <Link href="/contact" className="btn-primary">
                                Hubungi Kami
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}