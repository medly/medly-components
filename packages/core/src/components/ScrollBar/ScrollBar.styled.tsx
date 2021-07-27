import { styled } from '@medly-components/utils';

export const Container = styled.div`
    overflow: auto;
    height: 100%;
    position: relative;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ScrollBarContainer = styled.div<{ hovering: boolean }>`
    width: 10px;
    height: 100%;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.35);
    opacity: ${props => (props.hovering ? 1 : 0)};
`;

export const ScrollThumb = styled('div').attrs(({ height, top }: { height: number; top: number }) => ({
    style: {
        height,
        top
    }
}))<{ height: number; top: number }>`
    width: 8px;
    height: 20px;
    margin-left: 1px;
    position: absolute;
    border-radius: 7px;
    opacity: 1;
    top: 0;
    background-color: rgba(0, 0, 0, 0.55);
`;
