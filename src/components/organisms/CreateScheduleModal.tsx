import Modal from 'react-modal'

type PropsType = {
    isOpen:boolean;
    closeModal: () => void;
}

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        width: "30%",
        height: "50vh",
        transform: "translate(-50%,-50%)"
    }
}

export const CreateScheduleModal = ({ isOpen,closeModal }: PropsType) => {
    return (
        <Modal isOpen={isOpen} style = {customStyles} onRequestClose={closeModal}>
            <div>
                <h3 className="text-lime-800 text-center font-bold text-3xl pb-5">
                    予定作成
                </h3>
            </div>
        </Modal>
  )
}