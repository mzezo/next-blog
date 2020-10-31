import React, { useState, useEffect } from "react";
// import ImagePlaceHolder from 'assets/images/hotelImagePlaceholder.jpg';
import { get } from 'lodash';
import { TopHotelsContainer, HotelsContainer, HotelContainer, HotelData, PriceRateContainer  } from './NewsSection.style';
import NewsItem from './NewsItem';

const NewsSection = ({homeNewsData}) => {

    useEffect(() => {
       
    }, []);

    return (
        <TopHotelsContainer>
            {get(homeNewsData, 'length', 0) > 0 ?
                <React.Fragment>
                    <HotelsContainer>
                        {homeNewsData.slice(0, 6).map((newsItem, index) => {
                            return (
                                <NewsItem {...newsItem}/>
                                
                                // // <Link to={{ pathname: `/hotels/hotelDetails/booking/${get(hotel, 'hotel_id')}/${get(hotel, 'hotel_name')}/${checkinUrl}/${checkoutUrl}`, state: { hotel: hotel } }} key={get(hotel, 'hotel_id')}>
                                //     <HotelContainer key={index}>
                                //         <img src={get(hotel, 'urlToImage')} alt={get(hotel, 'name', "-")} />
                                //         <HotelData>
                                //             <p>{get(hotel, 'title', "not Found")}</p>
                                //             <PriceRateContainer>
                                                
                                //             </PriceRateContainer>
                                //         </HotelData>
                                //     </HotelContainer>
                                // // </Link>
                            );
                        })}
                    </HotelsContainer>
                </React.Fragment>
                :
                (
                    ''
                )}
        </TopHotelsContainer>
    )
}
export default NewsSection;


