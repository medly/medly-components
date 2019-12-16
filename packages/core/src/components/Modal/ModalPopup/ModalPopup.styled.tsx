import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';

export const Popup = styled('div')`
    background: ${({ theme }) => theme.modal.bgColor};
    padding: ${({ theme }) => theme.spacing.L} ${({ theme }) => theme.spacing.XL};
    border-radius: 5px;
    width: 50%;
    height: auto;
    max-height: 80%;
    overflow: hidden;
    overflow-y: auto;
`;

Popup.defaultProps = {
    theme: defaultTheme
};
