import data from './data';

export const groupedData = {
    name: [
        {
            name: 'Oli Bob',
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            name: 'Mary May',
            count: 1,
            children: [
                data[1]
            ]
        },
        {
            name: 'Christine Lobowski',
            count: 1,
            children: [
                data[2]
            ]
        },
        {
            name: 'Brendon Philips',
            count: 1,
            children: [
                data[3]
            ]
        },
        {
            name: 'Margret Marmajuke',
            count: 1,
            children: [
                data[4]
            ]
        },
        {
            name: 'Van Ng',
            count: 1,
            children: [
                data[5]
            ]
        },
        {
            name: 'Duc Ng',
            count: 1,
            children: [
                data[6]
            ]
        }
    ],
    age: [
        {
            age: '12',
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            age: '1',
            count: 1,
            children: [
                data[1]
            ]
        },
        {
            age: '42',
            count: 1,
            children: [
                data[2]
            ]
        },
        {
            age: '125',
            count: 1,
            children: [
                data[3]
            ]
        },
        {
            age: '16',
            count: 1,
            children: [
                data[4]
            ]
        },
        {
            age: '37',
            count: 2,
            children: [
                data[5],
                data[6]
            ]
        }
    ],
    color: [
        {
            color: 'red,green',
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            color: 'green',
            count: 3,
            children: [
                data[1],
                data[2],
                data[5]
            ]
        },
        {
            color: 'red',
            count: 1,
            children: [
                data[3]
            ]
        },
        {
            color: 'yellow',
            count: 2,
            children: [
                data[4],
                data[6]
            ]
        }
    ],
    rating: [
        {
            rating: 5,
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            rating: 4,
            count: 5,
            children: [
                data[1],
                data[2],
                data[4],
                data[5],
                data[6]
            ]
        },
        {
            rating: 4.5,
            count: 1,
            children: [
                data[3]
            ]
        }
    ],
    isPassed: [
        {
            isPassed: true,
            count: 5,
            children: [
                data[0],
                data[1],
                data[2],
                data[3],
                data[4]
            ]
        },
        {
            isPassed: false,
            count: 2,
            children: [
                data[5],
                data[6]
            ]
        }
    ],
    disabled: [
        {
            disabled: true,
            count: 1,
            children: [
                data[0]
            ]
        }
    ],
    marks: {
        maths: 6,
        science: 4
    },
    'marks.maths': [
        {
            'marks.maths': 6,
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            'marks.maths': 4,
            count: 2,
            children: [
                data[1],
                data[2]
            ]
        },
        {
            'marks.maths': 10,
            count: 2,
            children: [
                data[3],
                data[6]
            ]
        },
        {
            'marks.maths': 7,
            count: 1,
            children: [
                data[4]
            ]
        },
        {
            'marks.maths': 9,
            count: 1,
            children: [
                data[5]
            ]
        }
    ],
    'marks.science': [
        {
            'marks.science': 4,
            count: 1,
            children: [
                data[0]
            ]
        },
        {
            'marks.science': 7,
            count: 2,
            children: [
                data[1],
                data[2]
            ]
        },
        {
            'marks.science': 2,
            count: 2,
            children: [
                data[3],
                data[5]
            ]
        },
        {
            'marks.science': 5,
            count: 1,
            children: [
                data[4]
            ]
        },
        {
            'marks.science': 3,
            count: 1,
            children: [
                data[6]
            ]
        }
    ]
};

export const getGroupedData = (groupBy: string) => async (value: string) => {
    // @ts-ignore
    return Promise.resolve(groupedData[groupBy].find(obj => obj[groupBy] === value).children);
};
