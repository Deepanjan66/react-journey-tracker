# React generic journey tracker

This is a generic journey tracker written in react. You can plug this into your codebase if you require a quick solution
for journey tracking.

Example shown in `App.js`. There are no dependencies. The tracker has been styled with custom css.

![Sample example](journey.gif "Sample example")

Here, we define a generic job application workflow with `react_journey_tracker` (this is a screenshot taken from the current working version).
The green nodes represent the steps that have been completed. The darker shade of blue represents the step the user is currently at. The remaining steps
have been colored with a ligher shade of blue.

All you need for this is the following line(s) of code:

```jsx
 <ProgressGraph stages={[
           "personal details",
           "education details",
           "previous experience",
           "preferred department",
           "preferred programming languages"
         ]}
         curstage={1}
 />
```

In your react app, it would look something like the following:

```jsx
<ProgressGraph  
      stages={this.state.stages}
      currStage={this.state.currStage}
/>
```

Example usage shown in `src/App.js`.

## Development options

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
