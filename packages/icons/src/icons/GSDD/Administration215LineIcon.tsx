import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration215LineIconSvg from '../../assets/GSDD/Administration_215_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration215LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration215LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration215LineIcon.Style = SvgIcon;
Administration215LineIcon.displayName = 'Administration215LineIcon';

export default Administration215LineIcon
