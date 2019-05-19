import { CHANGE_VIEW } from "./types";

export const changeView = (viewName) => ({
    type: CHANGE_VIEW,
    payload: viewName
});