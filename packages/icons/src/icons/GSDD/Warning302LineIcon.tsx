import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning302LineIconSvg from '../../assets/GSDD/Warning_302_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning302LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning302LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning302LineIcon.Style = SvgIcon;
Warning302LineIcon.displayName = 'Warning302LineIcon';

export default Warning302LineIcon
