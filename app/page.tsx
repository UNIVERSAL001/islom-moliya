'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 1, seconds: 23 });

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
          return { minutes: prev.minutes - 1, seconds: 59 };
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

      <div style={{
        minHeight: '100vh',
        background: '#171717',
        color: '#ffffff',
        position: 'relative',
        overflowX: 'hidden',
        paddingTop: '15px',
        paddingBottom: '30px'
      }}>
        <div style={{
          maxWidth: '375px',
          margin: '0 auto',
          padding: '0 15px',
          position: 'relative',
          zIndex: 10
        }}>

          {/* Title - Professional styling with gradient */}
          <h1 style={{
            fontSize: '19px',
            lineHeight: '25px',
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '15px',
            letterSpacing: '-0.3px',
            background: 'linear-gradient(135deg, #ffffff 0%, #02EB51 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 2px 8px rgba(2, 235, 81, 0.3))'
          }}>
            Qanday qilib islom moliyasi va savodxonlikni oshirib barakali biznes boshlash mumkin?
          </h1>

          {/* Main content - Text on left, Image + Timer on right */}
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '15px',
            position: 'relative',
            alignItems: 'flex-start'
          }}>
            {/* Left side - Text content */}
            <div style={{ flex: 1, zIndex: 2 }}>
              {/* Subtitle */}
              <p style={{
                fontSize: '12px',
                color: '#9CA3AF',
                marginBottom: '10px',
                fontWeight: 700,
                lineHeight: '1.3'
              }}>
                Islom Moliyasidan 10 yillik tajriba va 10 dan oshiq kitoblar muallifi
              </p>

              {/* Benefits */}
              <div>
                <h2 style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  marginBottom: '8px',
                  color: '#ffffff'
                }}>
                  30 kunlik bepul marafonda siz:
                </h2>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11px', color: '#9CA3AF', lineHeight: '1.3' }}>
                    <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0, fontSize: '12px' }}>—</span>
                    <span>Qanday qilib islomiy savodxonlikni oshirib barakali biznes boshlashni</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11px', color: '#9CA3AF', lineHeight: '1.3' }}>
                    <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0, fontSize: '12px' }}>—</span>
                    <span>Rasululloh s.a.v ning sahobalari qanday qilib savdo qilishganini</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11px', color: '#9CA3AF', lineHeight: '1.3' }}>
                    <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0, fontSize: '12px' }}>—</span>
                    <span>Islomda pul ilmi va pulga oid hukmlarni o&apos;rganasiz</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right side - Image + Timer */}
            <div style={{
              width: '150px',
              flexShrink: 0,
              position: 'relative',
              zIndex: 1
            }}>
              {/* Image with professional effects */}
              <div style={{
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(2, 235, 81, 0.3), 0 0 0 2px rgba(2, 235, 81, 0.2), inset 0 0 20px rgba(2, 235, 81, 0.1)',
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(#171717, #171717), linear-gradient(135deg, #02EB51, #14AC47)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                marginBottom: '10px'
              }}>
                <img
                  src="/instructor.jpg"
                  alt="Islomiy Moliya Mutaxassisi"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </div>

              {/* Timer - Professional styling with gradient border */}
              <div style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #02EB51, #14AC47)',
                padding: '2px',
                borderRadius: '12px',
                boxShadow: '0 4px 25px rgba(2, 235, 81, 0.5), 0 0 30px rgba(2, 235, 81, 0.3)'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  padding: '8px 15px',
                  borderRadius: '10px'
                }}>
                  <div style={{
                    color: '#171717',
                    fontSize: '20px',
                    fontWeight: 900,
                    letterSpacing: '1.5px'
                  }}>
                    {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus - Professional design */}
          <div style={{
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              maxWidth: '100%',
              width: '100%',
              background: 'linear-gradient(135deg, #03D149 0%, #016B25 100%)',
              borderRadius: '12px',
              padding: '2px',
              boxShadow: '0 3px 15px rgba(3, 209, 73, 0.3)'
            }}>
              <div style={{
                background: '#171717',
                borderRadius: '10px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  transform: 'rotate(21deg)',
                  flexShrink: 0,
                  fontSize: '30px',
                  lineHeight: 1,
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}>🎁</div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '1.3',
                    marginBottom: '2px'
                  }}>
                    <span style={{ color: '#02EB51' }}>BONUS:</span> <span style={{ color: '#ffffff' }}>maxsus sovg&apos;a</span>
                  </p>
                  <p style={{
                    fontSize: '10px',
                    color: '#9CA3AF',
                    lineHeight: '1.3',
                    fontWeight: 600
                  }}>
                    Biznes boshlashdagi eng muhim baraka omillari darsligi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text - Professional styling with pulsing effect */}
          <p style={{
            textAlign: 'center',
            fontSize: '13px',
            color: '#02EB51',
            fontWeight: 700,
            textShadow: '0 0 10px rgba(2, 235, 81, 0.5), 0 2px 4px rgba(0,0,0,0.3)',
            animation: 'textPulse 2s ease-in-out infinite',
            marginBottom: '12px'
          }}>
            ⚡ Joylar soni cheklangan! ⚡
          </p>

          {/* Button - Professional design */}
          <div style={{
            marginBottom: '12px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <a
              href="https://t.me/+KmLW8qDpAlo5YTVi"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                textDecoration: 'none'
              }}
            >
              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #14AC47 0%, #09C348 50%, #14AC47 100%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '16px',
                padding: '18px 0',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0px 5px 0px 0px #007427, 0 8px 25px rgba(2, 235, 81, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                animation: 'pulse 2s ease-in-out infinite',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}>
                  <svg style={{ width: '13px', height: '13px', color: '#02EB51' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                BEPUL QATNASHISH
              </button>
            </a>
          </div>

        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(2, 235, 81, 0.7), 0px 5px 0px 0px #007427, 0 8px 25px rgba(2, 235, 81, 0.3);
            }
            50% {
              transform: scale(1.03);
              box-shadow: 0 0 0 15px rgba(2, 235, 81, 0), 0px 5px 0px 0px #007427, 0 12px 35px rgba(2, 235, 81, 0.4);
            }
          }

          @keyframes textPulse {
            0%, 100% {
              opacity: 1;
              text-shadow: 0 0 10px rgba(2, 235, 81, 0.5), 0 2px 4px rgba(0,0,0,0.3);
            }
            50% {
              opacity: 0.8;
              text-shadow: 0 0 20px rgba(2, 235, 81, 0.8), 0 2px 4px rgba(0,0,0,0.3);
            }
          }

          button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0px 7px 0px 0px #007427, 0 12px 35px rgba(2, 235, 81, 0.5) !important;
          }

          button:active {
            transform: translateY(3px) !important;
            box-shadow: 0px 2px 0px 0px #007427, 0 5px 15px rgba(2, 235, 81, 0.3) !important;
          }
        `}</style>
      </div>
    </>
  );
}
