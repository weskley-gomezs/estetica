// Fix: Removed reference to vite/client to resolve "Cannot find type definition file" error
// /// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly NODE_ENV: string;
    [key: string]: string | undefined;
  }
}