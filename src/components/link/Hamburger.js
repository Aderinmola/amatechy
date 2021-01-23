import React from 'react'
import './Hamburger.css'
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'

class Hamburger extends React.Component {
	state = {
  	open: false
  }
  handleClick = () => {
  	this.setState({ open: !this.state.open });
  }
  render () {
  	const { open } = this.state;
  	return (
    	<div className="link">
            <span onClick={this.handleClick}><AiOutlineMenu size={30} color="#330000" /></span>
            <div className={`menu ${open ? 'open' : ''}`}>
              <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
              </ul>
            </div>
    	</div>
    )
  }
}

export default Hamburger