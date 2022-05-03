const url = process.env.REACT_APP_TODOS_URL;

export const fetchData = setData => 
{
    fetch(url)
    .then(res => res.json())
    .then(dataFromServer => 
    {
      	setData(dataFromServer);
    })
    .catch(error => 
    {
      	throw new Error(error);
    });
};

export const fetchPost = (item, setTodoData) => 
{
	  const options = 
    {
      method: 'POST',
      headers: 
      {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    };

    fetch(url, options)
    .then(res => 
    {
    	if (res.status === 200) 
    	{
    		fetchData(setTodoData);
    	}
    })
    .catch(error => 
    {
    	throw new Error(error);
    });
};

export const sendMethodToServer = (method, id, setTodoData) => 
{
	  const options = 
    {
      method,
      headers: 
      {
        'Content-Type': 'application/json'
      }
    };

      fetch(`${url}/${id}`, options)
      .then(res => 
      {
      	if (res.status === 200) 
      	{
      		fetchData(setTodoData);
      	}
      })
      .catch(error => 
      {
      	throw new Error(error);
      });
};