'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
                            src="/Logo-KlabatDev(475x187).svg"
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
                        Hubungi Kami
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-foreground"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
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
                                Hubungi Kami
                            </Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header >
    )
}