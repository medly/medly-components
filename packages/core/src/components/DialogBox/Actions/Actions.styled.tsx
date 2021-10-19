import { styled } from '@medly-components/utils';
import { DialogBoxActionUserProps } from './types';

export const Actions = styled('div')<DialogBoxActionUserProps>`
    display: flex;
    z-index: 10;
    margin-top: 3rem;
    justify-content: ${({ alignItems }) => (alignItems === 'left' ? 'flex-start' : alignItems === 'center' ? 'center' : 'flex-end')};
    flex-direction: column;

    & > * {
        flex-grow: 1;
    }

    & > * + * {
        margin: 1.6rem 0 0;
    }

    @media (min-width: 600px) {
        flex-direction: row;

        & > * {
            max-width: 50%;
        }

        & > * + * {
            margin: 0 0 0 1.6rem;
        }
    }
`;
Actions.defaultProps = {
    alignItems: 'right'
};
