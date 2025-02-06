import {useCallback, useEffect, useState} from "react";
import {getSeminars} from "../api/functions.ts";
import {List} from "../../../shared/List/ui/List.tsx";
import {SeminarId, SeminarType} from "../api/types.ts";
import {SeminarCard} from "../../SeminarCard/ui/SeminarCard.tsx";

interface ListProps {
    setIsOpenDelModal: (arg: boolean) => void;
    setEditModalOpen: (arg: boolean) => void;
    setItemToDelete: (id: SeminarId) => void;
    // handleEdit: (item: SeminarType) => void;
    setItemToEdit: (item: SeminarType) => void;
    setNeedToRerender: (arg: boolean) => void;
    needToRerender: boolean;
}

export const SeminarList = (props: ListProps) => {
    const {
        setIsOpenDelModal,
        setItemToDelete,
        setItemToEdit,
        setNeedToRerender,
        needToRerender,
        setEditModalOpen
    } = props;
    const [list, setList] = useState<SeminarType[]>([]);

    const handleDeleteClick = useCallback((id: SeminarId) => {
        setItemToDelete(id);
        setIsOpenDelModal(true);
    }, [setItemToDelete, setIsOpenDelModal]);

    const handleEditClick = useCallback((item: SeminarType) => {
        setItemToEdit(item);
        setEditModalOpen(true);
    }, [setItemToDelete, setEditModalOpen]);

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
                cardTemplate={(item) => <SeminarCard
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    item={item}
                />}
            /> : "Нет семинаров"}
        </>
    );
};
