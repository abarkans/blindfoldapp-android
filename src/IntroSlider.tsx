import { useState, useRef } from 'react'

const SLIDES = [
  {
    icon: '🔮',
    title: 'Stop Planning.',
    subtitle: 'Just Show Up.',
    body: 'Tell us your interests once. We find real nearby venues, craft your date story, and handle every detail.',
    accent: '#f43f5e',
  },
  {
    icon: '✨',
    title: 'Real Places.',
    subtitle: 'Curated for You.',
    body: 'AI picks hidden gem venues based on your vibe, budget, and location — with ratings ≥ 4.0 only.',
    accent: '#8b5cf6',
  },
  {
    icon: '🏆',
    title: 'Level Up',
    subtitle: 'Together.',
    body: 'Earn XP, unlock badges, and build your couple\'s date history. Every date is a new chapter.',
    accent: '#f43f5e',
  },
]

interface Props {
  onGetStarted: () => void
  onSignIn: () => void
}

export default function IntroSlider({ onGetStarted, onSignIn }: Props) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 50) setCurrent(c => Math.min(c + 1, SLIDES.length - 1))
    else if (delta < -50) setCurrent(c => Math.max(c - 1, 0))
    touchStartX.current = null
  }

  const slide = SLIDES[current]

  return (
    <div
      style={styles.root}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide content */}
      <div style={styles.content} key={current}>
        <div style={{ ...styles.iconWrap, background: `${slide.accent}18` }}>
          <span style={styles.icon}>{slide.icon}</span>
        </div>

        <h1 style={styles.title}>{slide.title}</h1>
        <h2 style={{ ...styles.subtitle, color: slide.accent }}>{slide.subtitle}</h2>
        <p style={styles.body}>{slide.body}</p>
      </div>

      {/* Dots */}
      <div style={styles.dots}>
        {SLIDES.map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.dot,
              background: i === current ? slide.accent : '#ffffff22',
              width: i === current ? 24 : 8,
            }}
          />
        ))}
      </div>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.primaryBtn, background: slide.accent }}
          onClick={onGetStarted}
        >
          Get Started
        </button>
        <button style={styles.secondaryBtn} onClick={onSignIn}>
          Sign In
        </button>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100dvh',
    padding: '0 32px',
    background: '#0a0a0a',
    userSelect: 'none',
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 16,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 48,
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 48,
    lineHeight: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: 1.1,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 700,
    letterSpacing: -0.5,
    lineHeight: 1.1,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  body: {
    color: '#ffffffaa',
    fontSize: 16,
    lineHeight: 1.6,
    maxWidth: 300,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  dots: {
    display: 'flex',
    gap: 6,
    alignItems: 'center',
    marginBottom: 24,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    transition: 'all 0.25s ease',
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 340,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingBottom: 'max(32px, env(safe-area-inset-bottom, 32px))',
  },
  primaryBtn: {
    width: '100%',
    padding: '18px 0',
    borderRadius: 16,
    border: 'none',
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    transition: 'opacity 0.15s ease',
  },
  secondaryBtn: {
    width: '100%',
    padding: '16px 0',
    borderRadius: 16,
    border: '1.5px solid #ffffff22',
    background: 'transparent',
    color: '#ffffffcc',
    fontSize: 17,
    fontWeight: 500,
    cursor: 'pointer',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    transition: 'opacity 0.15s ease',
  },
}
