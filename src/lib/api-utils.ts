import { retryWithBackoff } from "./retry-with-backoff";

/**
 * Makes a fetch request with retry logic for handling overloaded servers
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @returns The fetch response
 */
export async function fetchWithRetry(
    url: string,
    options?: RequestInit
): Promise<Response> {
    return retryWithBackoff(async () => {
        const response = await fetch(url, options);

        // Check if the response indicates an overloaded server
        if (response.status === 429 || response.status === 529) {
            const error: any = new Error("Server overloaded");
            error.status = response.status;
            throw error;
        }

        return response;
    });
}

/**
 * Creates a new app with retry logic for API calls
 * @param message - The initial message for the app
 * @param template - The template to use
 * @returns The URL to redirect to
 */
export async function createAppWithRetry(
    message: string,
    template: string
): Promise<string> {
    try {
        const response = await fetchWithRetry(
            `/app/new?message=${encodeURIComponent(message)}&template=${template}`,
            { method: "GET" }
        );

        if (!response.ok) {
            throw new Error(`Failed to create app: ${response.statusText}`);
        }

        // Return the URL the server redirected to
        return response.url;
    } catch (error) {
        console.error("Error creating app:", error);
        throw error;
    }
}
