/**
 * Utility function to retry an async operation with exponential backoff
 * @param operation - The async function to retry
 * @param maxRetries - Maximum number of retry attempts
 * @param baseDelay - Base delay in milliseconds
 * @param maxDelay - Maximum delay in milliseconds
 * @returns The result of the operation
 */
export async function retryWithBackoff<T>(
    operation: () => Promise<T>,
    maxRetries: number = 5,
    baseDelay: number = 500,
    maxDelay: number = 15000
): Promise<T> {
    let retries = 0;

    while (true) {
        try {
            return await operation();
        } catch (error: any) {
            // Don't retry if we've reached the maximum number of retries
            if (retries >= maxRetries) {
                console.error(`Failed after ${maxRetries} retries:`, error);
                throw error;
            }

            // Check if the error is a 429 (Too Many Requests) or 529 (Overloaded)
            const isRateLimitError =
                error?.code === 429 ||
                error?.code === 529 ||
                error?.status === 429 ||
                error?.status === 529 ||
                error?.error?.type === "overloaded_error" ||
                (typeof error === "object" &&
                    error !== null &&
                    "message" in error &&
                    typeof error.message === "string" &&
                    error.message.toLowerCase().includes("overloaded"));

            // If it's not a rate limit error, don't retry
            if (!isRateLimitError) {
                throw error;
            }

            // Calculate delay with exponential backoff and jitter
            const delay = Math.min(
                maxDelay,
                baseDelay * Math.pow(2, retries) * (0.8 + Math.random() * 0.4)
            );

            console.log(
                `Retrying operation after ${Math.round(delay)}ms (attempt ${retries + 1}/${maxRetries})...`
            );

            // Wait for the calculated delay
            await new Promise((resolve) => setTimeout(resolve, delay));

            // Increment retry counter
            retries++;
        }
    }
}
