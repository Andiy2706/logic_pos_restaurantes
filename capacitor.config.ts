import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mx.einnovacion.logicpos.restaurantes',
  appName: 'LOGIC POS Restaurantes',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // Loads the live deployed site instead of the bundled `dist/` assets, so JS/React
    // changes go out with a normal `git push` (auto-deploys via .github/workflows/deploy.yml)
    // — no rebuilding/reinstalling the APK on every device for ordinary code changes. Safe
    // because native Google Sign-In goes through @capacitor-firebase/authentication (the
    // native SDK, no WebView redirect), so nothing here depends on matching Firebase's
    // authDomain — see the reverted attempt in git history for what broke that.
    // NOTE: currently points at the demo VPS — swap this when migrating to the client's own
    // domain (see [[project_pending_work]] memory for the migration plan).
    url: 'https://logicposrestaurantes.einnovacionmx.com',
  },
  android: {
    buildOptions: {
      releaseType: 'APK',
    },
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['google.com'],
    },
  },
};

export default config;
