import { css, styled } from '@medly-components/utils';
import Text from '../../Text';
import { StyledProps } from './types';

export const Label = styled(Text)`
    line-height: normal;
    text-align: center;
`;

export const DisabledLabel = styled(Text)`
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: -0.04rem;
    color: ${({ theme }) => theme.colors.grey[400]};
    font-weight: 400;
    text-align: center;
`;

const getStyle = ({ styleType, labelColor }: StyledProps & { styleType: 'active' | 'default' | 'hovered' | 'disabled' }) => css`
    ${Label} {
        color: ${labelColor[styleType]};
        line-height: ${styleType === 'disabled' && '1.6rem'};
    }
`;

const activeStyle = () => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'active' })}
`;

const nonActiveStyle = ({ bgColor }: StyledProps) => css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'default' })}
    &:not(:disabled):hover {
        ${props => getStyle({ ...props, styleType: 'hovered' })}
        background-color: ${bgColor.hovered};
        cursor: pointer;
    }
`;

const disabledStyle = css<StyledProps>`
    ${props => getStyle({ ...props, styleType: 'disabled' })}
`;

export const TabWrapper = styled('button').attrs(({ theme }) => ({ ...theme.tabsSlider }))<StyledProps>`
    width: calc(${({ totalTabs }) => 100 / totalTabs}% - ${({ totalTabs }) => (totalTabs * 0.4) / (totalTabs - 1)}rem);
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
    border-radius: 0.8rem;
    text-align: center;
    padding: 0.8rem 0;
    flex: ${({ fraction }) => fraction};
    background: transparent;
    transition: all 100ms ease-out;
    min-height: 100%;
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
