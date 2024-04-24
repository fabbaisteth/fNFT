"use client";
import { WagmiProvider } from "wagmi";
import Navbar from "./components/Navbar";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Marketplace from "./components/Marketplace";

const queryClient = new QueryClient()

export default function App() {
    return (
        <div className="container">
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider modalSize='compact'>
                        <Marketplace></Marketplace>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    );
}