import { DateRangeIcon } from '@medly-components/icons/src';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { State } from 'packages/theme/src/core/common/types';
import { WrapperProps } from './types';

const getStyleForIcon = ({ theme, variant }: WrapperProps & WithThemeProp, state: State) => {
    const { datePicker } = theme;
    const {
        icon: { [state]: iconStyle }
    } = datePicker[variant];
    return css`
        ${DateRangeIcon.Style} {
            border-radius: 50%;
            padding: 0.8rem;
            &:hover {
                background-color: ${iconStyle.backgroundColor};
                * {
                    fill: ${iconStyle.hoverColor};
                }
            }
        }
    `;
};

export const Wrapper = styled.div<WrapperProps>`
    ${props => getStyleForIcon(props, 'default')};
    ${props => props.active && getStyleForIcon(props, 'active')};
    ${props => props.errorText && getStyleForIcon(props, 'error')};
    ${props => props.disabled && getStyleForIcon(props, 'disabled')};
`;
