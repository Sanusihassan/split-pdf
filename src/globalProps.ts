import type { edit_page, errors } from "@/content";
export type ActionProps = {
    index: number;
    extension: string;
    errors: errors;
    fileName: string;
};
export interface OptionsProps {
    edit_page: edit_page;
}
export type TypeWithdisplayProp = {
    display: boolean;
};
export type errorType = {
    response: {
        data: {
            error: string;
            text: () => Promise<string>; // Add type for text() function
        };
    };
};
export type ToolData = {
    title: string;
    description: string;
    color: string;
    type: string;
};
export interface FileCardProps {
    file: File;
    errors: errors;
    loader_text: string;
    fileDetailProps: [string, string, string];
    extension: string;
}