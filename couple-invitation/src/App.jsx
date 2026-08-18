import { useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  CalendarDays,
  Check,
  Crown,
  Heart,
  MapPin,
  Menu,
  Music,
  Navigation,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react';

import couple1 from './assets/couple1.jpg';
import couple2 from './assets/couple2.jpg';

const petals = [
  { left: '3%', delay: '0s', duration: '15s', size: 10 },
  { left: '12%', delay: '4s', duration: '18s', size: 8 },
  { left: '22%', delay: '2s', duration: '16s', size: 12 },
  { left: '34%', delay: '7s', duration: '19s', size: 9 },
  { left: '46%', delay: '1s', duration: '17s', size: 11 },
  { left: '58%', delay: '5s', duration: '20s', size: 8 },
  { left: '70%', delay: '3s', duration: '17s', size: 12 },
  { left: '82%', delay: '8s', duration: '19s', size: 10 },
  { left: '93%', delay: '2s', duration: '16s', size: 9 },
];

const flowerPetals = [
  '#d59b91',
  '#e5aaa1',
  '#cc8b82',
  '#eab8ae',
  '#d99b91',
  '#e7afa5',
  '#c9857d',
  '#efc1b8',
];

const Invitation = () => {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = opened ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev === 0 ? 1 : 0));
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const openInvitation = async () => {
    setOpened(true);

    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setMusicPlaying(true);
      } catch (error) {
        console.log('Music autoplay blocked:', error);
      }
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setMusicPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };

  const openLocation = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=SB+Convention+Center+Mullannbazar',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const submitRsvp = () => {
    setRsvpSubmitted(true);
    setShowRsvp(false);
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 50);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f6f1e9] text-[#344236]">
      {/* AUDIO */}

      <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />

      {/* GRAIN */}

      <div className="pointer-events-none fixed inset-0 z-[80] opacity-[0.025]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.4%27/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* FALLING PETALS */}

      {opened &&
        petals.map((petal, index) => (
          <div
            key={index}
            className="pointer-events-none fixed left-0 top-[-30px] z-[60]"
            style={{
              left: petal.left,
              animation: `premiumPetalFall ${petal.duration} linear ${petal.delay} infinite`,
            }}
          >
            <div
              className="rounded-[100%_0_100%_0] bg-[#d79a90]/60"
              style={{
                width: petal.size,
                height: petal.size * 0.65,
              }}
            />
          </div>
        ))}

      {/* =====================================================
          OPENING
      ===================================================== */}

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f5efe7] px-4 transition-all duration-[1800ms] ease-[cubic-bezier(.77,0,.18,1)] ${
          opened
            ? 'pointer-events-none -translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-35%] top-[-10%] h-[400px] w-[400px] rounded-full bg-[#d9e0d1]/50 blur-[100px] sm:h-[550px] sm:w-[550px]" />

          <div className="absolute bottom-[-15%] right-[-30%] h-[450px] w-[450px] rounded-full bg-[#e7b8ad]/30 blur-[110px] sm:h-[600px] sm:w-[600px]" />

          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9b846d]/10 sm:h-[650px] sm:w-[650px] md:h-[820px] md:w-[820px]" />

          <div
            className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7d8b78]/10 sm:h-[550px] sm:w-[550px]"
            style={{
              animation: 'slowRotate 50s linear infinite',
            }}
          />
        </div>

        {/* Top */}

        <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-8 sm:right-8 sm:top-7 md:left-12 md:right-12">
          <div className="font-serif text-lg text-[#556454] sm:text-xl">
            S<span className="text-[#c98c83]">&</span>N
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-px w-6 bg-[#ba9873]/50 md:w-10" />

            <span className="text-[7px] uppercase tracking-[0.4em] text-[#9a8a7e] md:text-[8px]">
              Wedding Invitation
            </span>

            <span className="h-px w-6 bg-[#ba9873]/50 md:w-10" />
          </div>
        </div>

        {/* OPENING CONTENT */}

        <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center px-2 text-center">
          <div
            className="mb-1 flex items-center gap-3 opacity-0 sm:gap-4"
            style={{
              animation: 'softReveal 1s ease-out 0.3s forwards',
            }}
          >
            <span className="h-px w-7 bg-[#c69c72] sm:w-10" />

            <span className="text-[7px] uppercase tracking-[0.4em] text-[#8c9687] sm:text-[8px] sm:tracking-[0.55em]">
              Save the date
            </span>

            <span className="h-px w-7 bg-[#c69c72] sm:w-10" />
          </div>

          {/* FLOWER */}

          <div className="relative mt-1 flex h-[285px] w-[285px] items-center justify-center xs:h-[320px] xs:w-[320px] sm:h-[370px] sm:w-[370px] md:h-[420px] md:w-[420px]">
            <div
              className="absolute h-[220px] w-[220px] rounded-full bg-[#d99b91]/20 blur-[65px] sm:h-[290px] sm:w-[290px] sm:blur-[80px]"
              style={{
                animation: 'flowerGlow 4s ease-in-out infinite',
              }}
            />

            {flowerPetals.map((color, index) => (
              <div
                key={index}
                className="absolute h-[132px] w-[79px] rounded-[100%_0_100%_0] shadow-[0_15px_40px_rgba(110,70,65,.08)] sm:h-[160px] sm:w-[96px] md:h-[175px] md:w-[105px]"
                style={{
                  background: `linear-gradient(145deg, ${color}, ${color}cc)`,
                  transform: `rotate(${index * 45}deg) translateY(-48px)`,
                  transformOrigin: 'bottom center',
                  animation: `petalBloom 1.8s cubic-bezier(.16,1,.3,1) ${
                    0.45 + index * 0.12
                  }s forwards`,
                  opacity: 0,
                }}
              />
            ))}

            {[30, 150, 270].map((rotation, index) => (
              <div
                key={rotation}
                className="absolute h-[95px] w-[58px] rounded-[100%_0_100%_0] bg-[#f0c0b6] sm:h-[115px] sm:w-[70px] md:h-[125px] md:w-[76px]"
                style={{
                  transform: `rotate(${rotation}deg) translateY(-32px)`,
                  transformOrigin: 'bottom center',
                  animation: `innerBloom 1.5s cubic-bezier(.16,1,.3,1) ${
                    1.2 + index * 0.18
                  }s forwards`,
                  opacity: 0,
                }}
              />
            ))}

            {/* CENTER */}

            {/* <div
              className="absolute flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#f4dda7]/70 bg-[#dcb76e] shadow-[0_0_45px_rgba(210,170,90,.4)] sm:h-[68px] sm:w-[68px] md:h-[76px] md:w-[76px]"
              style={{
                animation:
                  'centerBloom 1.4s cubic-bezier(.16,1,.3,1) 1.8s forwards',
                opacity: 0,
              }}
            >
              <div className="h-7 w-7 rounded-full border border-white/40 sm:h-9 sm:w-9" />

              <div className="absolute h-2 w-2 rounded-full bg-[#a97842]" />
            </div> */}

            {/* NAMES */}

            <div className="absolute left-1/2 top-[66px] z-30 w-full -translate-x-1/2 sm:top-[78px] md:top-[94px]">
              <div className="flex justify-center">
                {'SURABHI'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="font-serif text-[25px] font-light tracking-[0.015em] text-[#3d4c3e] opacity-0 xs:text-[29px] sm:text-[36px] md:text-[46px]"
                    style={{
                      animation: `letterBloom 1.15s cubic-bezier(.16,1,.3,1) ${
                        2.25 + index * 0.1
                      }s forwards`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div
                className="my-0.5 font-serif text-2xl italic text-[#c98c83] opacity-0 sm:text-3xl"
                style={{
                  animation: 'softReveal 1.1s ease-out 3.05s forwards',
                }}
              >
                &
              </div>

              <div className="flex justify-center">
                {'NANDHU'.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="font-serif text-[25px] font-light tracking-[0.015em] text-[#3d4c3e] opacity-0 xs:text-[29px] sm:text-[36px] md:text-[46px]"
                    style={{
                      animation: `letterBloom 1.15s cubic-bezier(.16,1,.3,1) ${
                        3.3 + index * 0.1
                      }s forwards`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <p
                className="mt-2 text-[5px] uppercase tracking-[0.25em] text-[#889286] opacity-0 sm:text-[7px] sm:tracking-[0.4em]"
                style={{
                  animation: 'softReveal 1s ease-out 4.15s forwards',
                }}
              >
                Two hearts · One beautiful beginning
              </p>
            </div>
          </div>

          {/* DATE */}

          <div
            className="mt-[-4px] opacity-0 sm:mt-[-10px]"
            style={{
              animation: 'softReveal 1s ease-out 4.55s forwards',
            }}
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="h-px w-7 bg-[#c69d73] sm:w-12" />

              <span className="font-serif text-[10px] tracking-[0.22em] text-[#5e6d5d] sm:text-sm sm:tracking-[0.3em]">
                13 · 12 · 2026
              </span>

              <span className="h-px w-7 bg-[#c69d73] sm:w-12" />
            </div>
          </div>

          {/* BUTTON */}

          <button
            onClick={openInvitation}
            className="group mt-6 flex items-center gap-3 bg-[#506451] px-7 py-3.5 text-[8px] uppercase tracking-[0.3em] text-white opacity-0 shadow-[0_18px_45px_rgba(50,70,50,.2)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#405342] sm:mt-8 sm:px-10 sm:py-4 sm:text-[9px]"
            style={{
              animation: 'buttonReveal 1.1s ease-out 4.95s forwards',
            }}
          >
            Open Invitation
            <Music
              size={12}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:rotate-12"
            />
          </button>

          <p
            className="mt-3 text-[6px] uppercase tracking-[0.25em] text-[#9b9188] opacity-0 sm:mt-4 sm:text-[7px]"
            style={{
              animation: 'softReveal 1s ease-out 5.4s forwards',
            }}
          >
            Sound on for the full experience
          </p>
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      {opened && (
        <>
          <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <button
                onClick={() => scrollToSection('home')}
                className="font-serif text-xl text-[#405141]"
              >
                S<span className="text-[#c98c83]">&</span>N
              </button>

              {/* DESKTOP NAV */}

              <nav className="hidden items-center gap-8 rounded-full border border-white/50 bg-[#f9f5ee]/80 px-6 py-3 shadow-[0_15px_50px_rgba(50,60,50,.08)] backdrop-blur-xl lg:flex">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
                >
                  Home
                </button>

                <button
                  onClick={() => scrollToSection('story')}
                  className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
                >
                  Our Story
                </button>

                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
                >
                  Gallery
                </button>

                <button
                  onClick={() => scrollToSection('details')}
                  className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
                >
                  Details
                </button>

                <button
                  onClick={() => setShowRsvp(true)}
                  className="rounded-full bg-[#506451] px-5 py-2.5 text-[8px] uppercase tracking-[0.3em] text-white"
                >
                  RSVP
                </button>
              </nav>

              {/* ACTIONS */}

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={toggleMusic}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl sm:h-11 sm:w-11"
                >
                  {musicPlaying ? <Volume2 size={16} /> : <Music size={16} />}
                </button>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl lg:hidden"
                >
                  {menuOpen ? <X size={16} /> : <Menu size={16} />}
                </button>
              </div>
            </div>
          </header>

          {/* MOBILE MENU */}

          {menuOpen && (
            <div className="fixed inset-x-3 top-[72px] z-50 rounded-[24px] border border-white/70 bg-[#faf6ef]/95 p-6 shadow-2xl backdrop-blur-2xl sm:inset-x-5">
              <div className="flex flex-col gap-5">
                {[
                  ['Home', 'home'],
                  ['Our Story', 'story'],
                  ['Gallery', 'gallery'],
                  ['Details', 'details'],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-left text-[9px] uppercase tracking-[0.3em] text-[#506451]"
                  >
                    {label}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowRsvp(true);
                  }}
                  className="rounded-full bg-[#506451] py-3 text-[9px] uppercase tracking-[0.3em] text-white"
                >
                  RSVP
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f2e9] px-5 pb-20 pt-28 sm:px-8 md:px-10 md:pt-32"
      >
        {/* Botanical */}

        <div className="pointer-events-none absolute -left-20 top-[10%] hidden h-[450px] w-[250px] opacity-15 sm:block">
          <div className="absolute left-20 top-0 h-[450px] w-px rotate-[-18deg] bg-[#71806d]" />

          <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />

          <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
        </div>

        <div className="pointer-events-none absolute -bottom-20 right-[-50px] hidden h-[450px] w-[250px] rotate-180 opacity-15 sm:block">
          <div className="absolute left-20 top-0 h-[450px] w-px rotate-[-18deg] bg-[#71806d]" />

          <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />

          <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            {/* TEXT */}

            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-8 bg-[#c59a70] sm:w-10" />

                <span className="text-[7px] uppercase tracking-[0.35em] text-[#879185] sm:text-[8px] sm:tracking-[0.5em]">
                  Together with their families
                </span>
              </div>

              <p className="mt-8 font-serif text-lg italic text-[#9b7f77] sm:mt-10 sm:text-2xl">
                A beautiful beginning
              </p>

              <h1 className="mt-7 font-serif text-[clamp(4.3rem,17vw,7.8rem)] font-light leading-[0.78] tracking-[-0.07em] text-[#384638]">
                Surabhi
              </h1>

              <div className="my-6 flex items-center justify-center gap-4 lg:justify-start">
                <span className="h-px w-12 bg-[#d19b91] sm:w-16" />

                <span className="font-serif text-3xl italic text-[#c98c83] sm:text-4xl">
                  &
                </span>

                <span className="h-px w-12 bg-[#d19b91] sm:w-16" />
              </div>

              <h1 className="font-serif text-[clamp(4.3rem,17vw,7.8rem)] font-light leading-[0.78] tracking-[-0.07em] text-[#384638]">
                Nandhu
              </h1>

              <p className="mx-auto mt-8 max-w-md text-[13px] leading-7 text-[#747c73] sm:text-sm lg:mx-0">
                Two souls, one promise, and a lifetime of memories waiting to
                unfold.
              </p>

              <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start sm:gap-7">
                <div>
                  <p className="font-serif text-3xl text-[#405141] sm:text-4xl">
                    13
                  </p>

                  <p className="mt-1 text-[6px] uppercase tracking-[0.3em] text-[#8b9188] sm:text-[7px]">
                    December
                  </p>
                </div>

                <div className="h-10 w-px bg-[#879284]/20 sm:h-12" />

                <div>
                  <p className="font-serif text-3xl text-[#405141] sm:text-4xl">
                    2026
                  </p>

                  <p className="mt-1 text-[6px] uppercase tracking-[0.3em] text-[#8b9188] sm:text-[7px]">
                    Sunday
                  </p>
                </div>
              </div>
            </div>

            {/* PHOTO */}

            <div className="relative mx-auto mt-4 w-full max-w-[560px] lg:mt-0">
              <div className="absolute -inset-5 rounded-[35px] bg-[#d59b91]/15 blur-[40px] sm:-inset-7 sm:rounded-[45px]" />

              <div className="relative rotate-[1.5deg] overflow-hidden border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(45,55,45,.18)] sm:border-[10px]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={couple1}
                    alt="Surabhi and Nandhu"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#243025]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8">
                    <p className="font-serif text-2xl italic text-white sm:text-3xl">
                      Our forever
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-px w-6 bg-white/60 sm:w-7" />

                      <span className="text-[6px] uppercase tracking-[0.3em] text-white/75 sm:text-[7px]">
                        Begins here
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SECOND IMAGE */}

              <div className="absolute -bottom-7 -left-2 w-[105px] rotate-[-6deg] overflow-hidden border-[5px] border-white bg-white shadow-[0_20px_50px_rgba(40,50,40,.2)] sm:-bottom-10 sm:-left-10 sm:w-[170px] sm:border-[7px]">
                <img
                  src={couple2}
                  alt="Surabhi and Nandhu"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              {/* BADGE */}

              <div className="absolute -right-2 top-7 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#c9a46f]/30 bg-[#f7f0e6]/90 shadow-xl backdrop-blur-xl sm:-right-7 sm:h-28 sm:w-28">
                <div className="text-center">
                  <Crown
                    size={14}
                    strokeWidth={1}
                    className="mx-auto text-[#bb925a] sm:h-[18px] sm:w-[18px]"
                  />

                  <p className="mt-1 font-serif text-base text-[#596557] sm:mt-2 sm:text-lg">
                    13
                  </p>

                  <p className="text-[5px] uppercase tracking-[0.2em] text-[#8d9188] sm:text-[6px] sm:tracking-[0.3em]">
                    December
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('story')}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#849081] sm:bottom-8"
        >
          <span className="text-[6px] uppercase tracking-[0.4em] sm:text-[7px] sm:tracking-[0.5em]">
            Scroll to explore
          </span>

          <ArrowDown size={13} strokeWidth={1} className="animate-bounce" />
        </button>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section
        id="story"
        className="relative overflow-hidden bg-[#ebe5db] px-5 py-28 sm:px-8 sm:py-36 md:py-44"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#b79670]/30 sm:h-12 sm:w-12">
            <Heart size={17} strokeWidth={1} className="text-[#c58b82]" />
          </div>

          <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-[#81877e] sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
            The beginning of forever
          </p>

          <h2 className="mt-6 font-serif text-[clamp(2.8rem,10vw,5.5rem)] font-light leading-[1] text-[#405141]">
            Some moments become
            <br />
            <span className="italic text-[#c88d84]">memories forever.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-7 text-[#777a73] sm:mt-9 sm:text-sm sm:leading-8">
            With grateful hearts and the blessings of our families, we invite
            you to share one of the most beautiful days of our lives.
          </p>

          <div className="mx-auto mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#bd9a70]/50 sm:w-12" />

            <span className="text-xs text-[#bd9a70]">✦</span>

            <span className="h-px w-10 bg-[#bd9a70]/50 sm:w-12" />
          </div>
        </div>
      </section>

      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section
        id="gallery"
        className="relative overflow-hidden bg-[#f8f3ea] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-[7px] uppercase tracking-[0.45em] text-[#839080] sm:text-[8px] sm:tracking-[0.5em]">
                A little glimpse
              </p>

              <h2 className="mt-4 font-serif text-[clamp(3.5rem,12vw,7rem)] font-light tracking-[-0.04em] text-[#3e4d3e]">
                Together
              </h2>

              <p className="mt-5 max-w-sm text-[13px] leading-7 text-[#777e76] sm:text-sm">
                Every photograph holds a little piece of our story.
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="font-serif text-lg italic text-[#b58c82] sm:text-xl">
                “And suddenly, all the love songs were about us.”
              </p>
            </div>
          </div>

          {/* RESPONSIVE GALLERY */}

          <div className="relative mt-14 min-h-[500px] sm:mt-20 sm:min-h-[700px] md:min-h-[850px]">
            {/* MAIN */}

            <div className="absolute left-1/2 top-0 w-[82%] -translate-x-1/2 sm:w-[68%] md:w-[52%]">
              <div className="relative overflow-hidden border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(40,50,40,.16)] sm:border-[10px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={activePhoto === 0 ? couple1 : couple2}
                    alt="Surabhi and Nandhu"
                    className="h-full w-full object-cover transition-all duration-[1800ms]"
                  />
                </div>
              </div>
            </div>

            {/* LEFT IMAGE */}

            <div className="absolute left-0 top-[22%] hidden w-[24%] rotate-[-7deg] sm:block md:left-[3%] md:w-[27%]">
              <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={couple2}
                    alt="Surabhi and Nandhu"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="absolute right-0 top-[30%] hidden w-[24%] rotate-[7deg] sm:block md:right-[3%] md:w-[27%]">
              <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={couple1}
                    alt="Surabhi and Nandhu"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CONTROLS */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-0">
              <div className="flex items-center gap-3 rounded-full border border-[#8b947f]/20 bg-[#f9f4ec]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3">
                <button
                  onClick={() => setActivePhoto(0)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activePhoto === 0
                      ? 'w-7 bg-[#506451] sm:w-8'
                      : 'w-1.5 bg-[#506451]/20'
                  }`}
                />

                <span className="text-[6px] uppercase tracking-[0.3em] text-[#7c857b] sm:text-[7px] sm:tracking-[0.35em]">
                  Our moments
                </span>

                <button
                  onClick={() => setActivePhoto(1)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activePhoto === 1
                      ? 'w-7 bg-[#506451] sm:w-8'
                      : 'w-1.5 bg-[#506451]/20'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <section
        id="details"
        className="relative overflow-hidden bg-[#e9e3d8] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[7px] uppercase tracking-[0.45em] text-[#7f897d] sm:text-[8px] sm:tracking-[0.55em]">
              The celebration
            </p>

            <h2 className="mt-4 font-serif text-[clamp(3.5rem,12vw,7rem)] font-light text-[#405141]">
              Join our day
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2 md:gap-8">
            {/* DATE */}

            <div className="relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-7 shadow-[0_25px_60px_rgba(55,65,55,.08)] backdrop-blur-xl sm:p-10 md:p-14">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4dfcd]/50 blur-[60px] sm:h-40 sm:w-40" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[7px] uppercase tracking-[0.4em] text-[#879084] sm:text-[8px] sm:tracking-[0.45em]">
                    Save the date
                  </p>

                  <CalendarDays
                    size={19}
                    strokeWidth={1}
                    className="text-[#60705e] sm:h-[22px] sm:w-[22px]"
                  />
                </div>

                <div className="mt-12 sm:mt-16">
                  <p className="font-serif text-[70px] font-light leading-none text-[#405141] sm:text-[86px]">
                    13
                  </p>

                  <p className="mt-3 font-serif text-3xl italic text-[#c58b82] sm:mt-4 sm:text-4xl">
                    December
                  </p>

                  <div className="mt-5 h-px w-12 bg-[#bf9b70] sm:mt-6 sm:w-16" />

                  <p className="mt-5 text-[7px] uppercase tracking-[0.3em] text-[#7d857c] sm:mt-6 sm:text-[9px] sm:tracking-[0.35em]">
                    Sunday · 2026
                  </p>
                </div>
              </div>
            </div>

            {/* VENUE */}

            <div className="relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-7 shadow-[0_25px_60px_rgba(75,55,50,.08)] backdrop-blur-xl sm:p-10 md:p-14">
              <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#e9c2b8]/40 blur-[65px] sm:h-48 sm:w-48" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="text-[7px] uppercase tracking-[0.4em] text-[#978780] sm:text-[8px] sm:tracking-[0.45em]">
                    The venue
                  </p>

                  <MapPin
                    size={19}
                    strokeWidth={1}
                    className="text-[#c2867e] sm:h-[22px] sm:w-[22px]"
                  />
                </div>

                <div className="mt-12 sm:mt-16">
                  <h3 className="max-w-md font-serif text-[clamp(2.4rem,8vw,3.5rem)] font-light leading-[1.05] text-[#405141]">
                    SB Convention Center
                  </h3>

                  <p className="mt-5 text-[13px] text-[#7b8179] sm:text-sm">
                    Mullannbazar, Kerala
                  </p>

                  <button
                    onClick={openLocation}
                    className="mt-8 inline-flex items-center gap-2 border border-[#526653]/25 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white sm:mt-10 sm:px-6 sm:py-3 sm:text-[8px]"
                  >
                    <Navigation size={11} />
                    View Location
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* STRIP */}

          <div className="mt-5 flex flex-col items-center gap-5 border border-white/60 bg-[#f8f4ec]/60 px-6 py-6 text-center backdrop-blur-xl sm:mt-8 sm:px-8 sm:py-7 md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-[6px] uppercase tracking-[0.35em] text-[#899187] sm:text-[7px] sm:tracking-[0.4em]">
                A day filled with love
              </p>

              <p className="mt-2 font-serif text-lg italic text-[#405141] sm:text-2xl">
                We would be honoured to have you with us.
              </p>
            </div>

            <div className="hidden h-10 w-px bg-[#c39c71] md:block" />

            <p className="font-serif text-xl text-[#405141] sm:text-2xl">
              Surabhi <span className="text-[#c88d84]">&</span> Nandhu
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          RSVP
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f2e9] px-5 py-28 text-center sm:px-8 sm:py-36 md:py-48">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c59b70]/30 sm:h-14 sm:w-14">
            <Sparkles size={18} strokeWidth={1} className="text-[#bd925d]" />
          </div>

          <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-[#828b80] sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
            A special invitation
          </p>

          <h2 className="mt-6 font-serif text-[clamp(3.4rem,12vw,7rem)] font-light leading-[0.95] text-[#405141]">
            Come celebrate
            <br />
            <span className="italic text-[#c88d84]">love with us.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[13px] leading-7 text-[#747a72] sm:mt-9 sm:text-sm sm:leading-8">
            Your presence, blessings and love would mean the world to us as we
            begin this beautiful new chapter together.
          </p>

          {!rsvpSubmitted ? (
            <button
              onClick={() => setShowRsvp(true)}
              className="mt-9 rounded-full bg-[#506451] px-8 py-3.5 text-[7px] uppercase tracking-[0.3em] text-white shadow-[0_18px_45px_rgba(55,75,55,.2)] transition duration-500 hover:-translate-y-1 hover:bg-[#405342] sm:mt-10 sm:px-10 sm:py-4 sm:text-[8px]"
            >
              Confirm Attendance
            </button>
          ) : (
            <div className="mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-[#506451] px-6 py-3.5 text-white shadow-xl sm:mt-10 sm:px-8 sm:py-4">
              <Check size={14} />

              <span className="text-[7px] uppercase tracking-[0.25em] sm:text-[8px] sm:tracking-[0.3em]">
                Thank you for joining us
              </span>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          RSVP MODAL
      ===================================================== */}

      {showRsvp && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-[#263026]/65 px-4 py-6 backdrop-blur-xl sm:px-5">
          <div className="relative my-auto w-full max-w-md overflow-hidden border border-white/60 bg-[#f8f3ea] p-6 shadow-[0_40px_100px_rgba(0,0,0,.25)] sm:p-10">
            <button
              onClick={() => setShowRsvp(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e7ece2] text-[#506451] transition hover:rotate-90 sm:right-5 sm:top-5"
            >
              <X size={15} />
            </button>

            <div className="text-center">
              <Heart
                size={22}
                strokeWidth={1}
                className="mx-auto text-[#c88c83]"
              />

              <p className="mt-4 text-[7px] uppercase tracking-[0.35em] text-[#899187]">
                RSVP
              </p>

              <h3 className="mt-3 font-serif text-4xl font-light text-[#405141] sm:text-5xl">
                You're invited
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-[#777e76] sm:mt-4 sm:text-sm sm:leading-7">
                We can't wait to celebrate this beautiful day with you.
              </p>
            </div>

            <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-[#526653]/10 bg-white px-4 py-3.5 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40 sm:px-5 sm:py-4"
              />

              <input
                type="number"
                placeholder="Number of guests"
                className="w-full border border-[#526653]/10 bg-white px-4 py-3.5 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40 sm:px-5 sm:py-4"
              />

              <button
                onClick={submitRsvp}
                className="w-full bg-[#506451] py-3.5 text-[7px] uppercase tracking-[0.3em] text-white transition duration-500 hover:bg-[#405342] sm:py-4 sm:text-[8px]"
              >
                Confirm Attendance
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#435646] px-5 py-28 text-center text-white sm:px-8 sm:py-36 md:py-48">
        <div className="pointer-events-none absolute -left-32 top-0 opacity-[0.07]">
          <svg width="360" height="500" viewBox="0 0 450 600" fill="none">
            <path
              d="M350 0C300 130 180 200 120 330C70 440 100 530 0 600"
              stroke="white"
              strokeWidth="2"
            />

            <ellipse
              cx="275"
              cy="120"
              rx="45"
              ry="18"
              transform="rotate(-35 275 120)"
              stroke="white"
            />

            <ellipse
              cx="190"
              cy="230"
              rx="50"
              ry="19"
              transform="rotate(25 190 230)"
              stroke="white"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute -bottom-40 -right-20 rotate-180 opacity-[0.06]">
          <svg width="360" height="500" viewBox="0 0 450 600" fill="none">
            <path
              d="M350 0C300 130 180 200 120 330C70 440 100 530 0 600"
              stroke="#efc1b7"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <Heart
            size={28}
            strokeWidth={1}
            className="mx-auto text-[#efbeb4] sm:h-[31px] sm:w-[31px]"
            style={{
              animation: 'heartbeat 2.5s ease-in-out infinite',
            }}
          />

          <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-white/45 sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
            Together forever
          </p>

          <h2 className="mt-6 font-serif text-[clamp(3.6rem,13vw,8rem)] font-light leading-[0.85] tracking-[-0.04em]">
            Surabhi
            <span className="mx-2 text-[#efbeb4] sm:mx-3">&</span>
            Nandhu
          </h2>

          <div className="mx-auto mt-8 flex items-center justify-center gap-4 sm:mt-10">
            <span className="h-px w-12 bg-white/20 sm:w-16" />

            <span className="text-[#dfba75]">✦</span>

            <span className="h-px w-12 bg-white/20 sm:w-16" />
          </div>

          <p className="mt-7 font-serif text-xl italic text-white/70 sm:mt-9 sm:text-2xl">
            December 13, 2026
          </p>

          <p className="mx-auto mt-7 max-w-md text-[13px] leading-7 text-white/40 sm:mt-8 sm:text-sm">
            We cannot wait to begin this beautiful chapter surrounded by the
            people we love.
          </p>

          <p className="mt-10 text-[6px] uppercase tracking-[0.4em] text-white/25 sm:mt-12 sm:text-[7px] sm:tracking-[0.5em]">
            Forever begins here
          </p>
        </div>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes premiumPetalFall {
          0% {
            transform: translate3d(0, -40px, 0) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.7;
          }

          50% {
            transform: translate3d(40px, 50vh, 0) rotate(180deg);
            opacity: 0.5;
          }

          100% {
            transform: translate3d(-40px, 110vh, 0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes slowRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes flowerGlow {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.12);
            opacity: 0.7;
          }
        }

        @keyframes petalBloom {
          0% {
            opacity: 0;
            transform: scale(0.05) rotate(0deg) translateY(0);
          }

          60% {
            opacity: 0.9;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes innerBloom {
          0% {
            opacity: 0;
            transform: scale(0.1);
          }

          65% {
            opacity: 1;
            transform: scale(1.1);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes centerBloom {
          0% {
            opacity: 0;
            transform: scale(0);
          }

          65% {
            opacity: 1;
            transform: scale(1.18);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes letterBloom {
          0% {
            opacity: 0;
            transform: translateY(65px) scale(0.35) rotateX(70deg);
            filter: blur(13px);
          }

          35% {
            opacity: 0.55;
            filter: blur(5px);
          }

          70% {
            transform: translateY(-8px) scale(1.07) rotateX(0deg);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0deg);
            filter: blur(0);
          }
        }

        @keyframes softReveal {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(25px) scale(0.9);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }

          15% {
            transform: scale(1.18);
          }

          30% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.12);
          }

          60% {
            transform: scale(1);
          }
        }

        @media (max-width: 380px) {
          .xs\\:text-\\[29px\\] {
            font-size: 25px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Invitation;

// import { useEffect, useRef, useState } from 'react';
// import {
//   ArrowDown,
//   CalendarDays,
//   Check,
//   Crown,
//   Heart,
//   MapPin,
//   Menu,
//   Music,
//   Navigation,
//   Sparkles,
//   Volume2,
//   X,
// } from 'lucide-react';

// import couple1 from './assets/couple1.jpg';
// import couple2 from './assets/couple2.jpg';

// const petals = [
//   { left: '3%', delay: '0s', duration: '15s', size: 11 },
//   { left: '11%', delay: '4s', duration: '18s', size: 8 },
//   { left: '20%', delay: '2s', duration: '16s', size: 13 },
//   { left: '31%', delay: '7s', duration: '19s', size: 9 },
//   { left: '43%', delay: '1s', duration: '17s', size: 12 },
//   { left: '55%', delay: '5s', duration: '20s', size: 8 },
//   { left: '66%', delay: '3s', duration: '17s', size: 13 },
//   { left: '77%', delay: '8s', duration: '19s', size: 10 },
//   { left: '89%', delay: '2s', duration: '16s', size: 12 },
//   { left: '96%', delay: '6s', duration: '18s', size: 9 },
// ];

// const galleryImages = [couple1, couple2];

// const flowerPetals = [
//   '#d59b91',
//   '#e5aaa1',
//   '#cc8b82',
//   '#eab8ae',
//   '#d99b91',
//   '#e7afa5',
//   '#c9857d',
//   '#efc1b8',
// ];

// const Invitation = () => {
//   const [opened, setOpened] = useState(false);
//   const [musicPlaying, setMusicPlaying] = useState(false);
//   const [showRsvp, setShowRsvp] = useState(false);
//   const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
//   const [activePhoto, setActivePhoto] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   const audioRef = useRef(null);

//   useEffect(() => {
//     document.body.style.overflow = opened ? 'auto' : 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [opened]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActivePhoto((prev) => (prev === 0 ? 1 : 0));
//     }, 6000);

//     return () => clearInterval(timer);
//   }, []);

//   const openInvitation = async () => {
//     setOpened(true);

//     if (audioRef.current) {
//       try {
//         await audioRef.current.play();
//         setMusicPlaying(true);
//       } catch (error) {
//         console.log('Music autoplay blocked:', error);
//       }
//     }
//   };

//   const toggleMusic = async () => {
//     if (!audioRef.current) return;

//     if (musicPlaying) {
//       audioRef.current.pause();
//       setMusicPlaying(false);
//       return;
//     }

//     try {
//       await audioRef.current.play();
//       setMusicPlaying(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const openLocation = () => {
//     window.open(
//       'https://www.google.com/maps/search/?api=1&query=SB+Convention+Center+Mullannbazar',
//       '_blank',
//       'noopener,noreferrer',
//     );
//   };

//   const submitRsvp = () => {
//     setRsvpSubmitted(true);
//     setShowRsvp(false);
//   };

//   const scrollToSection = (id) => {
//     setMenuOpen(false);

//     const element = document.getElementById(id);

//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#f6f1e9] text-[#344236] selection:bg-[#c98d84] selection:text-white">
//       {/* =========================================================
//           AUDIO
//       ========================================================= */}

//       <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />

//       {/* =========================================================
//           GLOBAL GRAIN
//       ========================================================= */}

//       <div className="pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-multiply">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               'url("data:image/svg+xml,%3Csvg viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.4%27/%3E%3C/svg%3E")',
//           }}
//         />
//       </div>

//       {/* =========================================================
//           FALLING PETALS
//       ========================================================= */}

//       {opened &&
//         petals.map((petal, index) => (
//           <div
//             key={index}
//             className="pointer-events-none fixed top-[-40px] z-[60]"
//             style={{
//               left: petal.left,
//               animation: `premiumPetalFall ${petal.duration} linear ${petal.delay} infinite`,
//             }}
//           >
//             <div
//               className="rounded-[100%_0_100%_0] bg-[#d79a90]/60"
//               style={{
//                 width: petal.size,
//                 height: petal.size * 0.65,
//               }}
//             />
//           </div>
//         ))}

//       {/* =========================================================
//           OPENING COVER
//       ========================================================= */}

//       <div
//         className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f5efe7] transition-all duration-[1800ms] ease-[cubic-bezier(.77,0,.18,1)] ${
//           opened
//             ? 'pointer-events-none -translate-y-full opacity-0'
//             : 'translate-y-0 opacity-100'
//         }`}
//       >
//         {/* Editorial background */}

//         <div className="absolute inset-0">
//           <div className="absolute left-[-20%] top-[-15%] h-[600px] w-[600px] rounded-full bg-[#d9e0d1]/50 blur-[130px]" />

//           <div className="absolute bottom-[-20%] right-[-15%] h-[600px] w-[600px] rounded-full bg-[#e7b8ad]/35 blur-[140px]" />

//           <div className="absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9b846d]/10" />

//           <div
//             className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7d8b78]/10"
//             style={{
//               animation: 'slowRotate 50s linear infinite',
//             }}
//           />
//         </div>

//         {/* Top branding */}

//         <div className="absolute left-7 right-7 top-7 flex items-center justify-between md:left-12 md:right-12 md:top-10">
//           <div className="text-[8px] uppercase tracking-[0.5em] text-[#7b8877]">
//             S & N
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-[#ba9873]/50" />
//             <span className="text-[8px] uppercase tracking-[0.4em] text-[#9a8a7e]">
//               Wedding Invitation
//             </span>
//             <span className="h-px w-8 bg-[#ba9873]/50" />
//           </div>
//         </div>

//         {/* Main cover */}

//         <div className="relative z-10 flex w-full max-w-[760px] flex-col items-center px-6 text-center">
//           <div
//             className="mb-2 flex items-center gap-4 opacity-0"
//             style={{
//               animation: 'softReveal 1s ease-out 0.3s forwards',
//             }}
//           >
//             <span className="h-px w-10 bg-[#c69c72]" />

//             <span className="text-[8px] uppercase tracking-[0.55em] text-[#8c9687]">
//               Save the date
//             </span>

//             <span className="h-px w-10 bg-[#c69c72]" />
//           </div>

//           {/* Flower */}

//           <div className="relative mt-3 flex h-[360px] w-[360px] items-center justify-center md:h-[420px] md:w-[420px]">
//             {/* Glow */}

//             <div
//               className="absolute h-[300px] w-[300px] rounded-full bg-[#d99b91]/20 blur-[80px]"
//               style={{
//                 animation: 'flowerGlow 4s ease-in-out infinite',
//               }}
//             />

//             {/* Outer petals */}

//             {flowerPetals.map((color, index) => (
//               <div
//                 key={index}
//                 className="absolute h-[175px] w-[105px] rounded-[100%_0_100%_0] shadow-[0_20px_60px_rgba(110,70,65,.09)]"
//                 style={{
//                   background: `linear-gradient(145deg, ${color}, ${color}cc)`,
//                   transform: `rotate(${index * 45}deg) translateY(-62px)`,
//                   transformOrigin: 'bottom center',
//                   animation: `petalBloom 1.8s cubic-bezier(.16,1,.3,1) ${
//                     0.45 + index * 0.12
//                   }s forwards`,
//                   opacity: 0,
//                 }}
//               />
//             ))}

//             {/* Inner petals */}

//             {[30, 150, 270].map((rotation, index) => (
//               <div
//                 key={rotation}
//                 className="absolute h-[125px] w-[76px] rounded-[100%_0_100%_0] bg-[#f0c0b6]"
//                 style={{
//                   transform: `rotate(${rotation}deg) translateY(-42px)`,
//                   transformOrigin: 'bottom center',
//                   animation: `innerBloom 1.5s cubic-bezier(.16,1,.3,1) ${
//                     1.2 + index * 0.18
//                   }s forwards`,
//                   opacity: 0,
//                 }}
//               />
//             ))}

//             {/* Flower center */}

//             <div
//               className="absolute flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#f4dda7]/70 bg-[#dcb76e] shadow-[0_0_60px_rgba(210,170,90,.45)]"
//               style={{
//                 animation:
//                   'centerBloom 1.4s cubic-bezier(.16,1,.3,1) 1.8s forwards',
//                 opacity: 0,
//               }}
//             >
//               <div className="h-10 w-10 rounded-full border border-white/40" />

//               <div className="absolute h-2.5 w-2.5 rounded-full bg-[#a97842]" />
//             </div>

//             {/* =================================================
//                 LETTERS BLOOMING FROM FLOWER
//             ================================================= */}

//             <div className="absolute left-1/2 top-[82px] z-30 w-[360px] -translate-x-1/2 md:top-[94px]">
//               <div className="flex justify-center">
//                 {'SURABHI'.split('').map((letter, index) => (
//                   <span
//                     key={index}
//                     className="font-serif text-[34px] font-light tracking-[0.025em] text-[#3d4c3e] opacity-0 md:text-[46px]"
//                     style={{
//                       animation: `letterBloom 1.15s cubic-bezier(.16,1,.3,1) ${
//                         2.25 + index * 0.1
//                       }s forwards`,
//                     }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </div>

//               <div
//                 className="my-1 font-serif text-3xl italic text-[#c98c83] opacity-0"
//                 style={{
//                   animation: 'softReveal 1.1s ease-out 3.05s forwards',
//                 }}
//               >
//                 &
//               </div>

//               <div className="flex justify-center">
//                 {'NANDHU'.split('').map((letter, index) => (
//                   <span
//                     key={index}
//                     className="font-serif text-[34px] font-light tracking-[0.025em] text-[#3d4c3e] opacity-0 md:text-[46px]"
//                     style={{
//                       animation: `letterBloom 1.15s cubic-bezier(.16,1,.3,1) ${
//                         3.3 + index * 0.1
//                       }s forwards`,
//                     }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </div>

//               <p
//                 className="mt-3 text-[7px] uppercase tracking-[0.4em] text-[#889286] opacity-0"
//                 style={{
//                   animation: 'softReveal 1s ease-out 4.15s forwards',
//                 }}
//               >
//                 Two hearts · One beautiful beginning
//               </p>
//             </div>
//           </div>

//           {/* Date */}

//           <div
//             className="mt-[-10px] opacity-0"
//             style={{
//               animation: 'softReveal 1s ease-out 4.55s forwards',
//             }}
//           >
//             <div className="flex items-center justify-center gap-4">
//               <span className="h-px w-12 bg-[#c69d73]" />

//               <span className="font-serif text-sm tracking-[0.3em] text-[#5e6d5d]">
//                 13 · 12 · 2026
//               </span>

//               <span className="h-px w-12 bg-[#c69d73]" />
//             </div>
//           </div>

//           {/* Enter button */}

//           <button
//             onClick={openInvitation}
//             className="group mt-8 flex items-center gap-4 border border-[#506451] bg-[#506451] px-10 py-4 text-[9px] uppercase tracking-[0.35em] text-white opacity-0 shadow-[0_20px_60px_rgba(50,70,50,.2)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#405342] hover:shadow-[0_25px_70px_rgba(50,70,50,.3)]"
//             style={{
//               animation: 'buttonReveal 1.1s ease-out 4.95s forwards',
//             }}
//           >
//             <span>Open Invitation</span>

//             <Music
//               size={13}
//               strokeWidth={1.5}
//               className="transition-transform duration-500 group-hover:rotate-12"
//             />
//           </button>

//           <p
//             className="mt-4 text-[7px] uppercase tracking-[0.35em] text-[#9b9188] opacity-0"
//             style={{
//               animation: 'softReveal 1s ease-out 5.4s forwards',
//             }}
//           >
//             Sound on for the full experience
//           </p>
//         </div>
//       </div>

//       {/* =========================================================
//           NAVIGATION
//       ========================================================= */}

//       {opened && (
//         <>
//           <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-10">
//             <div className="mx-auto flex max-w-7xl items-center justify-between">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="font-serif text-xl text-[#405141]"
//               >
//                 S<span className="mx-1 text-[#c98c83]">&</span>N
//               </button>

//               <nav className="hidden items-center gap-9 rounded-full border border-white/50 bg-[#f9f5ee]/75 px-7 py-3 shadow-[0_15px_50px_rgba(50,60,50,.08)] backdrop-blur-xl md:flex">
//                 <button
//                   onClick={() => scrollToSection('home')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] transition hover:text-[#c88b81]"
//                 >
//                   Home
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('story')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] transition hover:text-[#c88b81]"
//                 >
//                   Our Story
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('details')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] transition hover:text-[#c88b81]"
//                 >
//                   Details
//                 </button>

//                 <button
//                   onClick={() => setShowRsvp(true)}
//                   className="rounded-full bg-[#506451] px-5 py-2.5 text-[8px] uppercase tracking-[0.3em] text-white transition hover:bg-[#405342]"
//                 >
//                   RSVP
//                 </button>
//               </nav>

//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={toggleMusic}
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/75 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl transition hover:scale-105"
//                 >
//                   {musicPlaying ? (
//                     <Volume2 size={17} strokeWidth={1.5} />
//                   ) : (
//                     <Music size={17} strokeWidth={1.5} />
//                   )}
//                 </button>

//                 <button
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/75 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl md:hidden"
//                 >
//                   {menuOpen ? <X size={17} /> : <Menu size={17} />}
//                 </button>
//               </div>
//             </div>
//           </header>

//           {menuOpen && (
//             <div className="fixed inset-x-4 top-20 z-50 rounded-[25px] border border-white/60 bg-[#faf6ef]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden">
//               <div className="flex flex-col gap-5">
//                 <button
//                   onClick={() => scrollToSection('home')}
//                   className="text-left text-[9px] uppercase tracking-[0.3em] text-[#506451]"
//                 >
//                   Home
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('story')}
//                   className="text-left text-[9px] uppercase tracking-[0.3em] text-[#506451]"
//                 >
//                   Our Story
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('details')}
//                   className="text-left text-[9px] uppercase tracking-[0.3em] text-[#506451]"
//                 >
//                   Details
//                 </button>

//                 <button
//                   onClick={() => {
//                     setMenuOpen(false);
//                     setShowRsvp(true);
//                   }}
//                   className="rounded-full bg-[#506451] py-3 text-[9px] uppercase tracking-[0.3em] text-white"
//                 >
//                   RSVP
//                 </button>
//               </div>
//             </div>
//           )}
//         </>
//       )}

//       {/* =========================================================
//           HERO
//       ========================================================= */}

//       <section
//         id="home"
//         className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f2e9] px-6 pb-20 pt-32 md:px-10"
//       >
//         {/* Decorative botanical lines */}

//         <div className="pointer-events-none absolute left-[-80px] top-[12%] h-[500px] w-[300px] opacity-20">
//           <div className="absolute left-20 top-0 h-[500px] w-px rotate-[-18deg] bg-[#71806d]" />
//           <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />
//           <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
//           <div className="absolute left-0 top-80 h-24 w-10 rotate-[-40deg] rounded-[100%_0] border border-[#71806d]" />
//         </div>

//         <div className="pointer-events-none absolute bottom-[-100px] right-[-60px] h-[500px] w-[300px] rotate-180 opacity-20">
//           <div className="absolute left-20 top-0 h-[500px] w-px rotate-[-18deg] bg-[#71806d]" />
//           <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />
//           <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
//         </div>

//         <div className="absolute right-[10%] top-[20%] h-2 w-2 rounded-full bg-[#c79b69] opacity-60" />

//         <div className="absolute left-[15%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-[#c98c83] opacity-60" />

//         <div className="relative z-10 mx-auto w-full max-w-7xl">
//           <div className="grid items-center gap-16 md:grid-cols-[0.8fr_1.2fr]">
//             <div className="text-center md:text-left">
//               <div className="flex items-center justify-center gap-3 md:justify-start">
//                 <span className="h-px w-10 bg-[#c59a70]" />

//                 <span className="text-[8px] uppercase tracking-[0.5em] text-[#879185]">
//                   Together with their families
//                 </span>
//               </div>

//               <p className="mt-10 font-serif text-xl italic text-[#9b7f77] md:text-2xl">
//                 A beautiful beginning
//               </p>

//               <h1 className="mt-8 font-serif text-[76px] font-light leading-[0.78] tracking-[-0.07em] text-[#384638] sm:text-[105px] md:text-[125px]">
//                 Surabhi
//               </h1>

//               <div className="my-7 flex items-center justify-center gap-4 md:justify-start">
//                 <span className="h-px w-16 bg-[#d19b91]" />

//                 <span className="font-serif text-4xl italic text-[#c98c83]">
//                   &
//                 </span>

//                 <span className="h-px w-16 bg-[#d19b91]" />
//               </div>

//               <h1 className="font-serif text-[76px] font-light leading-[0.78] tracking-[-0.07em] text-[#384638] sm:text-[105px] md:text-[125px]">
//                 Nandhu
//               </h1>

//               <p className="mt-10 max-w-md text-sm leading-8 text-[#747c73] md:text-left">
//                 Two souls, one promise, and a lifetime of memories waiting to
//                 unfold.
//               </p>

//               <div className="mt-10 flex items-center justify-center gap-7 md:justify-start">
//                 <div>
//                   <p className="font-serif text-4xl text-[#405141]">13</p>
//                   <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#8b9188]">
//                     December
//                   </p>
//                 </div>

//                 <div className="h-12 w-px bg-[#879284]/20" />

//                 <div>
//                   <p className="font-serif text-4xl text-[#405141]">2026</p>
//                   <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#8b9188]">
//                     Sunday
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Hero photograph */}

//             <div className="relative mx-auto w-full max-w-[560px]">
//               <div className="absolute -inset-7 rounded-[45px] bg-[#d59b91]/15 blur-[45px]" />

//               <div className="relative rotate-[2deg] overflow-hidden rounded-[2px] border-[10px] border-white bg-white p-1 shadow-[0_45px_100px_rgba(45,55,45,.2)]">
//                 <div className="relative aspect-[4/5] overflow-hidden">
//                   <img
//                     src={couple1}
//                     alt="Surabhi and Nandhu"
//                     className="h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#243025]/45 via-transparent to-[#243025]/5" />

//                   <div className="absolute bottom-8 left-8">
//                     <p className="font-serif text-3xl italic text-white">
//                       Our forever
//                     </p>

//                     <div className="mt-2 flex items-center gap-3">
//                       <span className="h-px w-7 bg-white/60" />

//                       <span className="text-[7px] uppercase tracking-[0.4em] text-white/75">
//                         Begins here
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating mini photo */}

//               <div className="absolute -bottom-10 -left-7 w-[145px] rotate-[-6deg] overflow-hidden border-[6px] border-white bg-white shadow-[0_25px_60px_rgba(40,50,40,.2)] md:-left-16 md:w-[185px]">
//                 <img
//                   src={couple2}
//                   alt="Surabhi and Nandhu"
//                   className="aspect-[4/5] w-full object-cover"
//                 />
//               </div>

//               {/* Date badge */}

//               <div className="absolute -right-5 top-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#c9a46f]/30 bg-[#f7f0e6]/90 shadow-xl backdrop-blur-xl md:-right-10 md:h-28 md:w-28">
//                 <div className="text-center">
//                   <Crown
//                     size={18}
//                     strokeWidth={1}
//                     className="mx-auto text-[#bb925a]"
//                   />

//                   <p className="mt-2 font-serif text-lg text-[#596557]">13</p>

//                   <p className="text-[6px] uppercase tracking-[0.3em] text-[#8d9188]">
//                     December
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={() => scrollToSection('story')}
//           className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[#849081]"
//         >
//           <span className="text-[7px] uppercase tracking-[0.5em]">
//             Scroll to explore
//           </span>

//           <ArrowDown size={14} strokeWidth={1} className="animate-bounce" />
//         </button>
//       </section>

//       {/* =========================================================
//           INTRODUCTION
//       ========================================================= */}

//       <section
//         id="story"
//         className="relative overflow-hidden bg-[#ebe5db] px-6 py-32 md:py-44"
//       >
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b79670]/30">
//             <Heart size={19} strokeWidth={1} className="text-[#c58b82]" />
//           </div>

//           <p className="mt-8 text-[8px] uppercase tracking-[0.55em] text-[#81877e]">
//             The beginning of forever
//           </p>

//           <h2 className="mt-8 font-serif text-5xl font-light leading-tight text-[#405141] md:text-7xl">
//             Some moments become
//             <br />
//             <span className="italic text-[#c88d84]">memories forever.</span>
//           </h2>

//           <p className="mx-auto mt-9 max-w-2xl text-sm leading-8 text-[#777a73]">
//             With grateful hearts and the blessings of our families, we invite
//             you to share one of the most beautiful days of our lives.
//           </p>

//           <div className="mx-auto mt-12 flex items-center justify-center gap-4">
//             <span className="h-px w-12 bg-[#bd9a70]/50" />
//             <span className="text-xs text-[#bd9a70]">✦</span>
//             <span className="h-px w-12 bg-[#bd9a70]/50" />
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CINEMATIC GALLERY
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#f8f3ea] px-5 py-28 md:px-10 md:py-40">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid items-end gap-10 md:grid-cols-[0.8fr_1.2fr]">
//             <div>
//               <p className="text-[8px] uppercase tracking-[0.5em] text-[#839080]">
//                 A little glimpse
//               </p>

//               <h2 className="mt-5 font-serif text-6xl font-light tracking-[-0.04em] text-[#3e4d3e] md:text-8xl">
//                 Together
//               </h2>

//               <p className="mt-6 max-w-sm text-sm leading-7 text-[#777e76]">
//                 Every photograph holds a little piece of our story.
//               </p>
//             </div>

//             <div className="text-left md:text-right">
//               <p className="font-serif text-xl italic text-[#b58c82]">
//                 “And suddenly, all the love songs were about us.”
//               </p>
//             </div>
//           </div>

//           {/* Gallery */}

//           <div className="relative mt-20 min-h-[650px] md:min-h-[850px]">
//             {/* Main image */}

//             <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2 md:w-[52%]">
//               <div className="relative overflow-hidden border-[10px] border-white bg-white p-1 shadow-[0_50px_100px_rgba(40,50,40,.16)]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={galleryImages[activePhoto]}
//                     alt="Surabhi and Nandhu"
//                     className="h-full w-full object-cover transition-all duration-[1800ms]"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Background photo */}

//             <div className="absolute left-[3%] top-[20%] hidden w-[27%] rotate-[-7deg] md:block">
//               <div className="border-[8px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(40,50,40,.14)]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={couple2}
//                     alt="Surabhi and Nandhu"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Second background photo */}

//             <div className="absolute right-[3%] top-[30%] hidden w-[27%] rotate-[7deg] md:block">
//               <div className="border-[8px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(40,50,40,.14)]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={couple1}
//                     alt="Surabhi and Nandhu"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Center label */}

//             <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-0">
//               <div className="flex items-center gap-4 rounded-full border border-[#8b947f]/20 bg-[#f9f4ec]/90 px-6 py-3 shadow-xl backdrop-blur-xl">
//                 <button
//                   onClick={() => setActivePhoto(0)}
//                   className={`h-2 rounded-full transition-all duration-500 ${
//                     activePhoto === 0
//                       ? 'w-8 bg-[#506451]'
//                       : 'w-2 bg-[#506451]/20'
//                   }`}
//                 />

//                 <span className="text-[7px] uppercase tracking-[0.35em] text-[#7c857b]">
//                   Our moments
//                 </span>

//                 <button
//                   onClick={() => setActivePhoto(1)}
//                   className={`h-2 rounded-full transition-all duration-500 ${
//                     activePhoto === 1
//                       ? 'w-8 bg-[#506451]'
//                       : 'w-2 bg-[#506451]/20'
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           DETAILS
//       ========================================================= */}

//       <section
//         id="details"
//         className="relative overflow-hidden bg-[#e9e3d8] px-6 py-32 md:py-40"
//       >
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center">
//             <p className="text-[8px] uppercase tracking-[0.55em] text-[#7f897d]">
//               The celebration
//             </p>

//             <h2 className="mt-5 font-serif text-6xl font-light text-[#405141] md:text-8xl">
//               Join our day
//             </h2>
//           </div>

//           <div className="mt-20 grid gap-8 md:grid-cols-2">
//             {/* Date */}

//             <div className="group relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-10 shadow-[0_35px_80px_rgba(55,65,55,.08)] backdrop-blur-xl transition duration-700 hover:-translate-y-2 md:p-14">
//               <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d4dfcd]/50 blur-[70px]" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <p className="text-[8px] uppercase tracking-[0.45em] text-[#879084]">
//                     Save the date
//                   </p>

//                   <CalendarDays
//                     size={22}
//                     strokeWidth={1}
//                     className="text-[#60705e]"
//                   />
//                 </div>

//                 <div className="mt-16">
//                   <p className="font-serif text-[86px] font-light leading-none text-[#405141]">
//                     13
//                   </p>

//                   <p className="mt-4 font-serif text-4xl italic text-[#c58b82]">
//                     December
//                   </p>

//                   <div className="mt-6 h-px w-16 bg-[#bf9b70]" />

//                   <p className="mt-6 text-[9px] uppercase tracking-[0.35em] text-[#7d857c]">
//                     Sunday · 2026
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Venue */}

//             <div className="group relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-10 shadow-[0_35px_80px_rgba(75,55,50,.08)] backdrop-blur-xl transition duration-700 hover:-translate-y-2 md:p-14">
//               <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#e9c2b8]/40 blur-[80px]" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <p className="text-[8px] uppercase tracking-[0.45em] text-[#978780]">
//                     The venue
//                   </p>

//                   <MapPin
//                     size={22}
//                     strokeWidth={1}
//                     className="text-[#c2867e]"
//                   />
//                 </div>

//                 <div className="mt-16">
//                   <h3 className="max-w-md font-serif text-5xl font-light leading-[1.05] text-[#405141]">
//                     SB Convention Center
//                   </h3>

//                   <p className="mt-6 text-sm text-[#7b8179]">
//                     Mullannbazar, Kerala
//                   </p>

//                   <button
//                     onClick={openLocation}
//                     className="mt-10 inline-flex items-center gap-3 border border-[#526653]/25 px-6 py-3 text-[8px] uppercase tracking-[0.3em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white"
//                   >
//                     <Navigation size={12} />
//                     View Location
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Ceremony strip */}

//           <div className="mt-8 flex flex-col items-center justify-between gap-6 border border-white/60 bg-[#f8f4ec]/60 px-8 py-7 text-center backdrop-blur-xl md:flex-row md:text-left">
//             <div>
//               <p className="text-[7px] uppercase tracking-[0.4em] text-[#899187]">
//                 A day filled with love
//               </p>

//               <p className="mt-2 font-serif text-2xl italic text-[#405141]">
//                 We would be honoured to have you with us.
//               </p>
//             </div>

//             <div className="h-px w-20 bg-[#c39c71] md:h-10 md:w-px" />

//             <div className="text-center">
//               <p className="font-serif text-2xl text-[#405141]">
//                 Surabhi <span className="text-[#c88d84]">&</span> Nandhu
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           RSVP
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#f7f2e9] px-6 py-36 text-center md:py-48">
//         <div className="mx-auto max-w-3xl">
//           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c59b70]/30">
//             <Sparkles size={20} strokeWidth={1} className="text-[#bd925d]" />
//           </div>

//           <p className="mt-8 text-[8px] uppercase tracking-[0.55em] text-[#828b80]">
//             A special invitation
//           </p>

//           <h2 className="mt-7 font-serif text-6xl font-light leading-[0.95] text-[#405141] md:text-8xl">
//             Come celebrate
//             <br />
//             <span className="italic text-[#c88d84]">love with us.</span>
//           </h2>

//           <p className="mx-auto mt-9 max-w-xl text-sm leading-8 text-[#747a72]">
//             Your presence, blessings and love would mean the world to us as we
//             begin this beautiful new chapter together.
//           </p>

//           {!rsvpSubmitted ? (
//             <button
//               onClick={() => setShowRsvp(true)}
//               className="mt-10 rounded-full bg-[#506451] px-10 py-4 text-[8px] uppercase tracking-[0.35em] text-white shadow-[0_20px_50px_rgba(55,75,55,.2)] transition duration-500 hover:-translate-y-1 hover:bg-[#405342]"
//             >
//               Confirm Attendance
//             </button>
//           ) : (
//             <div className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#506451] px-8 py-4 text-white shadow-xl">
//               <Check size={15} />

//               <span className="text-[8px] uppercase tracking-[0.3em]">
//                 Thank you for joining us
//               </span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =========================================================
//           RSVP MODAL
//       ========================================================= */}

//       {showRsvp && (
//         <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#263026]/65 px-5 backdrop-blur-xl">
//           <div className="relative w-full max-w-md overflow-hidden border border-white/60 bg-[#f8f3ea] p-8 shadow-[0_50px_140px_rgba(0,0,0,.25)] md:p-10">
//             <button
//               onClick={() => setShowRsvp(false)}
//               className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#e7ece2] text-[#506451] transition hover:rotate-90"
//             >
//               <X size={15} />
//             </button>

//             <div className="text-center">
//               <Heart
//                 size={24}
//                 strokeWidth={1}
//                 className="mx-auto text-[#c88c83]"
//               />

//               <p className="mt-5 text-[8px] uppercase tracking-[0.4em] text-[#899187]">
//                 RSVP
//               </p>

//               <h3 className="mt-3 font-serif text-5xl font-light text-[#405141]">
//                 You're invited
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-[#777e76]">
//                 We can't wait to celebrate this beautiful day with you.
//               </p>
//             </div>

//             <div className="mt-9 space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full border border-[#526653]/10 bg-white px-5 py-4 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40"
//               />

//               <input
//                 type="number"
//                 placeholder="Number of guests"
//                 className="w-full border border-[#526653]/10 bg-white px-5 py-4 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40"
//               />

//               <button
//                 onClick={submitRsvp}
//                 className="w-full bg-[#506451] py-4 text-[8px] uppercase tracking-[0.35em] text-white transition duration-500 hover:bg-[#405342]"
//               >
//                 Confirm Attendance
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =========================================================
//           FINAL SECTION
//       ========================================================= */}

//       <section className="relative overflow-hidden bg-[#435646] px-6 py-36 text-center text-white md:py-48">
//         {/* Botanical decoration */}

//         <div className="pointer-events-none absolute -left-24 top-0 opacity-[0.07]">
//           <svg width="450" height="600" viewBox="0 0 450 600" fill="none">
//             <path
//               d="M350 0C300 130 180 200 120 330C70 440 100 530 0 600"
//               stroke="white"
//               strokeWidth="2"
//             />
//             <ellipse
//               cx="275"
//               cy="120"
//               rx="45"
//               ry="18"
//               transform="rotate(-35 275 120)"
//               stroke="white"
//             />
//             <ellipse
//               cx="190"
//               cy="230"
//               rx="50"
//               ry="19"
//               transform="rotate(25 190 230)"
//               stroke="white"
//             />
//             <ellipse
//               cx="120"
//               cy="360"
//               rx="42"
//               ry="17"
//               transform="rotate(-30 120 360)"
//               stroke="white"
//             />
//           </svg>
//         </div>

//         <div className="pointer-events-none absolute -bottom-40 -right-20 rotate-180 opacity-[0.06]">
//           <svg width="450" height="600" viewBox="0 0 450 600" fill="none">
//             <path
//               d="M350 0C300 130 180 200 120 330C70 440 100 530 0 600"
//               stroke="#efc1b7"
//               strokeWidth="2"
//             />
//             <ellipse
//               cx="275"
//               cy="120"
//               rx="45"
//               ry="18"
//               transform="rotate(-35 275 120)"
//               stroke="#efc1b7"
//             />
//             <ellipse
//               cx="190"
//               cy="230"
//               rx="50"
//               ry="19"
//               transform="rotate(25 190 230)"
//               stroke="#efc1b7"
//             />
//           </svg>
//         </div>

//         <div className="relative mx-auto max-w-4xl">
//           <Heart
//             size={31}
//             strokeWidth={1}
//             className="mx-auto text-[#efbeb4]"
//             style={{
//               animation: 'heartbeat 2.5s ease-in-out infinite',
//             }}
//           />

//           <p className="mt-8 text-[8px] uppercase tracking-[0.55em] text-white/45">
//             Together forever
//           </p>

//           <h2 className="mt-7 font-serif text-6xl font-light tracking-[-0.04em] md:text-9xl">
//             Surabhi
//             <span className="mx-3 text-[#efbeb4]">&</span>
//             Nandhu
//           </h2>

//           <div className="mx-auto mt-10 flex items-center justify-center gap-4">
//             <span className="h-px w-16 bg-white/20" />

//             <span className="text-[#dfba75]">✦</span>

//             <span className="h-px w-16 bg-white/20" />
//           </div>

//           <p className="mt-9 font-serif text-2xl italic text-white/70">
//             December 13, 2026
//           </p>

//           <p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/40">
//             We cannot wait to begin this beautiful chapter surrounded by the
//             people we love.
//           </p>

//           <p className="mt-12 text-[7px] uppercase tracking-[0.5em] text-white/25">
//             Forever begins here
//           </p>
//         </div>
//       </section>

//       {/* =========================================================
//           ANIMATIONS
//       ========================================================= */}

//       <style>{`
//         html {
//           scroll-behavior: smooth;
//         }

//         @keyframes premiumPetalFall {
//           0% {
//             transform: translate3d(0, -40px, 0) rotate(0deg);
//             opacity: 0;
//           }

//           10% {
//             opacity: 0.7;
//           }

//           45% {
//             transform: translate3d(40px, 45vh, 0) rotate(170deg);
//             opacity: 0.55;
//           }

//           100% {
//             transform: translate3d(-50px, 110vh, 0) rotate(360deg);
//             opacity: 0;
//           }
//         }

//         @keyframes slowRotate {
//           from {
//             transform: translate(-50%, -50%) rotate(0deg);
//           }

//           to {
//             transform: translate(-50%, -50%) rotate(360deg);
//           }
//         }

//         @keyframes flowerGlow {
//           0%,
//           100% {
//             transform: scale(0.88);
//             opacity: 0.35;
//           }

//           50% {
//             transform: scale(1.12);
//             opacity: 0.7;
//           }
//         }

//         @keyframes petalBloom {
//           0% {
//             opacity: 0;
//             transform: scale(0.05) rotate(0deg) translateY(0);
//           }

//           50% {
//             opacity: 0.8;
//           }

//           70% {
//             transform: scale(1.08) rotate(var(--rotation));
//           }

//           100% {
//             opacity: 1;
//           }
//         }

//         @keyframes innerBloom {
//           0% {
//             opacity: 0;
//             transform: scale(0.1);
//           }

//           65% {
//             opacity: 1;
//             transform: scale(1.12);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes centerBloom {
//           0% {
//             opacity: 0;
//             transform: scale(0);
//           }

//           60% {
//             opacity: 1;
//             transform: scale(1.18);
//           }

//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes letterBloom {
//           0% {
//             opacity: 0;
//             transform: translateY(65px) scale(0.35) rotateX(70deg);
//             filter: blur(13px);
//           }

//           35% {
//             opacity: 0.55;
//             filter: blur(5px);
//           }

//           70% {
//             transform: translateY(-8px) scale(1.07) rotateX(0deg);
//             filter: blur(0);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1) rotateX(0deg);
//             filter: blur(0);
//           }
//         }

//         @keyframes softReveal {
//           0% {
//             opacity: 0;
//             transform: translateY(18px);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes buttonReveal {
//           0% {
//             opacity: 0;
//             transform: translateY(25px) scale(0.9);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes heartbeat {
//           0%,
//           100% {
//             transform: scale(1);
//           }

//           15% {
//             transform: scale(1.18);
//           }

//           30% {
//             transform: scale(1);
//           }

//           45% {
//             transform: scale(1.12);
//           }

//           60% {
//             transform: scale(1);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *,
//           *::before,
//           *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             scroll-behavior: auto !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Invitation;
