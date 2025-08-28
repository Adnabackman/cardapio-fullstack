import './App.css'
import { Card } from './components/card/card'
import { useFoodData } from './components/hooks/useFoodData';

function App() {
  const { data } = useFoodData();

  console.log("O que veio em data:", data);

  if (!Array.isArray(data)) {
    console.log("Data não é array! Tipo:", typeof data, "Valor:", data);
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {Array.isArray(data) && data.map(foodData => (
          <Card 
            key={foodData.id} 
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App