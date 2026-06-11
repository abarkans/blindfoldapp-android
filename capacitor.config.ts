import type { CapacitorConfig } from '@capacitor/cli';

const devUrl = process.env.CAP_DEV_URL;

const config: CapacitorConfig = {
  appId: 'com.blindfolddate.app',
  appName: 'BlindfoldDate',
  webDir: 'dist',
  server: {
    url: devUrl || 'https://blindfolddate.com/app-intro',
    ...(devUrl ? { cleartext: true } : {}),
  },
  android: {
    backgroundColor: '#0a0a0a',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      launchFadeOutDuration: 500,
      backgroundColor: '#0a0a0a',
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0a0a0a',
    },
  },
};

export default config;
