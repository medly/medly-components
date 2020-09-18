import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning257LineIconSvg from '../../assets/GSDD/Warning_257_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning257LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning257LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning257LineIcon.Style = SvgIcon;
Warning257LineIcon.displayName = 'Warning257LineIcon';

export default Warning257LineIcon
