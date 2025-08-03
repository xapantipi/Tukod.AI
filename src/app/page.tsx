"use client";

import { useRouter } from "next/navigation";
import { PromptInput, PromptInputActions } from "@/components/ui/prompt-input";
import { FrameworkSelector } from "@/components/framework-selector";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExampleButton } from "@/components/ExampleButton";
import { UserButton } from "@stackframe/stack";
import { UserApps } from "@/components/user-apps";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PromptInputTextareaWithTypingAnimation } from "@/components/prompt-input";

const queryClient = new QueryClient();

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const [framework, setFramework] = useState("nextjs");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async () => {
        setIsLoading(true);

        // window.location = `http://localhost:3000/app/new?message=${encodeURIComponent(prompt)}&template=${framework}`;

        router.push(
            `/app/new?message=${encodeURIComponent(prompt)}&template=${framework}`
        );
    };

    return (
        <QueryClientProvider client={queryClient}>
            <main
                className="min-h-screen p-4 relative"
                style={{
                    backgroundImage: "url('/images/bg-home.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="flex w-full justify-between items-center">
                    <h1 className="text-lg font-bold flex-1 sm:w-80">
                        <a href="https://www.tukod.ai"></a>
                    </h1>
                    <Image
                        src="/images/tukodai-white.png"
                        alt="Tukod.AI Logo"
                        width={150}
                        height={150}
                        className="mx-2"
                    />
                    <div className="flex items-center gap-2 flex-1 sm:w-80 justify-end">
                        <UserButton />
                    </div>
                </div>

                <div>
                    <div className="w-full max-w-lg px-4 sm:px-0 mx-auto flex flex-col items-center mt-16 sm:mt-24 md:mt-32 col-start-1 col-end-1 row-start-1 row-end-1 z-10">
                        <p className="text-center mb-6 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
                            What do you need for your business?
                        </p>

                        <div className="w-full relative my-5">
                            <div className="relative w-full max-w-full overflow-hidden">
                                <div
                                    style={{ backgroundColor: "#0f0f0f" }}
                                    className="w-full  text-white rounded-md relative z-10 border transition-colors"
                                >
                                    <PromptInput
                                        leftSlot={
                                            <FrameworkSelector
                                                value={framework}
                                                onChange={setFramework}
                                            />
                                        }
                                        isLoading={isLoading}
                                        value={prompt}
                                        onValueChange={setPrompt}
                                        onSubmit={handleSubmit}
                                        className="relative z-10 border-none bg-transparent shadow-none focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-200 transition-all duration-200 ease-in-out "
                                    >
                                        <PromptInputTextareaWithTypingAnimation />
                                        <PromptInputActions>
                                            <Button
                                                variant={"ghost"}
                                                size="sm"
                                                onClick={handleSubmit}
                                                disabled={
                                                    isLoading || !prompt.trim()
                                                }
                                                className="h-7 text-xs"
                                            >
                                                <span className="hidden sm:inline">
                                                    Start Creating ⏎
                                                </span>
                                                <span className="sm:hidden">
                                                    Create ⏎
                                                </span>
                                            </Button>
                                        </PromptInputActions>
                                    </PromptInput>
                                </div>
                            </div>
                        </div>
                        <Examples setPrompt={setPrompt} />
                        <div className="mt-8 mb-16"></div>
                    </div>
                </div>
                <div className="py-8 mx-0 sm:-mx-4"></div>
            </main>
        </QueryClientProvider>
    );
}

function Examples({ setPrompt }: { setPrompt: (text: string) => void }) {
    return (
        <div className="mt-2">
            <div className="flex flex-wrap justify-center gap-2 px-2">
                <ExampleButton
                    text="Dog Food Marketplace"
                    promptText="Build a dog food marketplace where users can browse and purchase premium dog food."
                    onClick={(text) => {
                        console.log("Example clicked:", text);
                        setPrompt(text);
                    }}
                />
                <ExampleButton
                    text="Personal Website"
                    promptText="Create a personal website with portfolio, blog, and contact sections."
                    onClick={(text) => {
                        console.log("Example clicked:", text);
                        setPrompt(text);
                    }}
                />
                <ExampleButton
                    text="Burrito B2B SaaS"
                    promptText="Build a B2B SaaS for burrito shops to manage inventory, orders, and delivery logistics."
                    onClick={(text) => {
                        console.log("Example clicked:", text);
                        setPrompt(text);
                    }}
                />
            </div>
        </div>
    );
}
