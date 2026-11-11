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
// import couple3 from './assets/couple.3.jpg';
// import venueQr from './assets/venue-qr.png';

// const petals = [
//   { left: '3%', delay: '0s', duration: '15s', size: 10 },
//   { left: '12%', delay: '4s', duration: '18s', size: 8 },
//   { left: '22%', delay: '2s', duration: '16s', size: 12 },
//   { left: '34%', delay: '7s', duration: '19s', size: 9 },
//   { left: '46%', delay: '1s', duration: '17s', size: 11 },
//   { left: '58%', delay: '5s', duration: '20s', size: 8 },
//   { left: '70%', delay: '3s', duration: '17s', size: 12 },
//   { left: '82%', delay: '8s', duration: '19s', size: 10 },
//   { left: '93%', delay: '2s', duration: '16s', size: 9 },
// ];

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

//   // PREMIUM WEDDING COUNTDOWN
//   const [countdown, setCountdown] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // DATE SCRATCH REVEAL
//   const [dateRevealed, setDateRevealed] = useState(false);
//   const [scratchProgress, setScratchProgress] = useState(0);

//   const audioRef = useRef(null);
//   const scratchCanvasRef = useRef(null);
//   const isScratchingRef = useRef(false);

//   useEffect(() => {
//     document.body.style.overflow = opened ? 'auto' : 'hidden';

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [opened]);

//   // CINEMATIC SCROLL REVEAL
//   useEffect(() => {
//     if (!opened) return;

//     const revealElements = document.querySelectorAll('.cinematic-reveal');

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('cinematic-visible');
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.12,
//         rootMargin: '0px 0px -80px 0px',
//       },
//     );

//     revealElements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, [opened]);

//   useEffect(() => {
//     const weddingDate = new Date('2026-12-13T11:45:00+05:30');

//     const updateCountdown = () => {
//       const difference = weddingDate.getTime() - Date.now();

//       if (difference <= 0) {
//         setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       const totalSeconds = Math.floor(difference / 1000);

//       setCountdown({
//         days: Math.floor(totalSeconds / 86400),
//         hours: Math.floor((totalSeconds % 86400) / 3600),
//         minutes: Math.floor((totalSeconds % 3600) / 60),
//         seconds: totalSeconds % 60,
//       });
//     };

//     updateCountdown();
//     const timer = setInterval(updateCountdown, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActivePhoto((prev) => (prev + 1) % 3);
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
//       'https://share.google/BdRaKDgqn10qbwy2I',
//       '_blank',
//       'noopener,noreferrer',
//     );
//   };

//   const addToCalendar = () => {
//     const eventTitle = 'Surabhi & Nandu Wedding';

//     const eventDetails =
//       'Join us as we celebrate the wedding of Surabhi & Nandu. Muhurtham: 11:45 AM to 12:15 PM.';

//     const location = 'SB Convention Centre, RBM Arcade, Mullambazar';

//     const startDate = '20261213T114500';
//     const endDate = '20261213T121500';

//     const googleCalendarUrl =
//       `https://calendar.google.com/calendar/render?action=TEMPLATE` +
//       `&text=${encodeURIComponent(eventTitle)}` +
//       `&dates=${startDate}/${endDate}` +
//       `&details=${encodeURIComponent(eventDetails)}` +
//       `&location=${encodeURIComponent(location)}` +
//       `&ctz=Asia/Kolkata`;

//     window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
//   };

//   const submitRsvp = () => {
//     setRsvpSubmitted(true);
//     setShowRsvp(false);
//   };

//   const scrollToSection = (id) => {
//     setMenuOpen(false);

//     setTimeout(() => {
//       document.getElementById(id)?.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }, 50);
//   };

//   // =========================================================
//   // SCRATCH DATE REVEAL
//   // =========================================================

//   const initializeScratchCanvas = () => {
//     const canvas = scratchCanvasRef.current;

//     if (!canvas || dateRevealed) return;

//     const rect = canvas.getBoundingClientRect();
//     const dpr = window.devicePixelRatio || 1;

//     canvas.width = rect.width * dpr;
//     canvas.height = rect.height * dpr;

//     const ctx = canvas.getContext('2d');

//     if (!ctx) return;

//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.scale(dpr, dpr);

//     const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);

//     gradient.addColorStop(0, '#d2b98f');
//     gradient.addColorStop(0.45, '#eadfc8');
//     gradient.addColorStop(1, '#c6a879');

//     ctx.fillStyle = gradient;
//     ctx.fillRect(0, 0, rect.width, rect.height);

//     // Elegant tiny pattern
//     ctx.globalAlpha = 0.16;

//     for (let x = 18; x < rect.width; x += 30) {
//       for (let y = 18; y < rect.height; y += 30) {
//         ctx.beginPath();
//         ctx.arc(x, y, 1.2, 0, Math.PI * 2);
//         ctx.fillStyle = '#ffffff';
//         ctx.fill();
//       }
//     }

//     ctx.globalAlpha = 1;

//     // Soft center decoration
//     ctx.strokeStyle = 'rgba(255,255,255,0.28)';
//     ctx.lineWidth = 1;

//     ctx.beginPath();
//     ctx.arc(
//       rect.width / 2,
//       rect.height / 2,
//       Math.min(rect.width, rect.height) * 0.27,
//       0,
//       Math.PI * 2,
//     );
//     ctx.stroke();

//     // Scratch text
//     ctx.fillStyle = 'rgba(255,255,255,0.9)';
//     ctx.font = '600 9px sans-serif';
//     ctx.textAlign = 'center';
//     ctx.textBaseline = 'middle';
//   };

//   const checkScratchProgress = () => {
//     const canvas = scratchCanvasRef.current;

//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');

//     if (!ctx) return;

//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

//     let transparentPixels = 0;

//     // Sampling improves mobile performance
//     for (let i = 3; i < imageData.data.length; i += 32) {
//       if (imageData.data[i] < 80) {
//         transparentPixels += 1;
//       }
//     }

//     const totalPixels = imageData.data.length / 32;

//     const progress = Math.min((transparentPixels / totalPixels) * 100, 100);

//     setScratchProgress(progress);

//     // Reveal once enough of the card has been scratched
//     if (progress >= 55) {
//       revealDate();
//     }
//   };

//   const scratchDate = (event) => {
//     if (dateRevealed) return;

//     const canvas = scratchCanvasRef.current;

//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();

//     let clientX;
//     let clientY;

//     if (event.touches && event.touches.length > 0) {
//       clientX = event.touches[0].clientX;
//       clientY = event.touches[0].clientY;
//     } else {
//       clientX = event.clientX;
//       clientY = event.clientY;
//     }

//     const x = clientX - rect.left;
//     const y = clientY - rect.top;

//     const ctx = canvas.getContext('2d');

//     if (!ctx) return;

//     ctx.globalCompositeOperation = 'destination-out';

//     const brushSize = window.innerWidth < 640 ? 42 : 52;

//     const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize);

//     gradient.addColorStop(0, 'rgba(0,0,0,1)');

//     gradient.addColorStop(0.55, 'rgba(0,0,0,0.95)');

//     gradient.addColorStop(0.82, 'rgba(0,0,0,0.55)');

//     gradient.addColorStop(1, 'rgba(0,0,0,0)');

//     ctx.fillStyle = gradient;

//     ctx.beginPath();
//     ctx.arc(x, y, brushSize, 0, Math.PI * 2);
//     ctx.fill();

//     ctx.globalCompositeOperation = 'source-over';

//     checkScratchProgress();
//   };

//   const handleScratchStart = (event) => {
//     if (dateRevealed) return;

//     isScratchingRef.current = true;

//     scratchDate(event);
//   };

//   const handleScratchMove = (event) => {
//     if (!isScratchingRef.current || dateRevealed) {
//       return;
//     }

//     event.preventDefault();

//     scratchDate(event);
//   };

//   const handleScratchEnd = () => {
//     isScratchingRef.current = false;
//   };

//   const revealDate = () => {
//     if (dateRevealed) return;

//     setDateRevealed(true);
//     setScratchProgress(100);

//     const canvas = scratchCanvasRef.current;

//     if (canvas) {
//       const ctx = canvas.getContext('2d');

//       if (ctx) {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//       }
//     }
//   };

//   useEffect(() => {
//     if (!opened || dateRevealed) return;

//     const timer = setTimeout(() => {
//       initializeScratchCanvas();
//     }, 400);

//     const handleResize = () => {
//       initializeScratchCanvas();
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       clearTimeout(timer);

//       window.removeEventListener('resize', handleResize);
//     };
//   }, [opened, dateRevealed]);

//   return (
//     <div className="min-h-screen w-full overflow-x-hidden bg-[#f6f1e9] text-[#344236]">
//       {/* AUDIO */}

//       <audio ref={audioRef} src="/wedding-music.mp3" loop preload="auto" />

//       {/* GRAIN */}

//       <div className="pointer-events-none fixed inset-0 z-[80] opacity-[0.025]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               'url("data:image/svg+xml,%3Csvg viewBox=%270 0 180 180%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27 opacity=%27.4%27/%3E%3C/svg%3E")',
//           }}
//         />
//       </div>

//       {/* FALLING PETALS */}

//       {opened &&
//         petals.map((petal, index) => (
//           <div
//             key={index}
//             className="pointer-events-none fixed left-0 top-[-30px] z-[60]"
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

//       {/* =====================================================
//           OPENING
//       ===================================================== */}

//       <div
//         className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#f5efe7] px-4 transition-all duration-[1800ms] ease-[cubic-bezier(.77,0,.18,1)] ${
//           opened
//             ? 'pointer-events-none -translate-y-full opacity-0'
//             : 'translate-y-0 opacity-100'
//         }`}
//       >
//         {/* Background */}

//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute left-[-35%] top-[-10%] h-[400px] w-[400px] rounded-full bg-[#d9e0d1]/50 blur-[100px] sm:h-[550px] sm:w-[550px]" />

//           <div className="absolute bottom-[-15%] right-[-30%] h-[450px] w-[450px] rounded-full bg-[#e7b8ad]/30 blur-[110px] sm:h-[600px] sm:w-[600px]" />

//           <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9b846d]/10 sm:h-[650px] sm:w-[650px] md:h-[820px] md:w-[820px]" />

//           <div
//             className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7d8b78]/10 sm:h-[550px] sm:w-[550px]"
//             style={{
//               animation: 'slowRotate 50s linear infinite',
//             }}
//           />
//         </div>

//         {/* Top */}

//         <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-8 sm:right-8 sm:top-7 md:left-12 md:right-12">
//           <div className="font-serif text-lg text-[#556454] sm:text-xl">
//             S<span className="text-[#c98c83]">&</span>N
//           </div>

