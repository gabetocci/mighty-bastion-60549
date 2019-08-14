// import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';

// const client = new ApolloClient();
// const query = gql`
//   query {
//     books {
//       title
//       author
//     }
//   }
// `;

// const body = document.body;
// client.query({ query }).then((results) => {
//   results.data.books.forEach( (book) => renderBook(body, book) );
// });

// const renderBook = (body, book) => {
//   const section = document.createElement('section');
//   const domString = `
//     <p>
//       <strong>Title: </strong>${book.title}
//     </p>
//     <p>
//       <strong>Author: </strong>${book.author}
//     </p>
//   `;
//   section.innerHTML = domString;
//   body.appendChild(section);
// };