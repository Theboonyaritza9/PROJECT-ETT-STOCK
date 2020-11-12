
export const equipmentApi = [
    {
        name: 'R100K',
        images: [
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        type: 'SMD',
        category: '1mps',
        size: '1564555',
        total: '25'

    },
    {
        name: 'R1M',
        images: [
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        type: 'Resister',
        category: '1mps',
        size: '1564554',
        total: '25'

    },
    {
        name: 'IC8001-1',
        images: [
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        type: 'IC',
        category: '1mps',
        size: '1564556',
        total: '25'

    },
    {
        name: 'IC8001-2',
        images: [
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ],
        type: 'IC',
        category: '1mps',
        size: '1564557',
        total: '25'

    }
];


export const notificationApi = [
    {
        id: 'u1',
        user: "Hachiman",
        status: "Staff",
        description: "Add new project into database",
        time: "34 minutes",
        profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmlAGm_RRev6Cl83qW-_6VHZpEdXVOBww8Rg&usqp=CAU",
        exp: 1
    },
    {
        id: 'u2',
        user: "Yukino",
        status: "Admin",
        description: "Edit board ET-RS's description",
        time: "34 minutes",
        profile: "https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png",
        exp: 1
    },
    {
        id: 'u21',
        user: "Yukino",
        status: "Admin",
        description: "Edit board ET-RS's description",
        time: "34 minutes",
        profile: "https://f.ptcdn.info/083/046/000/odr6r77nnA5k1CdKCJm-o.png",
        exp: 1
    },
    {
        id: 'u3',
        user: "Yuigahama",
        status: "User",
        description: "requested board ET-RS",
        time: "Mon at 13:15",
        profile: "https://i.pinimg.com/originals/75/a1/72/75a1727c7940f6325fd7b922c913ed2b.jpg",
        exp: 0
    },
    {
        id: 'u4',
        user: "Yuigahama",
        status: "User",
        description: "requested board ET-RS",
        time: "Mon at 13:15",
        profile: "https://i.pinimg.com/originals/75/a1/72/75a1727c7940f6325fd7b922c913ed2b.jpg",
        exp: 0
    },
]


export const filterNotification = (items) => {
    let newData1 = [];
    let oldData1 = [];
    if (items.length > 0) {

        let countNewdata = 0;
        let countOlddata = 0;
        for (var i = 0; i < items.length; i++) {
            if (items[i].exp === 1) {
                newData1[countNewdata] = items[i]
                countNewdata += 1

            } else {
                oldData1[countOlddata] = items[i]
                countOlddata += 1
            }
        }
    }
    return { newData: newData1, oldData: oldData1 }
}



