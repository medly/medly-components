import styled from 'styled-components';
import Text from '../../Text';

export const TimePickerCard = styled('div')`
    background: ${({ theme }) => theme.timePicker.bgColor};
    box-shadow: 0 0.2rem 0.8rem ${({ theme }) => theme.timePicker.shadowColor};
    border-radius: ${({ theme }) => theme.timePicker.borderRadius};
    width: max-content;
    height: max-content;
    padding-top: 1.2rem;
`;

export const TimeLabels = styled('div')`
    display: flex;
    flex-direction: row;

    & > * {
        flex: 1;
        user-select: none;
        text-align: center;
        font-size: ${({ theme }) => theme.timePicker.label.fontSize};
        font-weight: ${({ theme }) => theme.timePicker.label.fontWeight};
        line-height: ${({ theme }) => theme.timePicker.label.lineHeight};
        letter-spacing: ${({ theme }) => theme.timePicker.label.LetterSpacing};
        color: ${({ theme }) => theme.timePicker.label.color};
    }

    & > *:nth-child(2) {
        flex: 0.5;
    }
`;

export const TimePickerWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    height: 20rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.2rem;
    position: relative;

    & > * {
        flex: 1;
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(100% - 2.4rem);
        height: 4rem;
        background-color: ${({ theme }) => theme.timePicker.selectedOption.backgroundColor};
        border-radius: 0.8rem;
        transform: translate(-50%, -50%);
    }
`;

export const Colon = styled(Text).attrs({ children: ':' })`
    flex: 0.5;
    display: flex;
    justify-content: flex-end;
    user-select: none;
    z-index: 1;
`;

export const TimePickerActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
`;
