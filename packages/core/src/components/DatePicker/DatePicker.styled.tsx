import { css, InjectClassName, styled, WithThemeProp } from '@medly-components/utils';
import Calendar from '../Calendar';
import TextField from '../TextField';
import { InnerWrapper } from '../TextField/Styled/InnerWrapper.styled';
import { StyleProps } from './types';

type State = 'default' | 'active' | 'error' | 'disabled';

const getStyleForIcon = ({ theme, variant, size }: StyleProps & WithThemeProp, state: State) => {
    const { datePicker } = theme;
    const {
        icon: { [state]: iconStyle }
    } = datePicker[variant];
    return css`
        border-radius: 50%;
        padding: ${size === 'S' ? '0.6rem' : '0.8rem'};
        * {
            fill: ${iconStyle.color};
        }
        &:hover {
            background-color: ${iconStyle.backgroundColor};
            * {
                fill: ${iconStyle.hoverColor};
            }
        }
    `;
};

export const DateIcon = styled(InjectClassName)<StyleProps>`
    ${props => getStyleForIcon(props, 'default')};
    ${props => props.active && getStyleForIcon(props, 'active')};
    ${props => props.errorText && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
`;

export const Wrapper = styled.div<StyleProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        margin: 0;
    }
    ${InnerWrapper} {
        padding: 0 0.8rem 0 1.6rem;
    }
    ${Calendar.Style} {
        z-index: 1000;
        position: absolute;
        top: ${({ size }) => (size === 'S' ? '4rem' : '5.6rem')};
    }
`;
