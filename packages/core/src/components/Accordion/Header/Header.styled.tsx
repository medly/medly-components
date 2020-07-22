import { SvgIcon } from '@medly-components/icons';
import { styled } from '@medly-components/utils';

export const Wrapper = styled('button')<{ isActive: boolean }>`
    cursor: pointer;
    position: relative;
    overflow: hidden;
    user-select: none;
    font-family: inherit;
    text-decoration: none;
    outline: none;
    border: 0;
    padding: 0;
    text-align: left;
    border-top-left-radius: 0.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-left-radius: ${({ isActive }) => !isActive && '0.8rem'};
    border-bottom-right-radius: ${({ isActive }) => !isActive && '0.8rem'};
    transition: all 200ms ease-out;

    ${SvgIcon} {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%) rotate(${({ isActive }) => (isActive ? '180deg' : '0deg')});
        transition: transform 200ms ease-out;
    }
`;
