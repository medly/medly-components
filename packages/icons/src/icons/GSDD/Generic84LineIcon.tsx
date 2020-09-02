import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Generic84LineIconSvg from '../../assets/GSDD/Generic_84_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Generic84LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Generic84LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Generic84LineIcon.Style = SvgIcon;
Generic84LineIcon.displayName = 'Generic84LineIcon';

export default Generic84LineIcon
