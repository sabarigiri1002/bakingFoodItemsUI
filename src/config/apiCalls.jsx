import axios from 'axios';


const URL_FOR_WORLD_REPORT = "http://localhost:5000/api/v1/";
const GET_BAKING_FOOD_QUESIONS = URL_FOR_WORLD_REPORT.concat("bakingFoodItems/getQuestion/");
const GET_BAKING_FOOD_TAX = URL_FOR_WORLD_REPORT.concat("bakingFoodItems/getTax/");


const apiCalls = {

    getBakingFoodQuestions(requestData) {
        return this.doPOSTCall(GET_BAKING_FOOD_QUESIONS, requestData);
    },

    getBakingFoodTax(requestData) {
        return this.doPOSTCall(GET_BAKING_FOOD_TAX, requestData);
    },

    doPOSTCall(REQUEST_URL, requestData) {
        return axios.post(REQUEST_URL, requestData)
            .then((res) => {
                if (res.data.status) {
                    return res.data.data;
                } else {
                    console.log(res.data.message);
                }
            })
            .catch((err) => {
                console.error(`Error :  ${err.message}`);
            });
    }
}

export default apiCalls;