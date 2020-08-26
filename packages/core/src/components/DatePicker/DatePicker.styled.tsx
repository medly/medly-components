import { SvgIcon } from '@medly-components/icons';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { OuterWrapper } from '../TextField/Styled';
import { InnerWrapper } from '../TextField/Styled/InnerWrapper.styled';
import { StyleProps } from './types';

type State = 'default' | 'active' | 'error' | 'disabled';

const getStyleForIcon = ({ theme, variant }: StyleProps & WithThemeProp, state: State) => {
    const { datePicker } = theme;
    const {
        icon: { [state]: iconStyle }
    } = datePicker[variant];
    return css`
        ${SvgIcon} {
            border-radius: 50%;
            padding: 0.8rem;
            * {
                fill: ${iconStyle.color};
            }
            &:hover {
                background-color: ${iconStyle.backgroundColor};
                * {
                    fill: ${iconStyle.hoverColor};
                }
            }
        }
    `;
};

export const DateIcon = styled.span<StyleProps>`
    height: 4rem;
    ${props => getStyleForIcon(props, 'default')};
    ${props => props.active && getStyleForIcon(props, 'active')};
    ${props => props.errorText && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
`;

export const Wrapper = styled.div<StyleProps>`
    ${InnerWrapper} {
        padding: 0 0.8rem 0 1.6rem;
    }
    ${OuterWrapper} {
        display: block;
        width: ${({ fullWidth }) => (fullWidth ? '100%' : '25.6rem')};
    }
`;
