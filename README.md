# react-giphy-app
A react app to allow users to perform gif search via giphy

- This app is bootstrapped using create-react-app
- It uses open API from giphy to fetch results for a search query
- The app consists of 2 class components for user interaction and displaying images,based on search query
- Based on the user query,the fetch call is made to giphy api,whose response updates the state of the component,
  which is then passed over as a prop to the displaying component,which uses map to iterate through the images  