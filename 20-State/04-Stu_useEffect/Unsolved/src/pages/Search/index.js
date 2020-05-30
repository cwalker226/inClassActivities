import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {
  const [searchParams, setSearchParams] = useState({
    search: "Wikipedia",
    title: "",
    url: "",
    error: ""
  });

  useEffect(() => {
    document.title = "Wikipedia Searcher";
    if(searchParams.search === "")
      return;

    API.searchTerms(searchParams.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchParams({
          ...searchParams,
          title: res.data[1][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchParams({...searchParams, error: err.message }));
  }, [searchParams.search]);

  const handleInputChange = event => {
    setSearchParams({...searchParams, search: event.target.value });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!searchParams.search) {
      return;
    }
    API.searchTerms(searchParams.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSearchParams({
          ...searchParams,
          title: res.data[1],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => setSearchParams({...searchParams, error: err.message }));
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: searchParams.error ? 1 : 0, marginBottom: 10 }}>
          {searchParams.error}
        </Alert>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          results={searchParams.search}
        />
        <SearchResults
          title={searchParams.title}
          url={searchParams.url}
        />
      </Container>
    </div>
  );
}

// class Search extends Component {
//   state = {
//     search: "Wikipedia",
//     title: "",
//     url: "",
//     error: ""
//   };

//   // When the component mounts, update the title to be Wikipedia Searcher
//   componentDidMount() {
//     document.title = "Wikipedia Searcher";

//     API.searchTerms(searchParams.search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         setSearchParams({
//           ...searchParams,
//           title: res.data[1][0],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => setSearchParams({...searchParams, error: err.message }));
//   }

//   handleInputChange = event => {
//     setSearchParams({...searchParams, search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!searchParams.search) {
//       return;
//     }
//     API.searchTerms(searchParams.search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         setSearchParams({
//           ...searchParams,
//           title: res.data[1],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => setSearchParams({...searchParams, error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "100vh" }}>
//           <h1 className="text-center">Search For Anything on Wikipedia</h1>
//           <Alert type="danger" style={{ opacity: searchParams.error ? 1 : 0, marginBottom: 10 }}>
//             {searchParams.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={handleFormSubmit}
//             handleInputChange={handleInputChange}
//             results={searchParams.search}
//           />
//           <SearchResults
//             title={searchParams.title}
//             url={searchParams.url}
//           />
//         </Container>
//       </div>
//     );
//   }
// }

export default Search;
