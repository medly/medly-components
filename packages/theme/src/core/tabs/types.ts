export type BackgroundTheme = 'WHITE' | 'GREY';

export type TabStyle = 'OPEN' | 'CLOSED';

export interface TabsTheme {
    tablistBgColor: string;
    activeTextColor: string;
    nonActiveTextColor: string;
    disabledTextColor: string;
    backgroundTheme: BackgroundTheme;
    tabStyle: TabStyle;
}
