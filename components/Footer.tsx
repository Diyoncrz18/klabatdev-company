import Link from "next/link"
import { companyInfo } from "@/data/mockData"
import { EnvelopeSimple, IconShell, InstagramLogo, MapPin, Phone, WhatsappLogo } from "@/lib/site-icons"

const footerLinks = {
    layanan: [
        { label: "Mobile Apps", href: "/services#mobile-apps" },
        { label: "Website Development", href: "/services#website" },
        { label: "AI & RAG", href: "/services#rag-ai-assistant" },
        { label: "UI/UX Design", href: "/services#ui-ux-design" },
    ],
    perusahaan: [
        { label: "Tentang Kami", href: "/about-us" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Kontak", href: "/contact" },
    ],
}

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary text-white py-10">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">{companyInfo.name}</h3>
                        <p className="text-gray-400 text-sm mb-6 max-w-xs">
                            {companyInfo.tagline}. Solusi digital profesional untuk kebutuhan bisnis Anda.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href={companyInfo.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <InstagramLogo size={20} weight="duotone" />
                            </a>

                            <a
                                href={companyInfo.socials.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="WhatsApp"
                            >
                                <WhatsappLogo size={20} weight="duotone" />
                            </a>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h4 className="font-semibold mb-4">Layanan</h4>
                        <ul className="space-y-3">
                            {footerLinks.layanan.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h4 className="font-semibold mb-4">Perusahaan</h4>
                        <ul className="space-y-3">
                            {footerLinks.perusahaan.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <IconShell className="w-10 h-10 shrink-0 mt-0.5 rounded-2xl">
                                    <MapPin size={20} weight="duotone" className="text-primary" />
                                </IconShell>
                                <span>{companyInfo.location}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <IconShell className="w-10 h-10 shrink-0 rounded-2xl">
                                    <EnvelopeSimple size={20} weight="duotone" className="text-primary" />
                                </IconShell>
                                <a href={`mailto:${companyInfo.email}`} className="hover:text-primary transition-colors">
                                    {companyInfo.email}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <IconShell className="w-10 h-10 shrink-0 rounded-2xl">
                                    <Phone size={20} weight="duotone" className="text-primary" />
                                </IconShell>
                                <a href={`tel:${companyInfo.phone}`} className="hover:text-primary transition-colors">
                                    {companyInfo.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} {companyInfo.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
