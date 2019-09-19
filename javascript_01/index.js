var user = [
    {
        name: 'Federico',
        lastname: 'Soria',
        email: 'lfede.soria@gamil.com',
        birthday: new Date().toLocaleDateString(),
        age: '30',

    },
    {
        name: 'Joaquin',
        lastname: 'Soria',
        email: 'joaquin.soria@gmail.com',
        birthday: '24/12/96',
        age: '23',
    },
    {
        name: 'Luis',
        lastname: 'Vasquez',
        email: 'lucho-vasquez@gmail.com',
        birthday: '12/01/90',
        age: '29',
    },
];

var user_01 = [
    {
        name: 'Maria del Rosario',
        lastname: 'Zelaya Berral',
        email: 'maria_zb@gmail.com', 
        birthday: '23/04/92',
        age: '27',
        hobbies: ['estudiar','hacer ejercicio'],
        family:
        [
            {
                rol: 'mather',
                name: 'Claudia',
            },
            {
                rol: 'father',
                name: 'Carlos',
            },
            {
                rol: 'brothers',
                name: 'Daniel',
            },
            {
                rol: 'sisters',
                name: ['Natalia','Sofia'],
            }
        ],
    },

    {
        name: 'Federico',
        lastname: 'Soria',
        email: 'lfede.soria@gmail.com',
        birthday: '02/02/89',
        age: '30',
        hobbies: ['treking', 'padel'],
        family:
        [
            {
                rol: 'father',
                name: 'Luis',
            },
            {
                rol: 'mather',
                name: 'Susana',
            },
            {
                rol: 'brother',
                name: 'Joquin',
            },
        ],

    },

    {
        name: 'Susana',
        lastname: 'rodriguez',
        email: 'susi_rodriguez@gmail.com',
        birthday: '03/07/59',
        age: '60',
        hobbies: 'listen to music',
        family: 
        [
            {
                rol: 'husband',
                name:'Luis',
            },
            {
                rol:'sons',
                name: ['federico','joaquin']
            },
        ]
    }

];

for (var i = 0; i < user_01.length; i++) {
    console.log('Familiares de', user_01[i].name);
    for (var j = 0; j <user_01[i].family.length; j++){
        console.log(user_01[i].family[j].name,'is the',user_01[i].family[j].rol);

        
    }
}

