import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GridOffIconSvg from '../../assets/Image/grid_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GridOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GridOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GridOffIcon.Style = SvgIcon;
GridOffIcon.displayName = 'GridOffIcon';

export default GridOffIcon
