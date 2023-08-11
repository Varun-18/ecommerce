import { memo, useState } from "react";
import SecondaryCategory from "./SecondaryCategory";

const PrimaryCategory = ({ primaryCategory }) => {
  const [showSubCategory, setShowSubCategory] = useState(false);
  return (
      <li
      onMouseEnter={() => setShowSubCategory(true)}
      onMouseLeave={() => setShowSubCategory(false)}
    >
      <div className="cursor-pointer py-2 px-2">
        <span className="uppercase text-white font-bold text-lg">
          {primaryCategory.category}
        </span>
      </div>
      <div className="absolute max-w-[700px] w-[500px] md:w-full right-0 left-0 mx-auto z-50">
        {showSubCategory ? (
          <SecondaryCategory
            subMenuItems={primaryCategory.subCategoryCollection.items}
          />
        ) : null}
      </div>
    </li>
  );
};

export default memo(PrimaryCategory);
