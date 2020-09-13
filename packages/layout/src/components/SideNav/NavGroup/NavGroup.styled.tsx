import { Text } from '@medly-components/core';
import { styled } from '@medly-components/utils';
import NavList from '../NavList';

export const NavGroupStyled = styled.li<{ showTitle: boolean }>`
    position: relative;
    & > ${Text.Style} {
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-self: left;
        margin: 3.1rem 2.4rem 1.4rem;
        user-select: none;
        display: block;
        transition: opacity 200ms ease-out, color 100ms ease-out;
        opacity: ${({ showTitle }) => (showTitle ? 1 : 0)};
        color: ${({ theme }) => theme.sideNav.group.title.color};
    }
    ${NavList} {
        overflow: visible;
    }
    &:not(:first-child) {
        &::before {
            content: '';
            width: ${({ showTitle }) => (showTitle ? 0 : `calc(100% - 4rem) `)};
            transition: width 200ms ease-out;
            margin: 0 auto;
            display: block;
            position: absolute;
            border-top: ${({ showTitle }) => (showTitle ? 0 : '1px')} solid ${({ theme }) => theme.sideNav.separatorColor};
            top: ${({ theme }) => theme.font.variants.h5.lineHeight};
            left: 0;
            right: 0;
        }
    }
`;
