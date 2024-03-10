type TReviewsData = {
  id: number;
  review: string;
  userImage: string;
  userName: string;
  userDesignation: string;
};

const reviewsData: TReviewsData[] = [
  {
    id: 1,
    review: "Great experience volunteering here! Highly recommended.",
    userImage: "https://i.imgur.com/IwfNREx.jpg",
    userName: "Emily Johnson",
    userDesignation: "Community Helper",
  },
  {
    id: 2,
    review: "The team is fantastic! Loved contributing to the cause.",
    userImage: "https://i.imgur.com/grAht1h.jpg",
    userName: "Daniel Martinez",
    userDesignation: "Caring Volunteer",
  },
  {
    id: 3,
    review: "Amazing platform for making a positive impact.",
    userImage: "https://i.imgur.com/2tGqqL0.jpg",
    userName: "Olivia Taylor",
    userDesignation: "Dedicated Volunteer",
  },
  {
    id: 4,
    review: "A fulfilling experience, working with passionate people.",
    userImage: "https://i.imgur.com/FEXE2le.jpg",
    userName: "Alex Turner",
    userDesignation: "Committed Volunteer",
  },
  {
    id: 5,
    review: "Grateful for the opportunity to give back to the community.",
    userImage: "https://i.imgur.com/XJwm3T2.jpg",
    userName: "Sophie King",
    userDesignation: "Volunteer Advocate",
  },
  {
    id: 6,
    review: "Positive atmosphere and a meaningful mission to support.",
    userImage: "https://i.imgur.com/5AUuEao.jpg",
    userName: "William Foster",
    userDesignation: "Humanitarian Volunteer",
  },
];

export default reviewsData;
