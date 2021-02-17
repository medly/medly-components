import { ArrowBackIcon, ArrowForwardIcon } from '@medly-components/icons';
import { HTMLProps } from '@medly-components/utils';
import React, { FC } from 'react';
import { SliderController as StyledSliderController } from './SliderController.styled';
import { Props } from './types';

export const SliderController: FC<HTMLProps<HTMLDivElement> & Props> = React.memo(
    React.forwardRef((props, ref) => (
        <StyledSliderController ref={ref} {...props}>
            <ArrowBackIcon />
            <ArrowForwardIcon />
        </StyledSliderController>
    ))
);