//           <div className="hidden items-center gap-3 sm:flex">
//             <span className="h-px w-6 bg-[#ba9873]/50 md:w-10" />

//             <span className="text-[7px] uppercase tracking-[0.4em] text-[#9a8a7e] md:text-[8px]">
//               Wedding Invitation
//             </span>

//             <span className="h-px w-6 bg-[#ba9873]/50 md:w-10" />
//           </div>
//         </div>

//         {/* OPENING CONTENT */}

//         <div className="relative z-10 flex w-full max-w-[700px] flex-col items-center px-2 text-center">
//           <div
//             className="mb-1 flex items-center gap-3 opacity-0 sm:gap-4"
//             style={{
//               animation: 'softReveal 1s ease-out 0.3s forwards',
//             }}
//           >
//             <span className="h-px w-7 bg-[#c69c72] sm:w-10" />

//             <span className="text-[7px] uppercase tracking-[0.4em] text-[#8c9687] sm:text-[8px] sm:tracking-[0.55em]">
//               Save the date
//             </span>

//             <span className="h-px w-7 bg-[#c69c72] sm:w-10" />
//           </div>

//           {/* FLOWER */}

//           <div className="relative mt-1 flex h-[285px] w-[285px] items-center justify-center xs:h-[320px] xs:w-[320px] sm:h-[370px] sm:w-[370px] md:h-[420px] md:w-[420px]">
//             <div
//               className="absolute h-[220px] w-[220px] rounded-full bg-[#d99b91]/20 blur-[65px] sm:h-[290px] sm:w-[290px] sm:blur-[80px]"
//               style={{
//                 animation: 'flowerGlow 4s ease-in-out infinite',
//               }}
//             />

//             {flowerPetals.map((color, index) => (
//               <div
//                 key={index}
//                 className="absolute h-[132px] w-[79px] rounded-[100%_0_100%_0] shadow-[0_15px_40px_rgba(110,70,65,.08)] sm:h-[160px] sm:w-[96px] md:h-[175px] md:w-[105px]"
//                 style={{
//                   background: `linear-gradient(145deg, ${color}, ${color}cc)`,
//                   transform: `rotate(${index * 45}deg) translateY(-48px)`,
//                   transformOrigin: 'bottom center',
//                   animation: `petalBloom 1.8s cubic-bezier(.16,1,.3,1) ${
//                     0.45 + index * 0.12
//                   }s forwards`,
//                   opacity: 0,
//                 }}
//               />
//             ))}

//             {[30, 150, 270].map((rotation, index) => (
//               <div
//                 key={rotation}
//                 className="absolute h-[95px] w-[58px] rounded-[100%_0_100%_0] bg-[#f0c0b6] sm:h-[115px] sm:w-[70px] md:h-[125px] md:w-[76px]"
//                 style={{
//                   transform: `rotate(${rotation}deg) translateY(-32px)`,
//                   transformOrigin: 'bottom center',
//                   animation: `innerBloom 1.5s cubic-bezier(.16,1,.3,1) ${
//                     1.2 + index * 0.18
//                   }s forwards`,
//                   opacity: 0,
//                 }}
//               />
//             ))}

//             {/* NAMES */}

//             <div className="absolute left-1/2 top-[66px] z-30 w-full -translate-x-1/2 sm:top-[78px] md:top-[94px]">
//               <div className="flex justify-center">
//                 {'SURABHI'.split('').map((letter, index) => (
//                   <span
//                     key={index}
//                     className="font-serif text-[25px] font-light tracking-[0.015em] text-[#3d4c3e] opacity-0 xs:text-[29px] sm:text-[36px] md:text-[46px]"
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
//                 className="my-0.5 font-serif text-2xl italic text-[#c98c83] opacity-0 sm:text-3xl"
//                 style={{
//                   animation: 'softReveal 1.1s ease-out 3.05s forwards',
//                 }}
//               >
//                 &
//               </div>

//               <div className="flex justify-center">
//                 {'NANDU'.split('').map((letter, index) => (
//                   <span
//                     key={index}
//                     className="font-serif text-[25px] font-light tracking-[0.015em] text-[#3d4c3e] opacity-0 xs:text-[29px] sm:text-[36px] md:text-[46px]"
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
//                 className="mt-2 text-[5px] uppercase tracking-[0.25em] text-[#889286] opacity-0 sm:text-[7px] sm:tracking-[0.4em]"
//                 style={{
//                   animation: 'softReveal 1s ease-out 4.15s forwards',
//                 }}
//               >
//                 Two hearts · One beautiful beginning
//               </p>
//             </div>
//           </div>

//           {/* DATE */}

//           <div
//             className="mt-[-4px] opacity-0 sm:mt-[-10px]"
//             style={{
//               animation: 'softReveal 1s ease-out 4.55s forwards',
//             }}
//           >
//             <div className="flex items-center justify-center gap-3 sm:gap-4">
//               <span className="h-px w-7 bg-[#c69d73] sm:w-12" />

//               <span className="font-serif text-[10px] tracking-[0.22em] text-[#5e6d5d] sm:text-sm sm:tracking-[0.3em]">
//                 13 · 12 · 2026
//               </span>

//               <span className="h-px w-7 bg-[#c69d73] sm:w-12" />
//             </div>
//           </div>

//           {/* BUTTON */}

//           <button
//             onClick={openInvitation}
//             className="group mt-6 flex items-center gap-3 bg-[#506451] px-7 py-3.5 text-[8px] uppercase tracking-[0.3em] text-white opacity-0 shadow-[0_18px_45px_rgba(50,70,50,.2)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#405342] sm:mt-8 sm:px-10 sm:py-4 sm:text-[9px]"
//             style={{
//               animation: 'buttonReveal 1.1s ease-out 4.95s forwards',
//             }}
//           >
//             Open Invitation
//             <Music
//               size={12}
//               strokeWidth={1.5}
//               className="transition-transform duration-500 group-hover:rotate-12"
//             />
//           </button>

//           <p
//             className="mt-3 text-[6px] uppercase tracking-[0.25em] text-[#9b9188] opacity-0 sm:mt-4 sm:text-[7px]"
//             style={{
//               animation: 'softReveal 1s ease-out 5.4s forwards',
//             }}
//           >
//             Sound on for the full experience
//           </p>
//         </div>
//       </div>

//       {/* =====================================================
//           NAVIGATION
//       ===================================================== */}

//       {opened && (
//         <>
//           <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-5 md:px-10">
//             <div className="mx-auto flex max-w-7xl items-center justify-between">
//               <button
//                 onClick={() => scrollToSection('home')}
//                 className="font-serif text-xl text-[#405141]"
//               >
//                 S<span className="text-[#c98c83]">&</span>N
//               </button>

//               {/* DESKTOP NAV */}

//               <nav className="hidden items-center gap-8 rounded-full border border-white/50 bg-[#f9f5ee]/80 px-6 py-3 shadow-[0_15px_50px_rgba(50,60,50,.08)] backdrop-blur-xl lg:flex">
//                 <button
//                   onClick={() => scrollToSection('home')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
//                 >
//                   Home
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('story')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
//                 >
//                   Our Story
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('gallery')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
//                 >
//                   Gallery
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('countdown')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
//                 >
//                   Countdown
//                 </button>

//                 <button
//                   onClick={() => scrollToSection('details')}
//                   className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
//                 >
//                   Details
//                 </button>

//                 <button
//                   onClick={() => setShowRsvp(true)}
//                   className="rounded-full bg-[#506451] px-5 py-2.5 text-[8px] uppercase tracking-[0.3em] text-white"
//                 >
//                   RSVP
//                 </button>
//               </nav>

//               {/* ACTIONS */}

//               <div className="flex items-center gap-2 sm:gap-3">
//                 <button
//                   onClick={toggleMusic}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl sm:h-11 sm:w-11"
//                 >
//                   {musicPlaying ? <Volume2 size={16} /> : <Music size={16} />}
//                 </button>

//                 <button
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/80 text-[#506451] shadow-[0_10px_40px_rgba(50,60,50,.1)] backdrop-blur-xl lg:hidden"
//                 >
//                   {menuOpen ? <X size={16} /> : <Menu size={16} />}
//                 </button>
//               </div>
//             </div>
//           </header>

//           {/* MOBILE MENU */}

//           {menuOpen && (
//             <div className="fixed inset-x-3 top-[72px] z-50 rounded-[24px] border border-white/70 bg-[#faf6ef]/95 p-6 shadow-2xl backdrop-blur-2xl sm:inset-x-5">
//               <div className="flex flex-col gap-5">
//                 {[
//                   ['Home', 'home'],
//                   ['Our Story', 'story'],
//                   ['Gallery', 'gallery'],
//                   ['Countdown', 'countdown'],
//                   ['Details', 'details'],
//                 ].map(([label, id]) => (
//                   <button
//                     key={id}
//                     onClick={() => scrollToSection(id)}
//                     className="text-left text-[9px] uppercase tracking-[0.3em] text-[#506451]"
//                   >
//                     {label}
//                   </button>
//                 ))}

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

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section
//         id="home"
//         className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f2e9] px-5 pb-20 pt-28 sm:px-8 md:px-10 md:pt-32"
//       >
//         {/* Botanical */}

//         <div className="pointer-events-none absolute -left-20 top-[10%] hidden h-[450px] w-[250px] opacity-15 sm:block">
//           <div className="absolute left-20 top-0 h-[450px] w-px rotate-[-18deg] bg-[#71806d]" />

//           <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />

//           <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
//         </div>

//         <div className="pointer-events-none absolute -bottom-20 right-[-50px] hidden h-[450px] w-[250px] rotate-180 opacity-15 sm:block">
//           <div className="absolute left-20 top-0 h-[450px] w-px rotate-[-18deg] bg-[#71806d]" />

//           <div className="absolute left-12 top-20 h-28 w-12 rotate-[-35deg] rounded-[100%_0] border border-[#71806d]" />

//           <div className="absolute left-24 top-48 h-32 w-14 rotate-[25deg] rounded-[100%_0] border border-[#71806d]" />
//         </div>

//         <div className="relative z-10 mx-auto w-full max-w-7xl">
//           <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
//             {/* TEXT */}

//             <div className="text-center lg:text-left">
//               <div className="flex items-center justify-center gap-3 lg:justify-start">
//                 <span className="h-px w-8 bg-[#c59a70] sm:w-10" />

//                 <span className="text-[7px] uppercase tracking-[0.35em] text-[#879185] sm:text-[8px] sm:tracking-[0.5em]">
//                   Together with their families
//                 </span>
//               </div>

//               <p className="mt-8 font-serif text-lg italic text-[#9b7f77] sm:mt-10 sm:text-2xl">
//                 A beautiful beginning
//               </p>

//               <h1 className="mt-7 font-serif text-[clamp(4.3rem,17vw,7.8rem)] font-light leading-[0.78] tracking-[-0.07em] text-[#384638]">
//                 Surabhi
//               </h1>

//               <div className="my-6 flex items-center justify-center gap-4 lg:justify-start">
//                 <span className="h-px w-12 bg-[#d19b91] sm:w-16" />

//                 <span className="font-serif text-3xl italic text-[#c98c83] sm:text-4xl">
//                   &
//                 </span>

//                 <span className="h-px w-12 bg-[#d19b91] sm:w-16" />
//               </div>

//               <h1 className="font-serif text-[clamp(4.3rem,17vw,7.8rem)] font-light leading-[0.78] tracking-[-0.07em] text-[#384638]">
//                 Nandu
//               </h1>

//               <p className="mx-auto mt-8 max-w-md text-[13px] leading-7 text-[#747c73] sm:text-sm lg:mx-0">
//                 Two souls, one promise, and a lifetime of memories waiting to
//                 unfold.
//               </p>

//               <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start sm:gap-7">
//                 <div>
//                   <p className="font-serif text-3xl text-[#405141] sm:text-4xl">
//                     13
//                   </p>

//                   <p className="mt-1 text-[6px] uppercase tracking-[0.3em] text-[#8b9188] sm:text-[7px]">
//                     December
//                   </p>
//                 </div>

//                 <div className="h-10 w-px bg-[#879284]/20 sm:h-12" />

//                 <div>
//                   <p className="font-serif text-3xl text-[#405141] sm:text-4xl">
//                     2026
//                   </p>

//                   <p className="mt-1 text-[6px] uppercase tracking-[0.3em] text-[#8b9188] sm:text-[7px]">
//                     Sunday
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* PHOTO */}

