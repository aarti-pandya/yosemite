/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
import moment from "moment";
import { Container } from 'reactstrap';
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Overview from '../components/Custom/Overview';
import Rooms from '../components/Custom/Rooms';
import Packages from '../components/Custom/Packages';
import Gallery from '../components/Custom/Gallery';
import Review from '../components/Custom/Reviews';
import Banner from '../components/Common/Banner';
import Reservations from '../components/Custom/Reservations';
import Directions from '../components/Custom/Directions';
import { createBrowserHistory } from 'history';
import ContactUs from "../components/Custom/ContactUs";

const history = createBrowserHistory({ forceRefresh: true });
let sampleJSON;
class Full extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: 1,
			AdultsInRoom: [2],
			ChildrenInRoom: [0],
			toogleSearch: false,
			RoomSelected: [-1],
			ActiveTab: 1,
			CheckInDate: moment().format('YYYY-MM-DD'),
			CheckOutDate: moment().add('days', 1).format('YYYY-MM-DD'),
			minDate: moment().format('YYYY-MM-DD'),
			maxDate: moment().add('days', 28).format('YYYY-MM-DD'),
		}
		this.initialState = this.state;
		switch (window.location.hostname) {
			case 'localhost':
				sampleJSON = require('../data/westgate.json');
				break;
			default:
				sampleJSON = require('../data/westgate.json');
				break;
		}
	}
	handler = (updatedVal) => {
		this.setState({
			...updatedVal
		})
	}
	render() {
		return (
			<div>
				<Header />
				<div>
					<main>
						<Container fluid>
							<BrowserRouter>
								{<Banner {...this.state} handler={this.handler} />}
								<Switch>
									<Route
										exact
										path="/"
										name="Overview"
										component={() => (
											<Overview sampleJSON={sampleJSON} />)}
									/>

									<Route
										path="/overview"
										name="Overview"
										component={() => (
											<Overview sampleJSON={sampleJSON} />)}
									/>



									<Route
										path="/rooms"
										name="Rooms"
										component={Rooms}
									/>
									<Route
										path="/packages"
										name="Packages"
										component={Packages}
									/>
									<Route
										path="/gallery"
										name="Gallery"
										component={Gallery}
									/>

									<Route
										path="/reviews"
										name="Reviews"
										component={Review}
									/>

									<Route
										path="/directions"
										name="Directions"
										component={Directions}
									/>


									<Route
										path="/contactus"
										name="ContactUs"
										component={ContactUs}
									/>

									<Route
										path="/reservations"
										name="Reservations"
										component={() => (
											<Reservations {...this.state}
												handler={this.handler}
												initialState={this.initialState} />)}
										history={this.props.history}
									/>
								</Switch>
							</BrowserRouter>
						</Container>
					</main>
				</div>
				<Footer />
			</div>
		);
	}
}
export default Full;

