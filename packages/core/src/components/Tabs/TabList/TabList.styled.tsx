import { centerAligned, styled } from '@medly-components/utils';
import { TabStyle } from '../types';

export const TabList = styled.div<{ tabStyle?: TabStyle }>`
    background-color: ${({ theme }) => theme.tabs.tablistBgColor};
    flex-direction: row;
    overflow-x: auto;
    border: ${({ theme, tabStyle }) => (tabStyle === 'CLOSED' ? `1px solid ${theme.colors.grey[300]}` : '0 none')};
    border-radius: ${({ tabStyle }) => (tabStyle === 'CLOSED' ? '8px 8px 0 0' : '0')};

    ${centerAligned()}
    justify-content: flex-start;
`;
