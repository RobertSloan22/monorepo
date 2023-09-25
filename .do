spec:
  name: mitmern
  services:
  - build_command: npm run build
    environment_slug: node-js
    git:
      branch: main
      repo_clone_url: https://github.com/robertsloan22/monorepo.git
    name: monorepo
