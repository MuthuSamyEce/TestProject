import React, {Component} from 'react';
import MenuCard from "../components/menu-card";
import {Container} from "react-bootstrap";
import axios from 'axios'


const product = {
    "styleDescription": "this is looks good",
    "isCertifiedOrganic": "isCertifiedOrganic",
    "perceivedBitterness": "Low to No",
    "isNew": "Yes",
    "primaryFlavorNote": "primaryFlavorNote",
    "isglutenFree": "isglutenFree",
    "density": 2.0,
    "servingTemperature": "servingTemperature",
    "secondaryFlavorNote": "secondaryFlavorNote",
    "SRM": "SRM",
    "ingredients": "ingredients",
    "foodPairings": "foodPairings",
    "secondaryFlavorNotePath": "secondaryFlavorNotePath",
    "availability": "true",
    "productStyle": "asian",
    "manufacturer": "beer",
    "productDescription": "test product",
    "ABV": "8.5%",
    "primaryFlavorNoteImagePath": "primaryFlavorNoteImagePath",
    "IBU": "8",
    "tastingNotes": "tastingNotes tastingNotes",
    "allergyWarnings": "allergyWarnings",
    "productID": "4e0174d8-caac-11ea-9c56-ea8c41bbdb13",
    "productName": "512 Pecan Porter"
};

class Home extends Component {


state = {
    products:[]
};

    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://8rlu6yxdsl.execute-api.us-east-2.amazonaws.com/Dev/product',
            headers: {'x-api-key': 'dMF520BRcV82lQbfSMzAa5C9gVYoxXMS9J4M3syd'}
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Container fluid>
            <div style={{padding:"0 30px"}}>
                <div className="header-bg">
                    <span  className="heading" style={{color:"#f7f7f7"}}>
                        Tap List
                    </span>
                </div>
                <div style={{textAlign:"left"}}>
                    <span className="heading" > Pales Ales </span>
                </div>
                <div>
                    <MenuCard drink={product}/>

                </div>
                <div style={{textAlign:"left"}}>
                    <span className="heading" > Stouts </span>
                </div>
                <div>
                    <MenuCard drink={product}/>

                </div>
            </div>
            </Container>
        );
    }
}

export default Home;