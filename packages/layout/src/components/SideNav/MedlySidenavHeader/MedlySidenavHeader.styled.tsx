import { styled } from '@medly-components/utils';
import { HeaderStyledProps } from './types';

export const SidenavHeader = styled('div')<HeaderStyledProps>`
    width: 100%;
    overflow: hidden;
    position: relative;
    min-height: ${({ theme }) => theme.sideNav.closeSize};
    padding: 0 1.9rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    svg:last-child {
        transition: opacity 200ms;
        opacity: ${({ isHovered, isExpanded }) => (isHovered || isExpanded ? 1 : 0)};
    }

    &::after {
        content: '';
        width: calc(100% - ${({ theme }) => theme.spacing.M3});
        display: block;
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.sideNav.separatorColor};
        margin: 0 auto;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;
