import { TableColumnConfig } from '../types';

const columns: TableColumnConfig[] = [
    { title: 'Name', field: 'name', fraction: 2, sortable: true, fitContent: true },
    {
        title: 'Marks',
        field: 'marks',
        children: [
            {
                title: 'Maths',
                field: 'maths',
                align: 'right',
                sortable: true
            },
            { title: 'Science', field: 'science', align: 'right', sortable: true }
        ]
    },
    { title: 'Age', field: 'age', align: 'right', sortable: true },
    { title: 'Passed', field: 'isPassed', formatter: (data: boolean) => (data ? 'Yes' : 'No'), sortable: true },
    { title: 'Rating', field: 'rating', align: 'right', sortable: true }
];

export default columns;
