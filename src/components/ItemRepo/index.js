import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer" className="ver-repositorio">
        Ver Repositório
      </a>
      <button className="remover" onClick={() => handleRemoveRepo(repo.id)}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
