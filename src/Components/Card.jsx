import { useEffect, useState } from "react";
import { Category } from "./Category";
import "./Card.css";
import { Navbar } from "./Navbar";
import { Heading } from "./Heading.jsx";

export const Card = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);









  useEffect(() => {
    fetchOffers();
  }, []);
  const [Onedata, setonedata] = useState({});
  const fetchOffers = async () => {
    let d = [];
    const baseURL =
      "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((dataa) => setData(dataa));
  };
  // console.log(data);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleBtnpress = (item) => {
    setonedata(item);
    handleOpen();
  };
  // console.log(data);


  // _____________________________filter-data_______________________________________

  const filtercatergor = async (filtercatgory) => {
    let letter = filtercatgory.toLowerCase();
    if (letter === "all") {
      const baseURL =
        "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) => setData(dataa));
    } else if (letter !== "jwellery") {
      const baseURL =
        "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) =>
          setData(dataa.filter((item) => item.category === letter))
        );
    } else {
      const baseURL =
        "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) =>
          setData(dataa.filter((item) => item.category === "jewelery"))
        );
    }
  };



  // _________________________filter-by-discount_____________________________________________
  const discountsort = async (discountt) => {
    if (discountt === "<50") {
      const baseURL =
        "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) => setData(dataa.filter((item) => item.discount < 50)));
    } else {
      const baseURL =
        "https://still-spire-30210.herokuapp.com/https://happycreditoffers.herokuapp.com/offers";
      await fetch(baseURL)
        .then((resp) => resp.json())
        .then((dataa) => setData(dataa.filter((item) => item.discount >= 50)));
    }
  };
  return (
    <div>
      {<Navbar />}
      {<Heading />}
      <div id="mainpart">
        {
          <Category
            filtercatergor={filtercatergor}
            fetchOffers={fetchOffers}
            discountsort={discountsort}
          />
        }

        <div id="searchpart">
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            id="inputsearch"
            placeholder="Search"
          />
        </div>

        <div id="dataset">
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item) => (
              <div key={item.id}>
                <div
                  key={item.id}
                  className="imageutl"
                  onClick={() => {
                    handleBtnpress(item);
                  }}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    height: "30vh",
                    width: "30vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "30px",
                    border: "1px solid black",
                    cursor: "pointer",
                  }}
                >
                  <h1 className="tagline">{item.tag_line}</h1>
                  <div className="prodinfo">
                    <p className="titlepage">{item.title}</p>
                    <p className="titlepage1">{item.info}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
