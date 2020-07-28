const groupedData = {
    name: [
        {
            name: 'Oli Bob',
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            name: 'Mary May',
            count: 1,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            name: 'Christine Lobowski',
            count: 1,
            children: [
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            name: 'Brendon Philips',
            count: 1,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                }
            ]
        },
        {
            name: 'Margret Marmajuke',
            count: 1,
            children: [
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                }
            ]
        },
        {
            name: 'Van Ng',
            count: 1,
            children: [
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                }
            ]
        },
        {
            name: 'Duc Ng',
            count: 1,
            children: [
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        }
    ],
    age: [
        {
            age: '12',
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            age: '1',
            count: 1,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            age: '42',
            count: 1,
            children: [
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            age: '125',
            count: 1,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                }
            ]
        },
        {
            age: '16',
            count: 1,
            children: [
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                }
            ]
        },
        {
            age: '37',
            count: 2,
            children: [
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                },
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        }
    ],
    color: [
        {
            color: 'red,green',
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            color: 'green',
            count: 3,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                }
            ]
        },
        {
            color: 'red',
            count: 1,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                }
            ]
        },
        {
            color: 'yellow',
            count: 2,
            children: [
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                },
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        }
    ],
    rating: [
        {
            rating: 5,
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            rating: 4,
            count: 5,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                },
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                },
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        },
        {
            rating: 4.5,
            count: 1,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                }
            ]
        }
    ],
    isPassed: [
        {
            isPassed: true,
            count: 5,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                },
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                },
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                }
            ]
        },
        {
            isPassed: false,
            count: 2,
            children: [
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                },
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        }
    ],
    disabled: [
        {
            disabled: true,
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
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
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            'marks.maths': 4,
            count: 2,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            'marks.maths': 10,
            count: 2,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                },
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        },
        {
            'marks.maths': 7,
            count: 1,
            children: [
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                }
            ]
        },
        {
            'marks.maths': 9,
            count: 1,
            children: [
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                }
            ]
        }
    ],
    'marks.science': [
        {
            'marks.science': 4,
            count: 1,
            children: [
                {
                    id: 1,
                    name: 'Oli Bob',
                    age: '12',
                    color: 'red,green',
                    rating: 5,
                    isPassed: true,
                    disabled: true,
                    marks: {
                        maths: 6,
                        science: 4
                    }
                }
            ]
        },
        {
            'marks.science': 7,
            count: 2,
            children: [
                {
                    id: 2,
                    name: 'Mary May',
                    age: '1',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                },
                {
                    id: 3,
                    name: 'Christine Lobowski',
                    age: '42',
                    color: 'green',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 4,
                        science: 7
                    }
                }
            ]
        },
        {
            'marks.science': 2,
            count: 2,
            children: [
                {
                    id: 4,
                    name: 'Brendon Philips',
                    age: '125',
                    color: 'red',
                    isPassed: true,
                    rating: 4.5,
                    marks: {
                        maths: 10,
                        science: 2
                    }
                },
                {
                    id: 6,
                    name: 'Van Ng',
                    age: '37',
                    color: 'green',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 9,
                        science: 2
                    }
                }
            ]
        },
        {
            'marks.science': 5,
            count: 1,
            children: [
                {
                    id: 5,
                    name: 'Margret Marmajuke',
                    age: '16',
                    color: 'yellow',
                    isPassed: true,
                    rating: 4,
                    marks: {
                        maths: 7,
                        science: 5
                    }
                }
            ]
        },
        {
            'marks.science': 3,
            count: 1,
            children: [
                {
                    id: 7,
                    name: 'Duc Ng',
                    age: '37',
                    color: 'yellow',
                    isPassed: false,
                    rating: 4,
                    marks: {
                        maths: 10,
                        science: 3
                    }
                }
            ]
        }
    ]
};

export default groupedData;
