import React from "react";

const Navbar = ({ filterItem, MenuList }) => {
    return (

            <nav className="navbar">
                <div className="btn-group"> 
                    {
                    MenuList.map((curEle)=>{
                        return (
                    <button className="btngroup--items" onClick={() => filterItem(curEle)} key={curEle}>{curEle}</button>
                            
                        );
                    })
                }
                </div>
                </nav>


    );
};
export default Navbar;