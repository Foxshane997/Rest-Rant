# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Tech Usage 

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node Modules: method-override, dotenv, express-react-views

# Routes

| METHOD |           PATH           |                     PURPOSE                      |
|:------:|:------------------------:|:------------------------------------------------:|
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing place          |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   |

# Data

## Places
|  Field  |   Type   |
| :------:|:--------:|
| _id     | Object ID|
| name    | String   |
| city    | String   |
| state   | String   |
| cuisines| String   |
| pic     | String   |

## rants
|  Field  |   Type   |
| :------:|:--------:|
| _id     | Object ID|
| place_id| ref(places)Object_Id   |
| rant    | Boolean  |
| rating  | Number   |
| comment | String   |
| reviewer| String   |

# User Stories

## Customer Story 
As a hungry customer, I want to easily find the restaurant's menu online, so I can decide what to order before I arrive.

As a vegetarian customer, I want to see clearly labeled vegetarian options on the menu, so I can quickly identify suitable dishes.

As a customer with food allergies, I want to see allergy information listed next to menu items, so I can make safe choices.

As a customer dining with children, I want to see a kids' menu with options that cater to their preferences, so I can ensure they 
have an enjoyable meal.

As a customer with dietary preferences, I want to be able to customize my order (e.g., extra sauce, no onions), so I can tailor my meal to my taste.

As a busy professional, I want to be able to place an order for pickup or delivery online, so I can enjoy restaurant-quality food without the wait.

As a first-time visitor, I want to see photos of the restaurant's interior and dishes, so I can get a sense of the ambiance and presentation.

As a loyal customer, I want to be notified of special promotions or discounts via email or SMS, so I can take advantage of savings on my favorite meals.

As a customer celebrating a special occasion, I want the option to make a reservation online, so I can ensure there's a table available when I arrive.

As a customer concerned about sustainability, I want to see information about the restaurant's sourcing practices and efforts to reduce waste, so I can feel good about supporting a responsible business.

## Admin Story 

As an admin, I want to be able to create new user accounts.

As an admin, I want to be able to deactivate user accounts when necessary.

As an admin, I want to be able to reset user passwords.

As an admin, I want to be able to assign roles and permissions to users.

As an admin, I want to be able to view a list of all users in the system.

As an admin, I want to be able to search for specific users based on criteria such as name, email, or role.

# Wireframes 

    TBD

# Notes 

Possible bonus ideas:

* Update for comments

* Aggregate rating for a place

* Auto-complete state dropdown