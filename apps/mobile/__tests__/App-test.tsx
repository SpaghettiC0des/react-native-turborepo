import {render} from '@testing-library/react-native';

import 'react-native';
import App from 'src/App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = render(<App />);
  expect(tree).toMatchSnapshot();
});
