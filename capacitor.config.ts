import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.anfema1224.proyectoabpinclusivo",
  appName: "ABP Inclusivo LSC",
  webDir: "dist/client",
  server: {
    url: "https://proyecto-abp-inclusivo.onrender.com",
    cleartext: false,
  },
  android: {
    allowMixedContent: false,
  },
};

export default config;
