import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import RoomTypes from '../../data/RoomTypes';
import RoomDetailsModal from '../Custom/RoomDetailsModal';
import 'react-datepicker/dist/react-datepicker.css';
import './Reservations.css';
import Button from 'react-bootstrap/Button';
class Reservations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...props
		}
		this.GrandTotal = 0;
		this.HandleRoomSelect = this.HandleRoomSelect.bind(this);
		this.HandleRoomCancel = this.HandleRoomCancel.bind(this);
		this.HandleTabSelect = this.HandleTabSelect.bind(this);
		this.HandleBookNext = this.HandleBookNext.bind(this);
		this.HandleBookNow = this.HandleBookNow.bind(this);
		this.HandleCheckOut = this.HandleCheckOut.bind(this);
	}
	HandleRoomSelect(i, rate) {
		const newItems = [...this.state.RoomSelected];
		newItems[i] = rate;
		this.GrandTotal = this.GrandTotal + RoomTypes[rate].Rate;
		this.setState({ RoomSelected: newItems });
	}
	HandleRoomCancel(i, rate) {
		const newItems = [...this.state.RoomSelected];
		newItems[i] = -1;
		this.GrandTotal = this.GrandTotal - RoomTypes[rate].Rate;
		this.setState({ RoomSelected: newItems });
	}
	HandleTabSelect(e) {
		this.setState({ ActiveTab: Number(e) });
	}
	IsReadyToBook() {
		if (this.state.rooms !== this.state.ActiveTab && this.state.RoomSelected[this.state.ActiveTab - 1] !== -1)
			return true;
		else
			return false;
	}
	IsReadyToCheckout() {
		if (this.state.rooms == this.state.ActiveTab) {
			let count = 0;
			for (let i = 0; i < this.state.RoomSelected.length; i++) {
				if (this.state.RoomSelected[i] != -1)
					count++;
			}
			if (count == 0)
				return false;
			else
				return true;
		}
	}
	HandleBookNext() {
		this.setState({ ActiveTab: this.state.ActiveTab + 1 });
	}
	HandleBookNow() {
				for (let i = 0; i < this.state.RoomSelected.length; i++) {
				if (this.state.RoomSelected[i] == -1){
					alert('Please select room type '+(i+1));
					break;
				}
			}
	}

	HandleCheckOut() {
		alert('Checkout');
		//this.setState(this.props.initialState);
		//this.props.handler(this.state);
	}
	render() {
		return (
			<div>
				<div>
					<Tabs id="uncontrolled-tab-example" className='tabs' onSelect={e => this.HandleTabSelect(e)} activeKey={this.state.ActiveTab}>
						{Array.from(Array(this.state.rooms), (e, i) => {

							const total = this.state.AdultsInRoom[i] + this.state.ChildrenInRoom[i];
							return <Tab eventKey={i + 1} title={"Room " + (i + 1)} disabled={this.state.ActiveTab <= i}>
								{RoomTypes.map((room, j) => {
									if (total <= room.PeopleAllowed) {
										return <div style={{ borderBottom: '1px solid black', width: '50%' }}>
											<p>{room.Title}</p>
											<p>Rate : {room.Rate}</p>
											<p>Room Size : {room.PeopleAllowed} people</p>
											<p>Details : {room.Description}</p>
											<p>
												{this.state.RoomSelected[i] == -1 &&
													<button type='button' onClick={() => this.HandleRoomSelect(i, room.id)}>Select Room</button>
												}
												{this.state.RoomSelected[i] !== -1 && this.state.RoomSelected[i] == room.id &&
													<button type='button' onClick={() => this.HandleRoomCancel(i, room.id)}>Cancel Room</button>
												}

											</p>
											<p>
												<RoomDetailsModal Room={room} />
											</p>
										</div>
									}
								}
								)}
							</Tab>
						})}
					</Tabs>
					{this.IsReadyToBook() &&
						<button type='button' onClick={this.HandleBookNext}>Book next Room</button>
					}

					{this.IsReadyToCheckout() &&
						<button type='button' onClick={this.HandleCheckOut}>Proceed to checkout</button>
					}

					<div className="bookingcard">
						<table width='25%' border="1" align="center">
							{this.state.RoomSelected.map((id, i) => {
								return <React.Fragment>

									<tr><td><b style={{ color: 'red' }}>Room {i + 1}</b></td>
										<td>{id == -1 ? 0 : RoomTypes[id].Rate}</td>
									</tr>

									<tr><td>Extra Adult Fee</td>
										<td>{0}</td>
									</tr>

									<tr><td>Extra Child Fee</td>
										<td>{0}</td>
									</tr>

									<tr><td><b style={{ color: 'blue' }}>Room {i + 1} Total</b></td>
										<td>{id == -1 ? 0 : RoomTypes[id].Rate}</td>
									</tr>
								</React.Fragment>
							})}
							<tr><td>Taxes</td>
								<td>0</td>
							</tr>

							<tr><td>Amenities Fee</td>
								<td>0</td>
							</tr>

							<tr><td>Grand Total</td>
								<td>{this.GrandTotal}</td>
							</tr>

							<tr><td colSpan="2">
								<Button variant="warning" onClick={this.HandleBookNow}>
									Book It Now
        						</Button>
							</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
export default withRouter(Reservations);
