export {};

declare global {
    interface Window {
        api: {
            login: (handle: string, appPassword: string) => Promise<{ success: boolean; error?: string }>;
        };
    }
}
