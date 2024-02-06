// App Interfaces
export interface ChatMessageInterface {
    id: string;
    content: string;
    dateCreated: string;
    timeCreated: string;
    dateDue?: string;
    active: boolean;
    completed: boolean;
    deleted: boolean;
}

// Auth Interfaces
export interface SignUpInterface {
    username: string;
    email: string;
    password: string;
}

export interface LoginInterface {
    email: string;
    password: string;
    rememberMe?: boolean;
}