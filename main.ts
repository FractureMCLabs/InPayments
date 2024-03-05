import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'

import {  mainnet, arbitrum } from 'viem/chains'
import { reconnect } from '@wagmi/core'
import { Chain } from 'viem'

// 1. Define constants
const projectId = 'YOUR_PROJECT_ID'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains: readonly [Chain, ...Chain[]] = [mainnet, arbitrum];



export const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true,
  enableEmail: false
})
reconnect(config)

// 3. Create modal
const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})