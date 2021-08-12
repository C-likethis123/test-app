import React from 'react';

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/v1/articles')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])
  return (
    <div>
      Articles
      {data.map(({title}) => <div>{title}</div>)}
    </div>
  );
};

export default App;
