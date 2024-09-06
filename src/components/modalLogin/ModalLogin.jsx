"use client"

import React, { useState } from "react";

//estilos
import { Modal, Row, Col, Segmented, Input, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
import style from "./ModalLogin.module.css";
import Image from "next/image";



const ModalLogin = ({ModalOpen, setModalOpen}) => {

    const [option, setOption ] = useState('SingUp');

    const handleChangeOption = (value) => {
        setOption(value)
    };

    const handleclose = () =>{ 
        setModalOpen(false)
    }

    return(
        <div >
            <Modal
                open = {ModalOpen}
                footer={null}
                className={style.modalcontainer}
                onCancel={handleclose}
            >
                <Row>
                    <Col md={12}>
                        <Row className={style.containersegment}>
                            <Segmented 
                                options={["SingUp", "Log In"]}
                                onChange={(value) => { handleChangeOption(value)}}
                                className={style.segment}
                            />              
                        </Row>

                        {
                            option === "SingUp" ? 
                            (
                                <>
                                    <Row className={style.containerEmail}>
                                        <Input size="small" className={style.inputs} placeholder="Email" prefix={<UserOutlined/>}/>
                                    </Row>
                                    <Row className={style.containerinputs}>
                                        <Input.Password className={style.inputs} placeholder="Contraseña" size="small"/>
                                    </Row>
                                    <Row className={style.containerinputs}>
                                        <Input.Password className={style.inputs} placeholder="Confirma la Contraseña" size="small"/>
                                    </Row>
                                    <Row className={style.containerButton}>
                                        <Button className={style.button}>Sign Up</Button>
                                    </Row>
                                </>
                            ): 
                            (
                                <>
                                    <Row className={style.containerEmail}>
                                        <p className={style.inputs}>we love having you back</p>
                                    </Row>
                                    <Row className={style.containerinputs}>
                                        {/* <p>Email</p> */}
                                        <Input size="small" placeholder="Email" className={style.inputs} prefix={<UserOutlined/>}/>
                                    </Row>
                                    <Row className={style.containerinputs}>
                                        {/* <p>Contraseña</p> */}
                                        <Input.Password placeholder="Contraseña" className={style.inputs} size="small"/>
                                    </Row>
                                    <Row className={style.containerButton}>
                                        <Button className={style.button}>Login</Button>
                                    </Row>
                                </>
                            )
                        }

                    </Col>
                    <Col md={12}>
                        <Image 
                            width={350}
                            height={400}
                            src={"/images/imagenlogin.png"}
                            className={style.comtainerimagen}
                            alt="imagenlogin"          
                        />
                    </Col>

                </Row>

            </Modal>
        </div>
    )
}

export default ModalLogin;