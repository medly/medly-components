import React, { useContext } from 'react';
import Text from '../../Text';
import { TablePropsContext } from '../TableProps.context';
import { TBody } from './Body.styled';
import Row from './Row';
import { NoResult } from './Row/Row.styled';
import TitleRow from './TitleRow';
import { Props } from './types';

const Body: React.FC<Props> = React.memo(props => {
    const { data, groupBy, rowIdentifier } = useContext(TablePropsContext);

    return (
        <TBody>
            {data.length === 0 && (
                <NoResult>
                    <Text>No result</Text>
                </NoResult>
            )}
            {data.map((row, index) =>
                groupBy ? (
                    <TitleRow id={row[rowIdentifier] || index} key={row[rowIdentifier] || index} data={row} {...props} />
                ) : (
                    <Row id={row[rowIdentifier] || index} key={row[rowIdentifier] || index} data={row} {...props} />
                )
            )}
        </TBody>
    );
});
Body.displayName = 'Body';
export default Body;
