'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { companyInfo } from "@/data/mockData"
import { ArrowLeft, EnvelopeSimple, IconShell, Phone, Scales } from "@/lib/site-icons"

export default function TermsOfServicePage() {
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
                        <span className="badge mb-4 inline-flex gap-2"><Scales size={16} weight="fill" />Legal</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Syarat & <span className="gradient-text">Ketentuan</span>
                        </h1>
                        <p className="text-muted">
                            Terakhir diperbarui: 25 Januari 2025
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="card p-8 md:p-12 space-y-8">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">1. Penerimaan Syarat</h2>
                                <p className="text-muted leading-relaxed">
                                    Dengan mengakses dan menggunakan layanan {companyInfo.name}, Anda setuju untuk terikat
                                    dengan Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan syarat-syarat ini,
                                    mohon untuk tidak menggunakan layanan kami.
                                </p>
                            </div>

                            {/* Services */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">2. Layanan Kami</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    {companyInfo.name} menyediakan layanan pengembangan digital termasuk namun tidak terbatas pada:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>Pengembangan Aplikasi Mobile (Android & iOS)</li>
                                    <li>Pengembangan Website dan Web Application</li>
                                    <li>Pengembangan AI dan RAG Assistant</li>
                                    <li>Desain UI/UX</li>
                                    <li>Desain Grafis (Poster, Undangan, dll)</li>
                                    <li>Branding dan Logo Design</li>
                                    <li>Maintenance dan Support</li>
                                </ul>
                            </div>

                            {/* Project Terms */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">3. Ketentuan Proyek</h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">3.1 Proposal dan Kontrak</h3>
                                        <p className="text-muted leading-relaxed">
                                            Setiap proyek akan dimulai dengan proposal tertulis yang mencakup ruang lingkup,
                                            timeline, dan biaya. Proyek akan dimulai setelah kedua pihak menyetujui proposal
                                            dan kontrak ditandatangani.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">3.2 Pembayaran</h3>
                                        <p className="text-muted leading-relaxed">
                                            Pembayaran dilakukan sesuai dengan jadwal yang disepakati dalam kontrak.
                                            Umumnya terdiri dari pembayaran uang muka (Down Payment) dan pelunasan
                                            setelah proyek selesai.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium mb-2">3.3 Revisi</h3>
                                        <p className="text-muted leading-relaxed">
                                            Jumlah revisi yang disertakan akan ditentukan dalam proposal proyek.
                                            Revisi tambahan di luar kesepakatan akan dikenakan biaya tambahan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">4. Hak Kekayaan Intelektual</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Setelah pembayaran penuh diterima:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>Klien akan memiliki hak penuh atas deliverables yang disepakati</li>
                                    <li>{companyInfo.name} berhak menampilkan proyek dalam portfolio (kecuali disepakati lain)</li>
                                    <li>Source code dan aset yang dikembangkan khusus untuk proyek menjadi milik klien</li>
                                    <li>Library dan komponen pihak ketiga tetap tunduk pada lisensi masing-masing</li>
                                </ul>
                            </div>

                            {/* Client Responsibilities */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">5. Tanggung Jawab Klien</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Klien bertanggung jawab untuk:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>Menyediakan konten, materi, dan informasi yang diperlukan tepat waktu</li>
                                    <li>Memberikan feedback dan approval dalam waktu yang wajar</li>
                                    <li>Memastikan hak untuk menggunakan semua konten yang disediakan</li>
                                    <li>Melakukan pembayaran sesuai jadwal yang disepakati</li>
                                </ul>
                            </div>

                            {/* Limitation of Liability */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">6. Batasan Tanggung Jawab</h2>
                                <p className="text-muted leading-relaxed">
                                    {companyInfo.name} tidak bertanggung jawab atas kerugian tidak langsung, insidental,
                                    atau konsekuensial yang timbul dari penggunaan layanan kami. Tanggung jawab kami
                                    terbatas pada jumlah yang dibayarkan oleh klien untuk layanan terkait.
                                </p>
                            </div>

                            {/* Warranty */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">7. Garansi</h2>
                                <p className="text-muted leading-relaxed">
                                    Kami menyediakan periode garansi untuk bug fixes sesuai dengan yang disepakati dalam
                                    kontrak proyek. Garansi tidak mencakup perubahan fitur, pengembangan baru, atau
                                    masalah yang disebabkan oleh pihak ketiga.
                                </p>
                            </div>

                            {/* Termination */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">8. Pembatalan Proyek</h2>
                                <p className="text-muted leading-relaxed">
                                    Jika klien membatalkan proyek sebelum selesai, pembayaran yang telah dilakukan
                                    tidak dapat dikembalikan. Klien akan menerima hasil pekerjaan yang telah diselesaikan
                                    hingga tanggal pembatalan.
                                </p>
                            </div>

                            {/* Confidentiality */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">9. Kerahasiaan</h2>
                                <p className="text-muted leading-relaxed">
                                    Kedua belah pihak setuju untuk menjaga kerahasiaan informasi sensitif yang
                                    dibagikan selama kerjasama. Kewajiban ini tetap berlaku setelah proyek selesai.
                                </p>
                            </div>

                            {/* Changes to Terms */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">10. Perubahan Syarat</h2>
                                <p className="text-muted leading-relaxed">
                                    Kami berhak untuk mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan
                                    efektif setelah dipublikasikan di halaman ini. Penggunaan berkelanjutan atas
                                    layanan kami dianggap sebagai penerimaan atas perubahan tersebut.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">11. Hubungi Kami</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi:
                                </p>
                                <div className="bg-card-hover p-4 rounded-lg space-y-3">
                                    <div className="flex items-center gap-3 text-muted">
                                        <IconShell className="w-10 h-10 rounded-2xl">
                                            <EnvelopeSimple size={18} weight="duotone" className="text-primary" />
                                        </IconShell>
                                        <span><strong>Email:</strong> {companyInfo.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted">
                                        <IconShell className="w-10 h-10 rounded-2xl">
                                            <Phone size={18} weight="duotone" className="text-primary" />
                                        </IconShell>
                                        <span><strong>Telepon:</strong> {companyInfo.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted">
                                        <IconShell className="w-10 h-10 rounded-2xl">
                                            <Scales size={18} weight="duotone" className="text-primary" />
                                        </IconShell>
                                        <span><strong>Alamat:</strong> {companyInfo.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Back Link */}
                            <div className="pt-6 border-t border-border">
                                <Link href="/" className="text-primary hover:underline flex items-center gap-2">
                                    <ArrowLeft size={18} weight="bold" />
                                    Kembali ke Beranda
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
