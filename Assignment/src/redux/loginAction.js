export const ADD_EMPLOYEE_DETAILS = 'ADD_EMPLOYEE_DETAILS'

export const addEmployeeList = employeeList => {
  return {
    type: ADD_EMPLOYEE_DETAILS,
    payload: employeeList
  }
}