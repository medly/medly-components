import { ChevronLeftIcon, ChevronRightIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import List from '../List';

export const ListWrapper = styled(List)`
    & > li {
        margin: 0;
    }
`;

export const getPageNumberButtonStyleByState = (
    itemKey: 'pageNumber' | 'overlayPageNumber',
    state: 'default' | 'active' | 'pressed' | 'hovered'
) => css<{
    itemKey?: string;
    state?: string;
}>`
    color: ${({ theme: { pagination } }) => pagination[itemKey].color[state]};
    background: ${({ theme: { pagination } }) => pagination[itemKey].bgColor[state]};
`;

const getPageNavButtonStyleByState = (itemKey: 'pageNav', state: 'default' | 'pressed' | 'hovered' | 'disabled') => css<{
    itemKey?: string;
    state?: string;
}>`
    background: ${({ theme: { pagination } }) => pagination[itemKey].bgColor[state]};
    & > ${ChevronLeftIcon.Style}, ${ChevronRightIcon.Style} {
        & > path {
            fill: ${({ theme: { pagination } }) => pagination[itemKey].color[state]};
        }
    }
`;

const pageNavButtonState = css`
    &:hover {
        ${getPageNavButtonStyleByState('pageNav', 'hovered')}
    }

    &:active {
        ${getPageNavButtonStyleByState('pageNav', 'pressed')}
    }
`;

export const BaseButton = styled.button`
    height: 4rem;
    width: 4rem;
    display: block;
    border-radius: 50%;
    user-select: none;
    border: none;
    padding: 0;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 2rem;
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
    margin: 4px;
    height: 3.2rem;
    width: 3.2rem;
    font-weight: ${props => (props.isActive ? 'bold' : '600')};
    ${props =>
        props.isActive
            ? getPageNumberButtonStyleByState('pageNumber', 'active')
            : getPageNumberButtonStyleByState('pageNumber', 'default')};

    &:hover {
        ${props =>
            props.isActive
                ? getPageNumberButtonStyleByState('pageNumber', 'active')
                : getPageNumberButtonStyleByState('pageNumber', 'hovered')};
    }
    &:active {
        ${getPageNumberButtonStyleByState('pageNumber', 'pressed')}
        font-weight: bold;
    }
`;

export const PageNavButton = styled(BaseButton)<{ disabled: boolean }>`
    & > ${ChevronLeftIcon.Style}, ${ChevronRightIcon.Style} {
        margin: 4px;
        padding: 4px;
    }

    ${getPageNavButtonStyleByState('pageNav', 'default')}

    ${props => !props.disabled && pageNavButtonState};

    ${props => props.disabled && getPageNavButtonStyleByState('pageNav', 'disabled')};
`;
