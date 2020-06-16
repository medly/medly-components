import { styled } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import { HelperText } from '../TextField/Styled';

export const CheckboxGroupWrapper = styled(FieldWithLabel)<{ error?: boolean; showSelectAll?: boolean; isIndented?: boolean }>`
    margin-left: ${({ isIndented }) => (isIndented ? '4rem' : '0')};
    ${FieldWithLabel.Field} {
        margin-left: ${({ showSelectAll }) => (showSelectAll ? '4rem' : '0')};
    }
    ${HelperText} {
        grid-area: description;
        color: ${({ error, theme }) => (error ? theme.colors.red[500] : theme.colors.grey[900])};
        margin: ${({ error, showSelectAll }) => (error && showSelectAll ? '0 0 1.2rem 4rem' : '0 0 1.2rem 0')};
    }
`;
