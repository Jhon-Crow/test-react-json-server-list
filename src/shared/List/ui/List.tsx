import {JSX} from "react";

interface ListProps<T> {
    list: T[];
    cardTemplate: (item: T) => JSX.Element;
}

export const List = <T,>(props: ListProps<T>) => {
    const {list, cardTemplate} = props;
    return (
        <>
            {list.map((item, index) => (
                <div key={index}>
                    {cardTemplate(item)}
                </div>
            ))}
        </>
    );
};