//             <div className="relative mx-auto mt-4 w-full max-w-[560px] lg:mt-0">
//               <div className="absolute -inset-5 rounded-[35px] bg-[#d59b91]/15 blur-[40px] sm:-inset-7 sm:rounded-[45px]" />

//               <div className="relative rotate-[1.5deg] overflow-hidden border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(45,55,45,.18)] sm:border-[10px]">
//                 <div className="relative aspect-[4/5] overflow-hidden">
//                   <img
//                     src={couple1}
//                     alt="Surabhi and Nandu"
//                     className="h-full w-full object-cover"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-[#243025]/45 via-transparent to-transparent" />

//                   <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8">
//                     <p className="font-serif text-2xl italic text-white sm:text-3xl">
//                       Our forever
//                     </p>

//                     <div className="mt-2 flex items-center gap-2">
//                       <span className="h-px w-6 bg-white/60 sm:w-7" />

//                       <span className="text-[6px] uppercase tracking-[0.3em] text-white/75 sm:text-[7px]">
//                         Begins here
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* SECOND IMAGE */}

//               <div className="absolute -bottom-7 -left-2 w-[105px] rotate-[-6deg] overflow-hidden border-[5px] border-white bg-white shadow-[0_20px_50px_rgba(40,50,40,.2)] sm:-bottom-10 sm:-left-10 sm:w-[170px] sm:border-[7px]">
//                 <img
//                   src={couple2}
//                   alt="Surabhi and Nandu"
//                   className="aspect-[4/5] w-full object-cover"
//                 />
//               </div>

//               {/* BADGE */}

//               <div className="absolute -right-2 top-7 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#c9a46f]/30 bg-[#f7f0e6]/90 shadow-xl backdrop-blur-xl sm:-right-7 sm:h-28 sm:w-28">
//                 <div className="text-center">
//                   <Crown
//                     size={14}
//                     strokeWidth={1}
//                     className="mx-auto text-[#bb925a] sm:h-[18px] sm:w-[18px]"
//                   />

//                   <p className="mt-1 font-serif text-base text-[#596557] sm:mt-2 sm:text-lg">
//                     13
//                   </p>

//                   <p className="text-[5px] uppercase tracking-[0.2em] text-[#8d9188] sm:text-[6px] sm:tracking-[0.3em]">
//                     December
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={() => scrollToSection('story')}
//           className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#849081] sm:bottom-8"
//         >
//           <span className="text-[6px] uppercase tracking-[0.4em] sm:text-[7px] sm:tracking-[0.5em]">
//             Scroll to explore
//           </span>

//           <ArrowDown size={13} strokeWidth={1} className="animate-bounce" />
//         </button>
//       </section>

//       {/* =====================================================
//           PREMIUM COUNTDOWN
//       ===================================================== */}

//       <section
//         id="countdown"
//         className="cinematic-reveal relative overflow-hidden bg-[#f4eee4] px-5 py-24 sm:px-8 sm:py-32 md:py-36"
//       >
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a72]/10 sm:h-[620px] sm:w-[620px]" />
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c98c83]/10 sm:h-[460px] sm:w-[460px]" />

//         <div className="relative z-10 mx-auto max-w-5xl text-center">
//           <div className="mx-auto flex w-fit items-center gap-3">
//             <span className="h-px w-8 bg-[#c39a70]/60 sm:w-12" />
//             <Sparkles size={12} strokeWidth={1.2} className="text-[#bd925d]" />
//             <span className="h-px w-8 bg-[#c39a70]/60 sm:w-12" />
//           </div>

//           <p className="mt-7 text-[7px] uppercase tracking-[0.5em] text-[#818a80] sm:text-[8px] sm:tracking-[0.6em]">
//             Counting every moment
//           </p>

//           <h2 className="mt-5 font-serif text-[clamp(3rem,10vw,6rem)] font-light leading-none tracking-[-0.04em] text-[#405141]">
//             Until <span className="italic text-[#c88d84]">forever.</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-lg text-[12px] leading-6 text-[#777d75] sm:text-sm sm:leading-7">
//             The days are getting closer. We cannot wait to celebrate this
//             beautiful beginning with you.
//           </p>

//           <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
//             {[
//               ['days', countdown.days, 'Days'],
//               ['hours', countdown.hours, 'Hours'],
//               ['minutes', countdown.minutes, 'Minutes'],
//               ['seconds', countdown.seconds, 'Seconds'],
//             ].map(([key, value, label]) => (
//               <div
//                 key={key}
//                 className="group relative overflow-hidden rounded-[18px] border border-white/80 bg-[#faf6ee]/75 px-3 py-6 shadow-[0_20px_55px_rgba(65,70,55,.08)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(65,70,55,.13)] sm:rounded-[22px] sm:px-5 sm:py-8"
//               >
//                 <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b1a8]/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />

//                 <div className="relative">
//                   <p
//                     key={`${key}-${value}`}
//                     className="font-serif text-[clamp(2.5rem,8vw,4.2rem)] font-light leading-none tabular-nums tracking-[-0.04em] text-[#405141]"
//                     style={{ animation: 'countdownTick 0.55s ease-out' }}
//                   >
//                     {String(value).padStart(2, '0')}
//                   </p>

//                   <div className="mx-auto mt-4 h-px w-7 bg-[#c49b70]/50" />

//                   <p className="mt-3 text-[6px] uppercase tracking-[0.35em] text-[#858b83] sm:text-[7px] sm:tracking-[0.45em]">
//                     {label}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mx-auto mt-10 flex items-center justify-center gap-3 sm:mt-12">
//             <span className="h-px w-10 bg-[#bd9a70]/30 sm:w-16" />
//             <p className="font-serif text-sm italic text-[#a17f76] sm:text-base">
//               13 December 2026 · 11:45 AM
//             </p>
//             <span className="h-px w-10 bg-[#bd9a70]/30 sm:w-16" />
//           </div>

//           <button
//             onClick={() => scrollToSection('details')}
//             className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#526653]/20 bg-white/40 px-5 py-2.5 text-[7px] uppercase tracking-[0.3em] text-[#526653] backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#526653] hover:text-white sm:px-6 sm:py-3 sm:text-[8px]"
//           >
//             Explore the celebration
//             <ArrowDown size={11} strokeWidth={1.4} />
//           </button>
//         </div>
//       </section>

//       {/* =====================================================
//           STORY
//       ===================================================== */}

//       <section
//         id="story"
//         className="cinematic-reveal relative overflow-hidden bg-[#ebe5db] px-5 py-28 sm:px-8 sm:py-36 md:py-44"
//       >
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#b79670]/30 sm:h-12 sm:w-12">
//             <Heart size={17} strokeWidth={1} className="text-[#c58b82]" />
//           </div>

//           <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-[#81877e] sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
//             The beginning of forever
//           </p>

//           <h2 className="mt-6 font-serif text-[clamp(2.8rem,10vw,5.5rem)] font-light leading-[1] text-[#405141]">
//             Some moments become
//             <br />
//             <span className="italic text-[#c88d84]">memories forever.</span>
//           </h2>

//           <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-7 text-[#777a73] sm:mt-9 sm:text-sm sm:leading-8">
//             With grateful hearts and the blessings of our families, we invite
//             you to share one of the most beautiful days of our lives.
//           </p>

//           <div className="mx-auto mt-10 flex items-center justify-center gap-4">
//             <span className="h-px w-10 bg-[#bd9a70]/50 sm:w-12" />

//             <span className="text-xs text-[#bd9a70]">✦</span>

//             <span className="h-px w-10 bg-[#bd9a70]/50 sm:w-12" />
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           GALLERY
//       ===================================================== */}

//       <section
//         id="gallery"
//         className="cinematic-reveal relative overflow-hidden bg-[#f8f3ea] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
//       >
//         <div className="mx-auto max-w-7xl">
//           <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
//             <div>
//               <p className="text-[7px] uppercase tracking-[0.45em] text-[#839080] sm:text-[8px] sm:tracking-[0.5em]">
//                 A little glimpse
//               </p>

//               <h2 className="mt-4 font-serif text-[clamp(3.5rem,12vw,7rem)] font-light tracking-[-0.04em] text-[#3e4d3e]">
//                 Together
//               </h2>

//               <p className="mt-5 max-w-sm text-[13px] leading-7 text-[#777e76] sm:text-sm">
//                 Every photograph holds a little piece of our story.
//               </p>
//             </div>

//             <div className="text-left md:text-right">
//               <p className="font-serif text-lg italic text-[#b58c82] sm:text-xl">
//                 “And suddenly, all the love songs were about us.”
//               </p>
//             </div>
//           </div>

//           <div className="relative mt-14 min-h-[500px] sm:mt-20 sm:min-h-[700px] md:min-h-[850px]">
//             {/* MAIN */}

//             <div className="absolute left-1/2 top-0 w-[82%] -translate-x-1/2 sm:w-[68%] md:w-[52%]">
//               <div className="relative overflow-hidden border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(40,50,40,.16)] sm:border-[10px]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={
//                       activePhoto === 0
//                         ? couple1
//                         : activePhoto === 1
//                           ? couple2
//                           : couple3
//                     }
//                     alt="Surabhi and Nandu"
//                     className="h-full w-full object-cover transition-all duration-[1800ms]"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* LEFT IMAGE */}

