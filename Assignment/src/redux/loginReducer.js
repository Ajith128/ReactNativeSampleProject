import { ADD_EMPLOYEE_DETAILS } from "./loginAction";

const initialState = {
    employeeDetails: []
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE_DETAILS:
            return {
                ...state,
                employeeDetails: action.payload.user
            };
        default:
            return state;
    }
};

export default loginReducer;
