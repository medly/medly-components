import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GridOnIconSvg from '../../assets/Image/grid_on_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GridOnIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GridOnIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GridOnIcon.Style = SvgIcon;
GridOnIcon.displayName = 'GridOnIcon';

export default GridOnIcon
