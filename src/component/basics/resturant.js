import React, { useState } from "react";
import "./style.css";
import Menucard from "./Menucard.js";
import Menuapi from "./Menuapi.js";
import Navbar from "./Navbar";
const uniqueList = [...new Set(Menuapi.map((curEle) => {
    return curEle.category;
            }
        )
    ),"All",
];
console.log(uniqueList);
const Resturant = () => {
    const [MenuList,SetMenuList]=useState(uniqueList);

    const filterItem = (category) => {
        if(category=== "All"){
            return SetMenuData(Menuapi);
        }
        const UpdateList = Menuapi.filter((curEle) => {
            return curEle.category === category;
        });
        SetMenuData(UpdateList);
    };

    const [MenuData, SetMenuData] = useState(Menuapi);
    return (
        <>
          <Navbar filterItem={filterItem} MenuList={MenuList}/>
            <Menucard TheMenuData={MenuData} />
        </>
    );
          
};
export default Resturant;
