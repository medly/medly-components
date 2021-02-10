import { css, styled } from '@medly-components/utils';

const leftPositioned = () => css`
    left: 0;
`;

const rightPositioned = () => css`
    right: 0;
`;

export const DrawerStyled = styled('aside')<{ position: string; width: string }>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.white};
    width: ${props => props.width};
    position: fixed;
    z-index: 10;
    top: 0;
    box-shadow: 0 4px 32px 0 rgb(67, 84, 101, 50%);
    box-sizing: border-box;
    transition: all 100ms ease-out;
    ${({ position }) => (position === 'left' ? leftPositioned() : rightPositioned())}
`;
