"use client";
import { WagmiProvider } from "wagmi";
import Navbar from "./components/Navbar";
import { config } from "../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

const queryClient = new QueryClient()

export default function App() {
    return (
        <div className="container">
            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>
                    <RainbowKitProvider modalSize='compact'>
                        <Navbar></Navbar>
                    </RainbowKitProvider>
                </QueryClientProvider>
            </WagmiProvider>
        </div>
    );
}