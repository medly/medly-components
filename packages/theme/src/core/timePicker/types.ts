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
    };
    nonSelectedOption: {
        color: string;
        fontSize: string;
        fontWeight: FontWeights;
        lineHeight: string;
        letterSpacing: string;
    };
}
