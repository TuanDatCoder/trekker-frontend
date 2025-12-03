import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// SỬA DÒNG NÀY - QUAN TRỌNG NHẤT
import storage from 'redux-persist/es/storage'; // <-- Đổi thành /es/storage

import { api } from '../services/api';
import { authApi } from '../services/authApi';

const persistConfig = {
  key: 'root',
  storage, // <-- giờ đã đúng
  whitelist: ['project'], // bạn có slice tên project đúng không?
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authApi.reducerPath]: authApi.reducer,
  // Nếu bạn có thêm slice khác cần persist thì thêm vào đây
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, authApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;