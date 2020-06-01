export const SUBMIT_MSG = 'SUBMIT_MSG';
export const DELETE_MSG = "DELETE_MSG";

export const submitMessage = (msg) => {
    return {type: SUBMIT_MSG, msg};
};

export function deleteMessage (msg) {
    return {type: DELETE_MSG, msg};
}