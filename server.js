const express = require('express');
const { ROUTE_CONSTANTS } = require('./route_constants');
const bodyParser = require('body-parser');
const app = express();
//route, callback function.

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.post(ROUTE_CONSTANTS.POST_REGISTER,(req,res)=>{
    console.log(req.body);
    res.send("<p>Sucessfully Regsitered</p>")
});

app.post(ROUTE_CONSTANTS.POST_LOGIN,(req,res)=>{
    console.log(req.body);
    res.send("<p>Sucessfully Logged In</p>")
});

app.get(ROUTE_CONSTANTS.DEFAULT,(req,res)=>{
    res.send("<h1>Welcome to Pega</h1>");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});

app.get(ROUTE_CONSTANTS.GET_REGISTER,(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});

app.get(ROUTE_CONSTANTS.GET_PRODUCTS,(req,res)=>{
    const productsData = [
        {
          "_id": "5f5861cbb05a2861176f207a",
          "index": 0,
          "guid": "0f71160f-cf26-4bfe-9016-407507501c3e",
          "isActive": true,
          "balance": "$3,075.29",
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "eyeColor": "blue",
          "name": "Elnora Mayo",
          "gender": "female",
          "company": "ASSURITY",
          "email": "elnoramayo@assurity.com",
          "phone": "+1 (846) 519-2264",
          "address": "840 Scholes Street, Iola, Florida, 1841",
          "about": "Lorem adipisicing sunt dolor laborum ullamco pariatur irure aute dolor. Excepteur ea nisi quis ut occaecat veniam. Mollit pariatur laboris minim in minim.\r\n",
          "registered": "2019-09-08T12:42:03 -06:-30",
          "latitude": -20.218769,
          "longitude": -97.417339,
          "tags": [
            "ad",
            "adipisicing",
            "do",
            "minim",
            "deserunt",
            "mollit",
            "eiusmod"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Gill Medina"
            },
            {
              "id": 1,
              "name": "Burks Walters"
            },
            {
              "id": 2,
              "name": "Deann Schneider"
            }
          ],
          "greeting": "Hello, Elnora Mayo! You have 10 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5861cb323508802f8b8703",
          "index": 1,
          "guid": "5270eed6-7d17-41e4-b3c1-9c3a443f1990",
          "isActive": true,
          "balance": "$1,453.58",
          "picture": "http://placehold.it/32x32",
          "age": 27,
          "eyeColor": "blue",
          "name": "Fowler Vang",
          "gender": "male",
          "company": "ZAGGLE",
          "email": "fowlervang@zaggle.com",
          "phone": "+1 (858) 423-3417",
          "address": "994 Clifton Place, Tedrow, Washington, 6728",
          "about": "Laboris proident aute id pariatur Lorem. Culpa non cupidatat ut cillum labore tempor. Eiusmod eiusmod laborum velit cupidatat ea exercitation mollit velit tempor cillum. Esse commodo consequat ad id commodo ullamco sit laborum ad sint officia veniam fugiat. Et incididunt est velit labore irure laboris et pariatur mollit deserunt non excepteur.\r\n",
          "registered": "2020-07-26T02:51:01 -06:-30",
          "latitude": -25.507169,
          "longitude": 94.283655,
          "tags": [
            "ipsum",
            "esse",
            "laboris",
            "consectetur",
            "occaecat",
            "ipsum",
            "in"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Bishop Walls"
            },
            {
              "id": 1,
              "name": "Liza Burnett"
            },
            {
              "id": 2,
              "name": "Shelia Morse"
            }
          ],
          "greeting": "Hello, Fowler Vang! You have 1 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861cb04a1dd63bde65419",
          "index": 2,
          "guid": "6e322e27-a9f9-41e9-a861-5e1d2eefc3a2",
          "isActive": true,
          "balance": "$1,484.07",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "green",
          "name": "Elliott Leon",
          "gender": "male",
          "company": "ZEPITOPE",
          "email": "elliottleon@zepitope.com",
          "phone": "+1 (948) 570-2598",
          "address": "951 Decatur Street, Westerville, Marshall Islands, 4791",
          "about": "Ad proident sit nostrud enim consectetur consequat laboris aliqua. Incididunt commodo veniam exercitation cupidatat amet aliquip. Nulla do nulla et enim ullamco aliquip in irure anim elit. Tempor amet eu enim et ullamco laboris tempor. Est qui quis exercitation Lorem magna do dolore fugiat cillum ea sit.\r\n",
          "registered": "2015-04-22T02:10:28 -06:-30",
          "latitude": 72.185695,
          "longitude": -95.937685,
          "tags": [
            "exercitation",
            "exercitation",
            "reprehenderit",
            "commodo",
            "duis",
            "laborum",
            "veniam"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Cynthia Walter"
            },
            {
              "id": 1,
              "name": "Stone Wilcox"
            },
            {
              "id": 2,
              "name": "Mabel Bowman"
            }
          ],
          "greeting": "Hello, Elliott Leon! You have 5 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "5f5861cbb6cfbb943ec1efe5",
          "index": 3,
          "guid": "9e854d7f-c05e-4e4b-a86c-ec11d3778f7c",
          "isActive": false,
          "balance": "$2,463.39",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "blue",
          "name": "Mcguire Brewer",
          "gender": "male",
          "company": "IRACK",
          "email": "mcguirebrewer@irack.com",
          "phone": "+1 (887) 425-3101",
          "address": "822 Arkansas Drive, Torboy, Oregon, 6527",
          "about": "Occaecat pariatur velit incididunt ut cillum aliquip non duis ipsum aute sit incididunt enim sunt. Sint nulla amet aliquip labore tempor. Dolor quis ad et id ad sit Lorem laboris magna.\r\n",
          "registered": "2017-04-24T12:06:09 -06:-30",
          "latitude": -70.805045,
          "longitude": 127.166394,
          "tags": [
            "non",
            "ipsum",
            "velit",
            "ex",
            "tempor",
            "laborum",
            "occaecat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Hall Alston"
            },
            {
              "id": 1,
              "name": "Dennis Pugh"
            },
            {
              "id": 2,
              "name": "Lessie Wade"
            }
          ],
          "greeting": "Hello, Mcguire Brewer! You have 9 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5f5861cb3ee64173aba0a905",
          "index": 4,
          "guid": "16124a8d-fea3-4ea5-a060-4ace1b33ec92",
          "isActive": false,
          "balance": "$3,776.76",
          "picture": "http://placehold.it/32x32",
          "age": 39,
          "eyeColor": "brown",
          "name": "Hurley Ashley",
          "gender": "male",
          "company": "MIRACLIS",
          "email": "hurleyashley@miraclis.com",
          "phone": "+1 (951) 555-2098",
          "address": "209 Bryant Street, Fidelis, North Carolina, 1254",
          "about": "Non commodo irure laboris aliquip elit esse deserunt amet consectetur ea. Et voluptate dolore laborum consectetur ut ullamco ea eu. Reprehenderit eiusmod adipisicing aliquip anim do pariatur mollit Lorem sit ex. Dolor nisi aliqua incididunt excepteur cillum.\r\n",
          "registered": "2018-08-15T11:09:02 -06:-30",
          "latitude": 84.59555,
          "longitude": 118.115242,
          "tags": [
            "ex",
            "est",
            "excepteur",
            "tempor",
            "sint",
            "aliqua",
            "nostrud"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Mona Chen"
            },
            {
              "id": 1,
              "name": "Noble Banks"
            },
            {
              "id": 2,
              "name": "Hanson Humphrey"
            }
          ],
          "greeting": "Hello, Hurley Ashley! You have 8 unread messages.",
          "favoriteFruit": "banana"
        }
      ];
    res.json(productsData);
    res.send("<h1>Products</h1>");
});

app.get(ROUTE_CONSTANTS.GET_FILE,function(req,res){
    res.sendFile(__dirname+"/demo.pdf");
});

app.listen(3000);