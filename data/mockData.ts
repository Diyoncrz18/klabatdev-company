// Mock Data untuk Klabat Dev - Software House

// ==================== SERVICES ====================
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export const services: Service[] = [
    {
        id: "mobile-apps",
        title: "Mobile Apps Development",
        description: "Pengembangan aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa terbaik.",
        icon: "📱",
        features: ["React Native", "Flutter", "Kotlin"]
    },
    {
        id: "website",
        title: "Website Development",
        description: "Pembuatan website profesional, responsive, dan SEO-friendly untuk kebutuhan bisnis Anda.",
        icon: "🌐",
        features: ["Next.js", "React", "Frontend", "Backend"]
    },
    {
        id: "rag-ai-assistant",
        title: "RAG / AI Assistant",
        description: "Pengembangan sistem AI dan chatbot cerdas berbasis RAG untuk membantu bisnis Anda.",
        icon: "🤖",
        features: ["ChatBot", "RAG System", "LLM Integration", "NLP", "Machine Learning"]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Desain antarmuka yang intuitif dan pengalaman pengguna yang optimal untuk produk digital.",
        icon: "🎨",
        features: ["Wireframing", "Prototyping", "User Research", "Design System", "Figma"]
    },
    {
        id: "poster-design",
        title: "Desain Poster",
        description: "Pembuatan poster promosi, event, dan iklan dengan desain kreatif dan menarik.",
        icon: "🖼️",
        features: ["Poster Promosi", "Banner", "Brosur", "Flyer", "Social Media"]
    },
    {
        id: "invitation-design",
        title: "Desain Undangan",
        description: "Desain undangan digital dan cetak untuk berbagai acara spesial Anda.",
        icon: "💌",
        features: ["Undangan Digital", "Undangan Cetak", "Wedding", "Birthday", "Corporate Event"]
    },
    {
        id: "branding",
        title: "Branding & Logo",
        description: "Membangun identitas brand yang kuat dengan logo dan visual identity yang memorable.",
        icon: "✨",
        features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
        id: "maintenance",
        title: "Maintenance & Support",
        description: "Layanan pemeliharaan dan dukungan teknis untuk memastikan sistem Anda berjalan optimal.",
        icon: "🔧",
        features: ["Bug Fixing", "Updates", "Hosting", "Monitoring", "24/7 Support"]
    }
];

// ==================== PORTFOLIO ====================
export interface Project {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    category: string;
    thumbnail: string;
    images: string[];
    technologies: string[];
    client?: string;
    year: string;
    externalLink?: string;
    features: string[];
}

