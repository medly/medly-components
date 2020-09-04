import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration204LineIconSvg from '../../assets/GSDD/Administration_204_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration204LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration204LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration204LineIcon.Style = SvgIcon;
Administration204LineIcon.displayName = 'Administration204LineIcon';

export default Administration204LineIcon
