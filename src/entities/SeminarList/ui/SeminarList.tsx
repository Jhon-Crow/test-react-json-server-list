import {useEffect, useState} from "react";
import {getSeminars} from "../api/functions.ts";
import {List} from "../../../shared/List/ui/List.tsx";
import {SeminarType} from "../api/types.ts";
import {SeminarCard} from "../../SeminarCard/ui/SeminarCard.tsx";

export const SeminarList = () => {
    const [list, setList] = useState<SeminarType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const seminars = await getSeminars();
                setList(seminars);
            } catch (error) {
                console.error("Error fetching seminars:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {list.length ? <List
                list={list}
                cardTemplate={(item) => <SeminarCard item={item}/>}
            /> : "Нет семинаров"}
        </>
    );
};
