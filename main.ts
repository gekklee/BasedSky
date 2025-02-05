import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { BskyAgent } from '@atproto/api';

let mainWindow: BrowserWindow | null = null;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    mainWindow.loadFile('index.html');
});

ipcMain.handle('login', async (_event, { handle, appPassword }) => {
    try {
        const agent = new BskyAgent({ service: 'https://bsky.social' });
        await agent.login({ identifier: handle, password: appPassword });
        return { success: true, session: agent.session };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
});
