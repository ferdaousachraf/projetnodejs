

# Node JS - Express - API with Google Firestore NoSQL Database

Build Restful CRUD API for Conferences ( as Example ) using Node JS - Express and Google Firebase

## Steps to Setup

**1. Clone the application**

```bash
git clone https://github.com/0000000000000
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
| POST   | /api/v1/register | Sign up | [JSON](#signup) |
| POST   | /api/v1/login | Log in | [JSON](#signin) |

### Conferences

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/conferences | Get all conferences
| GET    | /api/v1/conferences/{conferenceId} | Get conference by conferenceId | |
| POST   | /api/v1/conferences  | Add new conference | |
| PUT    | /api/v1/conferences/{conferenceId} | Update conference  by conferenceId||
| DELETE | /api/v1/conferences/{conferenceId}  | Delete conference  by conferenceId| |


### Amphitheaters

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/amphitheaters | Get all amphitheaters
| GET    | /api/v1/amphitheaters/{amphitheaterId} | Get amphitheater by amphitheaterId | |
| POST   | /api/v1/amphitheaters  | Add new amphitheater | |
| PUT    | /api/v1/amphitheaters/{amphitheaterId} | Update amphitheater  by amphitheaterId||
| DELETE | /api/v1/amphitheaters/{amphitheaterId}  | Delete amphitheater  by amphitheaterId| |

### attendees

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/attendees | Get all attendees
| GET    | /api/v1/attendees/{attendeeId} | Get attendee by attendeeId | |
| POST   | /api/v1/attendees  | Add new attendee | |
| PUT    | /api/v1/attendees/{attendeeId} | Update attendee  by attendeeId||
| DELETE | /api/v1/attendees/{attendeeId}  | Delete attendee  by attendeeId| |


### certificates

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/certificates | Get all certificates
| GET    | /api/v1/certificates/{certificateId} | Get certificate by certificateId | |
| POST   | /api/v1/certificates  | Add new certificate | |
| PUT    | /api/v1/certificates/{certificateId} | Update certificate  by certificateId||
| DELETE | /api/v1/certificates/{certificateId}  | Delete certificate  by certificateId| |

### opinions

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/opinions | Get all opinions
| GET    | /api/v1/opinions/{opinionId} | Get opinion by opinionId | |
| POST   | /api/v1/opinions  | Add new opinion | |
| PUT    | /api/v1/opinions/{opinionId} | Update opinion  by opinionId||
| DELETE | /api/v1/opinions/{opinionId}  | Delete opinion  by opinionId| |

### speakers

| Method | Url | Description | Sample Valid Request Body |
| ------ | --- | ----------- | ------------------------- |
| GET    | /api/v1/speakers | Get all speakers
| GET    | /api/v1/speakers/{speakerId} | Get speaker by speakerId | |
| POST   | /api/v1/speakers  | Add new speaker | |
| PUT    | /api/v1/speakers/{speakerId} | Update speaker  by speakerId||
| DELETE | /api/v1/speakers/{speakerId}  | Delete speaker  by speakerId| |


Test them using postman or any other rest client.

## Sample Valid JSON Request Bodys

##### <a id="signup">Sign Up -> /api/v1/register</a>
```json
{
        "firstname": "user1",
        "lastname": "user1",
        "email": "user1@test.com",
        "password": "user1"
    }
```

##### <a id="signin">Log In -> /api/v1/login</a>
```json
{
	"usernameOrEmail": "leanne",
	"password": "password"
}
```

