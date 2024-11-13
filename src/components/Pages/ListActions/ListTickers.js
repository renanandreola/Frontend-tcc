import "./ListTickers.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../layout/Header";
import Card from "../../layout/Card";

export default (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:3030/chatterbot/allActives"
      );
      setData(response.data.actives);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  if (data.length > 0) {
    return (
      <>
        <Header></Header>

        <h1>Ações cadastradas na B3</h1>

        <div className="listing-tickers">
          {data.map((action) => (
            <Card code={action.code} name={action.name}></Card>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header></Header>

        <h1>Carregando ativos...</h1>
      </>
    );
  }
};
