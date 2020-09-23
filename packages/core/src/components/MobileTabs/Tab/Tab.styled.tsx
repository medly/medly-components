import { css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { StyledProps } from './types';

export const Label = styled(Text)`
    line-height: 2.7rem;
`;

export const DisabledLabel = styled(Text)`
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors.grey[400]};
    font-weight: 400;
`;

const getStyle = ({ styleType, labelColor, bgColor }: StyledProps & { styleType: 'active' | 'default' | 'hovered' | 'disabled' }) => css`
    /* background-color: ${bgColor[styleType]}; */
    ${Label} {
        color: ${labelColor[styleType]};
        line-height: ${styleType === 'disabled' && '1.6rem'};
    }
`;

const activeStyle = ({ bgColor }: StyledProps) => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'active' })}
`;

const nonActiveStyle = ({ bgColor }: StyledProps) => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'default' })}
    &:not(:disabled):hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        background-color: ${bgColor.hovered};
    }
`;

const disabledStyle = css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'disabled' })}
`;

export const TabWrapper = styled('button').attrs(({ theme }) => ({ ...theme.mobileTabs }))<StyledProps>`
    min-width: 16.5rem;
    padding: 0.5rem 4rem;
    margin: 0 0.25rem;
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    position: relative;
    border: none;
    box-sizing: border-box;
    font-family: inherit;
    border-radius: 2rem;
    text-align: center;
    flex: ${({ fraction }) => fraction};
    background: transparent;
    transition: all 100ms ease-out;
    * {
        transition: all 100ms ease-out;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        padding: 0 4rem;
        &::after {
            background-color: transparent;
        }
        ${disabledStyle}
    }

    &:not(:disabled):hover {
        cursor: pointer;
        &::after {
            background-color: ${({ borderColor, active, tabBackground }) => !active && tabBackground === 'GREY' && borderColor.hovered};
        }
    }

    ${({ active }) => (active ? activeStyle : nonActiveStyle)}
`;

export const LabelAndDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
