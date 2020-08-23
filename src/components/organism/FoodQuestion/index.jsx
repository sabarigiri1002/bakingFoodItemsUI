import React, { Component } from 'react'

export class FoodQuestionComponent extends Component {

    render() {
        const { level, getFoodItemDetails } = this.props;
        return (
            <div className="col-12">
                {

                    level.question ?
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
                        </div> :
                        level.taxp ?
                            <div className="form-group">
                                <label htmlFor={level.taxp}>Tax Percent <small>(%)</small></label>
                                <input type="text" id={level.value} value={level.taxp} className="form-control" readOnly />
                            </div>
                            : ""

                }
            </div>
        )
    }
}

export default FoodQuestionComponent
