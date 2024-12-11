/* Problem focus on how we can fetch data in react where one query result is depended
on other
*/ 


// components import
import MainLayout from "../components/MainLayout/MainLayout";
import Container from "../components/Container/Container";
// components import

import { useState, useEffect, useRef } from "react";
const JobPost = ({ by, title, url }) => {
  return (
    <>
      <Container>
       <div className="wrapper flex flex-col gap-3">
       <div className="title bg-orange-300 text-white font-semibold p-2 rounded-sm border-gray-400">
        <h3>
          {url ? (
            <>
              <a href={url}>{title}</a>
            </>
          ) : (
            <>{title}</>
          )}
        </h3>
        </div>
        <p>By : {by}</p>

       </div>
      
      
      </Container>
    </>
  );
};

const JobPostPage = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    // Indicate that the component is unmounted, so
    // that requests that complete after the component
    // is unmounted don't cause a "setState on an unmounted
    // component error".
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    //use useEffect to fetch secondary url data which is depended on primary data 
    //In this case async func fetchJobs() is depeneded on async func fetchJobIds()
    // then from secondary async func fetchJobs() call the primary async func fetchJobIds()
    fetchJobs(); //calling secondary func first in useEffect
  }, []);

  const fetchJobIds = async () => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );

    const data = await res.json();

    // console.log("data ==> ",data);

    // No-op if component is unmounted.
    if (!isMounted.current) {
      return;
    }

    setJobIds(data);
    return data; //we need to pass this primary data to secondary func sync fetchJobs() but
    //we did not pass the state variable instead we declare our own variable "data" stored info. in it and then
    // we send it to func
  };

  const fetchJobs = async () => {
    const jobIds = await fetchJobIds();  //calling the primary func
    //now as we got our primary data we have to fech all the result related to secondary data.
    //but we need to make fetch call for every item in a primary data in this case for every Job id.
    //so we looped through every id by map and the we return a fetch call for every item in a jobId array.
    // by doing so now we got an array of promises.
    // to get data from all those promises we used Promise.all method which will resolve or reject and return us data in a array
    const jobsArr = await Promise.all(
      jobIds.map((jobId) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${jobId}.json`).then(
          (res) => res.json()
        )
      )
    );

    console.log("jobsArr ===> ", jobsArr);

    // No-op if component is unmounted.
    if (!isMounted.current) {
      return;
    }

    setJobs([...jobsArr, ...jobs]);
  };

  return (
    <MainLayout>
      <Container>
        <div className=" w-full flex flex-col gap-4">
        {jobs.map((job) => {
          return <JobPost {...job} />;
        })}

        </div>
       
      </Container>
    </MainLayout>
  );
};

export default JobPostPage;

///correct

// // components import
// import MainLayout from "../components/MainLayout/MainLayout";
// import Container from "../components/Container/Container";
// // components import

// import { useState, useEffect,useRef } from "react";

// const PAGE_SIZE = 6;

// export default function JobPostPage() {
//   const [fetchingJobDetails, setFetchingJobDetails] =
//     useState(false);
//   const [page, setPage] = useState(0);
//   const [jobIds, setJobIds] = useState(null);
//   const [jobs, setJobs] = useState([]);
//   const isMounted = useRef(true);

//   useEffect(() => {
//     isMounted.current = true;
//     // Indicate that the component is unmounted, so
//     // that requests that complete after the component
//     // is unmounted don't cause a "setState on an unmounted
//     // component error".
//     return () => {
//       isMounted.current = false;
//     };
//   }, []);

//   useEffect(() => {
//     fetchJobs(page);
//   }, [page]);

//   async function fetchJobIds(currPage) {
//     let jobs = jobIds;
//     if (!jobs) {
//       const res = await fetch(
//         'https://hacker-news.firebaseio.com/v0/jobstories.json',
//       );
//       jobs = await res.json();

//       // No-op if component is unmounted.
//       if (!isMounted.current) {
//         return;
//       }

//       setJobIds(jobs);
//     }

//     const start = currPage * PAGE_SIZE;
//     const end = start + PAGE_SIZE;
//     return jobs.slice(start, end);
//   }

//   async function fetchJobs(currPage) {

//     const jobIdsForPage = await fetchJobIds(currPage);
//     console.log("jobIdsForPage ==> ",jobIdsForPage)
//     setFetchingJobDetails(true);
//     const jobsForPage = await Promise.all(
//       jobIdsForPage.map((jobId) =>
//         fetch(
//           `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`,
//         ).then((res) => res.json()),
//       ),
//     );

//     // No-op if component is unmounted.
//     if (!isMounted.current) {
//       return;
//     }

//     setFetchingJobDetails(false);
//     // useEffect (and hence `fetchJobs`) runs twice on component mount
//     // during development in Strict Mode.
//     //
//     // But since the value of `jobs` within the closure is the same,
//     // the resulting combined jobs will be the same, assuming the results
//     // for the API stays the same between requests.
//     const combinedJobs = [...jobs, ...jobsForPage];
//     setJobs(combinedJobs);
//   }

//   return (
//     <div className="app">
//      {jobs.length}
//     </div>
//   );
// }
