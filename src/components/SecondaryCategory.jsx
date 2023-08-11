import React from "react";

const SecondaryCategory = ({ subMenuItems }) => {
  return (
    <ul className="flex justify-start gap-10 p-4 bg-white shadow-lg rounded-lg ">
      {subMenuItems.map((subItem, index) => {
        return (
          <li key={index}>
            <div className="px-1 uppercase font-semibold ">
              <span>{subItem.title}</span>
            </div>
            <div>
              <ul >
                {subItem.subCategoryItemsCollection.items.map(
                  (level3Item, index) => {
                    return (
                      <li
                        className="p-0.5 hover:text-red-500 cursor-pointer"
                        key={index}
                      >
                        {level3Item.name}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SecondaryCategory;
