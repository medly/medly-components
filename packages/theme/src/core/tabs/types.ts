export type BackgroundTheme = 'WHITE' | 'GREY';

export type TabStyle = 'OPEN' | 'CLOSED';

export interface TabsTheme {
    tablistBgColor: string;
    backgroundTheme: BackgroundTheme;
    tabStyle: TabStyle;
    textColor: {
        active?: string;
        nonActive?: string;
        hovered?: string;
    };
    backgroundColor: {
        active?: string;
        nonActive?: string;
        hovered?: string;
    };
}
