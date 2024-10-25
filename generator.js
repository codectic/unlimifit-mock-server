const { faker } = require('@faker-js/faker');

module.exports = () => {

  const data = { users: [], posts: [], products: [], trainings: [] }
  
  for (let i = 1; i <= 50; i++) {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();

    data.users.push(
      {
        id: i.toString(),
        name: `${firstName} ${lastName}`,
        username: faker.internet.userName({firstName: firstName, lastName: lastName}),
        email: faker.internet.email({firstName: firstName, lastName: lastName}),
        profileImageUrl: faker.image.avatar()
      }
    )
  }

  for (let i = 1; i <= 500; i++) {
    data.posts.push(
      {
        id: i.toString(),
        userId: faker.helpers.rangeToNumber({ min: 1, max: 50 }).toString(),
        trainingId: faker.helpers.maybe(() => faker.helpers.rangeToNumber({ min: 1, max: 10 }).toString()),
        imageUrls: faker.helpers.multiple(() => faker.image.urlLoremFlickr({ width: 640, height: 480, category: 'fitness' }), { min: 1, max: 5 }),
        caption: faker.lorem.sentences({min: 1, max: 3}),
        likes: faker.helpers.rangeToNumber({ min: 1, max: 9999 }),
        commentCount: faker.helpers.rangeToNumber({ min: 1, max: 9999 }),
        timestamp: faker.date.recent(),
        tags: faker.helpers.multiple(() => `#${faker.word.words({count: 1})}`, { min: 0, max: 5 }),
      }
    )
  }

  for (let i = 1; i <= 100; i++) {
    let title = faker.commerce.product();
    data.products.push(
      {
        id: i.toString(),
        title: title,
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        imageUrls: faker.helpers.multiple(() => faker.image.urlLoremFlickr({ width: 480, height: 320, category: title }), { min: 1, max: 5 })
      }
    )
  }

  data.trainings.push(
    ...[
      {
        "id": "1",
        "name": "Full Body Strength Training",
        "description": "A comprehensive workout to build strength and muscle mass.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "1",
                "title": "Barbell Squats",
                "instructions": "Stand with feet shoulder-width apart, lower the bar onto your upper back, and squat down until your thighs are parallel to the ground."
            },
            {
                "id": "2",
                "title": "Push-Ups",
                "instructions": "Place hands shoulder-width apart, lower your chest towards the floor, and push back up."
            },
            {
                "id": "3",
                "title": "Pull-Ups",
                "instructions": "Grab a pull-up bar with an overhand grip, hang with arms fully extended, and pull yourself up until your chin is over the bar."
            },
            {
                "id": "4",
                "title": "Dumbbell Rows",
                "instructions": "Hinge at your hips, keep your back straight, and pull the dumbbells towards your chest."
            },
            {
                "id": "5",
                "title": "Overhead Press",
                "instructions": "Stand with feet shoulder-width apart, hold dumbbells at shoulder height, and press them straight up overhead."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "2",
        "name": "Yoga for Flexibility",
        "description": "Improve your flexibility and range of motion with this yoga flow.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "6",
                "title": "Downward Dog",
                "instructions": "Start on all fours, lift your hips up and back, forming an inverted V-shape with your body."
            },
            {
                "id": "7",
                "title": "Warrior II Pose",
                "instructions": "Step your feet wide apart, turn your right foot out, and bend your right knee."
            },
            {
                "id": "8",
                "title": "Triangle Pose",
                "instructions": "From Warrior II, straighten your right leg and reach your right hand forward."
            },
            {
                "id": "9",
                "title": "Pigeon Pose",
                "instructions": "Bring your right shin forward and your left leg back, resting on your hips."
            },
            {
                "id": "10",
                "title": "Child's Pose",
                "instructions": "Kneel on the floor, bring your big toes together, and rest your forehead on the ground."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "3",
        "name": "High-Intensity Interval Training (HIIT)",
        "description": "Burn calories and improve your cardiovascular fitness with this HIIT workout.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "11",
                "title": "Burpees",
                "instructions": "Perform a squat, kick your feet back, do a push-up, return to the squat position, and jump up."
            },
            {
                "id": "12",
                "title": "Jumping Jacks",
                "instructions": "Stand with feet together, jump while spreading your legs and raising your arms overhead."
            },
            {
                "id": "13",
                "title": "Mountain Climbers",
                "instructions": "Start in a plank position and alternate bringing your knees towards your chest."
            },
            {
                "id": "14",
                "title": "High Knees",
                "instructions": "Run in place, bringing your knees up high towards your chest."
            },
            {
                "id": "15",
                "title": "Plank",
                "instructions": "Hold your body in a straight line from head to heels, supported by your forearms and toes."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "4",
        "name": "Pilates for Core Strength",
        "description": "Strengthen your core muscles and improve your posture with this Pilates routine.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "16",
                "title": "Hundred",
                "instructions": "Lie on your back, lift your legs and head, and pump your arms up and down."
            },
            {
                "id": "17",
                "title": "Roll-Up",
                "instructions": "Lie on your back, engage your core, and slowly roll up to a seated position."
            },
            {
                "id": "18",
                "title": "Teaser",
                "instructions": "Sit with your knees bent, lean back, and lift your legs to a 45-degree angle."
            },
            {
                "id": "19",
                "title": "Swimming",
                "instructions": "Lie on your stomach, lift your arms and legs, and alternate lifting your opposite arm and leg."
            },
            {
                "id": "20",
                "title": "Bridge",
                "instructions": "Lie on your back, bend your knees, and lift your hips off the ground."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "5",
        "name": "Cardio Kickboxing",
        "description": "Get a great cardio workout while learning basic kickboxing techniques.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "21",
                "title": "Jab",
                "instructions": "Extend your lead arm straight out, rotating your fist so your palm faces down."
            },
            {
                "id": "22",
                "title": "Cross",
                "instructions": "Rotate your hips and extend your rear arm across your body."
            },
            {
                "id": "23",
                "title": "Hook",
                "instructions": "Pivot on your lead foot and swing your lead arm in a circular motion."
            },
            {
                "id": "24",
                "title": "Roundhouse Kick",
                "instructions": "Lift your kicking leg, bend your knee, and swing your leg in a circular motion."
            },
            {
                "id": "25",
                "title": "Front Kick",
                "instructions": "Lift your kicking leg and extend it straight out in front of you."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "6",
        "name": "Bodyweight Bootcamp",
        "description": "A challenging workout using only your bodyweight for resistance.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "26",
                "title": "Jumping Lunges",
                "instructions": "Step forward with one leg and lower your body until both knees are bent at a 90-degree angle. Jump explosively and switch legs in the air."
            },
            {
                "id": "27",
                "title": "Tricep Dips",
                "instructions": "Place your hands shoulder-width apart on a bench or chair, lower your body by bending your elbows, and push back up."
            },
            {
                "id": "28",
                "title": "Plank Jacks",
                "instructions": "Start in a plank position and jump your feet out to the sides and then back together."
            },
            {
                "id": "29",
                "title": "Superman",
                "instructions": "Lie on your stomach, lift your arms and legs off the ground, and hold for a few seconds."
            },
            {
                "id": "30",
                "title": "Wall Sit",
                "instructions": "Stand with your back against a wall, lower your body until your thighs are parallel to the ground, and hold."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "7",
        "name": "Zumba Dance Fitness",
        "description": "Dance your way to fitness with this fun and energetic Zumba class.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "31",
                "title": "Merengue",
                "instructions": "Step your feet to the side, shifting your weight from one foot to the other."
            },
            {
                "id": "32",
                "title": "Salsa",
                "instructions": "Step forward with one foot, then back with the other, adding hip movements."
            },
            {
                "id": "33",
                "title": "Cumbia",
                "instructions": "Step to the side, lifting your heels and adding arm movements."
            },
            {
                "id": "34",
                "title": "Reggaeton",
                "instructions": "Move your hips and chest to the rhythm, adding steps and jumps."
            },
            {
                "id": "35",
                "title": "Belly Dance",
                "instructions": "Isolate and move your hips, chest, and ribcage independently."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "8",
        "name": "Beginner's Running Plan",
        "description": "Start running with this beginner-friendly plan that gradually increases your mileage.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "36",
                "title": "Warm-up Walk",
                "instructions": "Walk at a brisk pace for 5-10 minutes to prepare your body for running."
            },
            {
                "id": "37",
                "title": "Run/Walk Intervals",
                "instructions": "Alternate between running for short intervals and walking for recovery."
            },
            {
                "id": "38",
                "title": "Cool-down Walk",
                "instructions": "Walk at a relaxed pace for 5-10 minutes to allow your body to cool down."
            },
            {
                "id": "39",
                "title": "Stretching",
                "instructions": "Stretch your major muscle groups to improve flexibility and prevent injury."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "9",
        "name": "Strength and Conditioning for Athletes",
        "description": "Improve your athletic performance with this strength and conditioning program.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "40",
                "title": "Box Jumps",
                "instructions": "Stand in front of a box, squat down, and jump explosively onto the box."
            },
            {
                "id": "41",
                "title": "Kettlebell Swings",
                "instructions": "Hold a kettlebell with both hands, swing it between your legs, and then up to chest height."
            },
            {
                "id": "42",
                "title": "Agility Ladder Drills",
                "instructions": "Perform various footwork drills using an agility ladder to improve speed and coordination."
            },
            {
                "id": "43",
                "title": "Medicine Ball Throws",
                "instructions": "Throw a medicine ball against a wall or with a partner to develop power."
            },
            {
                "id": "44",
                "title": "Sprints",
                "instructions": "Run as fast as you can for short distances to improve speed and acceleration."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      },
      {
        "id": "10",
        "name": "Mindfulness Meditation",
        "description": "Reduce stress and improve your mental well-being with this guided meditation.",
        "videoLink": "https://www.youtube.com/watch?v=OQLHtVA87l0",
        "exercises": [
            {
                "id": "45",
                "title": "Breathing Exercises",
                "instructions": "Focus on your breath, inhaling slowly and deeply, and exhaling fully."
            },
            {
                "id": "46",
                "title": "Body Scan Meditation",
                "instructions": "Bring your attention to each part of your body, noticing any sensations."
            },
            {
                "id": "47",
                "title": "Loving-Kindness Meditation",
                "instructions": "Cultivate feelings of love and compassion towards yourself and others."
            },
            {
                "id": "48",
                "title": "Walking Meditation",
                "instructions": "Walk slowly and mindfully, paying attention to each step and your surroundings."
            }
        ],
        "videoTimestamp": [
            0,
            30,
            60,
            90,
            120
        ]
      }
    ]
  )

  return data
}


