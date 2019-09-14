import React, { useState, useCallback, useEffect } from "react";
import { Container, Form, SubmitButton, List } from "./styles";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "./../../services/api";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const repoStorage = localStorage.getItem("repositories");
    if (repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("repositories", JSON.stringify(repositories));
  }, [repositories]);

  function handleChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback(
    repo => {
      const find = repositories.filter(r => r.name !== repo);
      setRepositories(find);
    },
    [repositories]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);
        try {
          if (newRepo === "") {
            window.alert("owner/repository");
            throw new Error("Empty repository");
          }

          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositories.find(repo => repo.name === newRepo);

          if (hasRepo) {
            window.alert("Repository already exixts");
            throw new Error("Duplicate repository");
          }

          const data = {
            name: response.data.full_name
          };

          setRepositories([...repositories, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositories]
  );

  return (
    <Container>
      <span>
        <FaGithub color="#000" size={25} />
        My Repositories
      </span>
      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Add repositories"
          value={newRepo}
          onChange={handleChange}
        />
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? <FaSpinner color="#fff" /> : <FaPlus color="#fff" />}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map((repo, index) => (
          <li key={repo.name}>
            <span>
              <FaTrash size={15} onClick={() => handleDelete(repo.name)} />
              {repo.name}
            </span>
            <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
