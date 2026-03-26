import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = 'TruClaim-Advisory-Group';
const isGitHubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_REPOSITORY === `TruMedia-Creative/${repositoryName}`;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  // Use the repo sub-path when building inside GitHub Actions so asset URLs resolve on Pages.
  base: isGitHubPagesBuild ? `/${repositoryName}/` : '/',
});
