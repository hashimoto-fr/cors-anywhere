const corsProxy = require('cors-anywhere');
const host = process.env.VUE_APP_CORS_HOST || 'localhost';
const port = process.env.VUE_APP_CORS_PORT || 8079;

corsProxy.createServer().listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});
