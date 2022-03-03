import React from "react";

export interface LayoutProps {
    children: React.ReactNode;
}

export interface NavProps {
    children: React.ReactNode;
}

type InputType = 'email' | 'password' | 'text' | 'number' | 'file' | 'tel';

export interface InputProps {
    name: string;
    placeholder: string;
    type: InputType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
    value: string | number;
}

export interface DropdownProps {
    category: string;
}