import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://embraso.com.br',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
