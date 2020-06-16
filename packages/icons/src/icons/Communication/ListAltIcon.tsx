import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ListAltIconSvg from '../../assets/Communication/list_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ListAltIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ListAltIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ListAltIcon.Style = SvgIcon;
ListAltIcon.displayName = 'ListAltIcon';

export default ListAltIcon
