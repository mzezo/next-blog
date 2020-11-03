import Moment from 'moment';

export function createUrl(urlData) {
    const keys = Object.keys(urlData);
    let search = '';
    keys.forEach(key => {
      if (
        urlData[key] &&
        urlData[key] !== null &&
        urlData[key] !== '' &&
        urlData[key] !== ',' &&
        urlData[key] !== undefined &&
        urlData[key].length !== 0
      ) {
        // search[key] = urlData[key];
        search += `${key}=${urlData[key]}&`;
      }
    });
    // return search;
    return search.substring(0, search.length - 1);
  }
  
  export function setStateToUrl(state) {
    let urlData = {};
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        switch (key) {
          case 'startDate':
            urlData[key] = state[key] ? Moment(new Date(state[key] )).format('DD-MM-YYYY'): '';
            break;
          case 'endDate':
            urlData[key] = state[key] ? Moment(new Date(state[key] )).format('DD-MM-YYYY') : '';
            break;
          case 'sourceCategory':
            urlData[key] = state[key] ? state[key] : '';
            break;
          case 'searchByName':
            urlData[key] = state[key] ? state[key] : '';
            break;
          default:
            urlData[key] = state[key];
            break;
        }
      }
    }
    return createUrl(urlData);
  }
  
  export function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
    let urlData = {};
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        switch (key) {
          case 'startDate':
            urlData[key] = state[key] ? Moment(new Date(state[key] )).format('DD-MM-YYYY') : '';
            break;
          case 'endDate':
              urlData[key] = state[key] ? Moment(new Date(state[key] )).format('DD-MM-YYYY') : '';
            break;
          case 'sourceCategory':
            urlData[key] = state[key] ? state[key] : '';
            break;
          case 'searchByName':
            urlData[key] = state[key] ? state[key] : '';
            break;
          default:
            urlData[key] = state[key];
            break;
        }
      }
    }
    return createUrl(urlData);
  }
  