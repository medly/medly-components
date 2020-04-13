import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EditAttributesIconSvg from '../../assets/Maps/edit_attributes_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EditAttributesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EditAttributesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EditAttributesIcon.Style = SvgIcon;
EditAttributesIcon.displayName = 'EditAttributesIcon';

export default EditAttributesIcon
