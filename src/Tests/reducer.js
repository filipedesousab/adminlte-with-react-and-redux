const INITIAL_STATE = {
  abas: [
    { medico: 'Primeira aba', especialidade: '', key: '1' },
    { medico: 'Aba fixada', especialidade: '', key: '2' },
    { medico: 'Aba que ficará atualizando', especialidade: '', key: '3' },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'add_aba': {
      if (state.abas[state.abas.length - 1].fixed) {
        return { ...state, abas: [...state.abas, action.payload] };
      }
      const abas = [...state.abas];
      abas[abas.length - 1] = action.payload;
      return { ...state, abas };
    }
    case 'del_aba': {
      const abas = state.abas.filter(aba => aba.key !== action.payload);
      return { ...state, abas };
    }
    case 'fix_aba': {
      const abas = state.abas.map((aba) => {
        if (aba.key === action.payload) {
          const fixed = aba.fixed ? false : true;

          return { ...aba, fixed };
        }

        return { ...aba };
      });
      return { ...state, abas };
    }
    default:
      return state;
  }
};
