import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning379LineIconSvg from '../../assets/GSDD/Warning_379_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning379LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning379LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning379LineIcon.Style = SvgIcon;
Warning379LineIcon.displayName = 'Warning379LineIcon';

export default Warning379LineIcon
