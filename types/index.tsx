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

export interface AddonProps {
    title: () => JSX.Element;
    btntxt: string;
    imgpath: string;
    trialtxt: string;
    btncolor: string;
    bgcolor: string;
}

export interface SelectProps {
    name: string | number;
}

export interface ResolutionProps {
    value1: string | number;
    value2: string | number;
    checked: boolean;
}

export interface OptimizationProps {
    text: string;
}

export interface SaveButtonProps {
    placeholder: string;
}

export interface ZonesProps {
    zone: string;
    storage: string;
    checked: boolean;
}

export interface SettingsOptionProp {
    checked: boolean;
    label: string;
}

export interface ControlOptionProp {
    label: string;
}