import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Row, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

import userpic from "../images/user.svg"
import graduate from "../images/profile/graduation-hat.svg"
import letter from "../images/profile/envelope.svg"
import phone from "../images/profile/phone-call.svg"
import web from "../images/profile/web.jpeg"
import web2 from "../images/profile/web2.png"
import web3 from "../images/working/web3.png"
import web4 from "../images/working/web4.jpg"
import web5 from "../images/working/web5.jpg"
import web6 from "../images/working/web6.jpg"

const items = [
    { src: web }, { src: web2 }, { src: web3 }, { src: web4 }, { src: web5 }, { src: web6 }
];


export default function Working() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);

    const toggle = () => setModal(!modal);
    const toggle2 = () => setModal2(!modal2);
    const toggle3 = () => setModal3(!modal3);
    const toggle4 = () => setModal4(!modal4);
    const toggle5 = () => setModal5(!modal5);
    const toggle6 = () => setModal6(!modal6);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    });

    return (
        <div className="working mt-3 mb-3">
            <div className="container">
                <Row>
                    <Col lg="8" className="working-left pt-3">
                        <h2>รับออกแบบเว็บไซต์ Adobe XD</h2>
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                        <Row className="working-small mt-2">
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web} alt="web" className="w-100" height="100%" onClick={toggle}></img>
                                <Modal isOpen={modal} toggle={toggle} >
                                    <img src={web} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web2} alt="web" className="w-100" height="75px" onClick={toggle2}></img>
                                <Modal isOpen={modal2} toggle={toggle2} >
                                    <img src={web2} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web3} alt="web" className="w-100" height="75px" onClick={toggle3}></img>
                                <Modal isOpen={modal3} toggle={toggle3} >
                                    <img src={web3} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web4} alt="web" className="w-100" height="75px" onClick={toggle4}></img>
                                <Modal isOpen={modal4} toggle={toggle4} >
                                    <img src={web4} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web5} alt="web" className="w-100" height="75px" onClick={toggle5}></img>
                                <Modal isOpen={modal5} toggle={toggle5} >
                                    <img src={web5} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web6} alt="web" className="w-100" height="75px" onClick={toggle6}></img>
                                <Modal isOpen={modal6} toggle={toggle6} >
                                    <img src={web6} alt="web" className="w-100" height="100%"></img>
                                </Modal>
                            </Col>
                        </Row>
                        <div className="mt-5">
                            <h3>รายละเอียดของงาน</h3>
                            <p>ออกแบบโลโก้ให้ 2 แบบ เลือกได้ 1 แบบ แก้ไขได้ 2 ครั้ง ส่งเป็นไฟล์ AI หรือไฟล์อื่นๆที่ลูกค้าต้องการ</p>
                            <h3>สิ่งที่ลูกค้าจะได้รับ</h3>
                            <p>-ได้รับงานตัวอย่างเป็นไฟล์ PDF สามารถแก้ไขได้ 2 ครั้ง และหลังจากลูกค้าตกลงจะรับงานแล้วทางเราจะส่งให้เป็น ไฟล์ .XD และไฟล์ PDF ให้ทางอีเมล์</p>
                            <Row>
                                <Col lg="6">
                                    <h3>ระยะเวลาในการทำงาน</h3>
                                    <p>- 2 วัน</p>
                                </Col>
                                <Col lg="6">
                                    <h3>ราคางาน</h3>
                                    <p>2000 ฿</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="mt-5">
                            <h3>รีวิวจากผู้ว่าจ้าง</h3>
                            <div className="comment">
                                <div className="d-flex pl-2 pt-2">
                                    <img src={userpic} alt="userpic"></img>
                                    <div className="mt-2 ml-3">
                                        <strong>Paphawinya oconer</strong>
                                        <div>12/02/21</div>
                                    </div>
                                </div>
                                <p className="mt-2 col-11">ทำงานดี ออกแบบสวย โดนใจมากค่ะ บรีฟงานให้และออกแบบงานได้ถูกใจ งานดี งานสวย ทำงานมืออาชีพมากค่ะ พูดจาดี บริการรวดเร็ว ตอบไว และให้คำปรึกษาดีค่ะ เต็ม 100 ให้ 100 เต็ม 1,000 ให้ 1,000 ค่า แนะนำ มืออาชีพที่แท้ทรู</p>
                            </div>
                            <div className="comment">
                                <div className="d-flex">
                                    <img src={userpic} alt="userpic"></img>
                                    <div className="mt-2 ml-3">
                                        <strong>Paphawinya oconer</strong>
                                        <div>12/02/21</div>
                                    </div>
                                </div>
                                <p className="mt-2 col-11">ทำงานดี ออกแบบสวย โดนใจมากค่ะ บรีฟงานให้และออกแบบงานได้ถูกใจ งานดี งานสวย ทำงานมืออาชีพมากค่ะ พูดจาดี บริการรวดเร็ว ตอบไว และให้คำปรึกษาดีค่ะ เต็ม 100 ให้ 100 เต็ม 1,000 ให้ 1,000 ค่า แนะนำ มืออาชีพที่แท้ทรู</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="4" className="mt-2">
                        <div className="working-right col-10 mx-auto">
                            <div>
                                <div className="d-flex pt-3">
                                    <img src={userpic} alt="userpic"></img>
                                    <h4 className="pt-3 ml-2">พงศ์พิพัฒน์ ธวัชชัยดำรงค์</h4>
                                </div>
                            </div>
                            <div>
                                <div className="mt-3">
                                    <p>ป๋าใจดีสปอร์ต กทม</p>
                                </div>
                                <div className="mt-3">
                                    <h5>สมัครสมาชิกเมื่อ 18/02/2564</h5>
                                </div>
                                <div className="mt-3">
                                    <h5>เรทติ้ง</h5>
                                    <div className="">
                  <StarRatings
                    rating={2.5}
                    starDimension="25px"
                    starSpacing="2px"
                    starRatedColor="#FFBF00"
                  />
                </div>
                                </div>
                                <div className="mt-3">
                                    <h3>Contact</h3>
                                    <div className="d-flex justify-content-start">
                                        <div><img src={phone} alt="user" height="20px" /></div>
                                        <div className="ml-2"><h5>0807854451</h5></div>
                                    </div>
                                    <div className="d-flex justify-content-start">
                                        <div><img src={letter} alt="user" height="20px" /></div>
                                        <div className="ml-2"><h5>rabite02013@hotmail.com</h5></div>
                                    </div>
                                    <div className="text-center mb-2 mt-2">
                                        <button type="button" className="btn-home text-center p-1 pl-4 pr-4 chat" >แชท</button>
                                        </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="other-work mt-5 col-10 mx-auto">
                            <h3>งานอื่นๆที่รับทำ</h3>
                            <Card>
                                <CardImg top src={web2} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h3">ออกแบบเว็บไซต์ tbegin</CardTitle>
                                    <CardSubtitle tag="h5" className="text-right mb-2 text-muted">Freelance : kaikyheavyday</CardSubtitle>
                                    <CardText className="text-left ">Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <div className="like-price text-right">
                                        <div>
                                            <CardText><h5>1000 ฿</h5></CardText>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
