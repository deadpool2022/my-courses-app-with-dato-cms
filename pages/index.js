
import {gql, GraphQLClient} from 'graphql-request';
import CourseSection from '../components/CourseSection';

export default function Home({course}) {
console.log("🚀 ~ file: index.js ~ line 4 ~ Home ~ course", course)
  
  return (
    <div className="">
      {course.courseDetail.map(section => <CourseSection details={section} key={section.id}></CourseSection>)}
    </div>
  )
}

const query = gql`
 query {
    course {
      id
      name
      slug
      courseDetail {
        ... on CourseHeaderRecord {
          __typename
          bigTitle
          smallTitle
          description
          buttonText
          id
        }
      }

    }
  }`;


  export async function getStaticProps() {
    const endpoint = 'https://graphql.datocms.com/';
    const graphqlClient = new GraphQLClient(endpoint, {
      headers: { 'content-type': 'application/json', 'authorization': `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_KEY}` },
  });
  const course  = await graphqlClient.request(query);
  console.log("🚀 ~ file: index.js ~ line 38 ~ getStaticProps ~ course", course)
  return {
    props: course
  }
}