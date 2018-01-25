import { StoreBase, UserStore, StoreQuery } from './store.base';
export declare class Store extends StoreBase implements UserStore {
    static IDGenerator(): string;
    constructor(database?: string);
    find(query: StoreQuery): Promise<any[]>;
    update(query: StoreQuery, document: any): Promise<any>;
    remove(query: StoreQuery): Promise<void>;
    removeAll(): Promise<void>;
    findAll(): Promise<any>;
    count(): Promise<number>;
    findOne(query: StoreQuery): Promise<any>;
    save(document?: any): Promise<any>;
    saveAll(documents?: any[]): Promise<any>;
    private parseQuery(query?);
}
