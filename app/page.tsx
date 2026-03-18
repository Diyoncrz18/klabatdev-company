'use client'

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { services, projects } from "@/data/mockData"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { 
  ArrowRight, 
  ChatCenteredDots, 
  ShieldCheck,
  Lightning,
  Sparkle, 
  WhatsappLogo,
  GlobeHemisphereWest,
  DeviceMobile,
  Robot,
  MonitorPlay
} from "@/lib/site-icons"

export default function Home() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -left-20 w-[25rem] h-[25rem] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-foreground"
            >
              Solusi Digital Cerdas untuk <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Skala Bisnis Apapun
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Klabatdev Technologies hadir mengubah visi Anda menjadi produk perangkat lunak unggulan. Berkembang dari ide hingga integrasi AI modern yang memberikan nilai nyata.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <WhatsappLogo size={22} weight="fill" />
                Konsultasi Gratis
              </Link>
              <Link href="/portfolio" className="px-8 py-4 bg-transparent border-2 border-border hover:border-primary text-foreground hover:text-primary rounded-full font-semibold transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                Lihat Karya Kami
                <ArrowRight size={20} weight="bold" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR / TECH STACK SECTION */}
      <section className="py-12 border-y border-border bg-card-hover/30">
        <div className="container">
          <p className="text-center text-sm font-semibold text-muted mb-8 uppercase tracking-widest">
            TEKNOLOGI YANG KAMI KUASAI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500 text-muted hover:text-foreground">
            <div className="text-lg font-bold flex items-center gap-2"><GlobeHemisphereWest size={28} weight="duotone"/> Web App</div>
            <div className="text-lg font-bold flex items-center gap-2"><DeviceMobile size={28} weight="duotone"/> Mobile Native</div>
            <div className="text-lg font-bold flex items-center gap-2"><Robot size={28} weight="duotone"/> AI & Machine Learning</div>
            <div className="text-lg font-bold flex items-center gap-2"><MonitorPlay size={28} weight="duotone"/> UI/UX Design</div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION SECTION */}
      <section className="section bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Kenapa Memilih <span className="text-primary">Klabatdev?</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Kami bukan sekadar pembuat aplikasi, kami adalah mitra strategis untuk akselerasi pertumbuhan teknologi bisnis Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-xl flex items-center justify-center mb-6 text-primary">
                <Lightning size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Pengembangan Cepat</h3>
              <p className="text-muted leading-relaxed">
                Metodologi tangkas yang memastikan pengiriman produk tepat waktu tanpa pernah sedikitpun mengorbankan kualitas arsitektur kode.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-xl flex items-center justify-center mb-6 text-primary">
                <ChatCenteredDots size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Solusi User-Centric</h3>
              <p className="text-muted leading-relaxed">
                Desain UI/UX yang tidak hanya modern, tetapi fungsional dan berorientasi pada kemudahan pakai untuk meningkatkan konversi klien.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 transition-colors rounded-xl flex items-center justify-center mb-6 text-primary">
                <ShieldCheck size={32} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Dukungan & Skalabilitas</h3>
              <p className="text-muted leading-relaxed">
                Infrastruktur yang dirancang kuat (scalable) menemani pertumbuhan pengguna masa depan, dilengkapi jaminan pengawasan dukungan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION */}
      <section className="section bg-card-hover/50 relative overflow-hidden">
        {/* Decorative Background for Services */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-overlay opacity-30">
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Keahlian Kami
              </h2>
              <p className="text-muted text-lg">
                Memberikan layanan digital end-to-end yang dirancang khusus untuk memecahkan tantangan bisnis modern Anda dari hulu ke hilir.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/services" className="px-6 py-3 border border-border hover:border-primary bg-background/50 backdrop-blur-sm text-foreground rounded-full font-semibold flex items-center gap-2 hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all">
                Semua Layanan <ArrowRight size={20} weight="bold" />
              </Link>
            </motion.div>
          </div>

          {/* Creative Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-6">
            {services.map((service, index) => {
              // Creating a dynamic bento-box style layout
              let bentoClass = "col-span-1 border-border/50 bg-card/60 backdrop-blur-md";
              
              if (index === 0) {
                // Mobile Apps (Highlight - large square)
                bentoClass = "md:col-span-2 md:row-span-2 p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-card border-primary/20 shadow-xl shadow-primary/5 hover:border-primary/50";
              } else if (index === 1) {
                // Website (Highlight horizontal)
                bentoClass = "md:col-span-2 p-8 bg-card/80 border-border/80 hover:border-accent/50";
              } else if (index === 2) {
                // RAG AI (Highlight with accent color)
                bentoClass = "md:col-span-2 xl:col-span-1 p-8 bg-gradient-to-tr from-accent/5 to-card border-accent/20 hover:border-accent/40";
              } else if (index === 6) {
                // Branding (Horizontal layout)
                bentoClass = "md:col-span-2 lg:col-span-2 p-8 bg-card/80 border-border/80 hover:border-primary/40";
              } else if (index === 7) {
                // Maintenance (Highlight ending box)
                bentoClass = "md:col-span-2 lg:col-span-1 xl:col-span-2 bg-card/80 border-border/80";
              }

              return (
                <ServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index} 
                  className={bentoClass}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PREVIEW SECTION */}
      <section className="section bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Karya & Kesuksesan Klien Kami
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Studi kasus nyata implementasi perangkat lunak kami yang telah memberi dampak masif.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <PortfolioCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/portfolio" className="btn-secondary rounded-full py-3 px-8 text-foreground border-2 border-border hover:border-primary hover:text-primary transition-all">
              Lihat Kumpulan Studi Kasus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. HOW WE WORK (PROCESS) SECTION */}
      <section className="section bg-card-hover/20 border-y border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              Alur kerja agensi standar terstruktur untuk memastikan kualitas produk tak tertandingi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0"></div>

            {[
              { title: "Discovery", desc: "Pemahaman bisnis dan perancangan strategi." },
              { title: "Prototyping", desc: "Visualisasi tata letak & persetujuan UI/UX." },
              { title: "Development", desc: "Masa eksekusi kode tingkat enterprise." },
              { title: "Deployment", desc: "Peluncuran dan optimalisasi berkelanjutan." }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full bg-background border-[4px] border-card-hover shadow-lg shadow-primary/5 flex items-center justify-center text-3xl font-black text-primary mb-6 transition-all hover:scale-110">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted text-sm px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL FULL-WIDTH CTA SECTION */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 bg-gradient-to-br from-primary to-primary-dark text-white rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden"
          >
            {/* Shapes background for CTA */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Siap untuk Mendominasi <br className="hidden md:block"/> Pasar Digital?
              </h2>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                Jangan biarkan kompetitor Anda bergerak menembus tren lebih cepat. Bangun aset perangkat lunak Anda sekarang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6282187199940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-dark hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
                >
                  <WhatsappLogo size={24} weight="fill" />
                  Mulai Konsultasi Gratis
                </a>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white/50 hover:border-white text-white font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 text-lg hover:-translate-y-1 hover:bg-white/10"
                >
                  <ChatCenteredDots size={24} weight="duotone" />
                  Kirim Pesan
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
