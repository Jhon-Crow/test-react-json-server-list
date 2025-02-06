import {SeminarList} from "../../entities/SeminarList/ui/SeminarList.tsx";
import Dialogue from "../../features/Dialogue/ui/Dialogue.tsx";
import {useCallback, useState} from "react";
import {deleteSeminar} from "../../entities/SeminarList/api/functions.ts";
import {SeminarId, SeminarType} from "../../entities/SeminarList/api/types.ts";
import {SeminarForm} from "../../features/SeminarForm/ui/SeminarForm.tsx";

export const Main = () => {
    const [isDelModalOpen, setDelModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<SeminarId>(-1);
    const [itemToEdit, setItemToEdit] = useState<SeminarType>();
    const [needToRerender, setNeedToRerender] = useState<boolean>(false);

    const deleteHandler = useCallback(async () => {
        if (itemToDelete) {
            await deleteSeminar(itemToDelete);
            setNeedToRerender(true);
        }
    }, [itemToDelete]);

    return (
        <main>
            <Dialogue onAcceptCallback={deleteHandler} setIsOpen={setDelModalOpen} header='Do you want to delete item?' isOpen={isDelModalOpen}/>
            <Dialogue hideButtons={true}  setIsOpen={setEditModalOpen} header={<SeminarForm setNeedToRerender={setNeedToRerender} setIsOpen={setEditModalOpen} item={itemToEdit}/>} isOpen={isEditModalOpen}/>
            <SeminarList
                setEditModalOpen={setEditModalOpen}
                setItemToEdit={setItemToEdit}
                needToRerender={needToRerender}
                setNeedToRerender={setNeedToRerender}
                setIsOpenDelModal={setDelModalOpen}
                setItemToDelete={setItemToDelete}
            />
        </main>
    );
};
