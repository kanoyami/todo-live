export declare type TodoItemLeveL = 'plan' | 'normal' | 'urgent' | 'instant' | 'exe';
export declare type TodoItemStatus = 'unsolved' | 'solving' | 'solved' | 'archived';
export declare type Note = {
    content: string;
    createAt: string;
};
export declare type TodoItem = {
    createAt: string;
    title: string;
    description?: string;
    level: TodoItemLeveL;
    status: TodoItemStatus;
    notes?: Note[];
    _id?: string;
    index: number;
};
export declare type TodoLiveStore = {
    todoList: TodoItem[];
};
