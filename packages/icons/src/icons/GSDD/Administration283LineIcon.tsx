import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration283LineIconSvg from '../../assets/GSDD/Administration_283_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration283LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration283LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration283LineIcon.Style = SvgIcon;
Administration283LineIcon.displayName = 'Administration283LineIcon';

export default Administration283LineIcon
