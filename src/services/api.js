import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com', 
});

const handleSearchRepo = async (repoName) => {
  try {
    const { data } = await api.get(`/repos/${repoName}`); // Corrigido aqui
    console.log(data);  
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Repositório não encontrado");
    } else {
      console.error("Erro ao buscar repositório:", error);
    }
  }
};
