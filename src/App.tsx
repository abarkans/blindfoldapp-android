import IntroSlider from './IntroSlider'

interface Props {
  webUrl: string
}

export default function App({ webUrl }: Props) {
  function handleGetStarted() {
    localStorage.setItem('intro_seen', 'true')
    window.location.replace(`${webUrl}/register`)
  }

  function handleSignIn() {
    localStorage.setItem('intro_seen', 'true')
    window.location.replace(`${webUrl}/login`)
  }

  return <IntroSlider onGetStarted={handleGetStarted} onSignIn={handleSignIn} />
}
