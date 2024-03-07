
# B17 API

Welcome to the B17 API! Inspired by the show Masters of the Air, this API provides information about the heavy bomber aircraft that played a pivotal role in WWII and beyond. 

During the B17's 9 year production span, 12,731 units were built. In this API's inception period, it will focus on a small subset of the planes used by the groups featured in the show, the 100th Heavy Bomber Group ("the Bloody 100th") and the 91st Heavy Bomber Group.



## Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- [Heroku](https://www.heroku.com/)


## Installation

To install the B17 API:

- Clone the repository
- In your terminal, initialize npm

```
  npm init -y
```
- Install dependencies

```
  npm install
```

- Start the server

```
  npm start
```
- or, to start the server in development mode

```
  npm run dev
```

- To seed data
```
  npm run db:seed
```
## Data Model

#### Bomb Group Schema
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of item to fetch |
| `groupName` | `string` | Name of US Army Air Corps BombGroup |
| `bombSquadron` | `Array of strings` | Names of Bomb Squadrons within the Bomb Group |

#### Bomb Squadron Schema
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of item to fetch |
| `squadronName` | `string` | Name of US Army Air Corps Bomb Squadron | 
|`serialNumber` | `Array of strings` | Serial numbers of B17 planes assigned to the Bomb Squadron. Refers back to the B17s model|

#### B17 Schema
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. Id of item to fetch |
| `serialNumber` | `string` | Serial number|
| `name`      | `string` | Crew assigned name of plane |
| `model`      | `string` | Production model |
| `serialNumberRange` | `string` | Serial number range of planes produced in same production block |
| `bombGroup` | `Array of strings` | Bomb Groups the B17 was assigned to |
| `bombSquadron` | `Array of strings` | Bomb Squadrons the B17 was assigned to|
| `fate` | `string` | Outcome |
| `image` | `string` | Image URL |


## Routes and Endpoints
#### Bomb Group Routes

| Action | Description    | Endpoint                      |
| :-------- | :------- | :-------------------------------- |
| `GET`      | Get all Bomb Groups | /api/bomb_groups  |
| `GET` | Get one Bomb Group by ID | /api/bomb_groups/:id |
| `POST` | Create a new Bomb Group | /api/bomb_groups |
| `PUT` | Update a Bomb Group by ID | /api/bomb_groups/:id |
| `DELETE` | Delete a Bomb Group by ID | /api/bomb_groups/:id  |

#### Bomb Squadron Routes

| Action | Description    | Endpoint                      |
| :-------- | :------- | :-------------------------------- |
| `GET`      | Get all Bomb Squadrons | /api/bomb_squadrons  |
| `GET` | Get one Bomb Squadron by ID | /api/bomb_squadrons/:id |
| `POST` | Create a new Bomb Squadron  | /api/bbomb_squadrons |
| `PUT` | Update a Bomb Squadron by ID | /api/bomb_squadrons/:id |
| `DELETE` | Delete a Bomb Squadron by ID | /api/bomb_squadronss/:id  |

#### B17 Routes

| Action | Description    | Endpoint                      |
| :-------- | :------- | :-------------------------------- |
| `GET`      | Get all B17s | /api/b17s  |
| `GET` | Get one B17 by ID | /api/b17s/:id |
| `POST` | Create a new B17 | /api/b17s |
| `PUT` | Update a B17 by ID | /api/b17s/:id |
| `DELETE` | Delete a B17 by ID | /api/b17s/:id  |

## Acknowledgements

 - [B-17 Bomber Flying Fortress – The Queen Of The Skies](https://b17flyingfortress.de/en/)
 - [Wikipedia: Boeing B-17 Flying Fortress](https://en.wikipedia.org/wiki/Boeing_B-17_Flying_Fortress)
 - [Google Sheets Tip: Generate JSON Data from Rows and Columns](https://www.highviewapps.com/blog/google-sheets-tip-generate-json-data-from-rows-and-columns/)

