import React, { Component } from 'react';

import SelectComponent from './../../molecule/SelectComponent';
import TextBoxComponent from './../../molecule/TextBoxComponent';

export class FoodQuestionComponent extends Component {

    render() {
        const { level } = this.props;
        return (
            <div className="col-12">
                {

                    level.question ?
                        <SelectComponent {...this.props} /> : ""
                }
                {
                    level.taxp ?
                        <TextBoxComponent {...this.props} />
                        : ""

                }
            </div>
        )
    }
}

export default FoodQuestionComponent
