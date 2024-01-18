import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/png/color.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
/* 
** Header
** Body
** Footer
*/
const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="search-container">
        <input className="search" type="text" placeholder="kiya khana hai batao" />
      </div>
      <nav>
        {/* <div className="nav-link"> */}
        <a className="nav-items" href="#"> <FontAwesomeIcon icon={faShoppingCart} className="cart" /></a>
        <a className="nav-items" href="#" id="signup"> Sign Up</a>
        {/* </div> */}
      </nav>
    </header>
  );
}

const resList = [
  {
    "info": {
      "id": "112820",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "DB City Mall",
      "areaName": "Birla Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-db-city-mall-birla-nagar-gwalior-112820",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "109209",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "DB City Mall",
      "areaName": "Db Mall",
      "costForTwo": "₹225 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 03:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-db-city-mall-db-mall-gwalior-109209",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "707799",
      "name": "Param Food Complex",
      "cloudinaryImageId": "6741d3e81728efe90ddf818338bcb918",
      "locality": "Moti mahal road",
      "areaName": "Lashkar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Indian",
        "Sweets",
        "Bakery",
        "Snacks",
        "Chinese"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "419919",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/param-food-complex-moti-mahal-road-lashkar-gwalior-707799",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "675899",
      "name": "Burger Budds",
      "cloudinaryImageId": "129e672c237208924997dc145d5c8d29",
      "locality": "Tansen Nagar",
      "areaName": "Tansen nagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "457202",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 04:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-budds-tansen-nagar-gwalior-675899",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "84911",
      "name": "Jain Family Restaurant",
      "cloudinaryImageId": "sc86aemjzooslj0ph11n",
      "locality": "Railway Colony",
      "areaName": "Station Road",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Thalis",
        "Indian"
      ],
      "avgRating": 3.8,
      "veg": true,
      "parentId": "108872",
      "avgRatingString": "3.8",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jain-family-restaurant-railway-colony-station-road-gwalior-84911",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "500912",
      "name": "Burger Buddy",
      "cloudinaryImageId": "xraly0ck3bnzttgisfqq",
      "locality": "Phool Bagh",
      "areaName": "phoolbagh",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "American",
        "Burgers",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "parentId": "51230",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 22:45:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-buddy-phool-bagh-phoolbagh-gwalior-500912",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "581581",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "sfj390yz54wis6bblzfd",
      "locality": "Kailash Vihar",
      "areaName": "City Center",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "12175",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-kailash-vihar-city-center-gwalior-581581",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "370986",
      "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
      "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
      "locality": "Shiram Colony",
      "areaName": "Lashkar",
      "costForTwo": "₹175 for two",
      "cuisines": [
        "Ice Cream Cakes",
        "Desserts",
        "Ice Cream",
        "Bakery"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "21932",
      "avgRatingString": "4.8",
      "totalRatingsString": "7",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 02:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-shiram-colony-lashkar-gwalior-370986",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "137529",
      "name": "FNP Cakes N More",
      "cloudinaryImageId": "unyj9ivdyjb1ca7ugwcs",
      "locality": "Patel Nagar",
      "areaName": "patel nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "15442",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/fnp-cakes-n-more-patel-nagar-gwalior-137529",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "622604",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "mcxcwkplgxawoijpns6p",
      "locality": "Tansen Nagar",
      "areaName": "Kampoo",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "2456",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:55:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-tansen-nagar-kampoo-gwalior-622604",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "575261",
      "name": "Mehfil by Behrouz",
      "cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
      "locality": "University Road",
      "areaName": "City Center",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "344904",
      "avgRatingString": "4.0",
      "totalRatingsString": "10+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹249"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mehfil-by-behrouz-university-road-city-center-gwalior-575261",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "91828",
      "name": "Taste of Punjab",
      "cloudinaryImageId": "qpnb6dlmdt2awtqlw3ef",
      "locality": "University Marg",
      "areaName": "Balwant Nagar",
      "costForTwo": "₹225 for two",
      "cuisines": [
        "North Indian",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "6361",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:50:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/taste-of-punjab-university-marg-balwant-nagar-gwalior-91828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "84554",
      "name": "Bansi Wala",
      "cloudinaryImageId": "2fd0bca25c3879d3a95fc62b4dc14209",
      "locality": "DB City Mall",
      "areaName": "Station Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Thalis",
        "Indian"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "6840",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bansi-wala-db-city-mall-station-road-gwalior-84554",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "646505",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "57a56b68fa69d5fa79443df6d7444521",
      "locality": "Maharani Laxmibai Marg",
      "areaName": "Lashkar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "4961",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-maharani-laxmibai-marg-lashkar-gwalior-646505",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "89901",
      "name": "Subway",
      "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
      "locality": "Scindia Marg",
      "areaName": "City Center",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 02:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-scindia-marg-city-center-gwalior-89901",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "623872",
      "name": "Veer Ji Malai Chaap Wale",
      "cloudinaryImageId": "f3phtyoy5l5regcy8sjb",
      "locality": "City Center",
      "areaName": "city center",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Street Food"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "12056",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/veer-ji-malai-chaap-wale-city-center-gwalior-623872",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "605776",
      "name": "The Burger Company",
      "cloudinaryImageId": "eccjwx1avzwp6e059m6n",
      "locality": "Patel Nagar",
      "areaName": "City Center",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "American",
        "Burgers",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "206007",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-burger-company-patel-nagar-city-center-gwalior-605776",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "131952",
      "name": "34 Chowringhee Lane",
      "cloudinaryImageId": "i9is4viyfuvlawvf5kme",
      "locality": "Saraswati Nagar",
      "areaName": "Govindpuri",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food"
      ],
      "avgRating": 4.2,
      "parentId": "11",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:59:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/34-chowringhee-lane-saraswati-nagar-govindpuri-gwalior-131952",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "603865",
      "name": "Chicago Pizza",
      "cloudinaryImageId": "jee4uune5byi0nxufza8",
      "locality": "kailash vihar",
      "areaName": "City Center",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "60277",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-19 01:00:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chicago-pizza-kailash-vihar-city-center-gwalior-603865",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "458045",
      "name": "Pure Veg Meals by Lunchbox",
      "cloudinaryImageId": "ulukm5zkoakkdwcaxhv7",
      "locality": "University Road",
      "areaName": "City Center",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "21938",
      "avgRatingString": "4.1",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pure-veg-meals-by-lunchbox-university-road-city-center-gwalior-458045",
      "type": "WEBLINK"
    }
  }
];

/* RESTURANT CARD COMPONENT */
const ResturantCard = (props) => {
  const { name, cloudinaryImageId, locality, cuisines, avgRatingString, sla } = props?.resData;

  console.log(name, cloudinaryImageId, locality, cuisines, avgRatingString, sla);
  return (
    <div class="restaurant-card">
      <img class="restaurant-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant Image" />
      <div className="restaurant-details">
        <h4 class="restaurant-name">{name}</h4>
        <span class="rating">★ {avgRatingString}</span>
        <span class="delivery-time">  { sla.slaString}</span>
        <p className="additional-info"> {cuisines.join(", ")}</p>
        <p className="additional-info"> {locality}</p>
      </div>
    </div>
  )
}
/* RESTURANT LIST COMPONENT */
const ResturantList = () => {
  return (
    <div className="resturant-list">
      {
        resList.map((resturant) => <ResturantCard key={ resturant.info.id} resData = {resturant.info} />)
      }
    </div>
  )
}
const Body = () => {
  return (
    <ResturantList />
  );
}

const Footer = () => {
  return (<h1> This is a header</h1>);
}

const AppLayout = () => {
  return <>
    <Header />
    <Body />
    {/* <Footer /> */}
  </>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
