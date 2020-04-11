import colors from '../colors';
import { StepperTheme } from './types';

const stepper: StepperTheme = {
    sizes: {
        S: {
            counterSize: '30px',
            fontVariant: 'body2'
        },
        M: {
            counterSize: '60px',
            fontVariant: 'h3'
        },
        L: {
            counterSize: '90px',
            fontVariant: 'h2'
        }
    },
    defaultSize: 'S',
    counterColor: colors.white,
    activeColor: colors.professionalNavy,
    inactiveColor: colors.grey[300]
};

export default stepper;
