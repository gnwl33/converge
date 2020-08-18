import React from 'react'; // { useState, useEffect }
import TopCTA from './TopCTA';
import HowItWorks from './HowItWorks';
import Satisfaction from './Satisfaction';
import BottomCTA from './BottomCTA';

const Home = () => {
  // const [response, setResponse] = useState('');
  // const [post, setPost] = useState('');
  // const [responseToPost, setResponseToPost] = useState('');

  // const callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // useEffect(() => {
  //   callApi()
  //     .then((res) => setResponse(res.express))
  //     .catch((err) => console.log(err));
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: post }),
  //   });
  //   const body = await response.text();

  //   setResponseToPost(body);
  // };

  return (
    <div>
      {
        // <p>{response}</p>
        // <form onSubmit={handleSubmit}>
        //   <p>
        //     <strong>Post to Server:</strong>
        //   </p>
        //   <input
        //     type="text"
        //     value={post}
        //     onChange={(e) => setPost(e.target.value)}
        //   />
        //   <button type="submit">Submit</button>
        // </form>
        // <p>{responseToPost}</p>
      }
      <TopCTA />
      <HowItWorks />
      <Satisfaction />
      <BottomCTA />
    </div>
  );
};

export default Home;
