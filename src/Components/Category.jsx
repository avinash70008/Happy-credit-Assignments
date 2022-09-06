import { useState } from "react";
import "./Category.css";

export const Category = ({ filtercatergor, discountsort, fetchOffers }) => {
  const [btnsign, setbtn] = useState("^");
  let [firstcheck, setfirst] = useState(false);
  let [secondcheck, setsecond] = useState(false);
  const [btnstyle, setbtnstyle] = useState("showarrow");

  // ________show-silter option_______________
  const handleBtn = () => {
    if (btnsign === "^") {
      setbtn("˅");
      setbtnstyle("showarrow");
    } else {
      setbtn("^");
      setbtnstyle("noarrow");
    }
  };
  // __________filter-category____________
  const sendcategory = (value) => {
    filtercatergor(value.innerHTML);
  };

  // __________________discount_____________________
  const showvla1 = () => {
    setfirst(!firstcheck);
    if (!firstcheck) {
      discountsort("<50");
    } else {
      fetchOffers();
    }
  };
  const showvla2 = () => {
    setsecond(!secondcheck);
    if (!secondcheck) {
      discountsort(">50");
    } else {
      fetchOffers();
    }
  };
  return (
    <div id="catergorybox">
      <b>Categories</b>
      <hr />
      <div className="catpp">
        <p
          onClick={(e) => {
            sendcategory(e.target);
          }}
          id="all"
          value="all"
          className="cat"
          name="all"
        >
          All
        </p>
        <p
          onClick={(e) => {
            sendcategory(e.target);
          }}
          value="men's clothing"
          className="cat"
          name="men"
        >
          Men's clothing
        </p>
        <p
          onClick={(e) => {
            sendcategory(e.target);
          }}
          value="jewelery"
          className="cat"
        >
          Jwellery
        </p>
        <p
          onClick={(e) => {
            sendcategory(e.target);
          }}
          value="electronics"
          className="cat"
        >
          Electronics
        </p>
        <p
          onClick={(e) => {
            sendcategory(e.target);
          }}
          value="women's clothing"
          className="cat"
        >
          Women's Clothing
        </p>
      </div>
      <hr />
      <b>
        Filter <span onClick={handleBtn}>{btnsign}</span>
      </b>
      <hr />
      <div className={btnstyle}>
        <div>
          <input
            onClick={() => {
              showvla1();
            }}
            type="checkbox"
            name=""
            className="checkk"
            value={"0-50%"}
          />
          <label className="dis" htmlFor="">
            0-50% off
          </label>
        </div>
        <div>
          {" "}
          <input
            onClick={() => {
              showvla2();
            }}
            type="checkbox"
            name=""
            className="checkk"
            value={"50-80%"}
          />
          <label className="dis" htmlFor="">
            50-80% off
          </label>
        </div>
        <hr />
      </div>
    </div>
  );
};
