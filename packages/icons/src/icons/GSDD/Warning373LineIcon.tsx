import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning373LineIconSvg from '../../assets/GSDD/Warning_373_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning373LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning373LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning373LineIcon.Style = SvgIcon;
Warning373LineIcon.displayName = 'Warning373LineIcon';

export default Warning373LineIcon
