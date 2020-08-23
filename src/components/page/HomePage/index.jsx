import React, { Component } from 'react'


import apiCalls from '../../../config/apiCalls';



export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGlobalReport: {},
            countryReport: {},
            globalReport: {}
        };
    }

    componentDidMount() {
        apiCalls.getConsolidatedReport()
            .then(currentGlobalReportData => {
                apiCalls.getAllCountreyReport()
                    .then(countryReport => {
                        const IndiaReport = countryReport.filter((value) => value.country === "India");
                        this.setState({
                            currentGlobalReport: currentGlobalReportData,
                            countryReport: IndiaReport[0],
                            globalReport: countryReport
                        })
                    });
            });
    }

    render() {
        const { currentGlobalReport, countryReport, globalReport } = this.state;
        let asOfDate = currentGlobalReport.updated ? (new Date(currentGlobalReport.updated)) : '';
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 text-left">
                            <h5>Baking Food Items Tax Details</h5>
                        </div>
                    </div>
                    <br />
                </div>

                <div className="col-12">
                    <div className="container">
                        <p>sasda</p>
                    </div>
                </div>
            </div>
        )
    }
}
