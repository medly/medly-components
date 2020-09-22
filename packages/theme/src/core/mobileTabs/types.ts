type Colors = {
    active?: string;
    default?: string;
    hovered?: string;
    disabled?: string;
};
export interface MobileTabsTheme {
    borderColor: {
        active: string;
        closed: string;
        open: string;
        hovered: string;
    };
    labelColor: Colors;
    bgColor: Colors;
}
