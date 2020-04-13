import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import IsoIconSvg from '../../assets/Image/iso_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const IsoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <IsoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

IsoIcon.Style = SvgIcon;
IsoIcon.displayName = 'IsoIcon';

export default IsoIcon
