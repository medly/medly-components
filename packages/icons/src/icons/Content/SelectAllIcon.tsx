import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SelectAllIconSvg from '../../assets/Content/select_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SelectAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SelectAllIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SelectAllIcon.Style = SvgIcon;
SelectAllIcon.displayName = 'SelectAllIcon';

export default SelectAllIcon
