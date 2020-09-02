import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Generic87LineIconSvg from '../../assets/GSDD/Generic_87_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Generic87LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Generic87LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Generic87LineIcon.Style = SvgIcon;
Generic87LineIcon.displayName = 'Generic87LineIcon';

export default Generic87LineIcon
