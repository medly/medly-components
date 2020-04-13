import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ImportExportIconSvg from '../../assets/Communication/import_export_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ImportExportIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ImportExportIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ImportExportIcon.Style = SvgIcon;
ImportExportIcon.displayName = 'ImportExportIcon';

export default ImportExportIcon
