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
    backgroundColor: '#000000',
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      launchFadeOutDuration: 500,
      backgroundColor: '#000000',
      splashFullScreen: true,
      splashImmersive: true,
      showSpinner: false,
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#000000',
    },
  },
};

export default config;
