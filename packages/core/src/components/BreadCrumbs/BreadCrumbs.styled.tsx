import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Link from '../Link';
import List from '../List';
import { StyledProps } from './types';

export const BreadCrumbsStyled = styled('div').attrs(({ theme: { breadCrumbs } }) => ({ ...breadCrumbs }))<StyledProps>`
    height: 40px;
    background-color: ${({ bgColor }) => bgColor};
    display: flex;
    align-items: center;

    ${Link.Style} {
        color: ${({ textColor }) => textColor};
    }

    ${List.Style} {
        li + li::before {
            margin-right: ${({ theme }) => theme.spacing.S2};
            content: '/';
            color: ${({ textColor }) => textColor};
        }
    }
`;

BreadCrumbsStyled.defaultProps = {
    theme: defaultTheme
};
