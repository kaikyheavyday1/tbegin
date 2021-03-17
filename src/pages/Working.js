import React, { useState, useEffect } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

import userpic from '../images/user.svg'
import graduate from '../images/profile/graduation-hat.svg'
import letter from '../images/profile/envelope.svg'
import phone from '../images/profile/phone-call.svg'
import web from '../images/profile/web.jpeg'
import web2 from '../images/profile/web2.png'
import web3 from '../images/working/web3.png'
import web4 from '../images/working/web4.jpg'
import web5 from '../images/working/web5.jpg'
import web6 from '../images/working/web6.jpg'
import axios from 'axios'
const items = [
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
]

export default function Working(props) {
  const [work, setWork] = useState([])
  const [item, setItem] = useState(items)
  const workid = props.match.params.workid

  const getWork = async () => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?workid=${workid}`
    )
    let data = await fetch.data[0]
    setWork(data)
    const allpic = [
      { src: data.pic1 },
      { src: data.pic2 },
      { src: data.pic3 },
      { src: data.pic4 },
      { src: data.pic5 },
      { src: data.pic6 },
    ]
    const inuser = [{ user_id: data.user_id }]
    setItem(allpic)
    console.log(data)
  }
  useEffect(() => {
    getWork()
  }, [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [modal, setModal] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)

  const toggle = () => setModal(!modal)
  const toggle2 = () => setModal2(!modal2)
  const toggle3 = () => setModal3(!modal3)
  const toggle4 = () => setModal4(!modal4)
  const toggle5 = () => setModal5(!modal5)
  const toggle6 = () => setModal6(!modal6)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === item.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? item.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = item.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <div className="working mt-3 mb-3">
      <div className="container">
        {console.log(item)}
        <Row>
          <Col lg="8" className="working-left pt-3">
            <h2>{work !== null && work.name}</h2>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
            <Row className="working-small mt-2">
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[0].src}
                  alt="web"
                  className="w-100"
                  height="100%"
                  onClick={toggle}
                ></img>
                <Modal isOpen={modal} toggle={toggle}>
                  <img
                    src={item[0].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[1].src}
                  alt="web"
                  className="w-100"
                  height="75px"
                  onClick={toggle2}
                ></img>
                <Modal isOpen={modal2} toggle={toggle2}>
                  <img
                    src={item[1].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[2].src}
                  alt="web"
                  className="w-100"
                  height="75px"
                  onClick={toggle3}
                ></img>
                <Modal isOpen={modal3} toggle={toggle3}>
                  <img
                    src={item[2].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[3].src}
                  alt="web"
                  className="w-100"
                  height="75px"
                  onClick={toggle4}
                ></img>
                <Modal isOpen={modal4} toggle={toggle4}>
                  <img
                    src={item[3].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[4].src}
                  alt="web"
                  className="w-100"
                  height="75px"
                  onClick={toggle5}
                ></img>
                <Modal isOpen={modal5} toggle={toggle5}>
                  <img
                    src={item[4].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
              <Col lg="2" md="2" sm="4" xs="4" className="img-working-small">
                <img
                  src={item[5].src}
                  alt="web"
                  className="w-100"
                  height="75px"
                  onClick={toggle6}
                ></img>
                <Modal isOpen={modal6} toggle={toggle6}>
                  <img
                    src={item[5].src}
                    alt="web"
                    className="w-100"
                    height="100%"
                  ></img>
                </Modal>
              </Col>
            </Row>
            <div className="mt-5">
              <h3>รายละเอียดของงาน</h3>
              <p>-{work !== null && work.description}</p>
              <h3>สิ่งที่ลูกค้าจะได้รับ</h3>
              <p>-{work !== null && work.main_description}</p>
              <Row>
                <Col lg="6">
                  <h3>ระยะเวลาในการทำงาน</h3>
                  <p>- {work !== null && work.work_time}</p>
                </Col>
                <Col lg="6">
                  <h3>ราคางาน</h3>
                  <p>{work !== null && work.price} ฿</p>
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
                <p className="mt-2 col-11">
                  ทำงานดี ออกแบบสวย โดนใจมากค่ะ บรีฟงานให้และออกแบบงานได้ถูกใจ
                  งานดี งานสวย ทำงานมืออาชีพมากค่ะ พูดจาดี บริการรวดเร็ว ตอบไว
                  และให้คำปรึกษาดีค่ะ เต็ม 100 ให้ 100 เต็ม 1,000 ให้ 1,000 ค่า
                  แนะนำ มืออาชีพที่แท้ทรู
                </p>
              </div>
              <div className="comment">
                <div className="d-flex">
                  <img src={userpic} alt="userpic"></img>
                  <div className="mt-2 ml-3">
                    <strong>Paphawinya oconer</strong>
                    <div>12/02/21</div>
                  </div>
                </div>
                <p className="mt-2 col-11">
                  ทำงานดี ออกแบบสวย โดนใจมากค่ะ บรีฟงานให้และออกแบบงานได้ถูกใจ
                  งานดี งานสวย ทำงานมืออาชีพมากค่ะ พูดจาดี บริการรวดเร็ว ตอบไว
                  และให้คำปรึกษาดีค่ะ เต็ม 100 ให้ 100 เต็ม 1,000 ให้ 1,000 ค่า
                  แนะนำ มืออาชีพที่แท้ทรู
                </p>
              </div>
            </div>
          </Col>
          <Col lg="4" className="mt-2">
            <div className="working-right col-10 mx-auto">
              <div>
                <div className="d-flex pt-3">
                  <img
                    className="profileavatar"
                    src={work !== null && work.profile_pic}
                    alt="user"
                    height="60px"
                    width="60px"
                  />
                  <h4 className="pt-3 ml-2">
                    {work.profile_name} {work.profile_surname}
                  </h4>
                </div>
              </div>
              <div>
                <div className="mt-3">
                  {work.length !== 0 && (
                    <h5>
                      สมัครสมาชิกเมื่อ{' '}
                      {work.profile_createdate.toString().split('T')[0]}
                    </h5>
                  )}
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
                    <div>
                      <img src={phone} alt="user" height="20px" />
                    </div>
                    <div className="ml-2">
                      <h5>{work.profile_phone}</h5>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <div>
                      <img src={letter} alt="user" height="20px" />
                    </div>
                    <div className="ml-2">
                      <h5>{work.profile_email}</h5>
                    </div>
                  </div>
                  <div className="text-center mb-2 mt-2">
                    <button
                      type="button"
                      className="btn-home text-center p-1 pl-4 pr-4 chat"
                    >
                      แชท
                    </button>
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
