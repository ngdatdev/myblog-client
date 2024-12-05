// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'


// export interface IUserInfo {
//     email: string
//     avatarUrl: string | null
//     fullName: string | null
//     role: string | null
// }
// export interface IAuth {
//     user: IUserInfo
//     storage: IStorage
// }
// export interface IStorage {
//     fileStorage: File | null
//     selectedId: string
// }
// const initialState: IAuth = {
//     user: {
//         email: '',
//         avatarUrl: null,
//         fullName: null,
//         role: null,
//     },
//     storage: {
//         fileStorage: null,
//         selectedId: '',
//     }
    
// }
// const slice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         updateUserInfo: (state, action) => {
//             state.user = action.payload
//         },
//         updateUserAvatar: (state, action) => {
//             state.user.avatarUrl = action.payload
//         },
//         updateUserFullName: (state, action) => {
//             state.user.fullName = action.payload
//         },
//         updateStorage: (state, action) => {
//             state.storage.fileStorage = action.payload
//         },
//         updateSelectedId: (state, action) => {
//             state.storage.selectedId = action.payload
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addMatcher(
//                 authApis.endpoints.requestLogin.matchFulfilled,
//                 (state, action) => {
//                     const data = action.payload.body
//                     state.user.email = data.user.email
//                     state.user.avatarUrl = data.user.avatarUrl
//                     state.user.fullName = data.user.fullName

//                     webStorageClient.setToken(data.accessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.CALL_ACCESS_TOKEN, data?.callAccessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.setRefreshToken(data.refreshToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.USER_AVATAR, data?.user?.avatarUrl, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.USER_FULLNAME, data?.user?.fullName, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.EMAIL, data?.user?.email, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                 },
//             )
//             .addMatcher(
//                 authApis.endpoints.requestAuthGoogle.matchFulfilled,
//                 (state, action) => {
//                     const data = action.payload.body
//                     state.user.email = data.user.email
//                     state.user.avatarUrl = data.user.avatarUrl
//                     state.user.fullName = data.user.fullName
//                     webStorageClient.setToken(data.accessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.CALL_ACCESS_TOKEN, data?.callAccessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.setRefreshToken(data.refreshToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.USER_AVATAR, data?.user?.avatarUrl, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.USER_FULLNAME, data?.user?.fullName, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.EMAIL, data?.user?.email, {
//                         maxAge: 60 * 60 * 24,
//                     })

//                 },
//             )
//             .addMatcher(
//                 authApis.endpoints.requestRefreshAccessToken.matchFulfilled,
//                 (state, action) => {
//                     const data = action.payload.body

//                     webStorageClient.setToken(data.accessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.set(constants.CALL_ACCESS_TOKEN, data?.callAccessToken, {
//                         maxAge: 60 * 60 * 24,
//                     })
//                     webStorageClient.setRefreshToken(data.refreshToken, {
//                         maxAge: 60 * 60 * 24,
//                     })

//                 },
//             )
//             .addMatcher(
//                 authApis.endpoints.requestConfirmEmail.matchFulfilled,
//                 (state, action) => { },
//             )
//             .addMatcher(
//                 authApis.endpoints.requestLogout.matchFulfilled,
//                 (state, action) => { },
//             )
//     },
// })

// export const {
//     updateUserInfo,
//     updateUserAvatar,
//     updateUserFullName,
//     updateStorage,
//     updateSelectedId
// } = slice.actions

// export default slice.reducer
