import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const WEB_URL = 'https://blindfolddate.com'

const forcedIntro = new URLSearchParams(window.location.search).get('signout') === '1'

if (!forcedIntro && localStorage.getItem('intro_seen') === 'true') {
  window.location.replace(WEB_URL)
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App webUrl={WEB_URL} />
    </StrictMode>,
  )
}
