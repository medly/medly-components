import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TrainIconSvg from '../../assets/Maps/train_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TrainIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TrainIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TrainIcon.Style = SvgIcon;
TrainIcon.displayName = 'TrainIcon';

export default TrainIcon
