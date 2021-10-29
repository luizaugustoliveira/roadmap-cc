import React from 'react';
import Navbar from '../Navbar'
import miniLogo from '../../assets/img/miniGraph.svg'
import data from '../Pt-Br'
import {Vega} from 'react-vega'
import myData from './vis-home.json'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: this.props.title, 
            subtitle: this.props.subtitle, 
            textBtn: this.props.btnText
        }
    }
    
    render() { 
        return (
            <>  
            <Navbar
                navLink1={data.navLink1}
                navLink2={data.navLink2}
                navLink3={data.navLink3}
            />
            <section className="home">

                <div className="home_container">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtitle}</p>
                    <div className="home__button__wrapper">
                        <img src={miniLogo} id="mini__grafo"/>
                        <button>{this.props.btnText}</button>
                    </div>
                </div>

                <div className="grafo__container">
                    <Vega spec={myData} id="grafo"/> 
                </div>
                        

            </section>
           
        </>

        );
    }
}
 
export default Home;
