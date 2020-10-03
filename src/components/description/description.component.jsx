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
        variant="scrollable"
        scrollButtons="auto"
        centered
      >
        <Tab label="Description" {...a11yProps(0)} />
        <Tab label="Additional Information" {...a11yProps(1)} />
        <Tab label="Review(3)" {...a11yProps(2)} />
        <Tab label="Vendor Info" {...a11yProps(3)} />
        <Tab label="More Products" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, molestiae.
        Quidem nemo libero odit? Modi esse sed dolor enim optio
        reprehenderit magnam earum dicta mollitia suscipit, aperiam
        numquam recusandae nulla.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, molestiae. Quidem
        nemo libero odit? Modi esse sed dolor enim optio reprehenderit
        magnam earum dicta mollitia suscipit, aperiam numquam
        recusandae nulla.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur, molestiae. Quidem nemo libero
        odit? Modi esse sed dolor enim optio reprehenderit magnam
        earum dicta mollitia suscipit, aperiam numquam recusandae
        nulla.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, molestiae.
        Quidem nemo libero odit? Modi esse sed dolor enim optio
        reprehenderit magnam earum dicta mollitia suscipit, aperiam
        numquam recusandae nulla.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, molestiae. Quidem
        nemo libero odit? Modi esse sed dolor enim optio reprehenderit
        magnam earum dicta mollitia suscipit, aperiam numquam
        recusandae nulla.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur, molestiae. Quidem nemo libero
        odit? Modi esse sed dolor enim optio reprehenderit magnam
        earum dicta mollitia suscipit, aperiam numquam recusandae
        nulla.
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Comments comments={product.reviews} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, molestiae.
        Quidem nemo libero odit? Modi esse sed dolor enim optio
        reprehenderit magnam earum dicta mollitia suscipit, aperiam
        numquam recusandae nulla.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, molestiae. Quidem
        nemo libero odit? Modi esse sed dolor enim optio reprehenderit
        magnam earum dicta mollitia suscipit, aperiam numquam
        recusandae nulla.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur, molestiae. Quidem nemo libero
        odit? Modi esse sed dolor enim optio reprehenderit magnam
        earum dicta mollitia suscipit, aperiam numquam recusandae
        nulla.
      </TabPanel>
      <TabPanel value={value} index={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, molestiae.
        Quidem nemo libero odit? Modi esse sed dolor enim optio
        reprehenderit magnam earum dicta mollitia suscipit, aperiam
        numquam recusandae nulla.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, molestiae. Quidem
        nemo libero odit? Modi esse sed dolor enim optio reprehenderit
        magnam earum dicta mollitia suscipit, aperiam numquam
        recusandae nulla.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur, molestiae. Quidem nemo libero
        odit? Modi esse sed dolor enim optio reprehenderit magnam
        earum dicta mollitia suscipit, aperiam numquam recusandae
        nulla.
      </TabPanel>
      <TabPanel value={value} index={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequatur, molestiae. Quidem nemo libero odit? Modi esse sed
        dolor enim optio reprehenderit magnam earum dicta mollitia
        suscipit, aperiam numquam recusandae nulla. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Consequatur, molestiae.
        Quidem nemo libero odit? Modi esse sed dolor enim optio
        reprehenderit magnam earum dicta mollitia suscipit, aperiam
        numquam recusandae nulla.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Consequatur, molestiae. Quidem
        nemo libero odit? Modi esse sed dolor enim optio reprehenderit
        magnam earum dicta mollitia suscipit, aperiam numquam
        recusandae nulla.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur, molestiae. Quidem nemo libero
        odit? Modi esse sed dolor enim optio reprehenderit magnam
        earum dicta mollitia suscipit, aperiam numquam recusandae
        nulla.
      </TabPanel>
    </div>
  );
};
export default DescriptionComponent;
