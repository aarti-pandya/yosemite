import React, { Component } from 'react';
import {
	Nav,
	NavItem,
	NavLink,
	Navbar
} from 'reactstrap';

class Header extends Component {
	constructor(props) {
        super(props);
        this.state = { menu: [] };
		this.renderMenu = this.renderMenu.bind(this);
	}
	componentDidMount() {
		this.setState({
			menu: [
				{
					key: 'overview',
					id: 'testOverview',
					title:'Overview',
					link: '/overview'
				},
				{
					key: 'rooms',
					id: 'testRooms',
					title: 'Rooms',
					link: '/rooms'
				},
				{
					key: 'Reviews',
					id: 'testReviews',
					title: 'Reviews',
					link: '/reviews'
				},
				{
					key: 'packages',
					id: 'testPackages',
					title: 'Packages',
					link: '/packages'
				},
				{
                    key: 'gallery',
                    id: 'testGallery',
					title: 'Gallery',
					link: '/gallery'
				},
				{
					key: 'directions',
					id: 'testDirections',
					title: 'Directions',
					link: '/directions'
				},
				{
					key: 'contactus',
					id: 'testContactus',
					title:'Contact Us',
					link: '/contactus'
				},
				{
                    key: 'reservations',
                    id: 'testReservations',
					title: 'Reservations',
					link: '/reservations'
				}
			]
		});
	}

	renderMenu() {

		let menu = this.state.menu;
		return menu.filter((item) => item.link).map((linkable) => (
			<NavItem key={linkable.title} style={{display:'inline-block',padding:'20px'}}>
				<NavLink id={linkable.id} href={linkable.link}>
					{linkable.title}
				</NavLink>
			</NavItem>
		));
	}

	render() {
		return (
			<header>
				<Navbar color="faded" expand="lg">
					<Nav navbar>
						{this.renderMenu()}
					</Nav>
				</Navbar>
			</header>
		);
	}
}
export default Header;