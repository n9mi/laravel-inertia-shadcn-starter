export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Role {
    id: string,
    display_name: string,
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        roles: Role[];
    };
};
