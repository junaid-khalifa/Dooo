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

export interface DropdownItemProps {
    category: string;
}

export interface TableProps {
    id: number;
    thumbnail: string;
    title: string;
    date: string;
    views: number;
    avgViewDuration: number | string;
    avgPercentViewed: number | string;
}

export interface DropDownProps {
    name: string;
}

export interface CallToActionProp {
    modalHandler: () => void;
}

export interface ModalProps {
    modalStyle: string;
    handleModal: () => void;
}