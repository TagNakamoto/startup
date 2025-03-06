# Startup: Answer Checker  
An application to allow teachers and tutors to have students check their answers in real time and provides information on which problems people are missing the most to the teacher in charge.  

## Specification Deliverable
### Elevator Pitch  
In many disciplines, teachers can get bogged down by students simply wanting to check answers rather than asking questions that leverage their knowledge and expertise. 
This application allows teachers to have students check whether their answers are within a certain range without outright giving out the answers. 
Students input their answer to a problem or an intermediary value and the application provides feedback while also letting the teacher know how students are doing. 
This will alleviate stresses put on teachers and teaching assistants in university and high school, freeing them up to help their students in the most effective manor, while still collecting information on which problems give people the most trouble.  
### Design  
![20240909_093056](https://github.com/user-attachments/assets/397c03c3-264c-4d96-8ea1-40451ffab163)  
#### Sequence Diagram of Application  
![image](https://github.com/user-attachments/assets/fb5456d0-5224-4e52-ae2a-5717362f147c)  

### Technologies Used

1. **HTML** - Basic structures for the 3 different web pages (login, student, teacher)  

2. **CSS** - Styling the website and making it visually appealing  

3. **JavaScript** - Front-end logic and user interactions (logging in and checking answers)  

4. **React** - Account for user input and interaction (buttons, inputs, results)  

5. **Web Service** - Connecting to an API that checks answers against a database of properties  

6. **Authentication** - Allowing students and teachers to log in or create accounts.  

7. **Database Data** - Storing login data, and answer statistics data  

8. **WebSocket Data** - Update students about their answer choices and teachers about question statistics


## HTML Deliverable  
For the startup HTML I implemented:  
	- **HTML Pages** - Three HTML pages for login, answer checking (AnswerCheckerPage), and answer statistics (AnswerStatistics).  
	- **3rd Party API** - Answer checker will pull data from a material property API as example answers.  
	- **Links** - Each page links to the GitHub for the project. Functionality to link from login to other pages based off login information. Links interconnect all pages for testing and grading purposes.   
	- **Text** - Added text to explain webpages and cue user input.  
	- **Images** - Added checkmark image as a kind of logo.  
	- **DB/Login** - Input box and submit button for login. The answer data table represents data pulled from the database.  
	- **WebSocket** - Gives live data for answer statistics and instant feedback to the student using the answer checker.  

## CSS Deliverable  
For the CSS deliverable I styled the following:  
	- **Header, footer, and main content body**  
	- **Size Responsiveness** - Website looks great for all sizings.    
	- **Links** - I got rid of the underlines for link elements and made them cyan when hovered over.     
	- **Application Elements** - Elements and whitespace looks good.    
	- **Images** - Shifted spacing to be pleasing.  
	- **Application Text** - I made sure there were consistent fonts.   
## React Deliverable Part 1  
For the REACT part 1 deliverable I did the following:  
	- **Bundled and transpiled**  
	- **Components:** Login, logout, and answer checking is mocked up in respective jsx files and using their respective css files, with shared parts found in app.jsx and css  
	- Parts mocking up requirements are the same as previous parts  
 	- Navigation uses browser router and connects all the pages of site  

## React Deliverable Part 2   
For the REACT part 2 deliverable I did the following:  
- **Bundled and transpiled**  
- **Components:** Login, logout, and answer checking is mocked up with jsx as possible.  
  - Login leads to answer checker when username and password are provided, authenticating them. Otherwise other pages are hidden.    
  - Answer checker can check the answer to question 1, giving a message depending on if the input is correct or incorrect (stand-in answer is 3.14). Quote is displayed using JS.     
  - Answer statistics populates table using JS for future tracking using databases and updated with websocket.  
  - Answer checker and statistics can log out to return to login page and hide other pages.  
- **Hooks**  
  - useState tracks variables that will be updated, such as the quote and table values. They are updated automatically now but will be done with other technologies later.  
  - useEffect hook updates the variables using set values currently, but will implement other technologies to do so in later stages.  
