import { styled } from '@medly-components/utils/src/styled';
import FieldWithLabel from '../FieldWithLabel';
import { HelperText } from '../TextField/Styled';

export const CheckboxGroupWrapper = styled(FieldWithLabel)<{ error?: boolean; showSelectAll?: boolean }>`
    ${HelperText} {
        grid-area: description;
        color: ${({ error, theme }) => (error ? theme.colors.red[500] : theme.colors.grey[900])};
        margin: ${({ error, showSelectAll }) => (error && showSelectAll ? '0 0 1.2rem 4rem' : '0 0 1.2rem 0')};
    }
`;
