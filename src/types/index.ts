export interface SubMenuItem {
    name: string;
    link: string;
}

export interface MenuItem {
    name: string;
    link: string;
    subMenu?: SubMenuItem[];
}