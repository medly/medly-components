import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Generic216LineIconSvg from '../../assets/GSDD/Generic_216_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Generic216LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Generic216LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Generic216LineIcon.Style = SvgIcon;
Generic216LineIcon.displayName = 'Generic216LineIcon';

export default Generic216LineIcon
