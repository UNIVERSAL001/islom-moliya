'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 1, seconds: 59 });

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

    // Countdown timer - minutes and seconds
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
        paddingTop: '43px',
        paddingBottom: '80px'
      }}>
        {/* Bottom gradient */}
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(0deg, #171717 50%, rgba(23, 23, 23, 0) 100%)',
          pointerEvents: 'none',
          zIndex: 5
        }}></div>

        {/* Main container */}
        <div style={{
          maxWidth: '375px',
          margin: '0 auto',
          padding: '0 10px',
          position: 'relative',
          zIndex: 10
        }}>

          {/* Timer */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: '#ffffff',
              color: '#171717',
              width: '86px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5px',
              fontSize: '28px',
              fontWeight: 700,
              boxShadow: '4px 4px 25px 1px rgba(101, 253, 8, 0.5)'
            }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700 }}>:</div>
            <div style={{
              background: '#ffffff',
              color: '#171717',
              width: '86px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5px',
              fontSize: '28px',
              fontWeight: 700,
              boxShadow: '4px 4px 25px 1px rgba(101, 253, 8, 0.5)'
            }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>

          {/* Image */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '19px'
          }}>
            <img
              src="/instructor.jpg"
              alt="Islomiy Moliya Mutaxassisi"
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '20px',
                filter: 'drop-shadow(-4px 4px 15px rgba(2, 235, 81, 0.5))'
              }}
            />
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '21px',
            lineHeight: '29px',
            fontWeight: 900,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Qanday qilib islom moliyasi va savodxonlikni oshirib barakali biznes boshlash mumkin?
          </h1>

          {/* Subtitle */}
          <p style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#919191',
            marginBottom: '19px',
            fontWeight: 700
          }}>
            Islom Moliyasidan 10 yillik tajriba va 10 dan oshiq kitoblar muallifi
          </p>

          {/* Benefits */}
          <div style={{ marginBottom: '19px' }}>
            <h2 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '11px' }}>
              Marafonda siz:
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12px', color: '#808080', lineHeight: '1.3' }}>
                <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0 }}>—</span>
                <span>Qanday qilib islomiy savodxonlikni oshirib barakali biznes boshlashni</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12px', color: '#808080', lineHeight: '1.3' }}>
                <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0 }}>—</span>
                <span>Rasululloh s.a.v ning sahobalari qanday qilib savdo qilishganini</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '12px', color: '#808080', lineHeight: '1.3' }}>
                <span style={{ color: '#02EB51', marginTop: '1px', flexShrink: 0 }}>—</span>
                <span>Islomda pul ilmi va pulga oid hukmlarni o&apos;rganasiz</span>
              </li>
            </ul>
          </div>

          {/* Bonus */}
          <div style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              maxWidth: '271px',
              width: '100%',
              background: 'linear-gradient(90deg, #03D149 0%, #016B25 100%)',
              borderRadius: '10px',
              padding: '1px'
            }}>
              <div style={{
                background: '#171717',
                borderRadius: '9px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  transform: 'rotate(21deg)',
                  flexShrink: 0,
                  fontSize: '32px',
                  lineHeight: 1
                }}>🎁</div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '1.2',
                    marginBottom: '2px'
                  }}>
                    <span style={{ color: '#02EB51' }}>BONUS:</span> maxsus sovg&apos;a
                  </p>
                  <p style={{
                    fontSize: '10px',
                    color: '#919191',
                    lineHeight: '1.4',
                    fontWeight: 700
                  }}>
                    Biznes boshlashdagi eng muhim baraka omillari darsligi
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div style={{
            marginBottom: '10px',
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
                maxWidth: '331px',
                textDecoration: 'none'
              }}
            >
              <button style={{
                width: '100%',
                background: 'linear-gradient(90deg, #14AC47 16.83%, #09C348 51%, #14AC47 81.73%)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '18px',
                padding: '22px 0',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '0px 5px 0px 0px #007427',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '13px',
                cursor: 'pointer',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <div style={{
                  width: '21px',
                  height: '21px',
                  background: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '12px', height: '12px', color: '#02EB51' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                BEPUL QATNASHISH
              </button>
            </a>
          </div>

          {/* Bottom text */}
          <p style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#919191',
            fontWeight: 700
          }}>
            Joylar soni cheklangan!
          </p>

        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(2, 235, 81, 0.7), 0px 5px 0px 0px #007427;
            }
            50% {
              transform: scale(1.05);
              box-shadow: 0 0 0 10px rgba(2, 235, 81, 0), 0px 5px 0px 0px #007427;
            }
          }

          button:active {
            transform: translateY(4px) !important;
            box-shadow: 0px 1px 0px 0px #007427 !important;
          }
        `}</style>
      </div>
    </>
  );
}
