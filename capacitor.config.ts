import type { CapacitorConfig } from '@capacitor/cli';

const devUrl = process.env.CAP_DEV_URL;

const config: CapacitorConfig = {
  appId: 'com.blindfolddate.app',
  appName: 'BlindfoldDate',
  webDir: 'dist',
  server: {
    url: devUrl || 'https://blindfolddate.com/app-intro',
    allowNavigation: ['blindfolddate.com'],
    errorPath: 'offline.html',
    ...(devUrl ? { cleartext: true } : {}),
  },
  android: {
    backgroundColor: '#000000',
  },
  plugins: {
    SplashScreen: {
      // Must auto-hide natively: bridge JS (and SplashScreen.hide() calls) only
      // injects into the remote server.url origin, not local errorPath pages
      // like offline.html, so JS-side hide() can't be relied on when offline.
      launchShowDuration: 3000,
      launchAutoHide: true,
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
