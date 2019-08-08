var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/users', function (req, res, next) {
  res.json([
      {
        aboutMe: {
            Age: "38 years",
            Degree: "MBA",
            Experience: "15 years",
            Location: "Rome, Italy",
            Phone: "(800) 123-4567",
            "Career Level": "Mid",
            "Email": "example@example.com",
            Fax: "(800) 123-4567",
            Name: "John Doe"
          },
          avatarImage: "https://via.placeholder.com/250x100.png",
          details: [
            "Age: 38 years",
            "Name: John Doe",
            "Degree: MBA",
            "Experience: 15 years",
            "Location: Rome, Italy"
          ],
          description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus nisl. Phasellus vulputate fringilla purus, quis sagittis purus rutrum fermentum. Etiam scelerisque arcu at convallis lacinia. Curabitur vestibulum enim leo, id luctus magna rutrum quis.",
            "Praesent finibus eleifend arcu, et auctor leo. Fusce gravida a mauris at rhoncus. Fusce sed nisl vel metus vulputate ullamcorper. Pellentesque finibus vestibulum est, nec placerat metus fermentum vitae. Mauris lorem sapien, porta sit amet urna eget, sagittis auctor elit."
          ]
      },
      {
        aboutMe: {
            Age: "25 years",
            Degree: "BAcc",
            Experience: "10 years",
            Location: "Tokyo, Japan",
            Phone: "(800) 123-4567",
            "Career Level": "Low",
            "Email": "konichiwa@hello.com",
            Fax: "(800) 123-4567",
            Name: "Masayuki Yoshi"
          },
          avatarImage: "https://via.placeholder.com/250x100.png",
          details: [
            "Age: 25 years",
            "Name: Masayuki Yoshi",
            "Degree: BAcc",
            "Experience: 10 years",
            "Location: Tokyo, Japan"
          ],
          description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus nisl. Phasellus vulputate fringilla purus, quis sagittis purus rutrum fermentum. Etiam scelerisque arcu at convallis lacinia. Curabitur vestibulum enim leo, id luctus magna rutrum quis.",
            "Praesent finibus eleifend arcu, et auctor leo. Fusce gravida a mauris at rhoncus. Fusce sed nisl vel metus vulputate ullamcorper. Pellentesque finibus vestibulum est, nec placerat metus fermentum vitae. Mauris lorem sapien, porta sit amet urna eget, sagittis auctor elit."
          ]
      },
      {
        aboutMe: {
            Age: "50 years",
            Degree: "High School",
            Experience: "30 years",
            Location: "Russia",
            Phone: "(800) 123-4567",
            "Career Level": "High",
            "Email": "example@example.com",
            Fax: "(800) 123-4567",
            Name: "Viktor"
          },
          avatarImage: "https://via.placeholder.com/250x100.png",
          details: [
            "Age: 50 years",
            "Name: Viktor",
            "Degree: High School",
            "Experience: 30 years",
            "Location: Russia"
          ],
          description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus nisl. Phasellus vulputate fringilla purus, quis sagittis purus rutrum fermentum. Etiam scelerisque arcu at convallis lacinia. Curabitur vestibulum enim leo, id luctus magna rutrum quis.",
            "Praesent finibus eleifend arcu, et auctor leo. Fusce gravida a mauris at rhoncus. Fusce sed nisl vel metus vulputate ullamcorper. Pellentesque finibus vestibulum est, nec placerat metus fermentum vitae. Mauris lorem sapien, porta sit amet urna eget, sagittis auctor elit."
          ]
      },
      {
        aboutMe: {
            Age: "20 years",
            Degree: "Uni Grad",
            Experience: "2 years",
            Location: "Penang, Malaysia",
            Phone: "(800) 123-4567",
            "Career Level": "Mid",
            "Email": "example@example.com",
            Fax: "(800) 123-4567",
            Name: "Don Bravo"
          },
          avatarImage: "https://via.placeholder.com/250x100.png",
          details: [
            "Age: 20 years",
            "Name: Don Bravo",
            "Degree: Uni Grad",
            "Experience: 2 years",
            "Location: Penang, Malaysia"
          ],
          description: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus nisl. Phasellus vulputate fringilla purus, quis sagittis purus rutrum fermentum. Etiam scelerisque arcu at convallis lacinia. Curabitur vestibulum enim leo, id luctus magna rutrum quis.",
            "Praesent finibus eleifend arcu, et auctor leo. Fusce gravida a mauris at rhoncus. Fusce sed nisl vel metus vulputate ullamcorper. Pellentesque finibus vestibulum est, nec placerat metus fermentum vitae. Mauris lorem sapien, porta sit amet urna eget, sagittis auctor elit."
          ]
      }
  ])
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})