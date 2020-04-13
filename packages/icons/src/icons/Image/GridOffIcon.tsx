import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GridOffIconSvg from '../../assets/Image/grid_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GridOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GridOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GridOffIcon.Style = SvgIcon;
GridOffIcon.displayName = 'GridOffIcon';

export default GridOffIcon
