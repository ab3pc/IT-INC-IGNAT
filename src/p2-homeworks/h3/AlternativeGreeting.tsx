import React from "react";
import s from "./Greeting.module.css";


type ModalPropsType = {
    name:string
    showModal: (modal:boolean)=> void
    modal:boolean
}

const AlternativeGreeting:React.FC<ModalPropsType> = ({name, showModal, modal}) => {
    const modalRef = React.useRef<HTMLDivElement>(null);
    const clickOutside = (e:any) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            showModal(false);
          }
    }
    const handlerIsShowModal = () => {
    showModal(!modal)
}

React.useEffect(() => {
    document.addEventListener("click", clickOutside, true);
    return () => {
      document.removeEventListener("click", clickOutside, true);
    };
  });

    return (
        <div ref = {modalRef} className={s.modal}>
            <div className={s.modal__content}>
            <h3>Hello </h3>
            <p style={{fontSize:18}}>{name}</p>
            <div className={s.modal__btn}><button onClick={handlerIsShowModal}>X</button></div>
            </div>
           
          
        </div>
    );
}

export default AlternativeGreeting;
