import React, { Component } from 'react'

export class SelectComponent extends Component {
    render() {
        const { level, getFoodItemDetails } = this.props;
        return (
            <div className="form-group">
                <label htmlFor={level.questionId}>{level.question}</label>
                <select className="form-control" id={level.questionId} onChange={getFoodItemDetails}>
                    <option value="0">Select</option>
                    {
                        level.options.map((row, i) => {
                            return (
                                <option key={i} value={row.value} data-select={row.isAQuestion}>{row.option}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}

export default SelectComponent
