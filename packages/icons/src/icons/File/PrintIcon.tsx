import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PrintIconSvg from '../../assets/File/print_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PrintIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PrintIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PrintIcon.Style = SvgIcon;
PrintIcon.displayName = 'PrintIcon';

export default PrintIcon
