import { Theme } from '@medly-components/theme';
import { rgba } from 'polished';
import styled from 'styled-components';
import Button from '../../Button';
import { Wrapper } from '../../Popover/Popover.styled';
import PopupStyled from '../../Popover/Popup/styled';
import Text from '../../Text';

/* Reused popover stylings  */
export const PopoverWrapper = styled(Wrapper)`
    width: 100%;
`;

const getActionBarStyleByPropertyName = (key: 'bgColor' | 'shadowColor' | 'separatorColor' | 'button' | 'color', theme: Theme): any =>
    theme.table.actionBar[key];

export const PopupWrapper = styled(PopupStyled)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => getActionBarStyleByPropertyName('bgColor', theme)};
    width: 100%;
    height: max-height;
    padding: 0;
    bottom: 0.6rem;
    transform: none;
    left: auto;
    box-shadow: 0 0.4rem 1.6rem ${({ theme }) => rgba(getActionBarStyleByPropertyName('shadowColor', theme), 0.2)};
    &::after {
        left: 2.4rem;
        border-top-color: ${({ theme }) => getActionBarStyleByPropertyName('bgColor', theme)};
    }
    & > ${Text.Style} {
        margin-right: 1.6rem;
        color: ${({ theme }) => getActionBarStyleByPropertyName('color', theme)};
    }
`;

export const ButtonSection = styled('div')`
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    & > ${Button.Style} {
        margin: 0.8rem 1.6rem 0.8rem 0.8rem;
        /* stylelint-disable function-whitespace-after */
        border: 0.1rem solid ${({ theme }) => getActionBarStyleByPropertyName('button', theme).borderColor};
        /* stylelint-enable function-whitespace-after */
        height: 3.2rem;
        &:not(:last-child)::before {
            content: '';
            position: absolute;
            left: calc(100% + 0.8rem);
            width: 0.1rem;
            height: 2.4rem;
            background: ${({ theme }) => getActionBarStyleByPropertyName('separatorColor', theme)};
            margin: auto;
            top: 0;
            bottom: 0;
        }
    }
    & > :not(:first-child) {
        margin-left: 0;
    }
`;
