import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [s, setS] = useState<any>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const promise = await axios.get('http://localhost:3001/ping');
      setS(promise.data);
    };
    fetchData();
  }, [setS]);

  return (
    <div>
      {s}
    </div>
  );

};
export default App;