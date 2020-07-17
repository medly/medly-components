import { ClearIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';

export const CloseIcon = styled(ClearIcon)`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    border-radius: 50%;
    padding: 4px;
    transition: all 100ms ease-out;
    background-color: ${({ theme }) => theme.colors.grey[100]};

    * {
        fill: ${({ theme }) => theme.colors.black};
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.blue[400]};
        transform: rotate(90deg);

        * {
            fill: ${({ theme }) => theme.colors.white};
        }
    }
`;
