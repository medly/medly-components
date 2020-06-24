import { centerAligned, styled } from '@medly-components/utils';

export const TabList = styled.div.attrs(props => ({
    tabs: props.theme.tabs,
    theme: props.theme
}))`
    width: 100%;
    background-color: ${({ tabs }) => tabs.tablistBgColor};
    flex-direction: row;
    overflow-x: auto;
    border: ${({ tabs, theme }) => (tabs.tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none')};
    border-radius: ${({ tabs }) => (tabs.tabStyle === 'CLOSED' ? '8px 8px 0 0' : '0')};

    ${centerAligned()}
    justify-content: flex-start;
`;
