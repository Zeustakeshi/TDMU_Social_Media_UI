/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_IMAGEBB_API_KEY: string;
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_APP_NAME: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
