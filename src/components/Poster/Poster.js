import React, {PureComponent} from 'react'
import {Carousel, Container, Col, Row, Media, Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './StylePost.css'
import {Link} from 'react-router-dom'

export default class Poster extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            isMouseOnImg:false
        }
    }

    render() {
        const {filmInfo} = this.props;
        const describingBody = this.state.isMouseOnImg ?
            <div className="ContentOnImg">
                <span className="NameOfFilm fadeInUp"><div className="textBox"> {filmInfo.title} </div></span>
                <span className="DescribingText fadeInUp"><div className="textBox">{filmInfo.description}</div></span>
                <Link to={`/cinema/film/${filmInfo.id}`}>
                    <button className="DescribingBtn fadeInUp">
                        Подробнее о фильме
                    </button>
                </Link>
            </div> : <span/>;


        return(
            <div
                onMouseEnter={this.mouseEnter}
                onMouseLeave={this.mouseLeave}
                id="Poster"
            >
                {describingBody}
                <img
                    className="PosterInMain"
                    src={filmInfo.url_picture}
                    alt="img">
                </img>

            </div>
        )
    }
    mouseLeave = () => {
        this.setState({
            isMouseOnImg: false
        })
    }

    mouseEnter = () =>{
        this.setState({
            isMouseOnImg: true
        })
    }

}
