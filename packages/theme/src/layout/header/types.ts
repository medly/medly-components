export interface HeaderTheme {
    backgroundColor: string;
    maxContentWidth: string;
    height: string;
    fontColor: string;
    breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    nav: {
        gutterSpace: string;
    };
    navItem: {
        fontColor: string;
        activeColor: string;
        hoverColor: string;
        activeIndicatorColor: string;
        height: {
            mobile: string;
            desktop: string;
        };
    };
}
