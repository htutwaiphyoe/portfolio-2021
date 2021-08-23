import classes from "./List.module.scss";
import Item from "../Item/Item";

function List({ list, activeClass }) {
    return (
        <div
            className={`${classes.list} ${list.active ? activeClass : ""}`}
            data-content={true}
            id={list.id}
        >
            {list.items.map((item, i) => {
                return i % 2 === 0 ? (
                    <Item item={item} key={i}>
                        <Item.Content left={true} />
                        <Item.Rounder />
                        <Item.Empty />
                    </Item>
                ) : (
                    <Item item={item} key={i}>
                        <Item.Empty />
                        <Item.Rounder />
                        <Item.Content left={false} />
                    </Item>
                );
            })}
        </div>
    );
}

export default List;
