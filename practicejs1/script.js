// Fictional books — ratings are out of 5.
const books = [
    {
      title: "The Mountain Library",
      authors: ["Amélie Charles"],
      rating: 4.6,
      genres: ["Mystery", "Fiction"]
    },
    {
      title: "JavaScript Step by Step",
      authors: ["Daniel Louis", "Rose Simon"],
      rating: 4.8,
      genres: ["Technology", "Education"]
    },
    {
      title: "A Summer in Jacmel",
      authors: ["Sophie Daniel"],
      rating: 3.9,
      genres: ["Romance", "Fiction"]
    },
    {
      title: "Beyond the Red Planet",
      authors: ["Gabriel Michel"],
      rating: 4.5,
      genres: ["Science Fiction", "Adventure"]
    },
    {
      title: "The Everyday Kitchen",
      authors: ["Rose Simon"],
      rating: 3.7,
      genres: ["Cooking", "Culture"]
    },
    {
      title: "Secrets of the Old Harbour",
      authors: ["Amélie Charles", "Luc Bernard"],
      rating: 4.9,
      genres: ["Mystery", "Adventure"]
    },
    {
      title: "Understanding the Forest",
      authors: ["Emma François"],
      rating: 4.2,
      genres: ["Science", "Education"]
    },
    {
      title: "The Glass Kingdom",
      authors: ["Luc Bernard"],
      rating: 4.7,
      genres: ["Fantasy", "Adventure"]
    },
    {
      title: "Letters Never Sent",
      authors: ["Sophie Daniel", "Gabriel Michel"],
      rating: 3.4,
      genres: ["Romance", "Drama"]
    },
    {
      title: "Designing Useful Interfaces",
      authors: ["Daniel Louis"],
      rating: 4.3,
      genres: ["Technology", "Design"]
    }
  ];
  
  const booksCopy = books;
  
  const highestRatedBooks = booksCopy.map((b)=>{
     if(b.rating <= 4.5){
        return b.title;
     }
  });

  const sortBooks = highestRatedBooks.sort((book1, book2)=>book2.rating - book1.rating);
  
  //produce an array of titles for books rated <= 4.5
  //then sort
  //preserve the orriginal books array