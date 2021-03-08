import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import WorkingCard from "../components/WorkingCard";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const WorkList = () => {
  const [works, setWorks] = useState([]);
  let query = useQuery();

  useEffect(() => {
    const type = query.get("maintype");
    const subtype = query.get("subtype");
    //มี maintype
    if (type !== null) {
      const work = getworkByMainType(type);
    } else if (subtype !== null) {
      // มี subtype
      const work = getworkBySubType(subtype);
    } else {
      getAllWork();
    }
  }, [query.get("maintype"), query.get("subtype")]);

  const getAllWork = async () => {
    const fetch = await axios.get(
      "http://localhost:4000/work/get-work?allwork=true"
    );
    const data = await fetch.data;
    setWorks(data);
  };

  const getworkByMainType = async (maintype) => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?maintype=${maintype}`
    );
    const data = await fetch.data;
    setWorks(data);
  };

  const getworkBySubType = async (subtype) => {
    const fetch = await axios.get(
      `http://localhost:4000/work/get-work?subtype=${subtype}`
    );
    const data = await fetch.data;
    setWorks(data);
  };

  return (
    <div>
      <Container>
        <div>
          <h3>Navigator</h3>
          <ul>
            <Link to="/working-list">
              <li>all work</li>
            </Link>
            <Link to="/working-list?maintype=1">
              <li>work type 1</li>
            </Link>
            <Link to="/working-list?maintype=2">
              <li>work type 2</li>
            </Link>
            <Link to="/working-list?maintype=3">
              <li>work type 3</li>
            </Link>
            <Link to="/working-list?subtype=1">
              <li>work subtype 1</li>
            </Link>
            <Link to="/working-list?subtype=2">
              <li>work subtype 2</li>
            </Link>
          </ul>
        </div>
        <Row>
          {works.length > 0 &&
            works.map((work, index) => {
              return (
                <Col md={3}>
                  <WorkingCard data={work} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default WorkList;
