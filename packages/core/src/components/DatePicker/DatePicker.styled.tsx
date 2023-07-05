/* stylelint-disable  property-no-unknown */
import { InjectClassName, Omit, WithThemeProp } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import Calendar from '../Calendar';
import { getPosition } from '../Popover/Popup/styled/Popup.styled';
import { InnerWrapper, InputWrapper, OuterWrapper } from '../TextField/Styled';
import { StyleProps } from './types';

type State = 'default' | 'active' | 'error' | 'disabled';

const getStyleForIcon = ({ theme, variant, disabled }: Omit<StyleProps, 'placement'> & WithThemeProp, state: State) => {
    const {
        icon: { [state]: iconStyle }
    } = theme.datePicker[variant];
    return css`
        * {
            fill: ${iconStyle.color};
        }
        &:hover {
            background-color: ${!disabled && iconStyle.backgroundColor};
            * {
                fill: ${!disabled && iconStyle.hoverColor};
            }
        }
    `;
};

export const DateIconWrapper = styled(InjectClassName)<Omit<StyleProps, 'placement'>>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-radius: ${({ theme }) => theme.datePicker.borderRadius};
    padding: ${({ size }) => (size === 'S' ? '0.6rem' : '0.8rem')};

    ${props => getStyleForIcon(props, 'default')};
    ${props => props.isActive && getStyleForIcon(props, 'active')};
    ${props => props.isErrorPresent && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
`;

const hiddenInputStyle = css<StyleProps>`
    margin: 0;
    min-width: 0;
    & > ${OuterWrapper} {
        min-width: 0;
        ${InnerWrapper} {
            width: fit-content;
            padding: ${({ size }) => (size === 'S' ? '0 0.4rem' : '0 0.8rem')};
            & > ${InputWrapper} {
                display: none;
            }
        }
    }
`;

export const Wrapper = styled(OuterWrapper)<StyleProps>`
    & > ${OuterWrapper} {
        margin: 0;
        & > ${InnerWrapper} {
            padding-right: 0.8rem;
        }
    }

    ${Calendar.Style} {
        z-index: 4;
        position: absolute;
        ${getPosition}
        top: ${({ size, placement, theme }) =>
            (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') &&
            (size === 'S' ? theme.textField.height.S : theme.textField.height.M)};
    }

    ${({ hideInput }) => hideInput && hiddenInputStyle};
`;
