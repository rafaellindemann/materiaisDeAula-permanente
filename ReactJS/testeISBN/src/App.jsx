import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookLookup = () => {
  const [isbn, setIsbn] = useState('');
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  const fetchBookData = async (isbn) => {
    try {
      const response = await axios.get(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`
      );
      const data = response.data;
      const book = data[`ISBN:${isbn}`];
      if (book) {
        setBookData(book);
        setError(null);
      } else {
        setError('Book not found');
        setBookData(null);
      }
    } catch (error) {
      setError('Failed to fetch book data');
      setBookData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isbn) {
      fetchBookData(isbn);
    }
  };

  return (
    <div>
      <h1>Book Lookup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {bookData && (
        <div>
          <h2>{bookData.title}</h2>
          <p><strong>Authors:</strong> {bookData.authors.map((author) => author.name).join(', ')}</p>
          {bookData.publish_date && <p><strong>Published:</strong> {bookData.publish_date}</p>}
          {bookData.cover && (
            <div>
              <img src={bookData.cover.large} alt={bookData.title} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookLookup;


// import React, { useState } from 'react';

// const BookLookup = () => {
//   const [isbn, setIsbn] = useState('');
//   const [bookData, setBookData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchBookData = async (isbn) => {
//     try {
//       const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch book data');
//       }
//       const data = await response.json();
//       const book = data[`ISBN:${isbn}`];
//       if (book) {
//         setBookData(book);
//         setError(null);
//       } else {
//         setError('Book not found');
//         setBookData(null);
//       }
//     } catch (error) {
//       setError(error.message);
//       setBookData(null);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isbn) {
//       fetchBookData(isbn);
//     }
//   };

//   return (
//     <div>
//       <h1>Book Lookup</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter ISBN"
//           value={isbn}
//           onChange={(e) => setIsbn(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {bookData && (
//         <div>
//           <h2>{bookData.title}</h2>
//           <p><strong>Authors:</strong> {bookData.authors.map((author) => author.name).join(', ')}</p>
//           {bookData.publish_date && <p><strong>Published:</strong> {bookData.publish_date}</p>}
//           {bookData.cover && (
//             <div>
//               <img src={bookData.cover.large} alt={bookData.title} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookLookup;
