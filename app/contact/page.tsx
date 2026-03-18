'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { companyInfo } from "@/data/mockData"
import { CheckCircle, EnvelopeSimple, IconShell, InstagramLogo, Lightning, MapPin, PaperPlaneTilt, Phone, SpinnerGap, WhatsappLogo } from "@/lib/site-icons"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await fetch("https://script.google.com/macros/s/AKfycbzTh2fQtH0l0mwLXQciM-OLv4A7ldnehdcjFAwBzsxt08j30Bt7HlGnME6YpCZhtPxsDQ/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'no-cors',
            body: JSON.stringify(formData)
        })

        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

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
                            Mari <span className="gradient-text">Berkolaborasi</span>
                        </h1>
                        <p className="text-lg text-muted">
                            Punya proyek menarik atau pertanyaan? Jangan ragu untuk menghubungi kami.
                            Tim kami siap membantu mewujudkan ide digital Anda.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <IconShell className="w-12 h-12 shrink-0">
                                        <EnvelopeSimple size={24} weight="duotone" className="text-primary" />
                                    </IconShell>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <a href={`mailto:${companyInfo.email}`} className="text-muted hover:text-primary transition-colors">
                                            {companyInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <IconShell className="w-12 h-12 shrink-0">
                                        <Phone size={24} weight="duotone" className="text-primary" />
                                    </IconShell>
                                    <div>
                                        <h3 className="font-medium mb-1">Telepon</h3>
                                        <a href={companyInfo.socials.whatsapp} className="text-muted hover:text-primary transition-colors">
                                            {companyInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <IconShell className="w-12 h-12 shrink-0">
                                        <MapPin size={24} weight="duotone" className="text-primary" />
                                    </IconShell>
                                    <div>
                                        <h3 className="font-medium mb-1">Lokasi</h3>
                                        <p className="text-muted">{companyInfo.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-10">
                                <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                                <div className="flex gap-4">
                                    <a
                                        href={companyInfo.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-card-hover flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                        aria-label="Instagram"
                                    >
                                        <InstagramLogo size={20} weight="duotone" />
                                    </a>

                                    <a
                                        href={companyInfo.socials.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-xl bg-card-hover flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                                        aria-label="WhatsApp"
                                    >
                                        <WhatsappLogo size={20} weight="duotone" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Response */}
                            <div className="mt-10 p-6 card bg-primary/5 border-primary/20">
                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                    <Lightning size={20} weight="duotone" className="text-primary" />
                                    Respon Cepat via WhatsApp
                                </h3>
                                <p className="text-muted text-sm mb-4">
                                    Untuk respon lebih cepat, hubungi kami langsung melalui WhatsApp
                                </p>
                                <a
                                    href={companyInfo.socials.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full justify-center"
                                >
                                    <WhatsappLogo size={20} weight="fill" />
                                    Chat via WhatsApp
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="card p-8">
                                <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>

                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CheckCircle size={20} weight="fill" />
                                            <span>Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.</span>
                                        </div>
                                    </motion.div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="input"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                Nomor Telepon
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="input"
                                                placeholder="+62 812 3456 7890"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                Subjek *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="input"
                                            >
                                                <option value="">Pilih Subjek</option>
                                                <option value="website">Pembuatan Website</option>
                                                <option value="mobile">Pengembangan Mobile App</option>
                                                <option value="ai">AI / RAG Assistant</option>
                                                <option value="design">UI/UX Design</option>
                                                <option value="other">Lainnya</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Pesan *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="input resize-none"
                                            placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <SpinnerGap size={20} className="animate-spin" />
                                                Mengirim...
                                            </>
                                        ) : (
                                            <>
                                                Kirim Pesan
                                                <PaperPlaneTilt size={18} weight="fill" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}