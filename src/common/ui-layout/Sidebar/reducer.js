const INITIAL_STATE = {
  menu: [
    {
      href: '#',
      label: 'Testes',
      icon: 'fa fa-edit',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
