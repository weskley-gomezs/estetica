declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
    readonly API_KEY: string;
    readonly NODE_ENV: string;
  }
}
