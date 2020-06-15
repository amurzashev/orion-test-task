import { App } from '../components';
import { connect } from 'react-redux';
import { loadConfig } from 'src/duck/actions/config';
import { loadItems } from 'src/duck/actions/items';
import { RootState } from 'src/duck';

const mapState = (state: RootState) => state;
const mapDispatch = {
  loadConfig,
  loadItems,
};
export default connect(mapState, mapDispatch)(App);
