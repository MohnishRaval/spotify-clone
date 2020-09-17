export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDzOm1lcxGAldXfw5JmlLlSBM11h0ucf3BHrNmWo_jLQ2J7jGryTX4MnK9CBi56KnqySsmNat9FnI_2T11xqkfmTijD6yV-R82pCsaajMGcXUcQtiH7N4oyNdS1oYgWQ6naQQSqLg4Mnqes5xU5gY1T8sqekmShaLWfKiYfyKLLXTaptWDn",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
