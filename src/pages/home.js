import React, {Component} from 'react';
import MenuCard from "../components/menu-card";
import {Container} from "react-bootstrap";

class Home extends Component {
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
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>
                <div style={{textAlign:"left"}}>
                    <span className="heading" > Stouts </span>
                </div>
                <div>
                    <MenuCard/>
                    <MenuCard/>
                    <MenuCard/>
                </div>
            </div>
            </Container>
        );
    }
}

export default Home;