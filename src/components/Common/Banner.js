import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './BannerStyles.css';
import 'react-datepicker/dist/react-datepicker.css';

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state={
			...props
		}
		this.AddRoom = this.AddRoom.bind(this);
		this.RemoveRoom = this.RemoveRoom.bind(this);
		this.AddAdult = this.AddAdult.bind(this);
		this.RemoveAdult = this.RemoveAdult.bind(this);
		this.AddChildren = this.AddChildren.bind(this);
		this.RemoveChildren = this.RemoveChildren.bind(this);
		this.HandleSearch = this.HandleSearch.bind(this);
		this.HandleDateChange=this.HandleDateChange.bind(this);
	}
	HandleDateChange(){
	}
	AddRoom() {
		if (this.state.rooms < 5)
			this.setState({
				rooms: this.state.rooms + 1,
				AdultsInRoom: [...this.state.AdultsInRoom, 2],
				ChildrenInRoom: [...this.state.ChildrenInRoom, 0],
				RoomSelected: [...this.state.RoomSelected, -1]
			})
	}
	RemoveRoom() {
		let newAdultsInRoom = [...this.state.AdultsInRoom];
		newAdultsInRoom.pop();

		let newChildrenInRoom=[...this.state.ChildrenInRoom];
		newChildrenInRoom.pop();

		let newRoomSelected=[...this.state.RoomSelected];
		newRoomSelected.pop();
		if (this.state.rooms > 1)
			this.setState({ 
				rooms: this.state.rooms - 1, 
				AdultsInRoom: [...newAdultsInRoom],
				ChildrenInRoom: [...newChildrenInRoom],
				RoomSelected: [...newRoomSelected]
			})

	}
	AddAdult(i) {
		if (this.state.AdultsInRoom[i] < 5) {
			const newItems = [...this.state.AdultsInRoom];
			newItems[i]++;
			this.setState({ AdultsInRoom: newItems });
		}
	};
	RemoveAdult(i) {
		if (this.state.AdultsInRoom[i] > 1) {
			const newItems = [...this.state.AdultsInRoom];
			newItems[i]--;
			this.setState({ AdultsInRoom: newItems });
		}
	}
	AddChildren(i) {
		if (this.state.ChildrenInRoom[i] < 4) {
			const newItems = [...this.state.ChildrenInRoom];
			newItems[i]++;
			this.setState({ ChildrenInRoom: newItems });
		}
	}
	RemoveChildren(i) {
		if (this.state.ChildrenInRoom[i] > 0) {
			const newItems = [...this.state.ChildrenInRoom];
			newItems[i]--;
			this.setState({ ChildrenInRoom: newItems });
		}
	}
	HandleSearch() {
		this.setState({ toogleSearch: true });
		this.props.handler(this.state);
		this.props.history.push('/reservations');
	}
	render() {
		return (
		<div>
			<div>
				<br />	<br />
				<p style={{ textAlign: 'center' }}>Best Rate Guarantee When You Book Direct!</p>
				<input type='date' 
				defaultValue={this.state.CheckInDate} 
				onChange={this.HandleDateChange}
				min={this.state.minDate}  
				max={this.state.maxDate}/>
				<input type='date' 
				onChange={this.HandleDateChange}
				defaultValue={this.state.CheckOutDate} 
				min={this.state.minDate} 
				max={this.state.maxDate}/>

				<input type='text' placeholder='Promo Code' />
				<div>
					<table border="1" align='center' cellPadding='5px'>
						<tr>
							<td><span>Total Rooms</span></td>
							<td>{this.state.rooms}</td>
							<td><button type='button' onClick={this.AddRoom}>+</button>
								<input type='text' value={this.state.rooms} className='InputCounter' />
								<button type='button' onClick={this.RemoveRoom}>-</button></td>
						</tr>
						<tr>
							<td>No</td>
							<td><span>Adults</span></td>
							<td><span>Children</span></td>
						</tr>
						{Array.from(Array(this.state.rooms), (e, i) => {
							return <tr key={i}>
								<td>	Room {i + 1}  </td>
								<td>	<button type='button' onClick={() => this.AddAdult(i)}>+</button>
									<input type='text' value={this.state.AdultsInRoom[i]} className='InputCounter' />
									<button type='button' onClick={() => this.RemoveAdult(i)}>-</button></td>
								<td>
									<button type='button' onClick={() => this.AddChildren(i)}>+</button>
									<input type='text' value={this.state.ChildrenInRoom[i]} className='InputCounter' />
									<button type='button' onClick={() => this.RemoveChildren(i)}>-</button></td>

							</tr>
						})}
						<tr>
							<td colSpan='3'>
								<button type='button' onClick={this.HandleSearch}>Search</button>
							</td>
						</tr>
					</table>
				</div>
			</div>
			</div>
		);
	}
}
export default withRouter(Banner);
