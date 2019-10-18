import { ClearIcon } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Text from '../Text';
import * as Styled from './Chip.styled';
import { Props } from './types';

export const Chip: SFC<Props> & WithStyle = React.memo(props => {
    const { label, onDelete, ...restProps } = props;

    const handleDelete = (e: React.MouseEvent<HTMLOrSVGElement>) => {
        e.stopPropagation();
        !restProps.disabled && onDelete && onDelete();
    };

    return (
        <Styled.Chip {...restProps}>
            <Text>{props.label}</Text>
            {onDelete && <ClearIcon size="XS" onClick={handleDelete} />}
        </Styled.Chip>
    );
});

Chip.defaultProps = {
    variant: 'solid'
};

Chip.displayName = 'Chip';
Chip.Style = Styled.Chip;
