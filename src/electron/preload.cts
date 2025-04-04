
const electron = require('electron');

electron.contextBridge.exposeInMainWorld('electron', {
    subscribeStatistics: (callback) =>  {
    
        ipcOn("statistics", (stats:any)=>{

            callback(stats);
        })
    },

    getStaticData: () => ipcInvoke('getStaticData'),
    // getStaticData: () => console.log('satic')
}satisfies Window["electron"]);

function ipcInvoke<Key extends keyof EventPayloadMapping>(
    key: Key
  ): Promise<EventPayloadMapping[Key]> {
    return electron.ipcRenderer.invoke(key);
  }


  function ipcOn<Key extends keyof EventPayloadMapping>(
    key: Key,
    callback: (payload: EventPayloadMapping[Key]) => void
  ) {
    
    electron.ipcRenderer.on(key, (_: any, payload: any) => callback(payload));
    
  }