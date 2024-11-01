import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import WishList from "./List/WishList";
import ReadBooks from "./List/ReadBooks";
import { useState } from "react";

const ListedBook = () => {
  const [sort, setSort] = useState("");
  const handleSortList = (sortType) => {
    if (sortType === "sort by pages") {
      setSort("Pages");
    } else if (sortType === "sort by rating") {
      setSort("Rating");
    } else if (sortType === "sort by year") {
      setSort("Year");
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold py-6 bg-gray-200 text-center rounded-lg">
        Books
      </h3>
      <div className="my-4 flex justify-center items-center">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn py-3 px-6 rounded-lg text-base md:text-lg bg-[#23BE0A] text-white font-semibold outline-none"
          >
            {sort ? `Sort By: ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSortList("sort by pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => handleSortList("sort by rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSortList("sort by year")}>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks></ReadBooks>
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
