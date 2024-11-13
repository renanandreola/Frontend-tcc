import "./Actives.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ActivesInitial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
    // const intervalId = setInterval(fetchData, 4000);
    // return () => clearInterval(intervalId);
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:3030/chatterbot/actives"
      );
      setData(response.data.response);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <>
      {data && (
        <div className="">
          <div className="ups-and-downs">
            <div className="ups">
              <span>
                {" "}
                <img
                  className="arrows"
                  src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-haut-vert.png"
                  alt=""
                />{" "}
                Maiores altas
              </span>

              {data.more &&
                data.more.map((action) => (
                  <div className="active" key={action.cd_stock}>
                    <div className="variations-name">
                      <span className="action-cd_stock">{action.cd_stock}</span>
                    </div>

                    <div className="variations-div">
                      <span className="action-variation-more">
                        +{action.variation}%
                      </span>
                    </div>

                    <div className="variations-price">
                      <span className="action-vl_close">
                        {action.vl_close.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="downs">
              <span>
                <img
                  className="arrows"
                  src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-bas-rouge.png"
                  alt=""
                />{" "}
                Maiores baixas
              </span>

              {data.less &&
                data.less.map((action) => (
                  <div className="active" key={action.cd_stock}>
                    <div className="variations-name">
                      <span className="action-cd_stock">{action.cd_stock}</span>
                    </div>

                    <div className="variations-div">
                      <span className="action-variation-less">
                        {action.variation}%
                      </span>
                    </div>

                    <div className="variations-price">
                      <span className="action-vl_close">
                        {action.vl_close.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
      <br></br>
      <span>
        <a href="/tickers">Veja todas as ações da B3</a>
      </span>
    </>
  );
}

export default ActivesInitial;
