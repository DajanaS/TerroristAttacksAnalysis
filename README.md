# Terrorist Attacks Analysis

### 1. Description
The data is kept in Postgres database, it is taken from a terrorist attacks dataset that is real-time updated on daily basis, using a crawler (python script). Using API that extracts the data from a website (given URL) we show something like rich snippet (image of the article for the event and its title), for each category (type of event) that the user will choose using dropdown menu. By clicking on it it will lead to the detailed information for the event and below it related events will be shown. Also, an option to Read more about the news is available, leading to the news article which is the source of that attack-event.

### 2. Acquiring the data
The data is acquired from the https://www.gdeltproject.org web site. A crawler is used to download all the data from previous years, make transformations and load it in the database (ETL - Extract, Transform, Load). Another crawler is used to download the data for the current day, and any other day in the future. The database is PostgreSQL, minor indexing is made, and some materialized views are made to enhance performance. 

### 3. Technology and prerequisites
PostgreSQL database needs to be running, for the backend is used Java Spring framework with Maven, Lombok plugin needs to be installed in IntelliJ, Angular for the UI so also node.js needs to be installed. After cloning the repository, go to the location of the frontend and run `ng build`. Then go in the backend (having all the prerequisites set up) and Run the Spring Boot application. Go to localhost:8080 and the app should be available there! Have fun :)
