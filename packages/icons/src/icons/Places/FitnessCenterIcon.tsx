import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FitnessCenterIconSvg from '../../assets/Places/fitness_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FitnessCenterIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FitnessCenterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FitnessCenterIcon.Style = SvgIcon;
FitnessCenterIcon.displayName = 'FitnessCenterIcon';

export default FitnessCenterIcon
