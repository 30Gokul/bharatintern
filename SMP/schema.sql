
CREATE TABLE Users (
    UserID INT PRIMARY KEY ,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(255) NOT NULL
);


CREATE TABLE Messages (
    MessageID INT PRIMARY KEY ,
    SenderID INT NOT NULL,
    ReceiverID INT NOT NULL,
    MessageText TEXT,
    Timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SenderID) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverID) REFERENCES Users(UserID)
);


CREATE TABLE Tasks (
    TaskID INT PRIMARY KEY ,
    TaskName VARCHAR(100) NOT NULL,
    Description TEXT,
    AssignerID INT NOT NULL,
    AssigneeID INT NOT NULL,
    DueDate DATE,
    FOREIGN KEY (AssignerID) REFERENCES Users(UserID),
    FOREIGN KEY (AssigneeID) REFERENCES Users(UserID)
);