import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TableChartIconSvg from '../../assets/Editor/table_chart_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TableChartIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TableChartIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TableChartIcon.Style = SvgIcon;
TableChartIcon.displayName = 'TableChartIcon';

export default TableChartIcon
