import React, { Component } from 'react'

export class TextBoxComponent extends Component {
    render() {
        const { level } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={level.taxp}>Tax Percent <small>(%)</small></label>
                <input type="text" id={level.value} value={level.taxp} className="form-control" readOnly />
            </div>
        )
    }
}

export default TextBoxComponent
