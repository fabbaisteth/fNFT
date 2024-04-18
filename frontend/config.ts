import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';


export const hackathon = defineChain({
    id: 8082,
    name: 'Hackathon',
    nativeCurrency: { name: 'SShardeumHM', symbol: 'SHM', decimals: 18 },
    rpcUrls: {
        default: { http: ['http://18.185.76.64:8080'] },
    }
})
const projectId = '1cfe2e48f05672de570281a9b0be72a5'

export const config = createConfig({
    chains: [hackathon],
    ssr: true,
    connectors: [
        injected(),
        // walletConnect({ projectId }),
        metaMask(),
        safe(),
    ],
    transports: {
        [hackathon.id]: http(),
    },
})