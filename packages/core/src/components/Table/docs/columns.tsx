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
                sortable: true,
                children: [
                    { title: 'Algebra', field: 'algebra', align: 'right', sortable: true },
                    { title: 'Trigonometry', field: 'trigonometry', align: 'right', sortable: true }
                ]
            },
            { title: 'Science', field: 'science', align: 'right', sortable: true }
        ]
    },
    { title: 'Age', field: 'age', align: 'right', sortable: true },
    { title: 'Passed', field: 'isPassed', formatter: 'boolean', sortable: true },
    { title: 'Rating', field: 'rating', align: 'right', sortable: true }
];

export default columns;
