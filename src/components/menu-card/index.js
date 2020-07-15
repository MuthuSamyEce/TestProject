import React, {Component} from 'react';
import {Row,Col,Accordion} from "react-bootstrap";
import logo from '../../assets/samplelogo.png'
import beans from '../../assets/beans.png'
import artic from '../../assets/artichoke.png'
import arrow from '../../assets/arrow.png'
import bag from '../../assets/bag.png'
import Corn from '../../assets/corn.png'
import Slider from "../slider/Slider";
import CustomAcordianToggle from "../accordian/AcordianToggle";


const flavours = [{image:beans,name:"choclate"},{image:artic,name:"peanut"},{image:bag,name:"peanut"},{image:Corn,name:"Corn"}] ;

class MenuCard extends Component {

    onChangeSlider = (e) =>{

    };

    displayItems = () => {
        return   flavours.map((item,index) => {
            return (
                <div className="li-icon-container" key={index}>
                    <img src={item.image} alt={logo} className="li-icon"/>
                    <span className="icon-name">{item.name}</span>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="card-bg" >
                    <Row className="zero-m-p">
                        <Col style={{textAlign:"left",lineHeight:1}} xs={12} sm={5} lg={5} md={5}>
                            <div style={{display:"inline-block"}}>
                                <img alt={"logo"} className="cardImg" src={logo}/>
                            </div>
                            <div style={{display:"inline-block",padding:"0 10px",verticalAlign:"top"}}>
                                <span className="main-head">{"512 Pecan Porter"}</span>
                                <span className="sub-head">{"512 Brewing - Austin, TX"}</span>
                                <span className="sub-head-2">{`HAZY IPA`}</span>
                                <span className="sub-head-2">{`|`}</span>
                                <span className="sub-head-2">{`IBU 8 `}</span>
                                <span className="sub-head-2">{`|`}</span>
                                <span className="sub-head-2">{`ABV 8.5% `}</span>
                                <span className="sub-head-2">{`|`}</span>
                            </div>
                        </Col>
                        <Col  xs={6} sm={3} lg={3} md={3}>
                            <div>
                                <span className="small-heading">Flavour Notes</span>
                            </div>
                            <div style={{ display:"flex",justifyContent:"center"}}>
                                {this.displayItems()}
                            </div>
                        </Col>
                        <Col xs={3} sm={3} lg={3} md={3}>
                            <div>
                                <span className="small-heading">Bitterness: Low to No</span>
                            </div>
                            <div style={{padding:"15px 0 0 0"}}>
                               <Slider onSlide={this.onChangeSlider}/>
                            </div>
                        </Col>
                        <Col  xs={1} sm={1} lg={1} md={1}>
                            <div>
                                <span className="small-heading"> Color </span>
                            </div>
                            <div>
                                <div style={{padding:"0 40%"}} className="li-icon-container">
                                    <img src={bag} alt={logo} className="li-icon"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                <Row className="zero-m-p">
                    <Col xs={6} sm={4} lg={4} md={4} style={{textAlign:"left",overflow:"hidden"}}>
                        <div>
                            <span className="card-desc">highly roasted, mahogany-coloured, medium-bodied malt with a sweet, salted caramel flavour...</span>
                        </div>
                    </Col>
                    <Col>
                        <Accordion  style={{textAlign:"right",padding:"0 18px"}}>
                            <CustomAcordianToggle eventKey="0">
                                <span style={{lineHeight:1.5,display:"inline-block"}} className="view-text">{`view more `}</span> <img height={10} alt={"arrow"} src={arrow} />
                            </CustomAcordianToggle>
                            <Accordion.Collapse eventKey="0">
                                <Row>
                                    <Col>
                                        <div style={{height:"70px"}}>

                                        </div>
                                    </Col>
                                </Row>

                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MenuCard;