const INITIAL_STATE = {
  menu: [
    {
      href: '#',
      label: 'Home',
      icon: 'dashboard',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
