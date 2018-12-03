export const login = (user, authenticated) => ({
  type: 'LOGIN',
  user,
  authenticated
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const sidedrawer = status => ({
  type: 'SIDEDRAWER',
  status
})