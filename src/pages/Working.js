import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom'

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
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                        <Row className="working-small mt-2">
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web} alt="web" className="w-100" height="100%"></img>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web2} alt="web" className="w-100" height="75px"></img>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web3} alt="web" className="w-100" height="75px"></img>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web4} alt="web" className="w-100" height="75px"></img>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web5} alt="web" className="w-100" height="75px"></img>
                            </Col>
                            <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                                <img src={web6} alt="web" className="w-100" height="75px"></img>
                            </Col>
                        </Row>
                        <div className = "mt-5">
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
                    </Col>
                    <Col lg="4" className="mt-2">
                        <div className="working-right col-10 mx-auto">
                        <div>
                            <div className="d-flex pt-3">
                                <img src ={userpic} alt ="userpic"></img>
                                <h4 className ="pt-3 ml-2">พงศ์พิพัฒน์ ธวัชชัยดำรงค์</h4>
                            </div>
                        </div>
                        <div>
                            <div className="mt-3">
                                <p>ป๋าใจดีสปอร์ต กทม</p>
                            </div>
                            <div className="mt-3">
                                <h5>สมัครสมาชิกเมื่อ 18/02/2564</h5>
                            </div>
                            <div className="d-flex justify-content-around mt-3">
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>ผลงาน</h5>
                                </div>
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>เรทติ้ง</h5>
                                </div>
                                <div className="text-center">
                                    <h3>0</h3>
                                    <h5>สำเร็จ</h5>
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
                                <div className="d-flex justify-content-start">
                                    <div><img src={graduate} alt="user" height="20px" /></div>
                                    <div className="ml-2"><h5>โรงเรียนบางปะกอกวิทยาคม</h5></div>
                                </div>
                            </div>
                            <div>
                                <h3 className="mt-3">ความถนัด</h3>
                                <div>
                                   <ul>
                                       <li><p>สอนพิเศษ</p></li>
                                       <li><p>ออกแบบ</p></li>
                                       <li><p>กราฟฟิก</p></li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
