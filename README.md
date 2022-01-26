

# Node JS - Express - API with Google Firestore NoSQL Database

Build Restful CRUD API for Conferences ( as Example ) using Node JS - Express and Google Firebase

## Steps to Setup

**0. You can test our API  via this link :
Every URL need to have authentication token, except for Register and Login.
You get the token after you Login or register.
You have to add the token to your body of your next requests .

Use Postman or VS Code Thunder Client to test the API
You can import VS Code Thunder Client Requestes from the folder : Thunder VS Code API Calls in the project

https://acharf-conferences-api.herokuapp.com/conferences-app/api/v1/conferences

**1. Clone the application**

```bash
git clone https://github.com/ferdaousachraf/projetnodejs.git
```
```bash
npm run install

**2. Create a Firebase Project from your Google Acount**

-  https://console.firebase.google.com/

**3. Update the serviceAccountKey.json file with your Firebase Project infos**

- in the Project Setting page, you can genarate the file .

**4. Run the server**

```bash
npm start
```
The app will start running at <http://localhost:8080>

## Explore Rest APIs

The app defines following CRUD APIs.

### Auth

| Method | Url | Decription | Sample Valid Request Body | 
| ------ | --- | ---------- | --------------------------- |
| POST   | /conferences-app/api/v1/register | Sign up | [JSON](#signup) |
| POST   | /conferences-app/api/v1/login | Log in | [JSON](#signin) |

### Conferences

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/conferences | Get all conferences
| GET    | /conferences-app/api/v1/conferences/{conferenceId} | Get conference by conferenceId | |
| POST   | /conferences-app/api/v1/conferences  | Add new conference | |
| PUT    | /conferences-app/api/v1/conferences/{conferenceId} | Update conference  by conferenceId||
| DELETE | /conferences-app/api/v1/conferences/{conferenceId}  | Delete conference  by conferenceId| |


### Amphitheaters

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/amphitheaters | Get all amphitheaters
| GET    | /conferences-app/api/v1/amphitheaters/{amphitheaterId} | Get amphitheater by amphitheaterId | |
| POST   | /conferences-app/api/v1/amphitheaters  | Add new amphitheater | |
| PUT    | /conferences-app/api/v1/amphitheaters/{amphitheaterId} | Update amphitheater  by amphitheaterId||
| DELETE | /conferences-app/api/v1/amphitheaters/{amphitheaterId}  | Delete amphitheater  by amphitheaterId| |

### attendees

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/attendees | Get all attendees
| GET    | /conferences-app/api/v1/attendees/{attendeeId} | Get attendee by attendeeId | |
| POST   | /conferences-app/api/v1/attendees  | Add new attendee | |
| PUT    | /conferences-app/api/v1/attendees/{attendeeId} | Update attendee  by attendeeId||
| DELETE | /conferences-app/api/v1/attendees/{attendeeId}  | Delete attendee  by attendeeId| |


### certificates

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/certificates | Get all certificates
| GET    | /conferences-app/api/v1/certificates/{certificateId} | Get certificate by certificateId | |
| POST   | /conferences-app/api/v1/certificates  | Add new certificate | |
| PUT    | /conferences-app/api/v1/certificates/{certificateId} | Update certificate  by certificateId||
| DELETE | /conferences-app/api/v1/certificates/{certificateId}  | Delete certificate  by certificateId| |

### opinions

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/opinions | Get all opinions
| GET    | /conferences-app/api/v1/opinions/{opinionId} | Get opinion by opinionId | |
| POST   | /conferences-app/api/v1/opinions  | Add new opinion | |
| PUT    | /conferences-app/api/v1/opinions/{opinionId} | Update opinion  by opinionId||
| DELETE | /conferences-app/api/v1/opinions/{opinionId}  | Delete opinion  by opinionId| |

### speakers

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /conferences-app/api/v1/speakers | Get all speakers
| GET    | /conferences-app/api/v1/speakers/{speakerId} | Get speaker by speakerId | |
| POST   | /conferences-app/api/v1/speakers  | Add new speaker | |
| PUT    | /conferences-app/api/v1/speakers/{speakerId} | Update speaker  by speakerId||
| DELETE | /conferences-app/api/v1/speakers/{speakerId}  | Delete speaker  by speakerId| |


Test them using postman or any other rest client.

## Sample Valid JSON Request Bodys

### authentification

##### <a id="register">Sign Up -> /conferences-app/api/v1/register</a>
```json
{
        "firstname": "user1",
        "lastname": "user1",
        "email": "user1@test.com",
        "password": "user1"
    }
```

##### <a id="login">Log In -> /conferences-app/api/v1/login</a>
```json
{
	"usernameOrEmail": "leanne",
	"password": "password"
}
```

### conferences

##### <a id="conferences">get all conferences -> /conferences-app/api/v1/conferences</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```




##### <a id="conferences">get one conference -> /conferences-app/api/v1/conferences/[:conferenceId]</a>
```json

Provide the token that you will get after your Login

```json

{
    
        "token": ""
}
```
##### <a id="conferences">update  conference -> /conferences-app/api/v1/conferences/[:conferenceId]</a>


Provide the token that you will get after your Login
```json

