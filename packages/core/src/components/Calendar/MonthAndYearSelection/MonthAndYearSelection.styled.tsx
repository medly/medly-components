import styled from 'styled-components';
import TextField from '../../TextField';

export const Wrapper = styled.div`
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    justify-content: space-around;

    ul {
        max-height: 20rem;
        overflow: auto;
    }

    ${TextField.Style} {
        min-width: unset;
        max-width: 9.5rem;
        & > div {
            height: 3.5rem;
            padding: 0 0 0 1rem;
        }
    }
`;
