import React, { Component } from 'react'


import apiCalls from '../../../config/apiCalls';

import FoodQuestionComponent from './../../organism/FoodQuestion'



export default class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        apiCalls.getBakingFoodQuestions().then(responseData => {
            this.setState({
                level1: responseData
            })
        });
    }

    getFoodItemDetails(level = "level1", event) {
        let value = event.target.value;
        let requestData = {};
        let isAQuestion = false;
        if (value > 0) {
            let questionId = event.target.id;
            isAQuestion = event.target[event.target.selectedIndex].getAttribute('data-select');
            requestData = { questionId, answer: value }
        }
        let newState = {};
        switch (level) {
            case "level1":
                newState.level2 = null;
                newState.level3 = null;
                newState.level4 = null;
                newState.level5 = null;
                newState.level6 = null;
                break;

            case "level2":
                newState.level3 = null;
                newState.level4 = null;
                newState.level5 = null;
                newState.level6 = null;
                break;

            case "level3":
                newState.level4 = null;
                newState.level5 = null;
                newState.level6 = null;
                break;

            case "level4":
                newState.level5 = null;
                newState.level6 = null;
                break;

            case "level5":
                newState.level6 = null;
                break;
        }
        console.log("isAQuestion => ", isAQuestion);
        if (isAQuestion == "true") {
            apiCalls.getBakingFoodQuestions(requestData).then(responseData => {
                newState[level] = responseData;
                this.setState(newState)
            });
        } else {
            apiCalls.getBakingFoodTax(requestData).then(responseData => {
                newState[level] = responseData;
                this.setState(newState)
            });
        }

    }

    render() {
        // const { level1, level2,level3 } = this.state;
        const level1 = this.state?.level1;
        const level2 = this.state?.level2;
        const level3 = this.state?.level3;
        const level4 = this.state?.level4;
        const level5 = this.state?.level5;
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
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                {
                                    level1 &&
                                    <FoodQuestionComponent level={level1} getFoodItemDetails={this.getFoodItemDetails.bind(this, "level2")} />
                                }
                                {
                                    level2 &&
                                    <FoodQuestionComponent level={level2} getFoodItemDetails={this.getFoodItemDetails.bind(this, "level3")} />
                                }
                                {
                                    level3 &&
                                    <FoodQuestionComponent level={level3} getFoodItemDetails={this.getFoodItemDetails.bind(this, "level4")} />
                                }
                                {
                                    level4 &&
                                    <FoodQuestionComponent level={level4} getFoodItemDetails={this.getFoodItemDetails.bind(this, "level5")} />
                                }
                                {
                                    level5 &&
                                    <FoodQuestionComponent level={level5} getFoodItemDetails={this.getFoodItemDetails.bind(this, "level6")} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
