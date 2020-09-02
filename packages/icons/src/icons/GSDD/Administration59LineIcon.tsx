import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration59LineIconSvg from '../../assets/GSDD/Administration_59_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration59LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration59LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration59LineIcon.Style = SvgIcon;
Administration59LineIcon.displayName = 'Administration59LineIcon';

export default Administration59LineIcon
