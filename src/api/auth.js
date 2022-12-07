const cohortName = '2211-FTB-ET-WEB-FT'; 



export const registerUser = async (username, password) => {
  try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/users/register`, 
      {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
          user: {
              username,
              password,
  }
})
})
  } catch (error) {
      console.log(error);
  }
}



export const getPosts = async (setPosts) => {
  // call the API
  // take the returned data and parse into JSON 
  // return the results (array of objects) to be displayed on the poage via  our Posts component 

  fetch(`https://strangers-things.herokuapp.com/api/${cohortName}/posts`)
  .then(response => response.json())
  .then(result => {
    // console.log(result.data.posts);
    setPosts(result.data.posts)
  })
  .catch(console.error);

//   try {
//     const response = await fetch (`https://strangers-things.herokuapp.com/api/${cohortName}/posts`);
//     const {data: {posts}} = await response.json();
//     setPosts(posts);
//     return 
//   } catch (error) {
//     console.log(error);
//   }
}

