import {useCallback, useEffect, useState} from "react";
import {getSeminars} from "../api/functions.ts";
import {List} from "../../../shared/List/ui/List.tsx";
import {SeminarId, SeminarType} from "../api/types.ts";
import {SeminarCard} from "../../SeminarCard/ui/SeminarCard.tsx";

interface ListProps {
    setIsOpenModal: (arg: boolean) => void;
    setItemToDelete: (id: SeminarId) => void;
    setNeedToRerender: (arg: boolean) => void;
    needToRerender: boolean;
}

export const SeminarList = (props: ListProps) => {
    const { setIsOpenModal, setItemToDelete, setNeedToRerender, needToRerender } = props;
    const [list, setList] = useState<SeminarType[]>([]);

    const handleDeleteClick = useCallback((id: SeminarId) => {
        setItemToDelete(id);
        setIsOpenModal(true);
    }, [setItemToDelete, setIsOpenModal]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const seminars = await getSeminars();
                setList(seminars);
            } catch (error) {
                console.error("Error fetching seminars:", error);
            }
        };
        fetchData().then(() => setNeedToRerender(false));
    }, [needToRerender]);

    return (
        <>
            {list.length ? <List
                list={list}
                cardTemplate={(item) => <SeminarCard handleDeleteClick={handleDeleteClick} item={item}/>}
            /> : "Нет семинаров"}
        </>
    );
};
