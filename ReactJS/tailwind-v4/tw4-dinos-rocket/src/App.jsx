import './app/Globals.css'

const dinossauros = [
  { nome: "Spinosaurus", altura: "4.5m", peso: "7.5t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Suchomimus", altura: "3.3m", peso: "3t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Irritator", altura: "2m", peso: "1t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Baryonyx", altura: "2.5m", peso: "2t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Siamosaurus", altura: "3m", peso: "3.5t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Oxalaia", altura: "3.5m", peso: "5t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Angaturama", altura: "2.5m", peso: "1.8t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Cristatusaurus", altura: "3m", peso: "2.5t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Sigilmassasaurus", altura: "3m", peso: "4t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Ceratosuchops", altura: "3m", peso: "2t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Ichthyovenator", altura: "2.5m", peso: "2.7t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Vallibonavenatrix", altura: "2.8m", peso: "3t", dieta: "Carnívoro", epoca: "Cretáceo" },
  { nome: "Dubreuillosaurus", altura: "2.2m", peso: "1.5t", dieta: "Carnívoro", epoca: "Jurássico" },
  { nome: "Torvosaurus", altura: "3.5m", peso: "4.5t", dieta: "Carnívoro", epoca: "Jurássico" },
  { nome: "Megalosaurus", altura: "3m", peso: "1t", dieta: "Carnívoro", epoca: "Jurássico" }
];

const App = () => {
  return (
    <div className="min-h-screen flex flex-wrap gap-4 justify-center items-center bg-gray-900 p-4">
      {dinossauros.map((dino, index) => (
        <div key={index} className="bg-gray-800 text-white p-4 rounded-xl shadow-lg w-64">
          <h2 className="text-xl font-bold">{dino.nome}</h2>
          <p><strong>Altura:</strong> {dino.altura}</p>
          <p><strong>Peso:</strong> {dino.peso}</p>
          <p><strong>Dieta:</strong> {dino.dieta}</p>
          <p><strong>Época:</strong> {dino.epoca}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
