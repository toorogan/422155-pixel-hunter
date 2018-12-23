import {prosessServerData} from "./data/adapter";

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const APP_ID = 22101985;
const DEFAULT_NAME = `John Doe`;

const checkServer = (response) => {
  if (response.ok) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};
const toJSON = (res) => res.json();

class Network {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
      .then(checkServer)
      .then(toJSON)
      .then(prosessServerData);
  }
  static saveResults(data, lives, name = DEFAULT_NAME) {
    data = Object.assign({name}, {
      stats: data,
      lives
    });

    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`, requestSettings).then(checkServer);
  }
  static loadResults(name = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/${APP_ID}-${name}`).then(checkServer).then(toJSON);
  }


}


export default Network;