//             <div className="absolute left-0 top-[22%] hidden w-[24%] rotate-[-7deg] sm:block md:left-[3%] md:w-[27%]">
//               <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={couple2}
//                     alt="Surabhi and Nandu"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}

//             <div className="absolute right-0 top-[30%] hidden w-[24%] rotate-[7deg] sm:block md:right-[3%] md:w-[27%]">
//               <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
//                 <div className="aspect-[3/4] overflow-hidden">
//                   <img
//                     src={couple3}
//                     alt="Surabhi and Nandu"
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* CONTROLS */}

//             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:bottom-0">
//               <div className="flex items-center gap-3 rounded-full border border-[#8b947f]/20 bg-[#f9f4ec]/90 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:gap-4 sm:px-6 sm:py-3">
//                 <button
//                   onClick={() => setActivePhoto(0)}
//                   className={`h-1.5 rounded-full transition-all duration-500 ${
//                     activePhoto === 0
//                       ? 'w-7 bg-[#506451] sm:w-8'
//                       : 'w-1.5 bg-[#506451]/20'
//                   }`}
//                 />

//                 <span className="text-[6px] uppercase tracking-[0.3em] text-[#7c857b] sm:text-[7px] sm:tracking-[0.35em]">
//                   Our moments
//                 </span>

//                 <button
//                   onClick={() => setActivePhoto(1)}
//                   className={`h-1.5 rounded-full transition-all duration-500 ${
//                     activePhoto === 1
//                       ? 'w-7 bg-[#506451] sm:w-8'
//                       : 'w-1.5 bg-[#506451]/20'
//                   }`}
//                 />

//                 <button
//                   onClick={() => setActivePhoto(2)}
//                   aria-label="Show third photo"
//                   className={`h-1.5 rounded-full transition-all duration-500 ${
//                     activePhoto === 2
//                       ? 'w-7 bg-[#506451] sm:w-8'
//                       : 'w-1.5 bg-[#506451]/20'
//                   }`}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           DETAILS
//       ===================================================== */}

//       <section
//         id="details"
//         className="cinematic-reveal relative overflow-hidden bg-[#e9e3d8] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
//       >
//         <div className="mx-auto max-w-6xl">
//           <div className="text-center">
//             <p className="text-[7px] uppercase tracking-[0.45em] text-[#7f897d] sm:text-[8px] sm:tracking-[0.55em]">
//               The celebration
//             </p>

//             <h2 className="mt-4 font-serif text-[clamp(3.5rem,12vw,7rem)] font-light text-[#405141]">
//               Join our day
//             </h2>
//           </div>

//           <div className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2 md:gap-8">
//             {/* DATE - SCRATCH TO REVEAL */}

//             <div
//               className={`relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-7 shadow-[0_25px_60px_rgba(55,65,55,.08)] backdrop-blur-xl transition-all duration-1000 sm:p-10 md:p-14 ${
//                 dateRevealed ? 'shadow-[0_30px_90px_rgba(55,65,55,.14)]' : ''
//               }`}
//             >
//               {/* Ambient glow */}

//               <div
//                 className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4dfcd]/50 blur-[60px] transition-all duration-1000 sm:h-40 sm:w-40 ${
//                   dateRevealed ? 'scale-150 opacity-80' : 'opacity-50'
//                 }`}
//               />

//               <div
//                 className={`pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#e9c2b8]/30 blur-[55px] transition-all duration-1000 ${
//                   dateRevealed ? 'scale-150 opacity-80' : 'opacity-30'
//                 }`}
//               />

//               <div className="relative z-10">
//                 {/* HEADER */}

//                 <div className="flex items-center justify-between">
//                   <p className="text-[7px] uppercase tracking-[0.4em] text-[#879084] sm:text-[8px] sm:tracking-[0.45em]">
//                     Save the date
//                   </p>

//                   <CalendarDays
//                     size={19}
//                     strokeWidth={1}
//                     className={`transition-all duration-700 sm:h-[22px] sm:w-[22px] ${
//                       dateRevealed
//                         ? 'rotate-[-8deg] text-[#c58b82]'
//                         : 'text-[#60705e]'
//                     }`}
//                   />
//                 </div>

//                 {/* SCRATCH AREA */}

//                 <div
//                   className={`relative mt-10 overflow-hidden rounded-[4px] border border-[#c7b393]/20 sm:mt-14 ${
//                     dateRevealed ? 'bg-[#f8f4ec]' : 'bg-[#e8dcc6]'
//                   }`}
//                   style={{
//                     minHeight: '330px',
//                   }}
//                 >
//                   {/* REAL DATE */}

//                   <div
//                     className={`relative flex min-h-[330px] flex-col items-center justify-center text-center transition-all duration-[1400ms] ${
//                       dateRevealed
//                         ? 'scale-100 opacity-100'
//                         : 'scale-95 opacity-20'
//                     }`}
//                   >
//                     <p className="font-serif text-[70px] font-light leading-none text-[#405141] sm:text-[86px]">
//                       13
//                     </p>

//                     <p className="mt-3 font-serif text-3xl italic text-[#c58b82] sm:mt-4 sm:text-4xl">
//                       December
//                     </p>

//                     <div className="mt-5 h-px w-12 bg-[#bf9b70] sm:mt-6 sm:w-16" />

//                     <p className="mt-5 text-[7px] uppercase tracking-[0.3em] text-[#7d857c] sm:mt-6 sm:text-[9px] sm:tracking-[0.35em]">
//                       Sunday · 2026
//                     </p>

//                     <p className="mt-4 px-2 text-center font-serif text-base italic leading-relaxed text-[#c58b82] sm:text-xl">
//                       <span className="block">Muhurtham</span>
//                       <span className="block whitespace-nowrap text-[14px] sm:text-xl">
//                         11:45 AM – 12:15 PM
//                       </span>
//                     </p>
//                     {/* SPARKLES AFTER REVEAL */}

//                     {dateRevealed && (
//                       <>
//                         {[...Array(14)].map((_, index) => (
//                           <span
//                             key={index}
//                             className="pointer-events-none absolute text-[#c49b6b]"
//                             style={{
//                               left: `${8 + ((index * 19) % 84)}%`,
//                               top: `${7 + ((index * 31) % 80)}%`,
//                               animation: `revealSparkle 1.8s ease-out ${
//                                 index * 0.09
//                               }s forwards`,
//                               opacity: 0,
//                               fontSize: index % 2 === 0 ? '10px' : '7px',
//                             }}
//                           >
//                             ✦
//                           </span>
//                         ))}
//                       </>
//                     )}
//                   </div>

//                   {/* SCRATCH CANVAS */}

//                   {!dateRevealed && (
//                     <canvas
//                       ref={scratchCanvasRef}
//                       className="absolute inset-0 z-20 h-full w-full cursor-crosshair touch-none"
//                       onMouseDown={handleScratchStart}
//                       onMouseMove={handleScratchMove}
//                       onMouseUp={handleScratchEnd}
//                       onMouseLeave={handleScratchEnd}
//                       onTouchStart={handleScratchStart}
//                       onTouchMove={handleScratchMove}
//                       onTouchEnd={handleScratchEnd}
//                     />
//                   )}

//                   {/* SCRATCH HINT */}

//                   {!dateRevealed && (
//                     <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
//                       <div className="mt-20 text-center">
//                         <div
//                           className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-sm"
//                           style={{
//                             animation: 'scratchHint 2s ease-in-out infinite',
//                           }}
//                         >
//                           <Sparkles
//                             size={15}
//                             strokeWidth={1}
//                             className="text-white"
//                           />
//                         </div>

//                         <p className="text-[7px] uppercase tracking-[0.4em] text-white drop-shadow-md sm:text-[8px]">
//                           Scratch to reveal
//                         </p>

//                         <p className="mt-2 text-[6px] uppercase tracking-[0.25em] text-white/70">
//                           Discover our special day
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* PROGRESS */}

//                 {!dateRevealed && (
//                   <div className="mt-5">
//                     <div className="h-[2px] overflow-hidden rounded-full bg-[#506451]/10">
//                       <div
//                         className="h-full rounded-full bg-[#c58b82] transition-all duration-300"
//                         style={{
//                           width: `${Math.min(scratchProgress, 100)}%`,
//                         }}
//                       />
//                     </div>

//                     <p className="mt-2 text-center text-[6px] uppercase tracking-[0.3em] text-[#8b9188]">
//                       {scratchProgress > 0
//                         ? 'Keep revealing...'
//                         : 'Use your finger or mouse'}
//                     </p>
//                   </div>
//                 )}

//                 {/* CALENDAR BUTTON */}

//                 {dateRevealed && (
//                   <div className="flex justify-center">
//                     <button
//                       onClick={addToCalendar}
//                       className="mt-8 inline-flex items-center gap-2 border border-[#526653]/25 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white sm:mt-10 sm:px-6 sm:py-3 sm:text-[8px]"
//                     >
//                       <CalendarDays size={12} strokeWidth={1.5} />
//                       Add to Calendar
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* FLOWER PETAL REVEAL */}

//               {dateRevealed &&
//                 [...Array(20)].map((_, index) => (
//                   <span
//                     key={index}
//                     className="pointer-events-none absolute z-40"
//                     style={{
//                       left: `${3 + ((index * 37) % 94)}%`,
//                       top: '-20px',
//                       animation: `dateFlowerFall ${
//                         2.5 + (index % 5) * 0.45
//                       }s ease-out ${index * 0.08}s forwards`,
//                     }}
//                   >
//                     <span
//                       className="block"
//                       style={{
//                         width: index % 3 === 0 ? '11px' : '8px',
//                         height: index % 3 === 0 ? '7px' : '5px',
//                         borderRadius: '100% 0 100% 0',
//                         background: index % 2 === 0 ? '#d79a90' : '#e8b7ad',
//                         transform: `rotate(${index * 42}deg)`,
//                         opacity: 0.8,
//                       }}
//                     />
//                   </span>
//                 ))}
//             </div>

//             {/* VENUE */}

//             <div className="relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-7 shadow-[0_25px_60px_rgba(75,55,50,.08)] backdrop-blur-xl sm:p-10 md:p-14">
//               <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#e9c2b8]/40 blur-[65px] sm:h-48 sm:w-48" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <p className="text-[7px] uppercase tracking-[0.4em] text-[#978780] sm:text-[8px] sm:tracking-[0.45em]">
//                     The venue
//                   </p>

//                   <MapPin
//                     size={19}
//                     strokeWidth={1}
//                     className="text-[#c2867e] sm:h-[22px] sm:w-[22px]"
//                   />
//                 </div>

