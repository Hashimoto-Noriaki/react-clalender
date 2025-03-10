import Modal from 'react-modal'
import { ChangeEvent,useState } from 'react'
import { format } from "date-fns";
import { NewSchedule } from "../../types/calendar";
import { PrimaryBtn } from '../atoms/PrimaryBtn'

type PropsType = {
    isOpen: boolean;
    closeModal:() => void; // 「引数を受け取らず、何も返さない関数
}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        width: "30%",
        height: "50vh",
        transform: "translate(-50%, -50%)",
    },
};

export const CreateScheduleModal = ({
    isOpen,
    closeModal,
}: PropsType) => {
    const [newSchedule,setNewSchedule] = useState<NewSchedule>({
        title:"",
        date: format(new Date(),"yy-MM--dd"),
        description: "",
    });

    const changeNewSchedule = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> 
    ) => {
        const { name,value } = event.target;//変更された name と value を取得
        setNewSchedule({...newSchedule,[name]: value})
        //{ ...newSchedule } → 今までの newSchedule のデータをコピー
        //[name]: value → 変更があった name の値だけ value に更新
        //他のデータはそのまま保持される！
    }

    return (
        <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
            <div>
                <h3 className="text-lime-800 text-center text-3xl pb-5 font-bold">
                    予定作成
                </h3>
                <form>
                    <div>
                        <label>タイトル</label>
                        <Input/>
                    </div>
                    <div>
                        <label>日付</label>
                        <Input/>
                    </div>
                    <div>
                        <label>内容</label>
                        <Input/>
                        <textarea 
                            placeholder="入力"
                        />
                    </div>
                    <PrimaryBtn>
                        作成
                    </PrimaryBtn>
                </form>
            </div>
        </Modal>
    )
}
