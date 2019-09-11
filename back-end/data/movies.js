const movies = [
    { 
        title: "The Butterfly Effect", 
        year: 2004,
        rating: 5,
        actors:[
            {
                name: 'Ashton Kutcher',
                birthday: new Date('1978-2-7'),
                country: 'USA',
                directors:[
                    {
                        name: 'Eric Bress',
                        birthday: new Date('1986-3-15'),
                        country: 'USA'
                    },
                    {
                        name: 'J. Mackye Gruber',
                        birthday: new Date('1979-8-26'),
                        country: 'USA'
                    }
                ]
            },
            {
                name: 'Melora Walters',
                birthday: new Date('1959-2-21'),
                country: 'USA',
                directors:[
                    {
                        name: 'Eric Bress',
                        birthday: new Date('1986-3-15'),
                        country: 'USA'
                    },
                    {
                        name: 'J. Mackye Gruber',
                        birthday: new Date('1979-8-26'),
                        country: 'USA'
                    }
                ]
            },
        ]
    },
  ];
  
  export default movies;