'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import { companyInfo } from "@/data/mockData"

export default function PrivacyPolicyPage() {
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
                        <span className="badge mb-4 inline-block">Legal</span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Kebijakan <span className="gradient-text">Privasi</span>
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
                        className="max-w-4xl mx-auto prose prose-lg"
                    >
                        <div className="card p-8 md:p-12 space-y-8">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">1. Pendahuluan</h2>
                                <p className="text-muted leading-relaxed">
                                    {companyInfo.name} ("kami", "kita", atau "perusahaan") menghargai privasi Anda.
                                    Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
                                    mengungkapkan, dan melindungi informasi Anda ketika Anda menggunakan layanan kami.
                                </p>
                            </div>

                            {/* Information Collection */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">2. Informasi yang Kami Kumpulkan</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Kami dapat mengumpulkan informasi berikut:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, dan informasi kontak lainnya yang Anda berikan melalui formulir kontak.</li>
                                    <li><strong>Informasi Proyek:</strong> Detail proyek, persyaratan, dan preferensi yang Anda diskusikan dengan kami.</li>
                                    <li><strong>Informasi Teknis:</strong> Alamat IP, tipe browser, perangkat yang digunakan, dan data penggunaan website.</li>
                                    <li><strong>Cookie:</strong> Kami menggunakan cookie untuk meningkatkan pengalaman pengguna.</li>
                                </ul>
                            </div>

                            {/* Use of Information */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">3. Penggunaan Informasi</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Informasi yang kami kumpulkan digunakan untuk:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>Merespons pertanyaan dan permintaan Anda</li>
                                    <li>Menyediakan layanan yang Anda minta</li>
                                    <li>Mengirimkan informasi tentang proyek dan layanan</li>
                                    <li>Meningkatkan website dan layanan kami</li>
                                    <li>Mematuhi kewajiban hukum</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">4. Keamanan Data</h2>
                                <p className="text-muted leading-relaxed">
                                    Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi pribadi Anda
                                    dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada
                                    metode transmisi melalui internet yang 100% aman.
                                </p>
                            </div>

                            {/* Third Party */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">5. Pihak Ketiga</h2>
                                <p className="text-muted leading-relaxed">
                                    Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak
                                    ketiga tanpa persetujuan Anda, kecuali jika diperlukan untuk menyediakan layanan yang Anda
                                    minta atau sebagaimana diwajibkan oleh hukum.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">6. Hak Anda</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Anda memiliki hak untuk:
                                </p>
                                <ul className="list-disc pl-6 text-muted space-y-2">
                                    <li>Mengakses informasi pribadi Anda yang kami simpan</li>
                                    <li>Meminta koreksi informasi yang tidak akurat</li>
                                    <li>Meminta penghapusan informasi Anda</li>
                                    <li>Menolak penggunaan informasi untuk tujuan pemasaran</li>
                                </ul>
                            </div>

                            {/* Policy Changes */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">7. Perubahan Kebijakan</h2>
                                <p className="text-muted leading-relaxed">
                                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan
                                    dipublikasikan di halaman ini dengan tanggal pembaruan terakhir yang diperbarui.
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">8. Hubungi Kami</h2>
                                <p className="text-muted leading-relaxed mb-4">
                                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami:
                                </p>
                                <div className="bg-card-hover p-4 rounded-lg">
                                    <p className="text-muted">
                                        <strong>Email:</strong> {companyInfo.email}<br />
                                        <strong>Telepon:</strong> {companyInfo.phone}<br />
                                        <strong>Alamat:</strong> {companyInfo.location}
                                    </p>
                                </div>
                            </div>

                            {/* Back Link */}
                            <div className="pt-6 border-t border-border">
                                <Link href="/" className="text-primary hover:underline flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
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
