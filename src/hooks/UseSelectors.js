import { useSelector } from 'react-redux';

export const useSelectors = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);
  const userEmail = useSelector(state => state.auth.user.email);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const selectIsLoading = useSelector(state => state.contacts.isLoading);
  const selectError = useSelector(state => state.contacts.error);

  return {
    contacts,
    filter,
    isLoggedIn,
    userName,
    userEmail,
    isRefreshing,
    selectIsLoading,
    selectError,
  };
};
