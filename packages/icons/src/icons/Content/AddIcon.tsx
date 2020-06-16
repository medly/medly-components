import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddIconSvg from '../../assets/Content/add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddIcon.Style = SvgIcon;
AddIcon.displayName = 'AddIcon';

export default AddIcon
