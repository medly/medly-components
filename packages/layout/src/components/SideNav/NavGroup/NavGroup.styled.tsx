import { Text } from '@medly-components/core';
import { getFontStyle, styled } from '@medly-components/utils';

export const NavGroupStyled = styled.li<{ showTitle: boolean }>`
    position: relative;
    & > ${Text.Style} {
        text-overflow: ellipsis;
        white-space: nowrap;
        justify-self: left;
        margin-left: 2.4rem;
        user-select: none;
        transition: opacity 200ms ease-out, color 100ms ease-out;
        opacity: ${({ showTitle }) => (showTitle ? 1 : 0)};
        color: ${({ theme }) => theme.sideNav.group.title.color};
        ${({ theme }) => getFontStyle({ theme, fontVariant: theme.sideNav.navItem.text.textVariant, fontWeight: 'Medium' })}
    }
    &:first-child {
        margin-top: 1.5rem;
    }
    &:not(:first-child) {
        margin-top: 3rem;
        &::before {
            content: '';
            width: calc(100% - ${({ theme }) => theme.spacing.M2});
            margin: 0 auto;
            display: block;
            position: absolute;
            border-style: solid;
            border-color: ${({ theme }) => theme.sideNav.separatorColor};
            border-width: ${({ showTitle }) => (showTitle ? 0 : '1px')};
            top: 0;
            left: 0;
            right: 0;
        }
    }
`;
