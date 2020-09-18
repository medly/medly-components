import { centerAligned, css, getFontStyle, styled } from '@medly-components/utils';

export const Wrapper = styled.div`
    cursor: pointer;
    border: 1px solid #98a7b7;
    border-radius: 4px;
    overflow: hidden;
`;
export const InputWrapperContainer = styled.div`
    display: flex;
    ${centerAligned('flex')}
    flex-direction: row;

    > i.date-separator {
        border-right: 1px solid #c7d0d8;
        height: 16px;
        width: 1px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 50%;
    box-sizing: border-box;
    > input.date-range-input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 14px;
        outline: none;
        border: none;

        /* Font Style */
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
        color: #546a7f;
    }
`;

export const Label = styled('label')<{ required: boolean; variant: 'outlined' | 'filled'; size: 'S' | 'M' }>`
    top: 50%;
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: translateY(-50%);
    opacity: 1;

    ${({ required }) =>
        required &&
        css`
            ::after {
                content: ' *';
            }
        `}
`;
