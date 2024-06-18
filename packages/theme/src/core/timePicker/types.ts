import { FontWeights } from '../types';

export interface TimePickerTheme {
    bgColor: string;
    borderRadius: string;
    shadowColor: string;
    label: {
        color: string;
        fontSize: string;
        fontWeight: FontWeights;
        lineHeight: string;
        letterSpacing: string;
    };
    selectedOption: {
        color: string;
        fontSize: string;
        fontWeight: FontWeights;
        lineHeight: string;
        letterSpacing: string;
        backgroundColor: string;
        hoverColor: string;
    };
    nonSelectedOption: {
        color: string;
        fontSize: string;
        fontWeight: FontWeights;
        lineHeight: string;
        letterSpacing: string;
        hoverColor: string;
    };
}
