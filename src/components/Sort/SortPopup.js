import React from "react";

const SortPopup = ({ items, onChangeActiveSortItem, activeSortItem }) => {

    return (
        <div className="sort__popup">
            <ul>
                {items.map((item, index) => {
                    return (
                        <li
                            className={activeSortItem === index ? "active" : ""}
                            key={`${index}_${item.type}`}
                            onClick={() => onChangeActiveSortItem(index)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SortPopup;
