import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as ChevronDown, P as Play, I as Instagram, Y as Youtube, F as Facebook, X } from "../_libs/lucide-react.mjs";
const heroGuitar = "/assets/hero-guitar-CzjmjFYz.jpg";
const portraitTeal = "/assets/portrait-teal-BIJ9G6aK.jpg";
const oyaRuwa = "/assets/oya-ruwa-ma-dakala-CHbXmVuz.jpg";
const priyaviArt = "/assets/priyavi-BHmtmXnp.jpg";
function VideoLightbox({ videoId, onClose }) {
  reactExports.useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  if (!videoId) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-up",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 text-white/70 hover:text-[var(--cyan-accent)] transition",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative w-full max-w-5xl aspect-video",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`,
                title: "Video player",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: true,
                className: "w-full h-full border-0"
              }
            )
          }
        )
      ]
    }
  );
}
const releases = [{
  title: "Oya Ruwa Ma Dakala",
  year: "2026",
  art: oyaRuwa,
  link: "https://music.mrecentertainment.com/OyaRuwaMaDakala"
}, {
  title: "Priyavi",
  year: "2022",
  art: priyaviArt,
  link: "https://music.mrecentertainment.com/gRTK"
}];
const videos = [{
  id: "fb0uKT4pEL4",
  title: "Oya Ruwa Ma Dakala — Official Video",
  thumb: oyaRuwa
}, {
  id: "nStedLpfkmk",
  title: "Priyavi — Official Video",
  thumb: priyaviArt
}];
function Index() {
  const [activeVideo, setActiveVideo] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-screen w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroGuitar, alt: "Dinul Kithsara", className: "absolute inset-0 w-full h-full object-cover object-center opacity-70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 h-full flex flex-col items-center justify-center px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.5em] text-[var(--cyan-accent)] mb-6 animate-fade-up", children: "SINGER · SONGWRITER · COMPOSER" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[18vw] md:text-[12vw] leading-none font-normal text-center animate-fade-up", style: {
          letterSpacing: "0.05em"
        }, children: [
          "DINUL",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "KITHSARA"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-[var(--cyan-accent)] transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "animate-scroll-bounce", size: 28 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-32 px-6 md:px-16 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portraitTeal, alt: "Dinul Kithsara portrait", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6", children: "ABOUT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl mb-10 leading-tight", children: "THE ARTIST" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg leading-relaxed text-foreground/80 font-light", children: "Dinul Kithsara is a Sri Lankan singer, songwriter and a composer. Dinul sought and drew inspiration from other unique and talented greats such as Michael Jackson, The Weeknd etc. He started his musical journey by releasing his first single Priyavi in 2022. His music is more into Pop, Indian Pop and R&B." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "music", className: "py-32 px-6 md:px-16 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6", children: "DISCOGRAPHY" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl", children: "MUSIC" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: releases.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: r.link, target: r.link.startsWith("http") ? "_blank" : void 0, rel: "noopener noreferrer", className: "group block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.art, alt: r.title, className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full flex items-center justify-center", style: {
            backgroundColor: "var(--crimson)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 22, className: "text-white ml-1", fill: "white" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex justify-between items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg tracking-wider", children: r.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.year })
        ] })
      ] }, r.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "visuals", className: "py-32 px-6 md:px-16 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.4em] text-[var(--cyan-accent)] mb-6", children: "VISUALS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-5xl md:text-7xl mb-16", children: "VIDEOS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: videos.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://www.youtube.com/watch?v=${v.id}`, target: "_blank", rel: "noopener noreferrer", className: "group relative aspect-video overflow-hidden bg-card text-left block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.thumb, alt: v.title, className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border border-white/40 flex items-center justify-center group-hover:border-[var(--cyan-accent)] group-hover:scale-110 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 22, className: "text-white ml-1", fill: "white" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm tracking-wide", children: v.title }) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-20 px-6 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl tracking-[0.3em]", style: {
        fontFamily: "var(--font-display)"
      }, children: "DINUL KITHSARA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-8", children: [{
        Icon: Instagram,
        href: "https://www.instagram.com/dinul_2k/",
        label: "Instagram"
      }, {
        Icon: Youtube,
        href: "https://www.youtube.com/@dinulkithsara",
        label: "YouTube"
      }, {
        Icon: Facebook,
        href: "https://www.facebook.com/profile.php?id=100070411661940",
        label: "Facebook"
      }].map(({
        Icon,
        href,
        label
      }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noopener noreferrer", "aria-label": label, className: "text-foreground/60 hover:text-[var(--cyan-accent)] transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.3em] text-muted-foreground", children: "BOOKING — booking@dinulkithsara.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-[0.3em] text-muted-foreground/60", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " DINUL KITHSARA"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoLightbox, { videoId: activeVideo, onClose: () => setActiveVideo(null) })
  ] });
}
export {
  Index as component
};
