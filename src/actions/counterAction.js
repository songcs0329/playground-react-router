import { CHANGE_VALUE, DECREASE_COUNT, INCREASE_COUNT } from "../constants"

export const increase = () => ({ type: INCREASE_COUNT })
export const decrease = () => ({ type: DECREASE_COUNT })
export const changeValue = value => ({ type: CHANGE_VALUE, value })
