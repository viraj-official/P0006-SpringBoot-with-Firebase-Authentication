import { useEffect, useState } from "react";
import "./Project.css";
import { useStateValue } from "../StateProvider";

function Project() {
  const [{ user }] = useStateValue();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/project/all", {
          headers: {
            Authorization: "Bearer " + user?.accessToken,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          alert("Failed to connect");
        }
      } catch (error) {
        alert("Failed to connect");
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className="project">
      {projects.map(function (data) {
        return (
          <div className="project__container">
            <h1>{data.projectName}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
