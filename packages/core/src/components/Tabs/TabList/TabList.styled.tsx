import { centerAligned, styled } from '@medly-components/utils';

export const TabList = styled('div').attrs(({ theme: { tabs } }) => ({ tabs }))`
    width: 100%;
    background-color: ${({ tabs }) => tabs.tablistBgColor};
    flex-direction: row;
    box-shadow: 0 10px 10px -5px ${({ tabs }) => tabs.shadowColor};
    overflow-x: auto;

    ${centerAligned()}
    justify-content: flex-start;
`;
