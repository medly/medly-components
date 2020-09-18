import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration171LineIconSvg from '../../assets/GSDD/Administration_171_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration171LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration171LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration171LineIcon.Style = SvgIcon;
Administration171LineIcon.displayName = 'Administration171LineIcon';

export default Administration171LineIcon
