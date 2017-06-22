import { Change_Color } from '../constants/actionTypes.js'

export const color = (
    state = '',
    action
) => {
    switch (action.type) {
        case Change_Color: {
            return action.color
        }
        default:
            return state
    }
}
