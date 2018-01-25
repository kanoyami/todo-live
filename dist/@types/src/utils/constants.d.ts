import { TodoItemLeveL } from '../types';
export declare const DEFAULT_DATABASE = "todo_list";
export declare const ARCHIVE_DATABASE = "todo_archive";
export declare const enum DEFAULT_TODO_STATUS_GROUP {
    unsolved = "unsolved",
    solving = "solving",
    solved = "solved",
    archived = "archived",
    default = "unsolved",
}
export declare const DEFAULT_TODO_LEVEL_GROUP: TodoItemLeveL[];
export declare const DEFAULT_TODO_LEVEL: TodoItemLeveL;
export declare const DEFAULT_TODO_LEVEL_COLORS: {
    plan: string;
    normal: string;
    urgent: string;
    instant: string;
};
