export interface HeaderTheme {
    backgroundColor: string;
    maxContentWidth: string;
    height: {
        mobile: string;
        desktop: string;
    };
    nav: {
        gutterSpace: string;
    };
    navItem: {
        textColor: { default: string; hovered: string; pressed: string; active: string };
        bgColor: { default: string; hovered: string; pressed: string; active: string };
        activeIndicatorColor: string;
        height: {
            mobile: string;
            desktop: string;
        };
    };
}
