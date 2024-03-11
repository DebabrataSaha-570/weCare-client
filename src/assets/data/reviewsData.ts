type TReviewsData = {
  id: number;
  review: string;
  userImage: string;
  userName: string;
  userDesignation: string;
  supplyContribution: {
    supplyItem: string;
    quantityAmount: string;
  };
};

const reviewsData: TReviewsData[] = [
  {
    id: 1,
    review: "Great experience Donating here! Highly recommended.",
    userImage: "https://i.imgur.com/IwfNREx.jpg",
    userName: "Emily Johnson",
    userDesignation: "Co-Founder, Walton",
    supplyContribution: {
      supplyItem: "Basmati Rice",
      quantityAmount: "100 Kg",
    },
  },
  {
    id: 2,
    review: "The team is fantastic! Loved contributing to the cause.",
    userImage: "https://i.imgur.com/grAht1h.jpg",
    userName: "Daniel Martinez",
    userDesignation: "CEO, Aarong",
    supplyContribution: {
      supplyItem: "Eggs",
      quantityAmount: "5000 Pcs",
    },
  },
  {
    id: 3,
    review: "Amazing platform for making a positive impact.",
    userImage: "https://i.imgur.com/2tGqqL0.jpg",
    userName: "Olivia Taylor",
    userDesignation: "Co Founder, Akij",
    supplyContribution: {
      supplyItem: "Neem Soap",
      quantityAmount: "1000 Pcs",
    },
  },
  {
    id: 4,
    review: "A fulfilling experience, working with passionate people.",
    userImage: "https://i.imgur.com/FEXE2le.jpg",
    userName: "Alex Turner",
    userDesignation: "CEO, Beximco",
    supplyContribution: {
      supplyItem: "Handwash",
      quantityAmount: "500 Pcs",
    },
  },
  {
    id: 5,
    review: "Grateful for the opportunity to give back to the community.",
    userImage: "https://i.imgur.com/XJwm3T2.jpg",
    userName: "Sophie King",
    userDesignation: "CFO, Bikroy",
    supplyContribution: {
      supplyItem: "Baby Diaper",
      quantityAmount: "2000 Pcs",
    },
  },
  {
    id: 6,
    review: "Positive atmosphere and a meaningful mission to support.",
    userImage: "https://i.imgur.com/5AUuEao.jpg",
    userName: "William Foster",
    userDesignation: "Director, Matador",
    supplyContribution: {
      supplyItem: "Fresh Water 5L",
      quantityAmount: "500 Pcs",
    },
  },
];

export default reviewsData;
