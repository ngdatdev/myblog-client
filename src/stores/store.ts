import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseApi } from './api/baseApi';
import { authApis } from './api/auth/authApi';

export const createStore = (
    option?: ConfigureStoreOptions['preloadedState'] | undefined,
) => configureStore({
    reducer: {
        [authApis.reducerPath]: authApis.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['form/executeMutation/fulfilled'],
                ignoredPaths: [
                    'form.mutations.xye7Zo4Zuh39L3q1Eivs2.data',
                    'auth.storage.fileStorage',
                ],
            }
        }).concat(baseApi.middleware)
})

export const store = createStore();

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch