import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChildCareIconSvg from '../../assets/Places/child_care_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChildCareIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChildCareIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChildCareIcon.Style = SvgIcon;
ChildCareIcon.displayName = 'ChildCareIcon';

export default ChildCareIcon
