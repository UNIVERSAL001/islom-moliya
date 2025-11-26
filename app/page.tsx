'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Facebook Pixel tracking
    if (typeof window !== 'undefined') {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      (window as any).fbq('init', '1916733239243209');
      (window as any).fbq('track', 'PageView');
    }

    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1916733239243209&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="min-h-screen bg-[#171717] text-white relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171717]/95 pointer-events-none"></div>

        <div className="container mx-auto px-4 py-8 relative z-10 max-w-[1624px]">
          {/* Header with date/time */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
              <div className="w-2 h-2 bg-[#02EB51] rounded-full animate-pulse"></div>
              <span className="text-sm">JONLI VEBINAR</span>
            </div>
          </div>

          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="block mb-2">Qanday qilib</span>
                <span className="block text-[#02EB51]">Islomiy savodxonlikni</span>
                <span className="block">oshirib barakali</span>
                <span className="block">biznes boshlash mumkin?</span>
              </h1>

              <div className="bg-gradient-to-r from-[#171717] to-[#1f1f1f] border border-[#02EB51]/30 rounded-2xl p-6 mb-8">
                <p className="text-lg md:text-xl text-gray-300">
                  <span className="text-[#02EB51] font-bold">Islom Moliyasidan 10 yillik tajriba</span> va <span className="text-[#02EB51] font-bold">10 dan oshiq kitoblar muallifi</span>
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-8">
                <p className="text-gray-400 mb-4 text-sm uppercase tracking-wide">Vebinargacha qoldi:</p>
                <div className="flex justify-center lg:justify-start gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                    <div className="text-4xl font-bold text-[#02EB51]">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Soat</div>
                  </div>
                  <div className="flex items-center text-3xl font-bold text-[#02EB51]">:</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                    <div className="text-4xl font-bold text-[#02EB51]">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Daqiqa</div>
                  </div>
                  <div className="flex items-center text-3xl font-bold text-[#02EB51]">:</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                    <div className="text-4xl font-bold text-[#02EB51]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Soniya</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="flex-1 max-w-md order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(2,235,81,0.2)]">
                <img
                  src="/instructor.jpg"
                  alt="Islomiy Moliya Mutaxassisi"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#1f1f1f] to-[#171717] border border-[#02EB51]/20 rounded-3xl p-8 md:p-12 mb-12 shadow-[0_0_50px_rgba(2,235,81,0.1)]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Marafonda <span className="text-[#02EB51]">siz:</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#171717] border border-[#02EB51]/30 rounded-2xl p-6 hover:border-[#02EB51] transition-all duration-300 hover:shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                <div className="w-12 h-12 bg-[#02EB51] rounded-full flex items-center justify-center text-[#171717] font-bold text-xl mb-4">
                  1
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Qanday qilib islomiy savodxonlikni oshirib barakali biznes boshlashni
                </p>
              </div>

              <div className="bg-[#171717] border border-[#02EB51]/30 rounded-2xl p-6 hover:border-[#02EB51] transition-all duration-300 hover:shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                <div className="w-12 h-12 bg-[#02EB51] rounded-full flex items-center justify-center text-[#171717] font-bold text-xl mb-4">
                  2
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Rasululloh s.a.v ning sahobalari qanday qilib savdo qilishganini
                </p>
              </div>

              <div className="bg-[#171717] border border-[#02EB51]/30 rounded-2xl p-6 hover:border-[#02EB51] transition-all duration-300 hover:shadow-[0_0_30px_rgba(2,235,81,0.3)]">
                <div className="w-12 h-12 bg-[#02EB51] rounded-full flex items-center justify-center text-[#171717] font-bold text-xl mb-4">
                  3
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Islomda pul ilmi va pulga oid hukmlarni o&apos;rganasiz
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section with Bonus */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#016B25] via-[#03D149] to-[#016B25] p-[2px] rounded-3xl mb-8">
              <div className="bg-[#171717] rounded-3xl p-8 md:p-12 text-center">
                <div className="mb-6 inline-block transform rotate-[21deg]">
                  <span className="text-7xl">🎁</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  <span className="text-[#02EB51]">BONUS:</span> Maxsus sovg&apos;a!
                </h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Vebinarda ishtirok etgan har bir qatnashchiga maxsus bonus materiallar taqdim etiladi!
                </p>
              </div>
            </div>

            {/* Main CTA Button */}
            <div className="text-center">
              <a
                href="https://t.me/+KmLW8qDpAlo5YTVi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-[#14AC47] to-[#02EB51] text-[#171717] font-bold text-xl md:text-2xl py-6 px-12 md:px-16 rounded-full shadow-[0_5px_30px_rgba(2,235,81,0.4)] hover:shadow-[0_5px_50px_rgba(2,235,81,0.6)] transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#02EB51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                VEBINARDA QATNASHISH
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