//                 <div className="mt-12 sm:mt-16">
//                   <h3 className="max-w-md font-serif text-[clamp(2.4rem,8vw,3.5rem)] font-light leading-[1.05] text-[#405141]">
//                     SB Convention Center
//                   </h3>

//                   <p className="mt-5 text-[13px] leading-7 text-[#7b8179] sm:text-sm">
//                     RBM Arcade,
//                     <br />
//                     Mullambazar
//                   </p>

//                   <button
//                     onClick={openLocation}
//                     className="mt-8 inline-flex items-center gap-2 border border-[#526653]/25 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white sm:mt-10 sm:px-6 sm:py-3 sm:text-[8px]"
//                   >
//                     <Navigation size={11} />
//                     View Location
//                   </button>

//                   <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#526653]/10 pt-7 sm:flex-row sm:items-center sm:gap-5">
//                     <div className="rounded-xl border border-white bg-white p-2 shadow-md">
//                       <img
//                         src={venueQr}
//                         alt="QR code to open the wedding venue in Google Maps"
//                         className="h-28 w-28"
//                       />
//                     </div>
//                     <div className="text-center sm:text-left">
//                       <p className="font-serif text-xl italic text-[#405141]">
//                         Find your way to us
//                       </p>
//                       <p className="mt-2 max-w-xs text-[11px] leading-6 text-[#7b8179]">
//                         Scan this QR code to open the wedding venue location in
//                         Google Maps.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* STRIP */}

//           <div className="mt-5 flex flex-col items-center gap-5 border border-white/60 bg-[#f8f4ec]/60 px-6 py-6 text-center backdrop-blur-xl sm:mt-8 sm:px-8 sm:py-7 md:flex-row md:justify-between md:text-left">
//             <div>
//               <p className="text-[6px] uppercase tracking-[0.35em] text-[#899187] sm:text-[7px] sm:tracking-[0.4em]">
//                 A day filled with love
//               </p>

//               <p className="mt-2 font-serif text-lg italic text-[#405141] sm:text-2xl">
//                 We would be honoured to have you with us.
//               </p>
//             </div>

//             <div className="hidden h-10 w-px bg-[#c39c71] md:block" />

//             <p className="font-serif text-xl text-[#405141] sm:text-2xl">
//               Surabhi <span className="text-[#c88d84]">&</span> Nandu
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           RSVP
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#f7f2e9] px-5 py-28 text-center sm:px-8 sm:py-36 md:py-48">
//         <div className="mx-auto max-w-3xl">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#c59b70]/30 sm:h-14 sm:w-14">
//             <Sparkles size={18} strokeWidth={1} className="text-[#bd925d]" />
//           </div>

//           <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-[#828b80] sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
//             A special invitation
//           </p>

//           <h2 className="mt-6 font-serif text-[clamp(3.4rem,12vw,7rem)] font-light leading-[0.95] text-[#405141]">
//             Come celebrate
//             <br />
//             <span className="italic text-[#c88d84]">love with us.</span>
//           </h2>

//           <p className="mx-auto mt-7 max-w-xl text-[13px] leading-7 text-[#747a72] sm:mt-9 sm:text-sm sm:leading-8">
//             Your presence, blessings and love would mean the world to us as we
//             begin this beautiful new chapter together.
//           </p>

//           {!rsvpSubmitted ? (
//             <button
//               onClick={() => setShowRsvp(true)}
//               className="mt-9 rounded-full bg-[#506451] px-8 py-3.5 text-[7px] uppercase tracking-[0.3em] text-white shadow-[0_18px_45px_rgba(55,75,55,.2)] transition duration-500 hover:-translate-y-1 hover:bg-[#405342] sm:mt-10 sm:px-10 sm:py-4 sm:text-[8px]"
//             >
//               Confirm Attendance
//             </button>
//           ) : (
//             <div className="mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-[#506451] px-6 py-3.5 text-white shadow-xl sm:mt-10 sm:px-8 sm:py-4">
//               <Check size={14} />

//               <span className="text-[7px] uppercase tracking-[0.25em] sm:text-[8px] sm:tracking-[0.3em]">
//                 Thank you for joining us
//               </span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* =====================================================
//           RSVP MODAL
//       ===================================================== */}

//       {showRsvp && (
//         <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-[#263026]/65 px-4 py-6 backdrop-blur-xl sm:px-5">
//           <div className="relative my-auto w-full max-w-md overflow-hidden border border-white/60 bg-[#f8f3ea] p-6 shadow-[0_40px_100px_rgba(0,0,0,.25)] sm:p-10">
//             <button
//               onClick={() => setShowRsvp(false)}
//               className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e7ece2] text-[#506451] transition hover:rotate-90 sm:right-5 sm:top-5"
//             >
//               <X size={15} />
//             </button>

//             <div className="text-center">
//               <Heart
//                 size={22}
//                 strokeWidth={1}
//                 className="mx-auto text-[#c88c83]"
//               />

//               <p className="mt-4 text-[7px] uppercase tracking-[0.35em] text-[#899187]">
//                 RSVP
//               </p>

//               <h3 className="mt-3 font-serif text-4xl font-light text-[#405141] sm:text-5xl">
//                 You're invited
//               </h3>

//               <p className="mt-3 text-[13px] leading-6 text-[#777e76] sm:mt-4 sm:text-sm sm:leading-7">
//                 We can't wait to celebrate this beautiful day with you.
//               </p>
//             </div>

//             <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 className="w-full border border-[#526653]/10 bg-white px-4 py-3.5 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40 sm:px-5 sm:py-4"
//               />

//               <input
//                 type="number"
//                 placeholder="Number of guests"
//                 className="w-full border border-[#526653]/10 bg-white px-4 py-3.5 text-sm text-[#405141] outline-none transition focus:border-[#526653]/40 sm:px-5 sm:py-4"
//               />

//               <button
//                 onClick={submitRsvp}
//                 className="w-full bg-[#506451] py-3.5 text-[7px] uppercase tracking-[0.3em] text-white transition duration-500 hover:bg-[#405342] sm:py-4 sm:text-[8px]"
//               >
//                 Confirm Attendance
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           FINAL
//       ===================================================== */}

//       <section className="relative overflow-hidden bg-[#435646] px-5 py-28 text-center text-white sm:px-8 sm:py-36 md:py-48">
//         <div className="pointer-events-none absolute -left-32 top-0 opacity-[0.07]">
//           <svg width="360" height="500" viewBox="0 0 450 600" fill="none">
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
//           </svg>
//         </div>

//         <div className="pointer-events-none absolute -bottom-40 -right-20 rotate-180 opacity-[0.06]">
//           <svg width="360" height="500" viewBox="0 0 450 600" fill="none">
//             <path
//               d="M350 0C300 130 180 200 120 330C70 440 100 530 0 600"
//               stroke="#efc1b7"
//               strokeWidth="2"
//             />
//           </svg>
//         </div>

//         <div className="relative mx-auto max-w-4xl">
//           <Heart
//             size={28}
//             strokeWidth={1}
//             className="mx-auto text-[#efbeb4] sm:h-[31px] sm:w-[31px]"
//             style={{
//               animation: 'heartbeat 2.5s ease-in-out infinite',
//             }}
//           />

//           <p className="mt-7 text-[7px] uppercase tracking-[0.45em] text-white/45 sm:mt-8 sm:text-[8px] sm:tracking-[0.55em]">
//             Together forever
//           </p>

//           <h2 className="mt-7 w-full whitespace-nowrap text-center font-serif text-[clamp(1.5rem,7vw,2.8rem)] font-light tracking-[-0.06em] sm:text-6xl md:text-9xl">
//             Surabhi
//             <span className="mx-1 text-[#efbeb4] sm:mx-3">&</span>
//             Nandu
//           </h2>

//           <div className="mx-auto mt-8 flex items-center justify-center gap-4 sm:mt-10">
//             <span className="h-px w-12 bg-white/20 sm:w-16" />

//             <span className="text-[#dfba75]">✦</span>

//             <span className="h-px w-12 bg-white/20 sm:w-16" />
//           </div>

//           <p className="mt-7 font-serif text-xl italic text-white/70 sm:mt-9 sm:text-2xl">
//             December 13, 2026
//           </p>

//           <p className="mx-auto mt-7 max-w-md text-[13px] leading-7 text-white/40 sm:mt-8 sm:text-sm">
//             We cannot wait to begin this beautiful chapter surrounded by the
//             people we love.
//           </p>

//           <p className="mt-10 text-[6px] uppercase tracking-[0.4em] text-white/25 sm:mt-12 sm:text-[7px] sm:tracking-[0.5em]">
//             Forever begins here
//           </p>
//         </div>
//       </section>

//       {/* =====================================================
//           ANIMATIONS
//       ===================================================== */}

//       <style>
//         {`
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

//           50% {
//             transform: translate3d(40px, 50vh, 0) rotate(180deg);
//             opacity: 0.5;
//           }

//           100% {
//             transform: translate3d(-40px, 110vh, 0) rotate(360deg);
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
//             transform: scale(0.9);
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

//           60% {
//             opacity: 0.9;
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
//             transform: scale(1.1);
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

//           65% {
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

//         /* =====================================================
//            SCRATCH REVEAL ANIMATIONS
//         ===================================================== */

//         @keyframes scratchHint {
//           0%,
//           100% {
//             transform: scale(1);
//             opacity: 0.7;
//           }

//           50% {
//             transform: scale(1.15);
//             opacity: 1;
//           }
//         }

//         @keyframes revealSparkle {
//           0% {
//             opacity: 0;
//             transform: scale(0) rotate(0deg);
//           }

//           35% {
//             opacity: 1;
//             transform: scale(1.4) rotate(90deg);
//           }

//           70% {
//             opacity: 0.8;
//             transform: scale(0.9) rotate(180deg);
//           }

//           100% {
//             opacity: 0;
//             transform: scale(0.3) rotate(270deg);
//           }
//         }

//         @keyframes dateFlowerFall {
//           0% {
//             opacity: 0;
//             transform:
//               translate3d(0, -20px, 0)
//               rotate(0deg)
//               scale(0.5);
//           }

//           12% {
//             opacity: 0.9;
//           }

//           40% {
//             transform:
//               translate3d(25px, 100px, 0)
//               rotate(120deg)
//               scale(1);
//           }

//           70% {
//             transform:
//               translate3d(-20px, 220px, 0)
//               rotate(280deg)
//               scale(0.9);
//             opacity: 0.7;
//           }

//           100% {
//             opacity: 0;
//             transform:
//               translate3d(20px, 360px, 0)
//               rotate(460deg)
//               scale(0.65);
//           }
//         }