{
    
    "title": "",
        "description": "",
        "contactPerson":"",
        "contactEmail": "",
        "contactPhone": "",
        "startDate": "",
        "endDate": "",
        "registrationFee": ,
        "token": ""
}
```

##### <a id="conferences">delete conference -> /conferences-app/api/v1/conferences/[:conferenceId]</a>


Provide the token that you will get after your Login
```json

{
    
        "token": ""
}
```



### Attendees



##### <a id="Attendees">get all Attendees -> /conferences-app/api/v1/members</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```



add
##### <a id="Attendees">get one Attendees -> /conferences-app/api/v1/members/[:attendeeId]</a>
```json

Provide the token that you will get after your Login

```json

{
        "token": ""
}
```
##### <a id="Attendees">delete a Attendee -> /conferences-app/api/v1/members/[:attendeeId]</a>


Provide the token that you will get after your Login
```json

{
   
        "token": ""
}
```

##### <a id="Attendees">add attendee -> /conferences-app/api/v1/conferences/[:attendeeId]</a>


Provide the token that you will get after your Login
```json

{
         "firstname": "",
        "lastname": "",
        "cardid":"",
        "address": "",
        "email": "",
        "phone": "",
        "profession":"",
        "token" : ""
}
```

##### <a id="Attendees">update attendee -> /conferences-app/api/v1/conferences/[:attendeeId]</a>


Provide the token that you will get after your Login
```json

{
         "firstname": "",
        "lastname": "",
        "cardid":"",
        "address": "",
        "email": "",
        "phone": "",
        "profession":"",
        "token" : ""
}
```


### amphitheaters 

##### <a id="amphitheaters ">get a amphitheater  -> /conferences-app/api/amphitheaters/[:amphitheatersId]</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```

##### <a id="amphitheaters">delete amphitheater -> /conferences-app/api/amphitheaters/[:amphitheatersId]</a>
```json

Provide the token that you will get after your Login

```json

{
        "token": ""
}
```
##### <a id="amphitheaters">add a  amphitheater - -> /conferences-app/api/v1/amphitheaters</a>


Provide the token that you will get after your Login
```json

{
        "name": "",
        "number": "",
        "capacity":"",
        "price": ,
        "token": ""
}
```

##### <a id="amphitheaters">get all  amphitheaters -> /conferences-app/api/v1/amphitheaters</a>


Provide the token that you will get after your Login
```json

{
         "firstname": "",
        "lastname": "",
        "cardid":"",
        "address": "",
        "email": "",
        "phone": "",
        "profession":"",
        "token" : ""
}
```



### certificates

##### <a id="certificates ">get a certificate -> /conferences-app/api/certificates/[:certificatesId]</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```

##### <a id="certificates">delete a certificate-> /conferences-app/api/amphitheaters/[:certificatesId]</a>
```json

Provide the token that you will get after your Login

```json

{
        "token": ""
}
```
##### <a id="certificates">add a  certificate - -> /conferences-app/api/v1/certificates</a>


Provide the token that you will get after your Login
```json

{
"firstname": "",
        "lastname": "",
        "date": "",
        "address": "",
        "conferenceid": "",
        "attendeeid": "",        
        "token": ""
}
```

##### <a id="certificates">get all  certificate -> /conferences-app/api/v1/certificates</a>


Provide the token that you will get after your Login
```json

{
        "token" : ""
}
```








### opinions



##### <a id="opinions ">get a certificate -> /conferences-app/api/opinions/[:opinionId]</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```

##### <a id="opinions">delete a opinion-> /conferences-app/api/opinions/[:opinionId]</a>
```json

Provide the token that you will get after your Login

```json

{
        "token": ""
}
```
##### <a id="opinions">add a opinion - -> /conferences-app/api/v1/opinions</a>


Provide the token that you will get after your Login
```json

{
        "firstname": "",
       "text": " ",
        "date": "",
        "conferenceid":"",
        "attendeeid": "",       
        "token": ""
}
```

##### <a id="certificates">get all  opinion  -> /conferences-app/api/v1/opinions</a>


Provide the token that you will get after your Login
```json

{
        "token" : ""
}
```



### speakers


##### <a id="speakers ">get a speaker -> /conferences-app/api/speakers/[:speakerId]</a>
```json

Provide the token that you will get after your Login

{
    "token":""
}
```

##### <a id="speakers">delete a speaker-> /conferences-app/api/speakers/[:speakerId]</a>
```json

Provide the token that you will get after your Login

```json

{
        "token": ""
}
```
##### <a id="speakers">add a opinion - -> /conferences-app/api/v1/speakers</a>


Provide the token that you will get after your Login
```json

{
       
        "firstname": "",
        "lastname": "",
        "cardid":"",
        "address": "",
        "email": "",
        "phone": "",
        "profession": "",
        "title": "",
        "indemnity": ,
        "conferenceid": "",      
        "token": ""
}
```

##### <a id="speakers">get all speakers  -> /conferences-app/api/v1/speakers</a>


Provide the token that you will get after your Login
```json

{
        "token" : ""
}




















