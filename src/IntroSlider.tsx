import Button from './Button'

interface Props {
  onGetStarted: () => void
  onSignIn: () => void
}

export default function IntroSlider({ onGetStarted, onSignIn }: Props) {
  return (
    <div style={styles.root}>
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-video-poster.webp"
        style={styles.video}
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video-small.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <div style={styles.content}>
        {/* Icon top */}
        <div style={styles.logoWrap}>
          <img src="/icon.png" alt="BlindfoldDate" style={styles.logo} />
        </div>

        {/* Tagline near buttons */}
        <div style={styles.textWrap}>
          <div>
            <h1 style={styles.title}>Date night, decided.</h1>
            <h2 style={styles.subtitle}>Just show up.</h2>
          </div>
          <p style={styles.body}>A mystery date, planned for you both.</p>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <Button onClick={onGetStarted}>Get Started</Button>
          <Button variant="secondary" onClick={onSignIn}>Sign In</Button>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: 'relative',
    height: '100dvh',
    background: '#0a0a0a',
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.8)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '0 16px',
  },
  logoWrap: {
    paddingTop: 'max(48px, env(safe-area-inset-top, 48px))',
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    objectFit: 'contain' as const,
  },
  textWrap: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    gap: 8,
    textAlign: 'center',
    paddingBottom: 48,
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: 1,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: -1,
    lineHeight: 1.1,
    background: 'linear-gradient(135deg, #fb7185 0%, #c026d3 45%, #8b5cf6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  body: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    lineHeight: 1.6,
  },
  buttonGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingBottom: 'max(32px, env(safe-area-inset-bottom, 32px))',
  },
  consent: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.3)',
    textAlign: 'center',
    lineHeight: 1.6,
    paddingTop: 4,
  },
  consentLink: {
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'underline',
  },
}
