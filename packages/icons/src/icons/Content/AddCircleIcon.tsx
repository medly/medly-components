import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddCircleIconSvg from '../../assets/Content/add_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCircleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddCircleIcon.Style = SvgIcon;
AddCircleIcon.displayName = 'AddCircleIcon';

export default AddCircleIcon
