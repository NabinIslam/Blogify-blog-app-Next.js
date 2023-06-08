import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

const { user } = useContext(AuthContext);

const middleware = () => {
  return;
};

export default middleware;