//         @media (max-width: 380px) {
//           .xs\\:text-\\[29px\\] {
//             font-size: 25px;
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
//         @keyframes countdownTick {
//           0% {
//             opacity: 0;
//             transform: translateY(8px) scale(0.96);
//           }

//           60% {
//             opacity: 1;
//             transform: translateY(-2px) scale(1.015);
//           }

//           100% {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//           /* CINEMATIC SCROLL REVEAL */

// .cinematic-reveal {
//   opacity: 0;
//   transform: translateY(70px) scale(0.97);
//   filter: blur(8px);
//   transition:
//     opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
//     transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
//     filter 1.1s cubic-bezier(0.16, 1, 0.3, 1);
//   will-change: opacity, transform, filter;
// }

// .cinematic-reveal.cinematic-visible {
//   opacity: 1;
//   transform: translateY(0) scale(1);
//   filter: blur(0);
// }

//       `}
//       </style>
//     </div>
//   );
// };

// export default Invitation;

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
import couple3 from './assets/couple.3.jpg';
import venueQr from './assets/venue-qr.png';

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
  const [envelopeOpening, setEnvelopeOpening] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showRsvp, setShowRsvp] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // PREMIUM WEDDING COUNTDOWN
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // DATE SCRATCH REVEAL
  const [dateRevealed, setDateRevealed] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);

  const audioRef = useRef(null);
  const envelopeTimerRef = useRef(null);
  const scratchCanvasRef = useRef(null);
  const isScratchingRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = opened ? 'auto' : 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  // CINEMATIC SCROLL REVEAL
  useEffect(() => {
    if (!opened) return;

    const revealElements = document.querySelectorAll('.cinematic-reveal');

    // Fallback: never leave content hidden on browsers without IntersectionObserver.
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => {
        element.classList.add('cinematic-visible');
      });
      return undefined;
    }

    // Mobile screens show a smaller portion of tall sections at one time,
    // so use a much lower threshold to reliably trigger the reveal.
    const isMobileScreen = window.matchMedia('(max-width: 767px)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cinematic-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isMobileScreen ? 0.01 : 0.12,
        rootMargin: isMobileScreen ? '0px 0px -20px 0px' : '0px 0px -80px 0px',
      },
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [opened]);

  useEffect(() => {
    const weddingDate = new Date('2026-12-13T11:45:00+05:30');

    const updateCountdown = () => {
      const difference = weddingDate.getTime() - Date.now();

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);

      setCountdown({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor((totalSeconds % 86400) / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60,
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % 3);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const openInvitation = () => {
    if (envelopeOpening || opened) return;

    // Start music directly from the user's click so browser autoplay rules
    // continue to work while the envelope animation plays.
    if (audioRef.current) {
      const playPromise = audioRef.current.play();

      if (playPromise && typeof playPromise.then === 'function') {
        playPromise
          .then(() => setMusicPlaying(true))
          .catch((error) => {
            console.log('Music autoplay blocked:', error);
          });
      }
    }

    setEnvelopeOpening(true);

    // Let the flap open and the invitation card rise before revealing the page.
    envelopeTimerRef.current = window.setTimeout(() => {
      setOpened(true);
      setEnvelopeOpening(false);
    }, 1900);
  };

  useEffect(
    () => () => {
      if (envelopeTimerRef.current) {
        window.clearTimeout(envelopeTimerRef.current);
      }
    },
    [],
  );

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
      'https://share.google/BdRaKDgqn10qbwy2I',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const addToCalendar = () => {
    const eventTitle = 'Surabhi & Nandu Wedding';

    const eventDetails =
      'Join us as we celebrate the wedding of Surabhi & Nandu. Muhurtham: 11:45 AM to 12:15 PM.';

    const location = 'SB Convention Centre, RBM Arcade, Mullambazar';

    const startDate = '20261213T114500';
    const endDate = '20261213T121500';

    const googleCalendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(eventTitle)}` +
      `&dates=${startDate}/${endDate}` +
      `&details=${encodeURIComponent(eventDetails)}` +
      `&location=${encodeURIComponent(location)}` +
      `&ctz=Asia/Kolkata`;

    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
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

  // =========================================================
  // SCRATCH DATE REVEAL
  // =========================================================

  const initializeScratchCanvas = () => {
    const canvas = scratchCanvasRef.current;

    if (!canvas || dateRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);

    gradient.addColorStop(0, '#d2b98f');
    gradient.addColorStop(0.45, '#eadfc8');
    gradient.addColorStop(1, '#c6a879');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Elegant tiny pattern
    ctx.globalAlpha = 0.16;

    for (let x = 18; x < rect.width; x += 30) {
      for (let y = 18; y < rect.height; y += 30) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      }
    }

    ctx.globalAlpha = 1;

    // Soft center decoration
    ctx.strokeStyle = 'rgba(255,255,255,0.28)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.arc(
      rect.width / 2,
      rect.height / 2,
      Math.min(rect.width, rect.height) * 0.27,
      0,
      Math.PI * 2,
    );
    ctx.stroke();

    // Scratch text
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = '600 9px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
  };

  const checkScratchProgress = () => {
    const canvas = scratchCanvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let transparentPixels = 0;

    // Sampling improves mobile performance
    for (let i = 3; i < imageData.data.length; i += 32) {
      if (imageData.data[i] < 80) {
        transparentPixels += 1;
      }
    }

    const totalPixels = imageData.data.length / 32;

    const progress = Math.min((transparentPixels / totalPixels) * 100, 100);

    setScratchProgress(progress);

    // Reveal once enough of the card has been scratched
    if (progress >= 55) {
      revealDate();
    }
  };

  const scratchDate = (event) => {
    if (dateRevealed) return;

    const canvas = scratchCanvasRef.current;

    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    let clientX;
    let clientY;

    if (event.touches && event.touches.length > 0) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.globalCompositeOperation = 'destination-out';

    const brushSize = window.innerWidth < 640 ? 42 : 52;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, brushSize);

    gradient.addColorStop(0, 'rgba(0,0,0,1)');

    gradient.addColorStop(0.55, 'rgba(0,0,0,0.95)');

    gradient.addColorStop(0.82, 'rgba(0,0,0,0.55)');

    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalCompositeOperation = 'source-over';

    checkScratchProgress();
  };

  const handleScratchStart = (event) => {
    if (dateRevealed) return;

    isScratchingRef.current = true;

    scratchDate(event);
  };

  const handleScratchMove = (event) => {
    if (!isScratchingRef.current || dateRevealed) {
      return;
    }

    event.preventDefault();

    scratchDate(event);
  };

  const handleScratchEnd = () => {
    isScratchingRef.current = false;
  };

  const revealDate = () => {
    if (dateRevealed) return;

    setDateRevealed(true);
    setScratchProgress(100);

    const canvas = scratchCanvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  useEffect(() => {
    if (!opened || dateRevealed) return;

    const timer = setTimeout(() => {
      initializeScratchCanvas();
    }, 400);

    const handleResize = () => {
      initializeScratchCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);

      window.removeEventListener('resize', handleResize);
    };
  }, [opened, dateRevealed]);

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
                {'NANDU'.split('').map((letter, index) => (
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
          ></p>
        </div>
      </div>

      {/* =====================================================
          CINEMATIC ENVELOPE OPENING
          This transition sits above the original cover only after
          the guest presses Open Invitation. The original first page
          remains visible and unchanged before that interaction.
      ===================================================== */}

      {envelopeOpening && (
        <div className="envelope-transition fixed inset-0 z-[120] flex items-center justify-center overflow-hidden px-5">
          <div className="envelope-scene-glow absolute left-1/2 top-1/2 h-[min(88vw,520px)] w-[min(88vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9e0d1]/55 blur-[85px]" />

          <div className="relative z-10 flex w-full max-w-[460px] flex-col items-center">
            <p className="mb-8 text-[8px] uppercase tracking-[0.42em] text-[#8b9585] sm:text-[9px]">
              A little something for you
            </p>

            <div className="envelope-object relative h-[220px] w-[min(86vw,390px)] sm:h-[255px]">
              <div className="envelope-shadow absolute -inset-x-4 bottom-[-22px] h-10 rounded-[50%] bg-[#74614e]/15 blur-xl" />

              <div className="envelope-back absolute inset-0 rounded-[5px] border border-[#c9b99f] bg-[#e8ddcd] shadow-[0_24px_55px_rgba(77,66,51,.18)]" />

              <div className="envelope-letter absolute left-[7%] right-[7%] top-[8%] z-[2] flex h-[84%] flex-col items-center justify-center border border-[#e4d9c9] bg-[#fffdf7] px-3 text-center shadow-[0_4px_18px_rgba(70,60,45,.08)]">
                <span className="mb-2 text-[7px] uppercase tracking-[0.35em] text-[#a18a70]">
                  Together with our families
                </span>
                <span className="font-serif text-[27px] font-light tracking-wide text-[#455543] sm:text-[34px]">
                  Surabhi <span className="italic text-[#c98c83]">&</span> Nandu
                </span>
                <span className="mt-3 h-px w-12 bg-[#c5a47e]" />
                <span className="mt-3 text-[7px] uppercase tracking-[0.3em] text-[#8c9687]">
                  13 December 2026
                </span>
              </div>

              <div className="envelope-pocket absolute inset-0 z-[4]" />

              <div className="envelope-flap absolute inset-x-0 top-0 z-[6] h-[62%]" />

              <div className="envelope-seal absolute left-1/2 top-[43%] z-[8] flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[#a9825d] bg-[radial-gradient(circle_at_35%_30%,#e7cda8,#b88d65_75%)] text-[#fff8e9] shadow-[0_4px_12px_rgba(80,57,35,.25)] sm:h-14 sm:w-14">
                <Heart size={19} fill="currentColor" strokeWidth={1.2} />
              </div>
            </div>

            <p className="mt-10 text-[7px] uppercase tracking-[0.38em] text-[#8b9585] sm:text-[8px]">
              Unfolding a beautiful beginning
            </p>
          </div>
        </div>
      )}

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
                  onClick={() => scrollToSection('countdown')}
                  className="text-[8px] uppercase tracking-[0.3em] text-[#69756a] hover:text-[#c88b81]"
                >
                  Countdown
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
                  ['Countdown', 'countdown'],
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
                Nandu
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

              <div className="hanging-photo hero-hanging relative rotate-[1.5deg] overflow-visible border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(45,55,45,.18)] sm:border-[10px]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={couple1}
                    alt="Surabhi and Nandu"
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
                  alt="Surabhi and Nandu"
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
          PREMIUM COUNTDOWN
      ===================================================== */}

      <section
        id="countdown"
        className="cinematic-reveal relative overflow-hidden bg-[#f4eee4] px-5 py-24 sm:px-8 sm:py-32 md:py-36"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b99a72]/10 sm:h-[620px] sm:w-[620px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c98c83]/10 sm:h-[460px] sm:w-[460px]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mx-auto flex w-fit items-center gap-3">
            <span className="h-px w-8 bg-[#c39a70]/60 sm:w-12" />
            <Sparkles size={12} strokeWidth={1.2} className="text-[#bd925d]" />
            <span className="h-px w-8 bg-[#c39a70]/60 sm:w-12" />
          </div>

          <p className="mt-7 text-[7px] uppercase tracking-[0.5em] text-[#818a80] sm:text-[8px] sm:tracking-[0.6em]">
            Counting every moment
          </p>

          <h2 className="mt-5 font-serif text-[clamp(3rem,10vw,6rem)] font-light leading-none tracking-[-0.04em] text-[#405141]">
            Until <span className="italic text-[#c88d84]">forever.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-[12px] leading-6 text-[#777d75] sm:text-sm sm:leading-7">
            The days are getting closer. We cannot wait to celebrate this
            beautiful beginning with you.
          </p>

          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4">
            {[
              ['days', countdown.days, 'Days'],
              ['hours', countdown.hours, 'Hours'],
              ['minutes', countdown.minutes, 'Minutes'],
              ['seconds', countdown.seconds, 'Seconds'],
            ].map(([key, value, label]) => (
              <div
                key={key}
                className="group relative overflow-hidden rounded-[18px] border border-white/80 bg-[#faf6ee]/75 px-3 py-6 shadow-[0_20px_55px_rgba(65,70,55,.08)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(65,70,55,.13)] sm:rounded-[22px] sm:px-5 sm:py-8"
              >
                <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9b1a8]/15 blur-2xl transition-transform duration-700 group-hover:scale-150" />

                <div className="relative">
                  <p
                    key={`${key}-${value}`}
                    className="font-serif text-[clamp(2.5rem,8vw,4.2rem)] font-light leading-none tabular-nums tracking-[-0.04em] text-[#405141]"
                    style={{ animation: 'countdownTick 0.55s ease-out' }}
                  >
                    {String(value).padStart(2, '0')}
                  </p>

                  <div className="mx-auto mt-4 h-px w-7 bg-[#c49b70]/50" />

                  <p className="mt-3 text-[6px] uppercase tracking-[0.35em] text-[#858b83] sm:text-[7px] sm:tracking-[0.45em]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex items-center justify-center gap-3 sm:mt-12">
            <span className="h-px w-10 bg-[#bd9a70]/30 sm:w-16" />
            <p className="font-serif text-sm italic text-[#a17f76] sm:text-base">
              13 December 2026 · 11:45 AM
            </p>
            <span className="h-px w-10 bg-[#bd9a70]/30 sm:w-16" />
          </div>

          <button
            onClick={() => scrollToSection('details')}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#526653]/20 bg-white/40 px-5 py-2.5 text-[7px] uppercase tracking-[0.3em] text-[#526653] backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:bg-[#526653] hover:text-white sm:px-6 sm:py-3 sm:text-[8px]"
          >
            Explore the celebration
            <ArrowDown size={11} strokeWidth={1.4} />
          </button>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section
        id="story"
        className="cinematic-reveal relative overflow-hidden bg-[#ebe5db] px-5 py-28 sm:px-8 sm:py-36 md:py-44"
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
        className="cinematic-reveal relative overflow-hidden bg-[#f8f3ea] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
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

          <div className="gallery-hanging-stage relative mt-14 min-h-[500px] sm:mt-20 sm:min-h-[700px] md:min-h-[850px]">
            {/* MAIN */}

            <div className="hanging-photo hanging-photo-main absolute left-1/2 top-0 w-[82%] -translate-x-1/2 sm:w-[68%] md:w-[52%]">
              <div className="relative overflow-hidden border-[7px] border-white bg-white p-1 shadow-[0_35px_80px_rgba(40,50,40,.16)] sm:border-[10px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={
                      activePhoto === 0
                        ? couple1
                        : activePhoto === 1
                          ? couple2
                          : couple3
                    }
                    alt="Surabhi and Nandu"
                    className="h-full w-full object-cover transition-all duration-[1800ms]"
                  />
                </div>
              </div>
            </div>

            {/* LEFT IMAGE */}

            <div className="hanging-photo hanging-photo-left absolute left-0 top-[22%] hidden w-[24%] rotate-[-7deg] sm:block md:left-[3%] md:w-[27%]">
              <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={couple2}
                    alt="Surabhi and Nandu"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="hanging-photo hanging-photo-right absolute right-0 top-[30%] hidden w-[24%] rotate-[7deg] sm:block md:right-[3%] md:w-[27%]">
              <div className="border-[7px] border-white bg-white p-1 shadow-[0_25px_60px_rgba(40,50,40,.14)] md:border-[8px]">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={couple3}
                    alt="Surabhi and Nandu"
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

                <button
                  onClick={() => setActivePhoto(2)}
                  aria-label="Show third photo"
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activePhoto === 2
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
        className="cinematic-reveal relative overflow-hidden bg-[#e9e3d8] px-5 py-28 sm:px-8 sm:py-36 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[7px] uppercase tracking-[0.45em] text-[#7f897d] sm:text-[8px] sm:tracking-[0.55em]">
              The celebration
            </p>

            <h2 className="mt-4 whitespace-nowrap font-serif text-[clamp(2.8rem,10vw,7rem)] font-light text-[#405141]">
              Join our day
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:mt-20 md:grid-cols-2 md:gap-8">
            {/* DATE - SCRATCH TO REVEAL */}

            <div
              className={`relative overflow-hidden border border-white/70 bg-[#f8f4ec]/80 p-7 shadow-[0_25px_60px_rgba(55,65,55,.08)] backdrop-blur-xl transition-all duration-1000 sm:p-10 md:p-14 ${
                dateRevealed ? 'shadow-[0_30px_90px_rgba(55,65,55,.14)]' : ''
              }`}
            >
              {/* Ambient glow */}

              <div
                className={`pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#d4dfcd]/50 blur-[60px] transition-all duration-1000 sm:h-40 sm:w-40 ${
                  dateRevealed ? 'scale-150 opacity-80' : 'opacity-50'
                }`}
              />

              <div
                className={`pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#e9c2b8]/30 blur-[55px] transition-all duration-1000 ${
                  dateRevealed ? 'scale-150 opacity-80' : 'opacity-30'
                }`}
              />

              <div className="relative z-10">
                {/* HEADER */}

                <div className="flex items-center justify-between">
                  <p className="text-[7px] uppercase tracking-[0.4em] text-[#879084] sm:text-[8px] sm:tracking-[0.45em]">
                    Save the date
                  </p>

                  <CalendarDays
                    size={19}
                    strokeWidth={1}
                    className={`transition-all duration-700 sm:h-[22px] sm:w-[22px] ${
                      dateRevealed
                        ? 'rotate-[-8deg] text-[#c58b82]'
                        : 'text-[#60705e]'
                    }`}
                  />
                </div>

                {/* SCRATCH AREA */}

                <div
                  className={`relative mt-10 overflow-hidden rounded-[4px] border border-[#c7b393]/20 sm:mt-14 ${
                    dateRevealed ? 'bg-[#f8f4ec]' : 'bg-[#e8dcc6]'
                  }`}
                  style={{
                    minHeight: '330px',
                  }}
                >
                  {/* REAL DATE */}

                  <div
                    className={`relative flex min-h-[330px] flex-col items-center justify-center text-center transition-all duration-[1400ms] ${
                      dateRevealed
                        ? 'scale-100 opacity-100'
                        : 'scale-95 opacity-20'
                    }`}
                  >
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

                    <p className="mt-4 px-2 text-center font-serif text-base italic leading-relaxed text-[#c58b82] sm:text-xl">
                      <span className="block">Muhurtham</span>
                      <span className="block whitespace-nowrap text-[14px] sm:text-xl">
                        11:45 AM – 12:15 PM
                      </span>
                    </p>
                    {/* SPARKLES AFTER REVEAL */}

                    {dateRevealed && (
                      <>
                        {[...Array(14)].map((_, index) => (
                          <span
                            key={index}
                            className="pointer-events-none absolute text-[#c49b6b]"
                            style={{
                              left: `${8 + ((index * 19) % 84)}%`,
                              top: `${7 + ((index * 31) % 80)}%`,
                              animation: `revealSparkle 1.8s ease-out ${
                                index * 0.09
                              }s forwards`,
                              opacity: 0,
                              fontSize: index % 2 === 0 ? '10px' : '7px',
                            }}
                          >
                            ✦
                          </span>
                        ))}
                      </>
                    )}
                  </div>

                  {/* SCRATCH CANVAS */}

                  {!dateRevealed && (
                    <canvas
                      ref={scratchCanvasRef}
                      className="absolute inset-0 z-20 h-full w-full cursor-crosshair touch-none"
                      onMouseDown={handleScratchStart}
                      onMouseMove={handleScratchMove}
                      onMouseUp={handleScratchEnd}
                      onMouseLeave={handleScratchEnd}
                      onTouchStart={handleScratchStart}
                      onTouchMove={handleScratchMove}
                      onTouchEnd={handleScratchEnd}
                    />
                  )}

                  {/* SCRATCH HINT */}

                  {!dateRevealed && (
                    <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
                      <div className="mt-20 text-center">
                        <div
                          className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/20 backdrop-blur-sm"
                          style={{
                            animation: 'scratchHint 2s ease-in-out infinite',
                          }}
                        >
                          <Sparkles
                            size={15}
                            strokeWidth={1}
                            className="text-white"
                          />
                        </div>

                        <p className="text-[7px] uppercase tracking-[0.4em] text-white drop-shadow-md sm:text-[8px]">
                          Scratch to reveal
                        </p>

                        <p className="mt-2 text-[6px] uppercase tracking-[0.25em] text-white/70">
                          Discover our special day
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* PROGRESS */}

                {!dateRevealed && (
                  <div className="mt-5">
                    <div className="h-[2px] overflow-hidden rounded-full bg-[#506451]/10">
                      <div
                        className="h-full rounded-full bg-[#c58b82] transition-all duration-300"
                        style={{
                          width: `${Math.min(scratchProgress, 100)}%`,
                        }}
                      />
                    </div>

                    <p className="mt-2 text-center text-[6px] uppercase tracking-[0.3em] text-[#8b9188]">
                      {scratchProgress > 0
                        ? 'Keep revealing...'
                        : 'Use your finger or mouse'}
                    </p>
                  </div>
                )}

                {/* CALENDAR BUTTON */}

                {dateRevealed && (
                  <div className="flex justify-center">
                    <button
                      onClick={addToCalendar}
                      className="mt-8 inline-flex items-center gap-2 border border-[#526653]/25 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white sm:mt-10 sm:px-6 sm:py-3 sm:text-[8px]"
                    >
                      <CalendarDays size={12} strokeWidth={1.5} />
                      Add to Calendar
                    </button>
                  </div>
                )}
              </div>

              {/* FLOWER PETAL REVEAL */}

              {dateRevealed &&
                [...Array(20)].map((_, index) => (
                  <span
                    key={index}
                    className="pointer-events-none absolute z-40"
                    style={{
                      left: `${3 + ((index * 37) % 94)}%`,
                      top: '-20px',
                      animation: `dateFlowerFall ${
                        2.5 + (index % 5) * 0.45
                      }s ease-out ${index * 0.08}s forwards`,
                    }}
                  >
                    <span
                      className="block"
                      style={{
                        width: index % 3 === 0 ? '11px' : '8px',
                        height: index % 3 === 0 ? '7px' : '5px',
                        borderRadius: '100% 0 100% 0',
                        background: index % 2 === 0 ? '#d79a90' : '#e8b7ad',
                        transform: `rotate(${index * 42}deg)`,
                        opacity: 0.8,
                      }}
                    />
                  </span>
                ))}
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

                  <p className="mt-5 text-[13px] leading-7 text-[#7b8179] sm:text-sm">
                    RBM Arcade,
                    <br />
                    Mullambazar
                  </p>

                  <button
                    onClick={openLocation}
                    className="mt-8 inline-flex items-center gap-2 border border-[#526653]/25 px-5 py-3 text-[7px] uppercase tracking-[0.28em] text-[#526653] transition duration-500 hover:bg-[#526653] hover:text-white sm:mt-10 sm:px-6 sm:py-3 sm:text-[8px]"
                  >
                    <Navigation size={11} />
                    View Location
                  </button>

                  <div className="mt-8 flex flex-col items-center gap-3 border-t border-[#526653]/10 pt-7 sm:flex-row sm:items-center sm:gap-5">
                    <div className="rounded-xl border border-white bg-white p-2 shadow-md">
                      <img
                        src={venueQr}
                        alt="QR code to open the wedding venue in Google Maps"
                        className="h-28 w-28"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="font-serif text-xl italic text-[#405141]">
                        Find your way to us
                      </p>
                      <p className="mt-2 max-w-xs text-[11px] leading-6 text-[#7b8179]">
                        Scan this QR code to open the wedding venue location in
                        Google Maps.
                      </p>
                    </div>
                  </div>
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
              Surabhi <span className="text-[#c88d84]">&</span> Nandu
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

          <h2 className="mt-7 w-full whitespace-nowrap text-center font-serif text-[clamp(1.5rem,7vw,2.8rem)] font-light tracking-[-0.06em] sm:text-6xl md:text-9xl">
            Surabhi
            <span className="mx-1 text-[#efbeb4] sm:mx-3">&</span>
            Nandu
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

      <style>
        {`
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

        /* =====================================================
           SCRATCH REVEAL ANIMATIONS
        ===================================================== */

        @keyframes scratchHint {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }

          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes revealSparkle {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }

          35% {
            opacity: 1;
            transform: scale(1.4) rotate(90deg);
          }

          70% {
            opacity: 0.8;
            transform: scale(0.9) rotate(180deg);
          }

          100% {
            opacity: 0;
            transform: scale(0.3) rotate(270deg);
          }
        }

        @keyframes dateFlowerFall {
          0% {
            opacity: 0;
            transform:
              translate3d(0, -20px, 0)
              rotate(0deg)
              scale(0.5);
          }

          12% {
            opacity: 0.9;
          }

          40% {
            transform:
              translate3d(25px, 100px, 0)
              rotate(120deg)
              scale(1);
          }

          70% {
            transform:
              translate3d(-20px, 220px, 0)
              rotate(280deg)
              scale(0.9);
            opacity: 0.7;
          }

          100% {
            opacity: 0;
            transform:
              translate3d(20px, 360px, 0)
              rotate(460deg)
              scale(0.65);
          }
        }

        @media (max-width: 380px) {
          .xs\\:text-\\[29px\\] {
            font-size: 25px;
          }
        }


        /* =====================================================
           CINEMATIC ENVELOPE OPENING
        ===================================================== */

        .envelope-transition {
          background:
            radial-gradient(circle at 18% 20%, rgba(217,224,209,.45), transparent 38%),
            radial-gradient(circle at 82% 82%, rgba(231,184,173,.28), transparent 42%),
            rgba(245,239,231,.98);
          animation: envelopeSceneIn .45s ease-out both;
          perspective: 1200px;
        }

        .envelope-object {
          transform-style: preserve-3d;
          animation: envelopeArrive .65s cubic-bezier(.16,1,.3,1) both;
        }

        .envelope-letter {
          transform: translateY(17%) scale(.96);
          animation: invitationLetterRise 1.05s cubic-bezier(.16,1,.3,1) .62s forwards;
        }

        .envelope-pocket {
          clip-path: polygon(0 0, 50% 57%, 100% 0, 100% 100%, 0 100%);
          background: linear-gradient(145deg, #f0e6d7, #e2d3bf);
          border: 1px solid rgba(177,151,117,.7);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.55);
        }

        .envelope-flap {
          clip-path: polygon(0 0, 100% 0, 50% 100%);
          transform-origin: 50% 0%;
          transform: rotateX(0deg);
          backface-visibility: visible;
          background: linear-gradient(145deg, #f5ecdf, #ddcbb4);
          border-top: 1px solid rgba(177,151,117,.8);
          filter: drop-shadow(0 3px 4px rgba(75,60,42,.12));
          animation: envelopeFlapOpen .85s cubic-bezier(.65,0,.35,1) .28s forwards;
        }

        .envelope-seal {
          transform-origin: center;
          animation: envelopeSealRelease .5s ease-in .18s forwards;
        }

        .envelope-scene-glow {
          animation: envelopeGlow 2s ease-in-out infinite alternate;
        }

        @keyframes envelopeSceneIn {
          from { opacity: 0; backdrop-filter: blur(0); }
          to { opacity: 1; backdrop-filter: blur(5px); }
        }

        @keyframes envelopeArrive {
          from { opacity: 0; transform: translateY(28px) scale(.9) rotateX(8deg); }
          to { opacity: 1; transform: translateY(0) scale(1) rotateX(0); }
        }

        @keyframes envelopeFlapOpen {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-178deg); }
        }

        @keyframes invitationLetterRise {
          0% { transform: translateY(17%) scale(.96); }
          65% { transform: translateY(-35%) scale(1.015); }
          100% { transform: translateY(-28%) scale(1); }
        }

        @keyframes envelopeSealRelease {
          0% { opacity: 1; transform: translateX(-50%) scale(1) rotate(0); }
          55% { opacity: 1; transform: translateX(-50%) scale(1.16) rotate(-12deg); }
          100% { opacity: 0; transform: translateX(-50%) scale(.25) rotate(28deg); }
        }

        @keyframes envelopeGlow {
          from { opacity: .55; transform: translate(-50%, -50%) scale(.92); }
          to { opacity: .95; transform: translate(-50%, -50%) scale(1.08); }
        }

        /* =====================================================
           PREMIUM SUSPENDED PHOTO INSTALLATION
           Existing images and sections stay intact; only their
           presentation gains a fine wire, brass clips and sway.
        ===================================================== */

        .gallery-hanging-stage::before {
          content: "";
          position: absolute;
          z-index: 0;
          top: 7px;
          left: 2%;
          width: 96%;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%, rgba(157,130,91,.22) 8%,
            rgba(157,130,91,.72) 50%, rgba(157,130,91,.22) 92%,
            transparent 100%);
          box-shadow: 0 1px 5px rgba(112,88,60,.12);
        }

        .hanging-photo {
          transform-origin: 50% -18px;
          animation: gallerySway 6.8s ease-in-out infinite;
          filter: drop-shadow(0 22px 24px rgba(54,61,48,.10));
          will-change: transform;
        }

        .hanging-photo::before {
          content: "";
          position: absolute;
          z-index: 5;
          top: -19px;
          left: 50%;
          width: 2px;
          height: 20px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #92764f, #e6d2a9 48%, #987b52);
          border-radius: 3px;
          box-shadow: 0 1px 3px rgba(55,45,30,.2);
        }

        .hanging-photo::after {
          content: "";
          position: absolute;
          z-index: 6;
          top: -23px;
          left: 50%;
          width: 13px;
          height: 9px;
          transform: translateX(-50%);
          border: 1px solid rgba(145,113,68,.8);
          border-radius: 3px 3px 2px 2px;
          background: linear-gradient(135deg, #f8edcf, #b99a68);
          box-shadow: 0 2px 4px rgba(50,40,25,.18);
        }

        .hero-hanging {
          animation-duration: 7.8s;
          animation-delay: -.8s;
        }

        .hanging-photo-main {
          z-index: 2;
          animation-delay: -.5s;
        }

        .hanging-photo-left {
          z-index: 1;
          animation-duration: 7.4s;
          animation-delay: -2.1s;
        }

        .hanging-photo-right {
          z-index: 1;
          animation-duration: 8.2s;
          animation-delay: -3.4s;
        }

        @keyframes gallerySway {
          0%, 100% { rotate: -1.15deg; }
          50% { rotate: 1.15deg; }
        }

        .gallery-hanging-stage > div {
          transition: filter .5s ease, z-index .5s ease;
        }

        .gallery-hanging-stage .hanging-photo:hover {
          z-index: 10;
          animation-play-state: paused;
          filter: drop-shadow(0 28px 30px rgba(54,61,48,.18));
        }

        .hero-hanging:hover {
          animation-play-state: paused;
        }

        /* Fine metallic highlights for a more editorial finish */
        .hanging-photo > div {
          position: relative;
          box-shadow: inset 0 0 0 1px rgba(185,153,105,.12);
        }

        @media (max-width: 639px) {
          .hero-hanging::before { top: -14px; height: 15px; }
          .hero-hanging::after { top: -18px; }
          .gallery-hanging-stage::before { top: 2px; }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

          .envelope-letter {
            transform: translateY(-28%) scale(1);
          }

          .envelope-flap {
            transform: rotateX(-178deg);
          }

          .envelope-seal {
            opacity: 0;
          }
        }
        @keyframes countdownTick {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }

          60% {
            opacity: 1;
            transform: translateY(-2px) scale(1.015);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

          /* CINEMATIC SCROLL REVEAL */

.cinematic-reveal {
  opacity: 0;
  transform: translateY(70px) scale(0.97);
  filter: blur(8px);
  transition:
    opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1.1s cubic-bezier(0.16, 1, 0.3, 1),
    filter 1.1s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform, filter;
}

.cinematic-reveal.cinematic-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

      `}
      </style>
    </div>
  );
};

export default Invitation;
