# **GitHub Popular Repos**

## **About**
GitHub Popular Repos is a web application that displays trending repositories based on different programming languages. Users can filter repositories by selecting a specific language, and the application dynamically fetches and updates the repository list accordingly.

## **Features**

### **Initial Load**
- When the app is opened, an HTTP GET request is made to `githubReposApiUrl` with the query parameter `language=ALL`.
- A loader is displayed while fetching data.
- After the data is successfully fetched, the repositories list is displayed.

### **Language Filter Functionality**
- When a language filter is selected:
  - An HTTP GET request is made with the selected language ID.
  - A loader is displayed while fetching data.
  - After the data is successfully fetched, the repositories list is updated accordingly.

### **Language Filters**
- The application uses `languageFiltersData`, which consists of language filter objects with the following properties:

  | Key  | Data Type |
  |------|----------|
  | id   | String   |
  | language | String |

## **Tools Used**
- React.js
- React Router
- CSS for styling
- REST API for fetching repositories
