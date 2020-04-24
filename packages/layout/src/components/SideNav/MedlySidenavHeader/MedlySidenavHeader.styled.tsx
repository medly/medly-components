import { styled } from '@medly-components/utils';
import { HeaderStyledProps } from './types';

export const SidenavHeader = styled('div')<HeaderStyledProps>`
    width: 100%;
    overflow: hidden;
    position: relative;
    min-height: ${({ theme }) => theme.sideNav.closeSize};
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: ${({
        theme: {
            sideNav: { closeSize, openSize }
        }
    }) => `${closeSize} calc(${openSize} - ${closeSize}) `};

    svg:last-child {
        justify-self: left;
        transform: translateX(-1rem);
        transition: opacity 200ms;
        opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
    }

    &::after {
        content: '';
        width: calc(100% - ${({ theme }) => theme.spacing.M2});
        display: block;
        position: absolute;
        border-top: 1px solid ${({ theme }) => theme.sideNav.separatorColor};
        margin: 0 auto;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;
