import { Institution } from "@/lib/types";
const institutions: Institution[] = [
  {
    institution_id: "1a2b3c4d-5e6f-7g8h-9i10j11k12l13",
    name: "National Institute of Technology",
    location: "Tiruchirappalli, Tamil Nadu, India",
    affiliation: "AICTE",
    type: "Public",
    ranking: 10,
    description: "One of the top engineering colleges in India.",
    facilities: {
      library: true,
      hostel: true,
      sports: true,
      wifi: true,
    },
    website: "https://www.nitt.edu",
    specialization: "Engineering",
    reviews: {
      rating: 4.5,
      review_count: 1500,
    },
    courses: [
      {
        name: "B.Tech in Computer Science",
        duration: "4 years",
        level: "Undergraduate",
        stream: "Engineering",
        fees: 80000,
        eligibility: "JEE Main",
        description:
          "A comprehensive program focusing on computer science and engineering.",
      },
      {
        name: "M.Tech in Data Science",
        duration: "2 years",
        level: "Postgraduate",
        stream: "Engineering",
        fees: 150000,
        eligibility: "GATE",
        description: "Advanced study in data science and analytics.",
      },
    ],
    universityImages: [
      "https://www.nitt.edu/images/campus.jpg",
      "https://www.nitt.edu/images/library.jpg",
    ],
  },
  {
    institution_id: "1m2n3o4p-5q6r-7s8t-9u10v11w12x13",
    name: "St. Xavier's College",
    location: "Mumbai, Maharashtra, India",
    affiliation: "Mumbai University",
    type: "Private",
    ranking: 5,
    description: "A prestigious college offering a wide range of courses.",
    facilities: {
      library: true,
      hostel: false,
      sports: true,
      wifi: true,
    },
    website: "https://www.xaviers.edu",
    specialization: false,
    reviews: {
      rating: 4.7,
      review_count: 2500,
    },
    courses: [
      {
        name: "B.Sc in Physics",
        duration: "3 years",
        level: "Undergraduate",
        stream: "Science",
        fees: 60000,
        eligibility: "12th Grade with Science",
        description: "An in-depth program in physics and related fields.",
      },
      {
        name: "M.A. in English Literature",
        duration: "2 years",
        level: "Postgraduate",
        stream: "Arts",
        fees: 50000,
        eligibility: "Bachelor's Degree",
        description: "Advanced study of English literature and criticism.",
      },
    ],
    universityImages: [
      "https://www.xaviers.edu/images/campus.jpg",
      "https://www.xaviers.edu/images/classroom.jpg",
    ],
  },
];


