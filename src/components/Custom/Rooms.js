import axios from 'axios';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Rooms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			roomtypes: []
		};
	}
	componentDidMount() {
		axios.get(`http://localhost:3000/api/property/roomtypes/265`)
			.then(response => {
				console.log(response.data);
				this.setState({ roomtypes: response.data })
			})
	}

	render() {
		let { roomtypes } = this.state;
		return (
			<div>
				<table>
					{roomtypes && roomtypes != undefined &&
						roomtypes.map((item) => {
							return <React.Fragment>
								<tr>
									<td><h3>{item.name}</h3></td></tr>
								<tr>
									<td dangerouslySetInnerHTML={{ __html: item.description }}></td>
								</tr>
								<tr>
									<td>
									<Button variant="warning">
										See Details
        							</Button>
									&nbsp;&nbsp;
									<Button variant="warning">
										Check Availability
        							</Button>
									</td>
								</tr>
							</React.Fragment>
						})
					}
				</table>
			</div>
		);
	}
}
export default Rooms;


