import { createContext, useReducer } from "react"

// reducer must have state and action arguments
const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,
                // ...state.expenses existing expenses array, action.payload payload data coming from the form
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return{
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload),
            };
            case 'UPDATE_BUDGET':
                return{
                    ...state,
                    budget:  [...state.budget, action.payload],
                }
        default: 
        return state;
    }
}
const initialState = {
    budget: 2000,
    expenses: [
        {id: 12, name: 'Shopping', price: 50},
        {id: 13, name: 'Holiday Fund', price: 300},
        {id: 14, name: 'Gym', price: 35},
        {id: 15, name: 'Groceries', price: 90},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    //when using useReducer hook we  need to pass 2 arguments: 1: reducer, 2:  initialState
 const [state, dispatch]= useReducer(AppReducer, initialState);
 return (<AppContext.Provider value={{
    budget: state.budget,
    expenses: state.expenses,
    dispatch,
 }}>
    {props.children}
 </AppContext.Provider>)
}