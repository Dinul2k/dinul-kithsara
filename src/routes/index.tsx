import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, Instagram, Youtube, Music2, Mail, ChevronDown } from "lucide-react";
import heroGuitar from "@/assets/hero-guitar.jpg";
import portraitRed from "@/assets/portrait-red.jpg";
import portraitTeal from "@/assets/portrait-teal.jpg";
import oyaRuwa from "@/assets/oya-ruwa-ma-dakala.jpg";
import { VideoLightbox } from "@/components/VideoLightbox";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dinul Kithsara — Singer, Songwriter, Composer" },
      { name: "description", content: "Official site of Dinul Kithsara — Sri Lankan singer, songwriter and composer. Pop, Indian Pop and R&B." },
      { property: "og:title", content: "Dinul Kithsara" },
      { property: "og:description", content: "Sri Lankan singer, songwriter and composer." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

const releases = [
  { title: "Oya Ruwa Ma Dakala", year: "2026", art: oyaRuwa, link: "https://music.mrecentertainment.com/OyaRuwaMaDakala" },
  { title: "Priyavi", year: "2022", art: portraitRed, link: "#" },
  { title: "Untitled II", year: "2023", art: portraitTeal, link: "#" },
  { title: "Untitled III", year: "2024", art: heroGuitar, link: "#" },
  { title: "Untitled IV", year: "2025", art: portraitRed, link: "#" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Priyavi — Official Video", thumb: portraitRed },
  { id: "dQw4w9WgXcQ", title: "Live Session", thumb: heroGuitar },
  { id: "dQw4w9WgXcQ", title: "Behind the Scenes", thumb: portraitTeal },
];

function Index() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroGuitar}
          alt="Dinul Kithsara"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <p className="text-xs tracking-[0.5em] text-[var(--cyan-accent)] mb-6 animate-fade-up">SINGER · SONGWRITER · COMPOSER</p>
          <h1 className="text-[18vw] md:text-[12vw] leading-none font-normal text-center animate-fade-up" style={{ letterSpacing: "0.05em" }}>
            DINUL<br/>KITHSARA
          </h1>
        </div>
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-[var(--cyan-accent)] transition">
          <ChevronDown className="animate-scroll-bounce" size={28} />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={portraitTeal} alt="Dinul Kithsara portrait" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6">ABOUT</p>
            <h2 className="text-5xl md:text-7xl mb-10 leading-tight">THE ARTIST</h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-light">
              Dinul Kithsara is a Sri Lankan singer, songwriter and a composer. Dinul sought and drew inspiration from other unique and talented greats such as Michael Jackson, The Weeknd etc. He started his musical journey by releasing his first single Priyavi in 2022. His music is more into Pop, Indian Pop and R&B.
            </p>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6">DISCOGRAPHY</p>
            <h2 className="text-5xl md:text-7xl">MUSIC</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {releases.map((r) => (
            <a key={r.title} href={r.link} className="group block">
              <div className="relative aspect-square overflow-hidden bg-card">
                <img src={r.art} alt={r.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--crimson)" }}>
                    <Play size={22} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-baseline">
                <h3 className="text-lg tracking-wider">{r.title}</h3>
                <span className="text-xs text-muted-foreground">{r.year}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* VISUALS */}
      <section id="visuals" className="py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6">VISUALS</p>
        <h2 className="text-5xl md:text-7xl mb-16">VIDEOS</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(v.id)}
              className="group relative aspect-video overflow-hidden bg-card text-left"
            >
              <img src={v.thumb} alt={v.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[var(--cyan-accent)] group-hover:scale-110 transition-all duration-500">
                  <Play size={22} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-sm tracking-wide">{v.title}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <p className="text-2xl tracking-[0.3em]" style={{ fontFamily: "var(--font-display)" }}>DINUL KITHSARA</p>
          <div className="flex gap-8">
            {[
              { Icon: Music2, href: "#", label: "Spotify" },
              { Icon: Instagram, href: "#", label: "Instagram" },
              { Icon: Youtube, href: "#", label: "YouTube" },
              { Icon: Mail, href: "mailto:booking@dinulkithsara.com", label: "Booking" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} className="text-foreground/60 hover:text-[var(--cyan-accent)] transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-xs tracking-[0.3em] text-muted-foreground">
            BOOKING — booking@dinulkithsara.com
          </p>
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground/60">
            © {new Date().getFullYear()} DINUL KITHSARA
          </p>
        </div>
      </footer>

      <VideoLightbox videoId={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}
