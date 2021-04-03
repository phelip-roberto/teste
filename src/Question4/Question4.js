import axios from "axios";
import { useState } from "react";


const api = axios.create({
  baseURL: "https://randomuser.me/api/",
});


const Question4 = () => {

  // eslint-disable-next-line
  const [response, setResponse] = useState();

  async function consumeApi(param) {
    let res = await api.get(param)
    return res;
  }

  const Teste = () => {
    let param = "?page=1&results=5&seed=foobar";

    consumeApi(param);
    console.log(response);

    return (
      <div></div>
    )
  }

  return (
    <>
      <h1>Question 4</h1>
      <p>Create a component that makes an <u>external HTTP Request </u>to fetch user data as soon as it loads. Then iterate through
				the fetched data and display the picture thumbanail and full name of the person.
				Lastly, create a simple pagination with a previous and next buttons to fetch different pages of data. For this exercise, take these into account:
			</p>
      <ul>
        <li>The url to get the data is: https://randomuser.me/api/?page=X&results=Y&seed=foobar</li>
        <li>The <i>results</i> parameter indicates the number of items you want to return;</li>
        <li>The <i>page</i> parameter indicates the page you want to return;</li>
        <li>The <i>seed</i> parameter is to always return the same results (don't need to touch this parameter);</li>
        <li>The first page should be 1;</li>
        <li>There's an unlimited number of pages (don't worry about the total number of items);</li>
        <li>Each page should return 5 items.</li>
      </ul>
      {
        <Teste />
      }
    </>
  )
}

export default Question4