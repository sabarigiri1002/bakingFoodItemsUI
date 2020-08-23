import React, { Component } from 'react'

export class PageHeaderComponent extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 text-left">
                        <h5>{title}</h5>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default PageHeaderComponent
