import Card from './components/cards/cards';
import cartman from './components/cards/public/img/Cartman.jpg';
import butters from './components/cards/public/img/butters.jpg';
import mackey from './components/cards/public/img/mackey.jpg';

function App() {
  return (
    <div>
      <div className='grid grid-rows-3'>
        <Card _nom='Boulaich' _prenom='Bachir' _age='22' _bgcolor='bg-red-600' _height='h-60' _width='w-1/4' _img={cartman}/>
        <Card _nom='Salija' _prenom='Kadri' _age='24' _bgcolor='bg-blue-600' _height='h-90' _width='w-1/3' _img={butters}/>
        <Card _nom='?' _prenom='Elias' _age='28' _bgcolor='bg-purple-600' _height='h-60' _width='w-1/4' _img={mackey}/>
      </div>
      
    </div>
  );
}

export default App;
