import React from 'react'
import s from './UploadVideoPopup.module.css'
import { IoCloseCircleOutline } from "react-icons/io5";

const DialogTitlebar = ({loading}) => {
    return (
        <div className={s.titleBar}>
            <div className={s.tempTileFix}>
                <h4>Upload Video</h4>
                <IoCloseCircleOutline className={s.closeicon} />
            </div>
            <div className={`${s.topLoadBar} ${!loading ? s.inactive:''}`}>
                <div className={s.loadIndicator}></div>
            </div>
        </div>
    )
}

export default DialogTitlebar