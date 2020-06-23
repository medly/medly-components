import { centerAligned, styled } from '@medly-components/utils';

export const TabList = styled.div.attrs(({ theme: { tabs } }) => ({
    tabs
}))`
    width: 100%;
    background-color: ${({ tabs }) => tabs.tablistBgColor};
    flex-direction: row;
    overflow-x: auto;

    ${centerAligned()}
    justify-content: flex-start;
`;
