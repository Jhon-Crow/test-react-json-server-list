import {SeminarList} from "../../entities/SeminarList/ui/SeminarList.tsx";
import Dialogue from "../../features/Dialogue/ui/Dialogue.tsx";
import {useCallback, useState} from "react";
import {deleteSeminar} from "../../entities/SeminarList/api/functions.ts";
import {SeminarId} from "../../entities/SeminarList/api/types.ts";

export const Main = () => {
    const [isDelModalOpen, setDelModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<SeminarId>(-1);
    const [needToRerender, setNeedToRerender] = useState<boolean>(false);

    const deleteHandler = useCallback(async () => {
        if (itemToDelete) {
            await deleteSeminar(itemToDelete);
            setNeedToRerender(true);
        }
    }, [itemToDelete]);

    return (
        <main>
            <Dialogue onAcceptCallback={deleteHandler} setIsOpen={setDelModalOpen} header='Do you wфnt to delete item?' isOpen={isDelModalOpen}/>
            <SeminarList needToRerender={needToRerender} setNeedToRerender={setNeedToRerender} setIsOpenModal={setDelModalOpen} setItemToDelete={setItemToDelete}/>
        </main>
    );
};
