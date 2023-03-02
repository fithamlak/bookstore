import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Books from './routes/Books';
import Categories from './routes/Categories';
import './css/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="books" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
