module.exports = {
  apps: [
    {
      name: "Al-Kitaab-Web",
      script: "npm",
      args: "run dev",
      watch: false,
      env: {
      PORT : 
},
      env_test: {
        NODE_ENV: "test",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};

