import { styled } from '@medly-components/utils';

export const SearchBox = styled('input')`
    height: 40px;
    min-width: 256px;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #98a7b7;
    border-radius: 40px;
    font-size: 14px;
    padding-left: 20px;
    outline: none;

    &:hover {
        border: 1px solid #607890;
        box-shadow: 0 2px 8px rgba(96, 120, 144, 0.25);
    }

    &:active {
        border: 1px solid #005aee;
        box-shadow: 0 2px 16px rgba(96, 120, 144, 0.25);
    }
`;
