import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Button from '../../Button';
import { Props } from './types';

export const CloseButton = styled(Button)`
    padding: 0;
    margin-right: -24px;
`;

CloseButton.defaultProps = {
    theme: defaultTheme
};

export const ModalHeaderStyled = styled('div')<Props>`
    color: ${({ theme }) => theme.modal.headerColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.M};
`;

ModalHeaderStyled.defaultProps = {
    theme: defaultTheme
};
