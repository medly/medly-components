import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DataUsageIconSvg from '../../assets/Device/data_usage_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DataUsageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DataUsageIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DataUsageIcon.Style = SvgIcon;
DataUsageIcon.displayName = 'DataUsageIcon';

export default DataUsageIcon
