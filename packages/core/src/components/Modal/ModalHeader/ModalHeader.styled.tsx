import { defaultTheme } from '@medly-components/theme';
import { styled, WithThemeProp } from '@medly-components/utils';

export const CloseButton = styled('button')`
    font-size: 30px;
    border: none;
    background: inherit;
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
