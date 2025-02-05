import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
    login: (handle: string, appPassword: string) => ipcRenderer.invoke('login', { handle, appPassword })
});