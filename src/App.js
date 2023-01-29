import Banner from './components/Banner';
import CapsuleContainer from './components/CapsuleContainer';
import Pagination from './components/Pagination';
import SearchFilters from './components/SearchFilters';
import { SpaceProvider } from './context/ContextProvider';

function App() {
  return (
    <SpaceProvider>
      <div className="bg-black pb-10">
        <Banner/>
        <SearchFilters/>
        <CapsuleContainer/>
        <Pagination/>
      </div>
    </SpaceProvider>
  );
}

export default App;
