import { ClearIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { styled, WithThemeProp } from '@medly-components/utils';
import Button from '../../Button';

export const CloseButton = styled(Button)`
    padding: 0px;
    margin-right: -24px;
`;

CloseButton.defaultProps = {
    theme: defaultTheme
};

export const ModalHeaderStyled = styled('div')<WithThemeProp>`
    color: ${({ theme }) => theme.modal.headerColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.M};
`;

ModalHeaderStyled.defaultProps = {
    theme: defaultTheme
};
