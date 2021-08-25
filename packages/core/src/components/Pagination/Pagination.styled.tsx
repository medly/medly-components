import { ChevronLeftIcon, ChevronRightIcon, SvgIcon } from '@medly-components/icons';
import { css, getFontStyle, styled } from '@medly-components/utils';
import List from '../List';
import Text from '../Text';

export const ListWrapper = styled(List)`
    & > li {
        margin: 0;
    }
`;

export const getPageNumberButtonStyleByState = (
    itemKey: 'pageNumber' | 'overlayPageNumber',
    state: 'default' | 'active' | 'pressed' | 'hovered'
) => css`
    color: ${({ theme: { pagination } }) => pagination[itemKey].color[state]};
    background: ${({ theme: { pagination } }) => pagination[itemKey].bgColor[state]};
`;

const getPageNavButtonStyleByState = (state: 'default' | 'pressed' | 'hovered' | 'disabled') => css`
    background: ${({ theme: { pagination } }) => pagination.pageNav.bgColor[state]};
    ${SvgIcon} {
        * {
            fill: ${({ theme: { pagination } }) => pagination.pageNav.color[state]};
        }
    }
`;

export const BaseButton = styled.button.attrs({ type: 'button' })`
    margin: 0.4rem;
    height: 3.2rem;
    width: 3.2rem;
    display: block;
    border-radius: 50%;
    user-select: none;
    border: none;
    padding: 0;
    text-align: center;
    transition: all 100ms ease-out;
    ${getPageNumberButtonStyleByState('pageNumber', 'default')}

    &:hover {
        cursor: pointer;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;
export const PageNumberButton = styled(BaseButton)<{ isActive?: boolean }>`
    ${props => getPageNumberButtonStyleByState('pageNumber', props.isActive ? 'active' : 'default')};
    border-radius: ${({ theme: { pagination } }) => pagination.pageNumber.borderRadius};

    &:hover {
        ${props => !props.isActive && getPageNumberButtonStyleByState('pageNumber', 'hovered')};
    }
    &:active {
        font-weight: ${({ theme }) => theme.font.weights.Strong};
        ${getPageNumberButtonStyleByState('pageNumber', 'pressed')};
    }

    ${Text.Style} {
        ${({ theme }) => getFontStyle({ theme, fontVariant: theme.pagination.fontVariant })};
        font-weight: ${({ theme, isActive }) => theme.pagination.pageNumber.fontWeight[isActive ? 'selected' : 'default']};
    }
`;

export const PageNavButton = styled(BaseButton)<{ disabled: boolean }>`
    & > ${ChevronLeftIcon.Style}, ${ChevronRightIcon.Style} {
        padding: 0.4rem;
    }

    ${getPageNavButtonStyleByState('default')}

    &:disabled {
        ${getPageNavButtonStyleByState('disabled')}
    }

    &:not(:disabled) {
        &:hover {
            ${getPageNavButtonStyleByState('hovered')}
        }
        &:active {
            ${getPageNavButtonStyleByState('pressed')}
        }
    }
`;
