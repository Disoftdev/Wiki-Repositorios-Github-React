import { useState } from 'react';
import gitLogo from '../assets/logo-github.jpg';
import Input from '../components/input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';
import { Container } from './styles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo('');
        } else {
          alert('Repositório já adicionado');
        }
      }
    } catch (error) {
      alert('Repositório não encontrado');
      console.error(error);
    }
  };

  const handleRemoveRepo = (id) => {
    const filteredRepos = repos.filter(repo => repo.id !== id);
    setRepos(filteredRepos);
  };

  return (
    <BrowserRouter basename="/Wiki-Repositorios-Github-React">
      <Container>
        <img src={gitLogo} width={72} height={72} alt="github logo" />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repos.map(repo => (
          <ItemRepo 
            key={repo.id} 
            repo={repo} 
            handleRemoveRepo={handleRemoveRepo} 
          />
        ))}
      </Container>
    </BrowserRouter>
  );
}

export default App;
