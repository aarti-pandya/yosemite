import React from "react";
import moment from "moment";
export default class CalendarNew extends React.Component {
    weekdayshort = moment.weekdaysShort();
    startDate = ('2-22-2020');
    endDate = ('2-23-2020');

    render() {
        let d = moment(this.startDate).weekday();
        let checkInDate=new moment(this.startDate);
        let checkOutDate=new moment(this.endDate).endOf("month").format("MM-DD-YYYY");

        let blanks = [];
        for (let i = 0; i < d; i++) {
            if (i % 7)
                blanks.push(<li style={{ float: 'left', display: 'inline-block', margin: '10px', width: '10%' }}>{ }</li>);
            else
                blanks.push(<li style={{ float: 'left', display: 'inline-block', margin: '10px', width: '10%', clear: 'both' }}>{ }</li>);
        }

        return (
            <div>
            <p> {this.startDate} - {this.endDate}</p>
            <ul>
                {
                    this.weekdayshort.map((day) => {
                        return <li style={{
                            float: 'left', display: 'inline-block', margin: '10px', width: '10%'
                        }}>{day}</li>
                    })
                }
                {
                    blanks
                }
                
                {
                this.GetDates(checkInDate, checkOutDate).map((date, index) => {
                        if ((index + d) % 7)
                            return <li style={{ float: 'left', display: 'inline-block', margin: '10px', width: '10%'}}>
                                {moment(date).format('D')}<br/>$89</li>
                        else
                            return <li style={{
                                float: 'left',
                                display: 'inline-block', margin: '10px', width: '10%',
                                clear: 'both'
                            }}>{moment(date).format('D')}<br/>$89</li>
                    })
                }
            </ul>
            </div>
        );
    }
    GetDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }
}