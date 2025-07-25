export const AppRoutes = {
  Home: "/",
  RegisterPage:'/register',
  LoginPage:'/login',
  AllCategories: "/allcategories",
  BlogsPage:'/blogs',
  BlogPost: (id) => `/blogs/${id}`,
  FAQPage:'/faqs',
  ContactPage: '/contacts',
  AboutPage:'/about',
  HelpCenter:'/help',
  Dashboard: "/dashboard",
  SearchResults:'/searchResults',
  OrganizationPage:'/organization',
  ReviewForm:'/reviewform',
  VerificationPage:'/verification',
  UserRegisterPage: "/userregister",
  UserDashboard: "/user/dashboard",
  EditDetails: "/user/editdetails",
  ChangePassword:"/user/changepassword"
};


export const bannerData = {
  homePageData: {
    heading: "Every Review is an Experience!",
    subheading: "Public Review Platform – Track, Respond & Improve Ratings",
    inputPlaceholderText: "What are you looking for...",
    className: "version_1",
    banner_img: "",
    dropdownOptions: [
      { value: "Shops", label: "Shops" },
      { value: "Hotels", label: "Hotels" },
      { value: "Restaurants", label: "Restaurants" },
      { value: "Bars", label: "Bars" },
      { value: "Events", label: "Events" },
      { value: "Fitness", label: "Fitness" },
    ],
  },
  allCategoriesData: {
    heading: "Search Reviews by Categories",
    subheading: "Public Review Platform – Track, Respond & Improve Ratings",
    inputPlaceholderText: "Search...",
    className: "version_3",
    banner_img: "",
    dropdownOptions: [
      { value: "Shops", label: "Shops" },
      { value: "Hotels", label: "Hotels" },
      { value: "Restaurants", label: "Restaurants" },
      { value: "Bars", label: "Bars" },
      { value: "Events", label: "Events" },
      { value: "Fitness", label: "Fitness" },
    ],
  },
};
export const categoriesData = [
  {
    id: 1,
    categoryName: "Clothing",
    searchCount: "1023",
    commentsCount: "2435",
    icon: "/assets/img/icon_home_1.svg",
    redirectLink: "",
  },
  {
    id: 2,
    categoryName: "Hotels",
    searchCount: "856",
    commentsCount: "455",
    icon: "/assets/img/icon_home_2.svg",
    redirectLink: "",
  },
  {
    id: 3,
    categoryName: "Restaurants",
    searchCount: "2400",
    commentsCount: "1323",
    icon: "/assets/img/icon_home_3.svg",
    redirectLink: "",
  },
  {
    id: 4,
    categoryName: "Bars",
    searchCount: "854",
    commentsCount: "345",
    icon: "/assets/img/icon_home_4.svg",
    redirectLink: "",
  },
  {
    id: 5,
    categoryName: "Electronics",
    searchCount: "1210",
    commentsCount: "530",
    icon: "/assets/img/icon_home_8.svg",
    redirectLink: "",
  },
  {
    id: 6,
    categoryName: "Beauty",
    searchCount: "1343",
    commentsCount: "315",
    icon: "/assets/img/icon_home_5.svg",
    redirectLink: "",
  },
  {
    id: 7,
    categoryName: "Fitness",
    searchCount: "678",
    commentsCount: "123",
    icon: "/assets/img/icon_home_6.svg",
    redirectLink: "",
  },
  {
    id: 8,
    categoryName: "Doctors",
    searchCount: "378",
    commentsCount: "560",
    icon: "/assets/img/icon_home_7.svg",
    redirectLink: "",
  },
];
export const vannoCompaniesCategoriesData = [
  {
    title: `Cars, motorbikes & accessories`,
    count: "543",
    redirectLink: "",
  },
  {
    title: "Clothing",
    count: "32",
    redirectLink: "",
  },
  {
    title: "Floristry",
    count: "213",
    redirectLink: "",
  },
  {
    title: "Books",
    count: "54",
    redirectLink: "",
  },
  {
    title: "Office & business",
    count: "225",
    redirectLink: "",
  },
  {
    title: "Computers & electronics",
    count: "432",
    redirectLink: "",
  },
  {
    title: "Chemists & cosmetics",
    count: "244",
    redirectLink: "",
  },
  {
    title: "Precious Metals",
    count: "243",
    redirectLink: "",
  },
  {
    title: "Energy",
    count: "78",
    redirectLink: "",
  },
  {
    title: "Finance & insurance",
    count: "898",
    redirectLink: "",
  },
  {
    title: "Photo, print & book-on-demand",
    count: "657",
    redirectLink: "",
  },
  {
    title: "Gardening supplies",
    count: "53",
    redirectLink: "",
  },
  {
    title: "Gifts",
    count: "654",
    redirectLink: "",
  },
  {
    title: "Household goods",
    count: "90",
    redirectLink: "",
  },
  {
    title: "Luggage, bags & leather goods",
    count: "89",
    redirectLink: "",
  },
  {
    title: "Food",
    count: "789",
    redirectLink: "",
  },
  {
    title: "Pharmaceuticals",
    count: "45",
    redirectLink: "",
  },
  {
    title: "Furniture & decoration",
    count: "122",
    redirectLink: "",
  },
  {
    title: "Telecommunication",
    count: "796",
    redirectLink: "",
  },
  {
    title: "Music & Film",
    count: "56",
    redirectLink: "",
  },
  {
    title: "Opticians",
    count: "423",
    redirectLink: "",
  },
  {
    title: "Travel & hotels",
    count: "331",
    redirectLink: "",
  },
  {
    title: "Tickets",
    count: "32",
    redirectLink: "",
  },
  {
    title: "Jewellery & Watches",
    count: "432",
    redirectLink: "",
  },
  {
    title: "Shoes",
    count: "21",
    redirectLink: "",
  },
  {
    title: "Sports",
    count: "90",
    redirectLink: "",
  },
  {
    title: "Pet Supplies",
    count: "85",
    redirectLink: "",
  },
  {
    title: "Consulting",
    count: "65",
    redirectLink: "",
  },
];
export const avatar_img = "/assets/img/avatar4.jpg";

export const OrganizationSignUpAPI='https://spiroware.com/reviewssystem/api/v1/auth/org/signup';
export const dropdownCategoriesAPI='https://spiroware.com/reviewssystem/api/v1/auth/category/all';
export const organizationEmailVerficationAPI='https://spiroware.com/reviewssystem/api/v1/auth/verify';
export const organizationDashboardAPI='https://spiroware.com/reviewssystem/api/v1/org/dashboard';
export const loginAPI='https://spiroware.com/reviewssystem/api/v1/auth/login';
export const allcategories = 'https://spiroware.com/reviewssystem/api/v1/auth/category/all'
export const allBlogsApi = 'https://spiroware.com/reviewssystem/api/v1/auth/blogs/all'
export const singleBlogApi = (id) => `https://spiroware.com/reviewssystem/api/v1/auth/blog/${id}`;
