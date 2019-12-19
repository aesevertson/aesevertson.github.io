const jsonObject = {
    "temples" : [
    { "name":"Gilbert, Arizona",
      "listId": "gilbertclosures",
      "weatherId": "5295903",
      "weatherDivId": "gilbertweather",
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
      "listId": "manhattanclosures",
      "weatherId": "5125771",
      "weatherDivId": "manhattanweather",
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
      "listId": "bostonclosures",
      "weatherId": "4930956",
      "weatherDivId": "bostonweather",
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
    "listId": "laieclosures",
    "weatherId": "5850027",
    "weatherDivId": "laieweather",
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

    console.table(jsonObject);
    const temples = jsonObject['temples'];

    let gilbertArizona = temples.find(temple => temple.name === "Gilbert, Arizona");
    let manhattanNewYork = temples.find(temple => temple.name === "Manhattan, New York");
    let bostonMasschusetts = temples.find(temple => temple.name === "Boston, Massachusetts");
    let laieHawaii = temples.find(temple => temple.name === "Laie, Hawaii");

    for (let temple of [gilbertArizona, manhattanNewYork, bostonMasschusetts, laieHawaii]) {      

        let list = document.getElementById(temple.listId);
        for (let closure of temple.closures){
            let closureDate = document.createElement('li');
            closureDate.textContent = closure;
            list.appendChild(closureDate);
        }

        fetch("https://api.openweathermap.org/data/2.5/weather?id=" + temple.weatherId + "&units=imperial&APPID=ac4a7c570cce008087083e285058e1e6")
            .then((response) => response.json())
            .then((jsObject) => {
                console.log(jsObject);
                let weatherDiv = document.getElementById(temple.weatherDivId);
                let currentCondition = document.createElement("p");
                let currentTemp = document.createElement("p");
                currentCondition.textContent = jsObject.weather[0].description;
                currentTemp.textContent = jsObject.main.temp.toFixed(0) + " °F";
                weatherDiv.appendChild(currentCondition);
                weatherDiv.appendChild(currentTemp);
            });
    }
