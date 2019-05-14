import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import { Props } from './types';

export const FieldWithLabel = styled('div')<Props>`
    margin: ${({ theme, fullWidth }) => (fullWidth ? `${theme.spacing.S} 0px` : `${theme.spacing.S}`)};
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    align-items: ${({ labelPosition }) => (labelPosition === 'top' || labelPosition === 'bottom' ? 'flex-start' : 'center')};
    flex-direction: ${({ labelPosition }) => {
        switch (labelPosition) {
            case 'top':
                return `column`;
            case 'bottom':
                return `column-reverse`;
            case 'start':
                return `row`;
            case 'end':
                return `row-reverse`;
            default:
                return 'column';
        }
    }};
`;
FieldWithLabel.defaultProps = {
    theme: defaultTheme
};
