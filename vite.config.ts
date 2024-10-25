import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [vue(), vike()],
  server: {
    port: 3001
  }
}

export default config
