import { isValidStringOrNumber } from '@medly-components/utils';
import Text from '../Text';
import { BreadcrumbProps } from './types';

const addSeparator = (links: any[], separator: BreadcrumbProps['separator']) =>
    links.reduce(
        (acc: any, cur, index) => [
            ...acc,
            cur,
            ...(index !== links.length - 1
                ? [
                      isValidStringOrNumber(separator) ? (
                          <Text key={index} aria-hidden="true">
                              {separator}
                          </Text>
                      ) : (
                          separator
                      )
                  ]
                : [])
        ],
        []
    );

export default addSeparator;
