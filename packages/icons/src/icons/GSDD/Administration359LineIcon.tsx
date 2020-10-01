import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Administration359LineIconSvg from '../../assets/GSDD/Administration_359_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Administration359LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Administration359LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Administration359LineIcon.Style = SvgIcon;
Administration359LineIcon.displayName = 'Administration359LineIcon';

export default Administration359LineIcon
