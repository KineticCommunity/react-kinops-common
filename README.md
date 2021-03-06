# React Kinops Common

Helpful components for developing Kinetic Kinops bundles with React.

## Quick Start

### Step 1: Add the library

```
yarn add react-kinops-common
```

### Step 2. Add the reducers to your existing Redux.

Then you will want to include the shared reducers into your store:

```
import { reducers as kinopsReducers } from 'react-kinops-common';

// Change this in your store creation:
combineReducers({ ...reducers })

// To this:
combineReducers({ ...reducers, ...kinopsReducers })
```

There is a layout Redux module that allows you to know in your React code weather the browser is in mobile or desktop
mode. You will need to execute the following block of code with the `store` object so it can begin dispatching layout
mode changes to Redux.

```
import { LayoutModule } from 'react-kinops-common';
const { createLayoutListeners } = LayoutModule;
createLayoutListeners(store);
```

### Step 3. Add the sagas to your existing sagas.

Then you need to merge your sagas with the shared sagas:

```
import { sagas as kinopsSagas, combineSagas } from 'react-kinops-common';

// From this:
sagaMiddleware.run(sagas));
// To this:
sagaMiddleware.run(combineSagas([sagas, kinopsSagas]));
```

### Step 4. Include the shared CSS

```
import 'react-kinops-common/styles/master.scss';
```

### Step 5. Initialize the state.

You will need to dispatch the `LOAD_APP` action in one of your components, preferably the `App` component in its `componentWillMount` lifecycle:

```
import { KinopsModule } from 'react-kinops-common';

const { actions: kinopsActions } = KinopsModule;

export const class App extends Component {
  componentWillMount() {
    this.props.loadApp();
  }

  render() {
    /* App content */
  }
}

const mapDispatchToProps = {
  loadApp: kinopsActions.loadApp,
};

export const AppContainer = connect(null, mapDispatchToProps)(App);
```

### Step 6. Add the components

```
import { HeaderContainer, ToastsContainer, ModalFormContainer } from 'react-kinops-common';

// Example.
export const Layout = ({ handleSidebarToggle, sidebar }) =>
  <div>
    <ToastsContainer />
    <ModalFormContainer />
    <HeaderContainer hasSidebar toggleSidebarOpen={handleSidebarToggle} />
  </div>;
```

### Using Toasts

You will need to follow all of the steps above so that the Redux store, Sagas, and component are
all loaded and ready. To display a toast you only need to dispatch the action.

```
import { ToastsModule } from 'react-kinops-common';
const { actions } = ToastsModule;

const mapDispatchToProps = {
  addError: actions.addError,
};

class View extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addError('This was clicked');
  }

  render() {
    return (
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    );
  }
}

export const ViewContainer = connect(null, mapDispatchToProps)(View);
```
