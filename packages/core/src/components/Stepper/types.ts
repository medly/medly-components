import { StepperSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface CounterProps extends WithThemeProp {
    size?: StepperSizes;
    active?: boolean;
}

export interface CounterStyledProps extends CounterProps {
    counterSize: string;
    fontSize: string;
    bgColor: string;
    descriptionColor: string;
}

export interface StepProps extends CounterProps {
    step?: number;
}

export interface Props {
    size?: StepperSizes;
    activeStep?: number;
}

export interface StepperStaticProps {
    Step: React.SFC<StepProps>;
}
