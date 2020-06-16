import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ListIconSvg from '../../assets/Action/list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ListIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ListIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ListIcon.Style = SvgIcon;
ListIcon.displayName = 'ListIcon';

export default ListIcon