// for (let i = 1; i <= 100; i++) {
//     data.trainings.push(
//       {
//         id: i.toString(),
//         name: "Full Body Strength Training",
//         description: "A comprehensive workout to build strength and muscle mass.",
//         videoLink: "https://www.youtube.com/watch?v=OQLHtVA87l0",
//         "exercises": [
//             {
//                 "id": "e1",
//                 "title": "Barbell Squats",
//                 "instructions": "Stand with feet shoulder-width apart, lower the bar onto your upper back, and squat down until your thighs are parallel to the ground."
//             },
//             {
//                 "id": "e2",
//                 "title": "Push-Ups",
//                 "instructions": "Place hands shoulder-width apart, lower your chest towards the floor, and push back up."
//             },
//             {
//                 "id": "e3",
//                 "title": "Pull-Ups",
//                 "instructions": "Grab a pull-up bar with an overhand grip, hang with arms fully extended, and pull yourself up until your chin is over the bar."
//             },
//             {
//                 "id": "e4",
//                 "title": "Dumbbell Rows",
//                 "instructions": "Hinge at your hips, keep your back straight, and pull the dumbbells towards your chest."
//             },
//             {
//                 "id": "e5",
//                 "title": "Overhead Press",
//                 "instructions": "Stand with feet shoulder-width apart, hold dumbbells at shoulder height, and press them straight up overhead."
//             }
//         ],
//         "videoTimestamp": [
//             0,
//             30,
//             60,
//             90,
//             120
//         ]
//       },
//     )
//   }
    