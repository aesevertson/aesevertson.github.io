const jsonObject = {
    "temples" : [
    { "name":"Gilbert, Arizona",
      "photo": "gilbertarizonatemple.jpg",
      "address":"3301 S Greenfield Rd\nGilbert,AZ 85297\nUnited States",
      "telephone": "(1) 480-822-5000",
      "services":[
          "Clothing rental available",
          "No cafeteria available",
          "No patron housing available",
          "Distribution center nearby"
      ],
      "closures":[
          "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
          "Tuesday, 31 December 2019",
          "Wednesday, 1 January 2020",
          "Monday, 16 March 2020 - Monday, 30 March 2020",
          "Saturday, 4 April 2020",
          "Saturday, 4 July 2020",
          "Saturday, 3 October 2020",
          "Monday, 5 October 2020 - Monday, 26 October 2020",
          "Wednesday, 25 November 2020 - Thursday, 26 November 2020",
          "Thursday, 24 December 2020 - Friday, 25 December 2020",
          "Thursday, 31 December 2020"
      ]
    },
    { "name": "Manhattan, New York",
      "photo":"manhattannewyorktemple.jpg",
      "address": "125 Columbus Ave, Fourth Floor\nNew York, NY 10023-6514\nUnited States",
      "telephone": "(1) 917-441-8220",
      "services":[
          "Clothing rental available",
          "No cafeteria available",
          "No patron housing available",
          "Distribution center nearby"
      ],
      "closures":[
        "Tuesday, 24 December 2019",
        "Wednesday, 25 December 2019",
        "Tuesday, 31 December 2019",
        "Wednesday, 1 January 2020",
        "Monday, 3 February 2020 - Monday, 17 February 2020",
        "Saturday, 4 April 2020",
        "Saturday, 4 July 2020",
        "Monday, 27 July 2020 - Monday, 10 August 2020",
        "Saturday, 3 October 2020",
        "Wednesday, 25 November 2020",
        "Thursday, 26 November 2020",
        "Thursday, 24 December 2020",
        "Friday, 25 December 2020",
        "Thursday, 31 December 2020"
      ]

    },
    { "name": "Boston, Massachusetts",
      "photo": "bostontemple.jpg",
      "address": "100 Hinckley Wy\nBelmont, MA 02478-2135\nUnited States" ,
      "telephone": "(1) 617-993-9993",
      "email":"",
      "services":[
          "Clothing rental available",
          "No cafeteria available",
          "No patron housing available",
          "Distribution center nearby"
      ],
      "closures":[
          "Tuesday, 24 December 2019",
          "Wednesday, 25 December 2019",
          "Tuesday, 31 December 2019",
          "Wednesday, 1 January 2020",
          "Monday, 6 January 2020 - Monday, 20 January 2020",
          "Saturday, 4 April 2020",
          "Saturday, 4 July 2020",
          "Monday, 6 July 2020 - Monday, 20 July 2020",
          "Saturday, 3 October 2020",
          "Wednesday, 25 November 2020",
          "Thursday, 26 November 2020",
          "Thursday, 24 December 2020",
          "Friday, 25 December 2020",
          "Thursday, 31 December 2020",
          "Friday, 1 January 2021"
      ]
    },
  { "name": "Laie, Hawaii",
    "photo": "laiehawaiitemple.jpg",
    "address":"55-600 Naniloa Loop\nLaie, HI 96762-2202\nUnited States",
    "telephone":"(1) 808-293-2427",
    "services":[
          "Clothing rental available",
          "No cafeteria available",
          "No patron housing available",
          "Distribution center nearby"
    ],
    "closures":[
          "Tuesday, 24 December 2019 - Wednesday, 25 December 2019",
          "Friday, 27 December 2019 (Limited Hours)2019",
          "Saturday, 28 December 2019 (Limited Hours)2019",
          "Monday, 30 December 2019 - Monday, 13 January 2020",
          "Friday, 3 April 2020 (Limited Hours)",
          "Saturday, 4 April 2020",
          "Friday, 26 June 2020 (Limited Hours)",
          "Saturday, 27 June 2020 (Limited Hours)",
          "Monday, 29 June 2020 - Monday, 13 July 2020",
          "Friday, 2 October 2020 (Limited Hours)",
          "Saturday, 3 October 2020",
          "Wednesday, 25 November 2020 (Limited Hours)",
          "Thursday, 26 November 2020",
          "Thursday, 24 December 2020 - Friday, 25 December 2020",
          "Thursday, 31 December 2020 (Limited Hours)",
          "Friday, 1 January 2021",
          "Saturday, 2 January 2021 (Limited Hours)",
          "Monday, 4 January 2021 - Monday, 18 January 2021"
          ]
  }
    ]
}

// fetch(requestJSON)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];

    let gilbertArizona = temples.find(temple => temple.name === "Gilbert, Arizona");
    let manhattanNewYork = temples.find(temple => temple.name === "Manhattan, New York");
    let bostonMasschusetts = temples.find(temple => temple.name === "Boston, Massachusetts");
    let laieHawaii = temples.find(temple => temple.name === "Laie, Hawaii");
    //for (let i = 0; i < towns.length; i++ ) {
        //console.log(towns);
    for (let temple of [gilbertArizona, manhattanNewYork, bostonMasschusetts, laieHawaii]) {      
        let card = document.createElement('section');
        let title = document.createElement('h3');
        let location = document.createElement('p');
        let phone = document.createElement('p');
        let servicelabel = document.createElement('h4');
        let services = document.createElement('ul');
        let closinglabel = document.createElement('h4');
        let closing = document.createElement('ul');
        let subdiv = document.createElement('div');
        let image = document.createElement('img');

        title.textContent = temple.name;
        location.textContent = temple.address;
        phone.textContent = temple.telephone;
        servicelabel.textContent = "Services:"
        for (let service of temple.services) {
            let serviceItem = document.createElement('li');
            serviceItem.textContent = service;
            services.appendChild(serviceItem);
        }
        closinglabel.textContent = "Closures:"
        for (let closure of temple.closures){
            let closureDate = document.createElement('li');
            closureDate.textContent = closure;
            closing.appendChild(closureDate);
        }
        image.setAttribute('src', "./images/" + temple.photo);
        image.setAttribute('alt', temple.photo);

        subdiv.appendChild(title);
        subdiv.appendChild(location); 
        subdiv.appendChild(phone);
        subdiv.appendChild(servicelabel);
        subdiv.appendChild(services);
        subdiv.appendChild(closinglabel);
        subdiv.appendChild(closing);
        card.appendChild(subdiv);
        card.appendChild(image);
        document.querySelector('div.templestats').appendChild(card);
        
    }
//   });