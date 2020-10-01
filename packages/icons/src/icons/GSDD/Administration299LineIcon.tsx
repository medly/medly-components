import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration299LineIconSvg from '../../assets/GSDD/Administration_299_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration299LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration299LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration299LineIcon.Style = SvgIcon;
Administration299LineIcon.displayName = 'Administration299LineIcon';

export default Administration299LineIcon
