import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore ({
    reducer: rootReducer,
    middleware: getDefaultReducer => {
        return getDefaultReducer({
            serializableCheck: false,
        })
    },
    devTools: true,
});

export default store;
