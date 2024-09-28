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
Testing VS Code