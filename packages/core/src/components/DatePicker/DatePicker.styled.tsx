import { styled } from '@medly-components/utils';
import { default as MedlyInput } from '../Input';

export const Input = styled(MedlyInput)`
    user-select: none;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
`;
