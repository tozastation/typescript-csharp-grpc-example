import * as React from 'react';
import AppContainer from './AppContainer';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const component = enzyme.shallow(<AppContainer />);
  expect(component.exists()).toEqual(true);
  // const div = document.createElement('div');
  // ReactDOM.render(<AppContainer />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
