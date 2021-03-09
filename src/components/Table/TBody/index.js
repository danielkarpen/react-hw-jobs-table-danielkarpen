import api from "api";
import { useEffect, useState } from "react";
import Row from "./Row";

function renderRows(people) {
  return people.map(({ name, job }, index) => (
    <Row name={name} job={job} key={index} />
  ));
}

const TBody = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const peopleData = await api.index();
      setPeople(() => peopleData);
    })();
  }, []);

  return <tbody>{renderRows(people)}</tbody>;
};

export default TBody;
