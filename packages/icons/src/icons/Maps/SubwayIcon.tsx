import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SubwayIconSvg from '../../assets/Maps/subway_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SubwayIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SubwayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SubwayIcon.Style = SvgIcon;
SubwayIcon.displayName = 'SubwayIcon';

export default SubwayIcon
