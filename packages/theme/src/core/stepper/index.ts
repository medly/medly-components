import colors from '../colors';
import { StepperTheme } from './types';

const stepper: StepperTheme = {
    sizes: {
        S: {
            size: '30px',
            fontSize: 'M3'
        },
        M: {
            size: '60px',
            fontSize: 'L2'
        },
        L: {
            size: '90px',
            fontSize: 'L3'
        },
        XL: {
            size: '120px',
            fontSize: 'L4'
        }
    },
    defaultSize: 'S',
    counterColor: colors.white,
    activeColor: colors.violet[500],
    inactiveColor: colors.grey[500]
};

export default stepper;
