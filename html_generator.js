import inquirer from 'inquirer';

inquirer.prompt (
    [
        {
            type: 'head',
            content: [{type: 'title', content: 'Generated HTML'}]
        },
        {
            type: 'body',
            attributes: {style: 'padding: 1rem'},
            content: [
                {
                    type: 'div',
                    content: [
                        {
                            type: 'span',
                            content: 'A Button Span Delux',
                            attributes: {className: 'button'},
                        },
                        {
                            type: 'a',
                            content: 'Click here',
                            attributes: {href: '/path-to-infinity', target: '_blank'},
                        },
                    ],
                },
            ],
        },
    ]
);

HTMLAllCollection.renderHTML();