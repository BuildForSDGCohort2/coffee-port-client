import React from 'react';
import TabPanel from '../tab-panel/tab-panel.component';
import Tabs from '@material-ui/core/Tabs';
import { default as Comments } from '../comments/comments.container';
import Tab from '@material-ui/core/Tab';
import useStyles from './description.styles';

const DescriptionComponent = ({
  children,
  googleSignIn,
  facebookSignIn,
  product,
  ...otherProps
}) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
        centered
      >
        <Tab label="Description" {...a11yProps(0)} />

        <Tab
          label={`Review(${product.reviews.length})`}
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {product.productDescription}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Comments comments={product.reviews} />
      </TabPanel>
    </div>
  );
};
export default DescriptionComponent;
