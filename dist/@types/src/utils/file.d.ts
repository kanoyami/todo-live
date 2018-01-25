/// <reference types="node" />
import * as childProcess from 'child_process';
import * as fs from 'fs';
declare const _default: {
    readdir: any;
    mkdir: any;
    readFile: any;
    writeFile: any;
    exists: any;
    existsSync: (path: fs.PathLike) => boolean;
    stat: any;
    spawnSync: {
        (command: string): childProcess.SpawnSyncReturns<Buffer>;
        (command: string, options?: childProcess.SpawnSyncOptionsWithStringEncoding): childProcess.SpawnSyncReturns<string>;
        (command: string, options?: childProcess.SpawnSyncOptionsWithBufferEncoding): childProcess.SpawnSyncReturns<Buffer>;
        (command: string, options?: childProcess.SpawnSyncOptions): childProcess.SpawnSyncReturns<Buffer>;
        (command: string, args?: string[], options?: childProcess.SpawnSyncOptionsWithStringEncoding): childProcess.SpawnSyncReturns<string>;
        (command: string, args?: string[], options?: childProcess.SpawnSyncOptionsWithBufferEncoding): childProcess.SpawnSyncReturns<Buffer>;
        (command: string, args?: string[], options?: childProcess.SpawnSyncOptions): childProcess.SpawnSyncReturns<Buffer>;
    };
    exec: any;
};
export default _default;
