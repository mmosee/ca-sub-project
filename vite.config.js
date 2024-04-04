   import { defineConfig } from "vite";

export default defineConfig ({
    build : {
        rollupOptions : {
            input : {
                main :"/app.js",
                server : "/server.js"
            }
        }
    }
})
