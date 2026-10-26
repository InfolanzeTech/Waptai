import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/waptai-banner.jpg";

const CLOUDINARY_VIDEO_URL =
  import.meta.env.VITE_HERO_VIDEO_URL ||
  "https://res.cloudinary.com/dmppby9vk/video/upload/v1772871410/WhatsApp-Video-2026-03-07-at-105_s1w4wt.mp4";
const showPreviousHero = false;

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <img
          src={bannerImage}
          alt="WAPTAI event banner"
          className="block h-auto w-full"
        />
        <a
          href="https://momentsevent.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-white/80 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 px-5 py-2.5 text-sm font-extrabold tracking-wide text-slate-950 shadow-[0_8px_30px_rgba(245,158,11,0.55)] transition duration-300 hover:scale-105 hover:shadow-[0_12px_38px_rgba(245,158,11,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:bottom-10 sm:px-7 sm:py-3.5 sm:text-base"
        >
          <span>Book Your Stall Now</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-amber-300 transition-transform duration-300 group-hover:translate-x-1 sm:h-8 sm:w-8">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </section>

      {showPreviousHero && (
        <section className="relative md:min-h-screen py-10 md:py-10 overflow-hidden bg-[#e3f2fd]/50">
          {/* ===== FLOATING WATER BUBBLES BACKGROUND ===== */}
          {/* ===== ANIMATED WATER WAVES BACKGROUND ===== */}
          <div className="absolute inset-0 z-0 hidden md:block overflow-hidden pointer-events-none">
            <svg
              className="absolute bottom-0 w-full h-[560px]"
              viewBox="0 0 1440 560"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0288d1" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#03a9f4" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <path
                fill="url(#waveGradient)"
                d="M0,397 C270,390 500,380 720,320 C950,260 1150,120 1440,180 L1440,560 L0,560 Z"
              />
            </svg>
          </div>
          {/* BACKGROUND GRAPHIC ELEMENTS */}
          {/* <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0288d1]/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#03a9f4]/15 rounded-full blur-[100px] -z-10"></div>
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none -z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230288d1' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div> */}

          <div className="max-w-[1536px] mx-auto px-6 lg:px-12 w-full relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#b3e5fc] shadow-sm backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]"></span>
                  </span>
                  <span className="text-[#0288d1] text-[12px] font-bold tracking-widest uppercase">
                    Celebrating 10 Years of Excellence
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl md:font-extrabold font-bold text-[#0d47a1] leading-[1.15]">
                  A Decade of <span className="text-[#0288d1]">Water Wisdom</span> <br />
                  &amp; Global Wellbeing.
                </h1>
                <p className="text-base text-[#37474f] max-w-xl leading-relaxed font-medium">
                  WAPTAI is the most trusted association in the Water Purification and Treatment industry.
                  We bridge professionals, experts, and innovators to shape the future of water management.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  {/* <button className="bg-[#0288d1] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/30 hover:-translate-y-1 transition-all duration-300">
                    BOOK YOUR STALL
                  </button>
                  <button className="bg-white/70 backdrop-blur-md border-2 border-[#b3e5fc] text-[#37474f] px-8 py-3.5 rounded-xl font-bold text-sm hover:border-[#0288d1] hover:text-[#0288d1] transition-all duration-300">
                    BOOK YOUR STALL
                  </button> */}
                  <button onClick={() => navigate("/expo-2026")} className="bg-[#0288d1] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0277bd] shadow-lg shadow-[#0288d1]/30 hover:-translate-y-1 transition-all duration-300">
                    EXPLORE EXPO 2026
                  </button>
                  <button
                    onClick={() => navigate("/waptai-member")}
                    className="bg-[#1c87c9] text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#0277bd shadow-lg shadow-[#1c87c9]/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    BECOME WAPTAI MEMBER
                  </button>
                </div>

                {/* Subtle Trust Bar */}
                <div className="pt-8 flex items-center gap-8 border-t border-[#b0bec5]/40">
                  <div className="group cursor-default">
                    <p className="text-2xl font-black text-[#0d47a1] leading-none group-hover:text-[#0288d1] transition-colors">10th</p>
                    <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Edition</p>
                  </div>
                  <div className="w-px h-8 bg-[#b0bec5]/50"></div>
                  <div className="group cursor-default">
                    <p className="text-2xl font-black text-[#0d47a1] leading-none group-hover:text-[#0288d1] transition-colors">500+</p>
                    <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Exhibitors</p>
                  </div>
                  <div className="w-px h-8 bg-[#b0bec5]/50"></div>
                  <div className="group cursor-default">
                    <p className="text-2xl font-black text-[#0288d1] leading-none">2026</p>
                    <p className="text-[11px] text-[#607d8b] font-bold uppercase tracking-wider mt-1">Next Event</p>
                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT - EXPO CARD */}
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 bg-white/70 backdrop-blur-lg rounded-[2.5rem] p-2 shadow-[0_20px_50px_rgba(2,136,209,0.12)] border border-white">
                  <div className="bg-white/50 rounded-[2.2rem] overflow-hidden">
                    <div className="bg-[#0288d1] p-8 text-center text-white shadow-inner">
                      <h2 className="text-4xl font-black tracking-tighter italic">WAPTAI</h2>
                      <p className="text-sm font-bold opacity-80 tracking-[0.3em] uppercase mt-1">Water Expo 2026</p>
                    </div>
                    {/* Cloudinary video - plays in card space */}
                    <div className="relative w-full aspect-video bg-[#0d47a1]/10 overflow-hidden">
                      <video
                        src={CLOUDINARY_VIDEO_URL}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        controls
                        loop
                        playsInline
                        title="WAPTAI Water Expo"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0288d1]/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroSection;
