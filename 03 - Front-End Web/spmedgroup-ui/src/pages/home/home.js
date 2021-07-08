import { Component } from "react";

import SideBarMenu from "../../components/sitebarMenu/sideBarMenu";
import Header from "../../components/header/header";
import CardsHeader from "../../components/home/cardsHeader";
import CardsMid from '../../components/home/cardsMid';
import CardFooter from '../../components/home/cardFooter';
import CardRight from '../../components/home/cardRight';

import '../../assets/css/home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="body-content">
                    <SideBarMenu />
                    <div className="page-content">
                        <Header />
                        <div className="body-page">
                            <div className="body-left">
                                <CardsHeader />
                                <CardsMid />
                                <CardFooter />
                            </div>
                            <div className="body-right">
                                <CardRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}