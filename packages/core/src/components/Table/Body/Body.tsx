import React, { useContext } from 'react';
import Text from '../../Text';
import { TablePropsContext } from '../TableProps.context';
import { TBody } from './Body.styled';
import Row from './Row';
import { NoResult } from './Row/Row.styled';
import { Props } from './types';

const Body: React.FC<Props> = React.memo(props => {
    const { data, rowIdentifier } = useContext(TablePropsContext);

    return data.length === 0 ? (
        <NoResult>
            <Text>No result</Text>
        </NoResult>
    ) : (
        <TBody>
            {data.map((row, index) => (
                <Row id={row[rowIdentifier] || index} key={row[rowIdentifier] || index} data={row} {...props} />
            ))}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
