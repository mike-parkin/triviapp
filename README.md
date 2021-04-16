# triviapp
A simple app built in react-native, using opentriviadb api that lets users build there own quiz based of three parameters: number of questions, difficulty and category

## question data
All questions are sourced from the free open source website: https://opentdb.com/
the website allows various get requests with added queries such as the number of questions, 

## screens
Menu screen: where the app first opens, currently contains a button that links to the Quiz Builder Screen

Quiz Builder screen: contains a simple form, the use can select three options: number of questions, difficulty, and category. these are saved in state and when the button is pressed top generate the quiz they are passed through to the Quiz page as props.

Quiz screen: takes the data from the form on the last apge and makes an http request to opentdb.com for the questions, then renders the questions on the page for the user.

## tech used
expo cli & react-native was used to set up the app,
axios is used tot make the http request,
react-native-navigation/@react-native/stack arer used for navigating around the app
base-64 is used to decode the data from the response of the GET request
