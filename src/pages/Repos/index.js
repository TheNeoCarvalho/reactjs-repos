import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { FaArrowLeft } from "react-icons/fa";
import {
  Container,
  Owner,
  Load,
  BackButton,
  IssuesList,
  PageActions,
  FilterList
} from "./styles";

export default function Repos({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([
    { state: "all", label: "All", active: false },
    { state: "open", label: "Open", active: true },
    { state: "closed", label: "Closed", active: false }
  ]);

  const [filterIndex, setFilterIndex] = useState(0);

  function handleFilter(index) {
    setFilterIndex(index);
  }

  function handlePage(action) {
    setPage(action === "prev" ? page - 1 : page + 1);
  }
  useEffect(() => {
    async function loadIssue() {
      const repoName = decodeURIComponent(match.params.repo);

      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters.find(f => f.active).state,
          page,
          per_page: 5
        }
      });

      setIssues(response.data);
    }
    loadIssue();
  }, [filters, match.params.repo, page]);
  useEffect(() => {
    async function load() {
      const repoName = decodeURIComponent(match.params.repo);
      const [dataRepo, issuesRepo] = await Promise.all([
        api.get(`/repos/${repoName}`),
        api.get(`/repos/${repoName}/issues`, {
          params: {
            state: filters[filterIndex].state,
            per_page: 5
          }
        })
      ]);
      setRepository(dataRepo.data);
      setIssues(issuesRepo.data);
      setLoading(false);
    }
    load();
  }, [filterIndex, filters, filters.state, match.params.repo]);

  if (loading) {
    return (
      <Load>
        <h1>Loading...</h1>
      </Load>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={20} />
      </BackButton>
      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>
      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button type="button" key={index} onClick={() => handleFilter(index)}>
            {filter.label}
          </button>
        ))}
      </FilterList>
      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url} target="_blank">
                  {issue.title}
                </a>

                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>
      <PageActions>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage("prev")}
        >
          Prev
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          Next
        </button>
      </PageActions>
    </Container>
  );
}
