import { centerAligned, styled } from '@medly-components/utils';

export const TabList = styled.div.attrs(({ backgroundTheme, tabStyle, tabSize, theme: { tabs } }) => ({
    backgroundTheme,
    tabStyle,
    tabSize,
    tabs
}))`
    width: 100%;
    background-color: ${({ tabs }) => tabs.tablistBgColor};
    flex-direction: row;
    overflow-x: auto;

    ${centerAligned()}
    justify-content: flex-start;
`;
