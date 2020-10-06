import { ChevronLeftIcon, ChevronRightIcon, SvgIcon } from '@medly-components/icons';
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

const pageNavButtonState = css`
    &:hover {
        ${getPageNavButtonStyleByState('hovered')}
    }

    &:active {
        ${getPageNavButtonStyleByState('pressed')}
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
    ${props => getPageNumberButtonStyleByState('pageNumber', props.isActive ? 'active' : 'default')};

    &:hover {
        ${props => !props.isActive && getPageNumberButtonStyleByState('pageNumber', 'hovered')};
    }
    &:active {
        font-weight: ${({ theme }) => theme.font.weights.Strong};
        ${getPageNumberButtonStyleByState('pageNumber', 'pressed')}
    }
`;

export const PageNavButton = styled(BaseButton)<{ disabled: boolean }>`
    & > ${ChevronLeftIcon.Style}, ${ChevronRightIcon.Style} {
        margin: 4px;
        padding: 4px;
    }

    ${getPageNavButtonStyleByState('default')}

    ${props => (props.disabled ? getPageNavButtonStyleByState('disabled') : pageNavButtonState)};
`;
