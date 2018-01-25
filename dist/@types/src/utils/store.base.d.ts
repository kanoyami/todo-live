export declare type StoreQueryValue = {
    [key: string]: string | number;
};
export declare type StoreQuery = {
    [key: string]: string | number | StoreQueryValue;
};
export declare type FileKeyValue = {
    [key: string]: any;
};
export interface UserStore {
    find: (query: StoreQuery) => Promise<any[]>;
    findOne: (query: StoreQuery) => Promise<any>;
    findAll: () => Promise<any[]>;
    save: (key: string, value: any) => Promise<void>;
}
export declare class StoreBase {
    readonly root: string;
    private database;
    private url;
    static CheckWorkEnv(root: string): void;
    static queryOperator(oper: string): string;
    constructor(database: string);
    implode(database?: string): void;
    protected use(database: string): StoreBase;
    protected countReg(): Promise<number>;
    protected getFile(): Promise<FileKeyValue[]>;
    protected setOne(file?: FileKeyValue): Promise<void>;
    protected setAll(files: FileKeyValue[]): Promise<void>;
    private init();
    private makeBasePath();
}
