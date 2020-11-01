import React, { useState, useEffect, useContext, useReducer } from 'react';
import moment from 'moment';
import { createBrowserHistory } from 'history';
import ViewWithPopup from 'components/UI/ViewWithPopup/ViewWithPopup';
import { SearchContext } from 'context/SearchProvider';
import { setStateToUrl } from 'services/url_handler';
import queryString from "query-string";
import Router from 'next/router'
import CategroySearchWrapper, {
  DateWrapper,
  ItemWrapper,
  ActionWrapper,
} from './CategorySearch.style';
import { ArrowDownUp } from '@styled-icons/bootstrap';
import { DatePicker, Select, Input  } from 'antd';
import { get } from 'lodash';
const { Option } = Select;
const { Search } = Input;

// const history = process.browser ? createBrowserHistory() : false;
// const location = process.browser && window.location;

function serchReducer(state, action) {
    switch (action.type) {
      case 'startDate':
        return { ...state, startDate: action.payload };
      case 'endDate':
        return { ...state, endDate: action.payload };
      case 'sourceCategory':
        return {
          ...state,
          sourceCategory: action.payload };
      case 'searchByName':
        return {
          ...state,
          searchName: action.payload,
        };
      default:
        return state;
    }
  }

const CategorySearchNext = (props) => {

    const { searchItems, dispatch } = useContext(SearchContext);
    const initialState = {
      startDate: get(searchItems, 'startDate' , ''),
      endDate: get(searchItems, 'endDate' , ''),
      sourceCategory: get(searchItems, 'sourceCategory' , 0 ),
      searchName: get(searchItems, 'searchName', ''),
    };
  
    // current component state with dispatching to reducer
    const [current, dispatchCurrent] = useReducer(serchReducer, initialState);
    
    const [sourceCategories , setSourceCategories] = useState([]);

    useEffect(() => {
      setSourceCategories(get(props, `newsData[${0}].data.sourceCategory`))
    }, []);

    const handleonChangeStartDate = (date, dateString) => {
      console.log(date, dateString);
      let query = {};
      query = {
        ...current,
        startDate: date,
      };
      dispatchCurrent({ type: 'startDate', payload: date });
      const params = setStateToUrl(query);
      console.log('params', params);
      dispatch({
        type: 'UPDATE',
        payload: {
          ...current,
          ...query,
        },
      });
      Router.push({
        pathname: '/news',
        query: encodeURI(params) ,
      });
    }

    const handleonChangeEndDate = (date, dateString) => {
      console.log(date, dateString);
      let query = {};
      query = {
        ...current,
        startDate: date,
      };
      dispatchCurrent({ type: 'endDate', payload: date });
      const params = setStateToUrl(query);
      console.log('params', params);
      dispatch({
        type: 'UPDATE',
        payload: {
          ...current,
          ...query,
        },
      });

      Router.push({
        pathname: '/news',
        query:  encodeURI(params) ,
      });
    }

      const handleSelectCategory = (value) => {
        console.log(`selected ${value}`);
        let query = {};
        query = {
          ...current,
          sourceCategory: value,
        };
        dispatchCurrent({ type: 'sourceCategory', payload: value });
        const params = setStateToUrl(query);
        console.log('params', params);
        dispatch({
          type: 'UPDATE',
          payload: {
            ...current,
            ...query,
          },
        });
        Router.push({
          pathname: '/news',
          query: encodeURI(params) ,
        });
      }
  
      const onSearchSubmit = (value) => {
        console.log('onSearchSubmit', value);
        let query = {};
        query = {
          ...current,
          searchName: value,
        };
        dispatchCurrent({ type: 'searchByName', payload: value });
        const params = setStateToUrl(query);
        console.log('params', params);
        dispatch({
          type: 'UPDATE',
          payload: {
            ...current,
            ...query,
          },
        });
        Router.push({
          pathname: '/news',
          query: encodeURI(params) ,
        });
      } 
   
    return (
      <CategroySearchWrapper>
        <ViewWithPopup
          noView={true}
          view={
            <DateWrapper>
              <h3>From</h3>
              <DatePicker size="large" allowClear={false} placeholder="Select" onChange={handleonChangeStartDate} />
            </DateWrapper>
          }
        />
  
        <ViewWithPopup
          noView={true}
          view={
            <DateWrapper>
              <h3>To</h3>
              <DatePicker size="large" allowClear={false} placeholder="Select" onChange={handleonChangeEndDate} />
            </DateWrapper>
          }
        />
  
        <ViewWithPopup
          noView={true}
          view={
              <ItemWrapper>
                  <h3>Category</h3>
                  <Select defaultValue={1} size="large" onChange={handleSelectCategory}>
                      {
                          sourceCategories && sourceCategories.map((sourceCategory) => {
                              return(
                                <Option value={get(sourceCategory, 'id', 0)}>{get(sourceCategory, 'name', 'default')}</Option>
                              )
                          })
                      }
                  </Select>
              </ItemWrapper>
          }
        />
  
        <ViewWithPopup
          noView={true}
          view={
            <ItemWrapper>
                <h3>Search</h3>
                <Search placeholder=" Search Services" size="large" onSearch={onSearchSubmit} enterButton />
            </ItemWrapper>
          }
        />
  
            <ItemWrapper>
                <h5>Sort <ArrowDownUp size={22} style={{marginLeft: '10px'}}/></h5>
            </ItemWrapper>
      </CategroySearchWrapper>
    );
  };
  
  export default CategorySearchNext;
  