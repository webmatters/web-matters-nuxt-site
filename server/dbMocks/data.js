const moment = require('moment')
const mongoose = require('mongoose')
const User = require('../models/user')
const Project = require('../models/project')
const Category = require('../models/category')

const user1Id = mongoose.Types.ObjectId()
const user2Id = mongoose.Types.ObjectId()
const user3Id = mongoose.Types.ObjectId()

const project1Id = mongoose.Types.ObjectId()

const category1Id = mongoose.Types.ObjectId()
const category2Id = mongoose.Types.ObjectId()

module.exports = {
  users: {
    model: User,
    items: [
      {
        _id: user1Id,
        avatar:
          'https://b.kisscc0.com/20180718/urw/kisscc0-ninja-computer-icons-samurai-youtube-avatar-ninja-5b4ed903c2dd20.4931332915318940197982.jpg',
        email: 'filip@gmail.com',
        name: 'Filip Jerga',
        info: 'Bla bla bla bla',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Rhonyn99',
        password: 'testtest',
        role: 'admin',
        projects: [project1Id]
      },
      {
        _id: user2Id,
        avatar:
          'https://www.clipartmax.com/png/middle/195-1956720_%5B-img%5D-avatar.png',
        email: 'peter@gmail.com',
        name: 'Peter Green',
        info: 'Bla bla bla bla',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Petergreen',
        password: 'testtest1'
      },
      {
        _id: user3Id,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyc3j2s3bL4DIkC8uC9h0rcAdsDXcwJPNh8XHWbLQfHbOpVU',
        email: 'kevin@gmail.com',
        name: 'Kevin Rock',
        info: 'I have a famous name',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        username: 'Kevin21',
        password: 'testtest2'
      }
    ]
  },
  categories: {
    model: Category,
    items: [
      {
        _id: category1Id,
        name: 'Web Development'
      },
      {
        _id: category2Id,
        name: 'Mobile Development'
      }
    ]
  },
  projects: {
    model: Project,
    items: [
      {
        _id: project1Id,
        slug: 'Dart-and-Flutter-From-Zero-to-Hero-Practical-Dev-Bootcamp',
        title: 'Dart and Flutter From Zero to Hero - Practical Dev Bootcamp',
        subtitle:
          'Build real mobile Application for Android and iOS. Learn Dart Framework and discover amazing features of Flutter.',
        image: 'https://i.udemycdn.com/course/750x422/2381802_d90c_3.jpg',
        description:
          'After dart introduction, we will start learning Flutter Framework. I will explain the basics of flutter, what widgets are, why you need widgets and how they work. We will start with simple examples which will later grow into complex components of our application. I will introduce different architectural patterns on how to manage a state of our application. We will always follow best practices introduced by the Google Flutter team.',
        objectives: [
          {
            value: 'Learn and master Dart Programming Language'
          },
          {
            value:
              'Completely understand the processes and concepts of Flutter Framework'
          },
          {
            value: 'Use gained knowledge to create your own Mobile Applications'
          },
          {
            value:
              "Become fluent in concepts and tools like BLoC's, State Management, Services, Widgets and More!"
          }
        ],
        requirements: [
          {
            value: 'No Dart and Flutter previous knowledge is required!'
          },
          {
            value: 'Able to run Android Studio or Xcode Simulator'
          }
        ],
        clientContact: 'Filip Jerga - filip@gmail.com',
        clientWebsite: 'http://www.dev-pal.com',
        kanbanLink: 'http://www.trello.com',
        fileLink: 'http://aws.amazon.com',
        status: 'active',
        createdAt: moment().toISOString(),
        updatedAt: moment().toISOString(),
        category: category2Id,
        author: user1Id
      }
    ]
  }
}
