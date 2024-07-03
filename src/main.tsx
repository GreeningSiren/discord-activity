import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DiscordSDK } from '@discord/embedded-app-sdk'

const discordSDK = new DiscordSDK(import.meta.env.DISCORD_CLIENT_ID)
// @ts-expect-error The discord sdk reads the setupDiscordSdk (i think)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function setupDiscordSdk() {
  await discordSDK.ready();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