export const projects: Project[] = [
    {
        slug: "kassentix-pos",
        title: "Kassentix - POS System",
        shortDescription: "Sistem Point of Sale modern untuk restoran dan cafe dengan fitur lengkap.",
        fullDescription: "Kassentix adalah sistem POS (Point of Sale) yang dirancang khusus untuk restoran, cafe, dan bisnis F&B lainnya. Dilengkapi dengan manajemen pesanan real-time, integrasi pembayaran digital, laporan penjualan, dan dashboard analytics yang komprehensif.",
        category: "Website",
        thumbnail: "/project/kassentix.webp",
        images: ["/project/kassentix.webp"],
        technologies: ["Next.js", "TypeScript", "Prisma", "MySQL", "Tailwind CSS", "Socket.IO", "Framer Motion"],
        client: "Bisnis Project",
        year: "2025",
        externalLink: "https://kassentix.cloud",
        features: ["Real-time Order Management", "Payment Integration", "Analytics Dashboard", "Multi-outlet Support", "AI Assistant"]
    },
    {
        slug: "fpk-manado",
        title: "FPK Manado - Portal Internal",
        shortDescription: "Website berita untuk fpk kota manado & portal internals",
        fullDescription: "Website khusus untuk forum pembauran kebangsaan kota manado (FPK Manado) dengan fitur berita, event, dan portal internal. Selain itu, FPK kota Manado menjawab tantangan Zaman dengan digitalisasi.",
        category: "Website",
        thumbnail: "/project/fpkmanado.webp",
        images: ["/project/fpkmanado.webp"],
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        client: "Forum Pembauran Kebangsaan Kota Manado",
        year: "2024",
        externalLink: "https://fpkmanado.org",
        features: ["Berita & Event", "Portal Internal", "Laporan Internal"]
    },
    {
        slug: "pkbm-denny",
        title: "PKBM Denny Smart - Web Sekolah",
        shortDescription: "Website sekolah untuk PKBM Denny Smart dengan fitur berita, event, dan portal internal.",
        fullDescription: "PKBM Denny Smart adalah website sekolah yang dirancang khusus untuk PKBM Denny Smart dengan fitur berita, event, dan portal internal. Selain itu, PKBM Denny Smart menjawab tantangan Zaman dengan digitalisasi.",
        category: "Website",
        thumbnail: "/project/pkbm.webp",
        images: ["/project/pkbm.webp"],
        technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
        client: "PKBM Denny Smart",
        year: "2024",
        features: ["Berita & Event", "Portal Internal", "Management Dokumen-Dokumen"]
    },
    {
        slug: "kidney-stone",
        title: "Kidney Stone - AI Detection Batu Ginjal",
        shortDescription: "Experimental AI System for Kidney Stone Detection using Computer Vision and LLM",
        fullDescription: `NephroVision-X adalah proyek eksploratif yang mengkaji penggunaan Computer Vision dan Large Language Model (LLM) untuk menganalisis citra CT Scan terkait potensi batu ginjal. Sistem ini memanfaatkan YOLOv8 untuk deteksi area yang relevan dan Grad-CAM untuk visualisasi fokus model, sebagai upaya meningkatkan transparansi dalam proses prediksi.

Proyek ini juga dilengkapi dengan modul LLM Medical Assistant yang menyediakan informasi medis umum untuk membantu memahami hasil analisis secara kontekstual. Seluruh fitur dalam sistem ini masih bersifat eksperimental dan tidak ditujukan untuk penggunaan klinis.

NephroVision-X dikembangkan sebagai sarana pembelajaran dan eksplorasi teknologi AI end-to-end, mulai dari pemrosesan citra medis, pengembangan API, hingga integrasi frontend, serta sebagai bagian dari pengembangan portofolio di bidang AI dan teknologi kesehatan.`,
        category: "RAG/AI",
        thumbnail: "/project/kidney-stone.webp",
        images: ["/project/kidney-stone.webp", "/project/kidney-stone-2.webp"],
        technologies: ["Python", "Gemini API", "Flask", "Next JS", "Google Colab", "Kaggle", "YOLOv8", "Grad-CAM"],
        client: "Internal Project",
        year: "2025",
        features: ["Grad-CAM", "Computer Vision", "Knowledge Base", "Medical Assistant"]
    },
    {
        slug: "temu-dosen",
        title: "TemuDosen - Mobile App",
        shortDescription: "Mobile App untuk menghubungkan dosen dengan mahasiswa",
        fullDescription: "Menghubungkan dosen dengan mahasiswa dengan fitur chat, pengaturan jadwal ketemu, pengumuman, tracking posisi. Aplikasi ini sangat membantu mahasiswa jika ingin membuat jadwal temu dengan dosen. Juga sangat membantu komunikasi antara dosen dan mahasiswa.",
        category: "Mobile Apps",
        thumbnail: "/project/temudosens.webp",
        images: ["/project/temudosens.webp"],
        technologies: ["React Native", "Express JS", "Firebase", "Socket.io", "Google Maps API"],
        client: "Internal Project",
        year: "2024",
        features: ["Chat", "Jadwal", "Pengumuman", "Tracking Posisi"]
    },

];

// ==================== COMPANY INFO ====================
export const companyInfo = {
    name: "Klabat Dev",
    tagline: "Professional Digital Solutions",
    description: "Klabat Dev adalah software house profesional yang berfokus pada pengembangan solusi digital inovatif. Kami membantu bisnis bertransformasi melalui teknologi dengan layanan pengembangan aplikasi, website, AI, dan desain kreatif.",
    mission: "Memberikan solusi digital berkualitas tinggi yang membantu klien mencapai tujuan bisnis mereka melalui teknologi inovatif dan desain yang menarik.",
    vision: "Menjadi partner teknologi terpercaya bagi bisnis di Indonesia dalam transformasi digital.",
    values: [
        {
            title: "Kualitas",
            description: "Kami berkomitmen memberikan hasil terbaik dalam setiap proyek.",
            icon: "⭐"
        },
        {
            title: "Inovasi",
            description: "Selalu mengikuti perkembangan teknologi terbaru untuk solusi optimal.",
            icon: "💡"
        },
        {
            title: "Kepercayaan",
            description: "Membangun hubungan jangka panjang berdasarkan transparansi dan integritas.",
            icon: "🤝"
        },
        {
            title: "Kolaborasi",
            description: "Bekerja sama dengan klien sebagai partner untuk mencapai kesuksesan bersama.",
            icon: "👥"
        }
    ],
    founded: "2025",
    location: "Manado, Sulawesi Utara, Indonesia",
    email: "klabatdev@gmail.com",
    phone: "+62 821 8719 9940",
    socials: {
        instagram: "https://instagram.com/klabatdev",
        whatsapp: "https://wa.me/6282187199940"
    }
};

// ==================== CATEGORIES ====================
export const categories = [
    "All",
    "Website",
    "Mobile Apps",
    "RAG/AI",
    "Branding",
    "Poster",
    "Undangan"
];
