import { StepperSizes } from '@medly-components/theme';
import { WithThemeProp } from '@medly-components/utils';

export interface StepCounterProps extends WithThemeProp {
    size?: keyof StepperSizes;
    active?: boolean;
}

export interface StepProps extends StepCounterProps {
    step?: number;
    active?: boolean;
}

export interface Props {
    size?: keyof StepperSizes;
    activeStep?: number;
}

export interface StepperStaticProps {
    Step: React.SFC<StepProps>;
}
