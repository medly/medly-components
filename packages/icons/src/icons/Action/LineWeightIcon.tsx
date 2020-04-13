import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LineWeightIconSvg from '../../assets/Action/line_weight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LineWeightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LineWeightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LineWeightIcon.Style = SvgIcon;
LineWeightIcon.displayName = 'LineWeightIcon';

export default LineWeightIcon
