import { StepperSizes } from '@medly-components/theme';
import { HTMLProps, Omit } from '@medly-components/utils';

export interface CounterProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    size?: StepperSizes;
    active?: boolean;
}

export interface StepProps extends CounterProps {
    step?: number;
}

export interface StepperProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
    /** Stepper Size */
    size?: StepperSizes;
    /** Active step */
    activeStep?: number;
    /** Function to be called on clicking on any step */
    onStepClick?: (step: number) => void;
}

export interface StepperStaticProps {
    Step: React.FC<StepProps>;
}
