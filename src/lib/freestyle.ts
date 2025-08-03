import { FreestyleSandboxes } from "freestyle-sandboxes";
import { retryWithBackoff } from "./retry-with-backoff";

// Create a class that extends FreestyleSandboxes and wraps methods with retry logic
class RetryableFreestyleSandboxes extends FreestyleSandboxes {
    constructor(config: { apiKey: string }) {
        super(config);
    }

    // Override methods that need retry logic
    async requestDevServer(
        params: Parameters<FreestyleSandboxes["requestDevServer"]>[0]
    ) {
        return retryWithBackoff(() => super.requestDevServer(params));
    }

    async createGitRepository(
        params: Parameters<FreestyleSandboxes["createGitRepository"]>[0]
    ) {
        return retryWithBackoff(() => super.createGitRepository(params));
    }

    async grantGitPermission(
        params: Parameters<FreestyleSandboxes["grantGitPermission"]>[0]
    ) {
        return retryWithBackoff(() => super.grantGitPermission(params));
    }

    async createGitAccessToken(
        params: Parameters<FreestyleSandboxes["createGitAccessToken"]>[0]
    ) {
        return retryWithBackoff(() => super.createGitAccessToken(params));
    }

    async createGitIdentity() {
        return retryWithBackoff(() => super.createGitIdentity());
    }
}

export const freestyle = new RetryableFreestyleSandboxes({
    apiKey: process.env.FREESTYLE_API_KEY!,
});
