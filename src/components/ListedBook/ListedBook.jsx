import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "./List/WishList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListedBook = () => {
  const navigate = useNavigate();
  const notify = () => toast("Wow so easy!");
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold py-6 bg-gray-200 text-center rounded-lg">
        Books
      </h3>
      <div className="my-4 flex justify-center items-center">
        <select
          name="Sort by"
          className="py-3 px-6 rounded-lg text-base md:text-lg bg-[#23BE0A] text-white font-semibold outline-none"
        >
          <option disabled selected>
            Sort by
          </option>
          <option>Sort by Pages</option>
          <option>Sort by Rating</option>
          <option>Sort by Year</option>
        </select>
      </div>

      <Tabs>
        <TabList>
          <Tab>
            <NavLink to="/list">Read Books</NavLink>
          </Tab>
          <Tab>
            <NavLink to="/list/wishList">Wish List</NavLink>
          </Tab>
        </TabList>

        <TabPanel>
          <Outlet></Outlet>
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
