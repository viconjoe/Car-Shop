![](https://user-images.githubusercontent.com/970858/63474771-d6734700-c469-11e9-83bb-9429da563909.png)

# REACT PROJECT

## Introduction

> ***Note:*** _This can be a pair programming activity or done independently._

## Learning Goals

After this learning unit, you will be able to:

- Create a basic ReactJS app with `create vite@latest`
- Launch your application from `npm run dev`
- Create components and load them from the root component

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Deliverables

Please, push every file needed to make your app properly on GitHub before creating the pull request.

## Introduction
![](cars.webp)

Let's build a Car site with all our ReactJS Superpowers!

Today's goal would be to build a Car listing page that showcases multiple cars from all over the world!

### Create the React App

Create your React project scaffold from `create vite@latest` inside of the main folder. The name should be `student_code`.

Create the project following the steps we learnt in class!

### Create a Header Component

You should have a nice header with a 100% wide bar at the top with a large title that reads:

> Reboot Car Store

### Create a Footer Component

You should also have a nice footer with a 100% wide bar at the bottom with a small centered copy that reads:

> Reboot Car Store - (c) All rights reserved.

### Refactor the Site Name

Make sure you store the name of the site: `Reboot Car Store` in the App.js file, and then pass it to the Header and Footer as props!

### Load the car data

The first step for us will be to load the entire list of cars:

`import cars from './cars.json'`

You should do this from the `App.js` file and store it within the component.

*Don't forget to place the file inside your `src` folder*

### Create a Car Component

The `Car` Component should take in a prop with the `car` Object and display all the data nicely in a card.

Make the app display the first car in the list only: `cars[0]`:

```
{
  "id":1,
  "maker":"Lexus",
  "model":"GS",
  "year":2009,
  "country":"Poland",
  "price":"€79103,74",
  "car_vin":"5UXFB53586L473398"
}
```

Modify the way you show the price so decimals don't show. Then style the component nicely.

### Display all the cars

Now you should be able to adjust `App.js` to load all the cars using `.map()`!

Remember to use flexbox so it looks nice and responsive!

Keep reading when you are ready for more!

### Refactor into CarList

Create a new component `CarList` that takes in a `cars` prop and iterates through the array listing all the cars!

Make sure you create the proper folders to give your React project the correct structure.

### Bonus Easy

Make sure all the cars from 2009 and forward have a `NEW` banner somewhere, and should have a green border!

### Bonus Medium

Create a Select that filters the list between different priced cars:

1. Cheap: `< 20,000`
2. Standard `> 20,000` && `< 40,000`
3. Luxury `> 40,000`

### Bonus Hard

Create an input that allows you to search for a particular maker.

When you write on the search input, it should only show you cars that have a maker that matches your query.

The query should not care about capitalization, and should include partial matches!

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Then create a Pull Request!!


![happy_coding](https://user-images.githubusercontent.com/970858/63899010-c23fc480-c9ea-11e9-84a2-542907e42362.png)
