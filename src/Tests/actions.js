import genHash from 'random-hash';

const exemplos = [
  { medico: 'Fulano', especialidade: 'Fisioterapia' },
  { medico: 'Ciclano', especialidade: 'Nutrição' },
  { medico: 'Beltano', especialidade: 'Odontologia' },
];

export const addAba = () => {
  const index = parseInt(Math.random() * 3);
  const key = genHash();
  const exemplo = { ...exemplos[index], medico: `${exemplos[index].medico}-${key}`, key };

  return ({
    type: 'add_aba',
    payload: exemplo,
  });
};

export const delAba = key => ({
  type: 'del_aba',
  payload: key,
});

export const fixAba = key => ({
  type: 'fix_aba',
  payload: key,
});
