'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, Phone, WhatsappLogo, X } from "@/lib/site-icons"
import { ThemeToggle } from "./ThemeToggle"

const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/services", label: "Layanan" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about-us", label: "Tentang" },
    { href: "/contact", label: "Kontak" },
]

export const HeaderComp = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container flex items-center justify-between py-5">
                {/* Logo */}
                <Link href="/" className="relative py-2">
                    <div className="relative overflow-hidden w-[160px] h-[56px] md:w-[180px] md:h-[63px]">
                        <Image
                            src="/Logo-KlabatDev.svg"
                            fill
                            alt="Klabat Dev Logo"
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href ||
                            (link.href !== "/" && pathname.startsWith(link.href))

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        )
                    })}
                    <Link href="https://wa.me/6282187199940"
                        target="_blank"
                        rel="noopener noreferrer" className="btn-primary text-sm py-2.5 px-5">
                        <WhatsappLogo size={18} weight="fill" />
                        Hubungi Kami
                    </Link>
                    <ThemeToggle />
                </nav>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden glass"
                    >
                        <div className="container py-4 flex flex-col gap-4">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-sm font-medium py-2 transition-colors ${isActive
                                            ? "text-primary"
                                            : "text-foreground hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                            <Link
                                href="https://wa.me/6282187199940"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary text-sm py-2.5 text-center mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Phone size={18} weight="duotone" />
                                Hubungi Kami
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header >
    )
}