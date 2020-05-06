import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Button from '../../Button';
import { Props } from './types';

export const CloseButton = styled(Button)`
    padding: 0;
    margin-right: -36px;
    margin-top: -58px;

    svg {
        border-radius: 50%;
        padding: 4px;
        background-color: ${({ theme }) => theme.colors.grey[100]};

        > path {
            fill: ${({ theme }) => theme.colors.black} !important;
        }
    }

    &:hover > svg {
        background-color: ${({ theme }) => theme.colors.communityBlue[400]};
        transform: rotate(90deg);

        > path {
            fill: ${({ theme }) => theme.colors.white} !important;
        }
    }
`;

CloseButton.defaultProps = {
    theme: defaultTheme
};

export const ModalHeaderStyled = styled('div')<Props>`
    color: ${({ theme }) => theme.modal.headerColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.S4};
    margin-top: -6px;
`;

ModalHeaderStyled.defaultProps = {
    theme: defaultTheme
};
