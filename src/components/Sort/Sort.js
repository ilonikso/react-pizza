import React, { useEffect, useRef, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import SortPopup from "./SortPopup";

const Sort = ({items, onSortByChange}) => {
    // hook for ref to popup block
    const sortRef = useRef(null);

    // hook for state show popup
    const [isVisiblePopup, setIsVisiblePopup] = useState(false);
    // function to show/hide popup
    const toggleVisiblePopup = () => {
        setIsVisiblePopup(!isVisiblePopup);
    };

    // function to handle click
    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setIsVisiblePopup(false);
        }
    };

    // hook to handle click on body
    useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    // hook for state active item
    const [activeSortItem, setActiveSortItem] = useState(0);

    const onChangeActiveSortItem = (item) => {
        setActiveSortItem(item);
        setIsVisiblePopup(false);
        onSortByChange(items[item].type);
    };

    // Active label name for active sort item
    const activeSortLabel = items[activeSortItem].name;

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <ArrowIcon visible={isVisiblePopup}/>

                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeSortLabel}</span>
            </div>

            {isVisiblePopup && (
                <SortPopup
                    items={items}
                    onChangeActiveSortItem={onChangeActiveSortItem}
                    activeSortItem={activeSortItem}
                />
            )}
        </div>
    );
};

export default Sort;
