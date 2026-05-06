import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Custom plugin to serve /api/contact in local dev
const vercelApiPlugin = () => ({
  name: 'vercel-api-plugin',
  configureServer(server) {
    server.middlewares.use('/api/contact', async (req, res, next) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            req.body = JSON.parse(body || '{}');
            // Construct an absolute file URL to avoid issues with Vite executing the config from a temp directory
            const handlerPath = 'file:///' + process.cwd().replace(/\\/g, '/') + '/api/contact.js?t=' + Date.now();
            const handler = await import(handlerPath);
            
            // Mock Vercel response methods
            res.status = (code) => {
              res.statusCode = code;
              return res;
            };
            res.json = (data) => {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
            };
            
            await handler.default(req, res);
          } catch (err) {
            import('fs').then(fs => fs.writeFileSync('error_log.txt', String(err.stack || err)));
            console.error(err);
            res.statusCode = 500;
            res.end(JSON.stringify({ success: false, message: 'Server error' }));
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables into process.env so api/contact.js can access them
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [
      tailwindcss(),
      react(),
      vercelApiPlugin()
    ],
  }
})
