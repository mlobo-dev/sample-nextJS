import { useState } from 'react';
function Home() {
  return (
    <div>
      <div>Home 2</div>
      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default Home;
