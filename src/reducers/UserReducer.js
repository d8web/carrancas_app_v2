export const initialState = {
    avatar: '',
    favorites: []
}

export const UserReducer = (state, action) => {
    let favorites = [ ...state.favorites ]
    switch(action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;
        case 'setFavorites':
            let id = action.payload.data.id;
            let index = favorites.findIndex(item => item.id === id);

            if(index > -1) {
                favorites.splice(index, 1)
            } else {
                favorites.push({
                    ...action.payload.data,
                });
            }

            return { ...state, favorites }
        break;
        default:
            return state;
    }
}